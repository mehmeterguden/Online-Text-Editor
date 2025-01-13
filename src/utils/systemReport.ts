import { checkSystemHealth } from './systemHealth'
import { testAllFeatures } from './featureTests'
import { performSecurityCheck } from './securityCheck'
import chalk from 'chalk'

interface SystemReport {
  timestamp: string
  systemHealth: Awaited<ReturnType<typeof checkSystemHealth>>
  featureTests: Awaited<ReturnType<typeof testAllFeatures>>
  security: Awaited<ReturnType<typeof performSecurityCheck>>
}

export async function generateSystemReport(): Promise<SystemReport> {
  // Localhost mesajının görüntülenmesi için bekle
  await new Promise(resolve => setTimeout(resolve, 1000))

  console.log(chalk.blue('\n🔍 Sistem raporu oluşturuluyor...\n'))

  // Tüm kontrolleri paralel olarak çalıştır
  const [systemHealth, featureTests, security] = await Promise.all([
    checkSystemHealth(),
    testAllFeatures(),
    performSecurityCheck()
  ])

  const report = {
    timestamp: new Date().toISOString(),
    systemHealth,
    featureTests,
    security
  }

  // Raporu konsola yazdır
  printReport(report)

  return report
}

function printReport(report: SystemReport) {
  console.log('\n' + chalk.bold.blue('📊 SİSTEM RAPORU'))
  console.log(chalk.gray('='.repeat(100)))

  // Sistem Sağlığı
  console.log(chalk.bold.yellow('\n🖥️  Sistem Sağlığı'))
  console.log(chalk.gray('-'.repeat(50)))
  console.log(chalk.cyan('CPU Kullanımı:'), `${report.systemHealth.cpu.usage.toFixed(1)}%`)
  console.log(chalk.cyan('CPU Model:'), report.systemHealth.cpu.model)
  console.log(chalk.cyan('CPU Çekirdek Sayısı:'), report.systemHealth.cpu.cores)
  console.log(chalk.cyan('Bellek Kullanımı:'), `${report.systemHealth.memory.usagePercentage.toFixed(1)}%`)
  console.log(chalk.cyan('Toplam Bellek:'), formatBytes(report.systemHealth.memory.total))
  console.log(chalk.cyan('Kullanılan Bellek:'), formatBytes(report.systemHealth.memory.used))
  console.log(chalk.cyan('Platform:'), report.systemHealth.platform)
  console.log(chalk.cyan('Node.js Versiyonu:'), report.systemHealth.nodeVersion)

  // Özellik Testleri
  console.log(chalk.bold.yellow('\n🧪 Özellik Testleri'))
  console.log(chalk.gray('-'.repeat(50)))
  console.log(chalk.cyan('Toplam Test:'), report.featureTests.totalTests)
  console.log(chalk.green('Başarılı:'), report.featureTests.passedTests)
  console.log(chalk.red('Başarısız:'), report.featureTests.failedTests)

  // Performans Özeti
  console.log(chalk.bold.magenta('\n⚡ Performans Özeti'))
  console.log(chalk.gray('-'.repeat(50)))
  console.log(chalk.cyan('Toplam Çalışma Süresi:'), `${report.featureTests.executionSummary.totalExecutionTime.toFixed(2)}ms`)
  console.log(chalk.cyan('Ortalama Test Süresi:'), `${report.featureTests.executionSummary.averageExecutionTime.toFixed(2)}ms`)
  console.log(chalk.cyan('En Yavaş Test:'), 
    `${report.featureTests.executionSummary.slowestTest.feature} (${report.featureTests.executionSummary.slowestTest.time.toFixed(2)}ms)`)
  console.log(chalk.cyan('En Hızlı Test:'), 
    `${report.featureTests.executionSummary.fastestTest.feature} (${report.featureTests.executionSummary.fastestTest.time.toFixed(2)}ms)`)

  // Başarısız testleri göster
  const failedTests = report.featureTests.results.filter(r => !r.success)
  if (failedTests.length > 0) {
    console.log(chalk.bold.red('\n❌ Başarısız Testler'))
    console.log(chalk.gray('-'.repeat(50)))
    failedTests.forEach(test => {
      console.log(chalk.red(`\n✖ ${test.feature} (${test.category})`))
      console.log(chalk.gray('  Beklenen Davranış:'), test.expectedBehavior || 'Belirtilmemiş')
      console.log(chalk.gray('  Gerçekleşen:'), test.actualBehavior || 'Belirtilmemiş')
      if (test.input) console.log(chalk.gray('  Girdi:'), test.input)
      if (test.output) console.log(chalk.gray('  Çıktı:'), test.output)
      if (test.error) console.log(chalk.gray('  Hata:'), test.error)
    })

    // Hata özeti
    if (report.featureTests.errorSummary.totalErrors > 0) {
      console.log(chalk.bold.yellow('\n📈 Hata İstatistikleri'))
      console.log(chalk.gray('-'.repeat(50)))
      console.log(chalk.cyan('Toplam Hata:'), report.featureTests.errorSummary.totalErrors)
      console.log(chalk.cyan('En Yaygın Hata:'), report.featureTests.errorSummary.mostCommonError)
      console.log(chalk.cyan('Hata Tipleri:'))
      Object.entries(report.featureTests.errorSummary.errorTypes).forEach(([type, count]) => {
        console.log(chalk.gray(`  ${type}:`), count)
      })
    }
  }

  // Güvenlik Kontrolü
  console.log(chalk.bold.yellow('\n🔒 Güvenlik Kontrolü'))
  console.log(chalk.gray('-'.repeat(50)))
  console.log(chalk.cyan('Durum:'), getStatusColor(report.security.overallStatus)(report.security.overallStatus))
  
  report.security.checks.forEach(check => {
    console.log(
      getStatusIcon(check.status),
      chalk.cyan(check.name + ':'),
      getStatusColor(check.status)(check.message)
    )
  })

  console.log('\n' + chalk.gray('='.repeat(100)))
  console.log(chalk.blue(`Rapor oluşturulma zamanı: ${new Date().toLocaleString()}`))
}

function formatBytes(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB']
  let size = bytes
  let unitIndex = 0
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024
    unitIndex++
  }
  
  return `${size.toFixed(2)} ${units[unitIndex]}`
}

function getStatusColor(status: string) {
  switch (status) {
    case 'pass':
    case 'secure':
      return chalk.green
    case 'warning':
      return chalk.yellow
    case 'fail':
    case 'vulnerable':
      return chalk.red
    default:
      return chalk.white
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case 'pass':
      return chalk.green('✓')
    case 'warning':
      return chalk.yellow('⚠')
    case 'fail':
      return chalk.red('✖')
    default:
      return chalk.gray('•')
  }
} 