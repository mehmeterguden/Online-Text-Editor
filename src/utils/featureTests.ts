import { allCleaningFeatures } from '../features/cleaning'
import { performance } from 'perf_hooks'

interface TestResult {
  feature: string
  category: string
  success: boolean
  error?: string
  executionTime: number
  input?: string
  output?: string
  expectedBehavior?: string
  actualBehavior?: string
}

interface FeatureTestResults {
  totalTests: number
  passedTests: number
  failedTests: number
  results: TestResult[]
  executionSummary: {
    totalExecutionTime: number
    averageExecutionTime: number
    slowestTest: { feature: string; time: number }
    fastestTest: { feature: string; time: number }
  }
  errorSummary: {
    totalErrors: number
    errorTypes: { [key: string]: number }
    mostCommonError?: string
  }
}

export async function testAllFeatures(): Promise<FeatureTestResults> {
  const results: TestResult[] = []
  let passedTests = 0
  let failedTests = 0
  const errorTypes: { [key: string]: number } = {}
  const startTotalTime = performance.now()

  // Test metinleri ve beklenen davranışlar
  const testCases = {
    basic: {
      input: '  Hello  World  \n\n\nTest\n  ',
      expectedBehavior: 'Gereksiz boşlukların ve satırların temizlenmesi'
    },
    character: {
      input: 'Hello! @#$%^&* World 123',
      expectedBehavior: 'Özel karakterlerin ve sayıların temizlenmesi'
    },
    content: {
      input: '<div>Hello</div> World',
      expectedBehavior: 'HTML etiketlerinin temizlenmesi'
    },
    formatting: {
      input: '// Comment\n/* Multi-line\ncomment */\nCode',
      expectedBehavior: 'Yorum satırlarının temizlenmesi'
    },
    pattern: {
      input: '12/34/5678\nABCDEF\n123456',
      expectedBehavior: 'Belirli desenlerin temizlenmesi'
    }
  }

  // Tüm özellikleri test et
  for (const feature of allCleaningFeatures) {
    const startTime = performance.now()
    try {
      // Feature'ın kategorisine göre test metnini ve beklenen davranışı seç
      const testCase = testCases[feature.category as keyof typeof testCases] || testCases.basic
      const testText = testCase.input
      
      // Feature'ı test et
      const result = feature.action(testText)
      
      // Sonucu kontrol et
      const success = typeof result === 'string' && result !== testText
      
      if (success) {
        passedTests++
      } else {
        failedTests++
      }

      // Test sonucunu kaydet
      results.push({
        feature: feature.name,
        category: feature.category,
        success,
        executionTime: performance.now() - startTime,
        input: testText,
        output: result,
        expectedBehavior: testCase.expectedBehavior,
        actualBehavior: success ? 'Başarılı' : 'Metin değişmedi veya geçersiz sonuç'
      })
    } catch (error) {
      failedTests++
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      
      // Hata tipini kaydet
      const errorType = error instanceof Error ? error.constructor.name : 'UnknownError'
      errorTypes[errorType] = (errorTypes[errorType] || 0) + 1

      results.push({
        feature: feature.name,
        category: feature.category,
        success: false,
        error: errorMessage,
        executionTime: performance.now() - startTime,
        expectedBehavior: testCases[feature.category as keyof typeof testCases]?.expectedBehavior,
        actualBehavior: `Hata: ${errorMessage}`
      })
    }
  }

  // Performans istatistiklerini hesapla
  const totalExecutionTime = performance.now() - startTotalTime
  const executionTimes = results.map(r => ({ feature: r.feature, time: r.executionTime }))
  const slowestTest = executionTimes.reduce((prev, current) => 
    current.time > prev.time ? current : prev
  )
  const fastestTest = executionTimes.reduce((prev, current) => 
    current.time < prev.time ? current : prev
  )

  // En yaygın hata tipini bul
  const mostCommonError = Object.entries(errorTypes)
    .sort(([,a], [,b]) => b - a)[0]?.[0]

  return {
    totalTests: results.length,
    passedTests,
    failedTests,
    results,
    executionSummary: {
      totalExecutionTime,
      averageExecutionTime: totalExecutionTime / results.length,
      slowestTest,
      fastestTest
    },
    errorSummary: {
      totalErrors: failedTests,
      errorTypes,
      mostCommonError
    }
  }
} 