import os from 'os'
import { performance } from 'perf_hooks'

interface SystemHealth {
  cpu: {
    usage: number
    cores: number
    model: string
    speed: number
  }
  memory: {
    total: number
    free: number
    used: number
    usagePercentage: number
  }
  uptime: number
  platform: string
  arch: string
  nodeVersion: string
}

export async function checkSystemHealth(): Promise<SystemHealth> {
  const cpus = os.cpus()
  const totalMemory = os.totalmem()
  const freeMemory = os.freemem()
  const usedMemory = totalMemory - freeMemory

  // CPU kullanımını hesapla
  const startMeasure = cpus.map(cpu => ({
    idle: cpu.times.idle,
    total: Object.values(cpu.times).reduce((acc, time) => acc + time, 0)
  }))

  await new Promise(resolve => setTimeout(resolve, 100))

  const endMeasure = os.cpus().map(cpu => ({
    idle: cpu.times.idle,
    total: Object.values(cpu.times).reduce((acc, time) => acc + time, 0)
  }))

  const cpuUsage = startMeasure.map((start, i) => {
    const end = endMeasure[i]
    const idle = end.idle - start.idle
    const total = end.total - start.total
    return 1 - idle / total
  })

  return {
    cpu: {
      usage: cpuUsage.reduce((acc, usage) => acc + usage, 0) / cpuUsage.length * 100,
      cores: cpus.length,
      model: cpus[0].model,
      speed: cpus[0].speed
    },
    memory: {
      total: totalMemory,
      free: freeMemory,
      used: usedMemory,
      usagePercentage: (usedMemory / totalMemory) * 100
    },
    uptime: os.uptime(),
    platform: os.platform(),
    arch: os.arch(),
    nodeVersion: process.version
  }
} 