import fs from 'fs'
import path from 'path'

interface SecurityCheck {
  name: string
  status: 'pass' | 'fail' | 'warning'
  message: string
}

interface SecurityReport {
  overallStatus: 'secure' | 'warning' | 'vulnerable'
  checks: SecurityCheck[]
}

export async function performSecurityCheck(): Promise<SecurityReport> {
  const checks: SecurityCheck[] = []

  // Package.json kontrolü
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'))
    
    // Dependency kontrolü
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies }
    const suspiciousPackages = Object.keys(dependencies).filter(pkg => 
      pkg.includes('malicious') || pkg.includes('suspicious')
    )

    if (suspiciousPackages.length > 0) {
      checks.push({
        name: 'Dependency Check',
        status: 'fail',
        message: `Suspicious packages found: ${suspiciousPackages.join(', ')}`
      })
    } else {
      checks.push({
        name: 'Dependency Check',
        status: 'pass',
        message: 'No suspicious packages found'
      })
    }

    // Script kontrolü
    const suspiciousScripts = Object.entries(packageJson.scripts || {}).filter(([_, script]) =>
      typeof script === 'string' && (
        script.includes('rm -rf') ||
        script.includes('sudo') ||
        script.includes('chmod 777')
      )
    )

    if (suspiciousScripts.length > 0) {
      checks.push({
        name: 'Script Security',
        status: 'warning',
        message: `Potentially dangerous scripts found: ${suspiciousScripts.map(([name]) => name).join(', ')}`
      })
    } else {
      checks.push({
        name: 'Script Security',
        status: 'pass',
        message: 'No suspicious scripts found'
      })
    }
  } catch (error) {
    checks.push({
      name: 'Package.json Check',
      status: 'fail',
      message: 'Could not read package.json'
    })
  }

  // Dosya izinleri kontrolü
  try {
    const sensitiveFiles = ['package.json', '.env', 'config.json']
    for (const file of sensitiveFiles) {
      if (fs.existsSync(file)) {
        const stats = fs.statSync(file)
        const permissions = stats.mode & 0o777

        if (permissions > 0o644) {
          checks.push({
            name: `File Permissions - ${file}`,
            status: 'warning',
            message: `File has loose permissions: ${permissions.toString(8)}`
          })
        } else {
          checks.push({
            name: `File Permissions - ${file}`,
            status: 'pass',
            message: 'File permissions are secure'
          })
        }
      }
    }
  } catch (error) {
    checks.push({
      name: 'File Permissions Check',
      status: 'fail',
      message: 'Could not check file permissions'
    })
  }

  // Environment değişkenleri kontrolü
  const envFile = path.join(process.cwd(), '.env')
  if (fs.existsSync(envFile)) {
    checks.push({
      name: 'Environment Variables',
      status: 'warning',
      message: '.env file exists - ensure it is not tracked in version control'
    })
  } else {
    checks.push({
      name: 'Environment Variables',
      status: 'pass',
      message: 'No .env file found'
    })
  }

  // Genel durum değerlendirmesi
  const failChecks = checks.filter(c => c.status === 'fail').length
  const warningChecks = checks.filter(c => c.status === 'warning').length

  let overallStatus: 'secure' | 'warning' | 'vulnerable'
  if (failChecks > 0) {
    overallStatus = 'vulnerable'
  } else if (warningChecks > 0) {
    overallStatus = 'warning'
  } else {
    overallStatus = 'secure'
  }

  return {
    overallStatus,
    checks
  }
} 