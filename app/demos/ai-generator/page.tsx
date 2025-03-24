"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import {
  Download,
  Share2,
  Sparkles,
  ImageIcon,
  Loader2,
  RefreshCw,
  Zap,
  Settings,
  Save,
  AlertCircle,
} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// 샘플 이미지 데이터 (백업용)
const sampleImages = [
  "https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1935&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1686193142599-2b0b511a5646?q=80&w=2070&auto=format&fit=crop",
]

// 샘플 프롬프트 데이터
const samplePrompts = [
  "미래적인 도시 풍경, 네온 불빛, 사이버펑크 스타일",
  "고요한 호수 위의 안개, 산 풍경, 일출",
  "판타지 세계의 마법 도서관, 빛나는 책, 신비로운 분위기",
  "우주 정거장에서 바라본 지구, 별이 빛나는 배경",
  "수채화 스타일의 꽃밭, 파스텔 색상, 봄 분위기",
  "미니멀한 일본식 정원, 선 스타일, 평화로운 분위기",
]

export default function AIGeneratorDemo() {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [styleStrength, setStyleStrength] = useState([50])
  const [generationHistory, setGenerationHistory] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  const generateAIImage = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)
    setError(null)

    try {
      // API 엔드포인트를 통한 이미지 생성 요청
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error(`API 요청 실패: ${response.status}`)
      }

      const data = await response.json()

      if (data.success && data.imageData) {
        // 생성된 이미지의 base64 데이터를 사용
        const imageUrl = `data:image/png;base64,${data.imageData}`
        setGeneratedImage(imageUrl)

        // 생성 기록에 추가
        setGenerationHistory((prev) => [imageUrl, ...prev].slice(0, 4))
      } else {
        throw new Error(data.error || "이미지 생성에 실패했습니다.")
      }
    } catch (err) {
      console.error("Image generation error:", err)
      setError("이미지 생성 중 오류가 발생했습니다. 다른 프롬프트로 다시 시도해보세요.")

      // 오류 발생 시 샘플 이미지 중 하나를 대체로 사용
      const fallbackImage = sampleImages[Math.floor(Math.random() * sampleImages.length)]
      setGeneratedImage(fallbackImage)

      // 생성 기록에 추가
      setGenerationHistory((prev) => [fallbackImage, ...prev].slice(0, 4))
    } finally {
      setIsGenerating(false)
    }
  }

  // 데모 모드에서는 실제 API 호출 대신 샘플 이미지 사용
  const generateDemoImage = () => {
    if (!prompt.trim()) return

    setIsGenerating(true)
    setError(null)

    // 2초 후에 샘플 이미지 중 하나를 표시
    setTimeout(() => {
      const randomImage = sampleImages[Math.floor(Math.random() * sampleImages.length)]
      setGeneratedImage(randomImage)

      // 생성 기록에 추가
      setGenerationHistory((prev) => [randomImage, ...prev].slice(0, 4))
      setIsGenerating(false)
    }, 2000)
  }

  const handlePromptSelect = (selectedPrompt: string) => {
    setPrompt(selectedPrompt)
  }

  // 이미지 새로고침 기능
  const refreshImage = () => {
    if (!prompt.trim()) return
    generateDemoImage() // 데모 모드에서는 generateDemoImage 사용
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">AI 이미지 생성기</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            텍스트 프롬프트를 입력하여 AI가 생성한 이미지를 만들어보세요. 다양한 스타일과 설정으로 창의적인 이미지를
            생성할 수 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* 왼쪽: 입력 영역 */}
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <Textarea
                  placeholder="이미지를 생성할 프롬프트를 입력하세요. 예: 미래적인 도시 풍경, 네온 불빛, 사이버펑크 스타일"
                  className="min-h-[120px] mb-4"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />

                <div className="flex flex-wrap gap-2 mb-4">
                  {samplePrompts.map((samplePrompt, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handlePromptSelect(samplePrompt)}
                      className="text-xs"
                    >
                      {samplePrompt.length > 20 ? samplePrompt.substring(0, 20) + "..." : samplePrompt}
                    </Button>
                  ))}
                </div>

                <Tabs defaultValue="basic">
                  <TabsList className="mb-4">
                    <TabsTrigger value="basic">기본 설정</TabsTrigger>
                    <TabsTrigger value="advanced">고급 설정</TabsTrigger>
                  </TabsList>

                  <TabsContent value="basic">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">스타일 강도</label>
                        <Slider
                          value={styleStrength}
                          min={0}
                          max={100}
                          step={1}
                          onValueChange={setStyleStrength}
                          className="mb-1"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>약함</span>
                          <span>{styleStrength}%</span>
                          <span>강함</span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="advanced">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" size="sm" className="justify-start">
                          <Settings className="mr-2 h-4 w-4" />
                          해상도 설정
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          <ImageIcon className="mr-2 h-4 w-4" />
                          이미지 업로드
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          <Save className="mr-2 h-4 w-4" />
                          프리셋 저장
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          <Zap className="mr-2 h-4 w-4" />
                          빠른 생성
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex gap-2 mt-4">
                  <Button
                    className="flex-1 gradient-bg border-0"
                    onClick={generateDemoImage} // 데모 모드에서는 generateDemoImage 사용
                    disabled={isGenerating || !prompt.trim()}
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        생성 중...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        이미지 생성하기
                      </>
                    )}
                  </Button>
                  <Button variant="outline" disabled={isGenerating} onClick={refreshImage}>
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 생성 기록 */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-3">최근 생성 기록</h3>
                <div className="grid grid-cols-4 gap-2">
                  {generationHistory.length > 0
                    ? generationHistory.map((img, index) => (
                        <div
                          key={index}
                          className="relative aspect-square rounded-md overflow-hidden border cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => setGeneratedImage(img)}
                        >
                          <Image
                            src={img || "/placeholder.svg"}
                            alt={`생성된 이미지 ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))
                    : // 초기 상태에서는 샘플 이미지 표시
                      sampleImages.map((img, index) => (
                        <div
                          key={index}
                          className="relative aspect-square rounded-md overflow-hidden border cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => setGeneratedImage(img)}
                        >
                          <Image
                            src={img || "/placeholder.svg"}
                            alt={`샘플 이미지 ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 오른쪽: 결과 영역 */}
          <div>
            <Card className="h-full flex flex-col">
              <CardContent className="p-4 flex-1 flex flex-col">
                {error && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>오류</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-md mb-4 relative">
                  {isGenerating ? (
                    <div className="flex flex-col items-center">
                      <Loader2 className="h-10 w-10 animate-spin text-primary mb-2" />
                      <p className="text-muted-foreground">이미지 생성 중...</p>
                    </div>
                  ) : generatedImage ? (
                    <div className="relative w-full h-full min-h-[400px]">
                      <Image
                        src={generatedImage || "/placeholder.svg"}
                        alt="생성된 이미지"
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center text-center p-6">
                      <ImageIcon className="h-16 w-16 text-muted-foreground/30 mb-4" />
                      <h3 className="font-medium mb-2">이미지가 여기에 표시됩니다</h3>
                      <p className="text-sm text-muted-foreground max-w-md">
                        왼쪽에 프롬프트를 입력하고 '이미지 생성하기' 버튼을 클릭하여 AI 이미지를 생성해보세요.
                      </p>
                    </div>
                  )}
                </div>

                {generatedImage && (
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-md">
                      <p className="text-sm">{prompt}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1" variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        다운로드
                      </Button>
                      <Button variant="outline">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

