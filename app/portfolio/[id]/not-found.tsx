"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  const router = useRouter()

  const handleBackToPortfolio = () => {
    // 간단하게 홈페이지로 이동 후 포트폴리오 섹션으로 스크롤
    router.push("/")

    // 약간의 지연 후 스크롤 실행 (페이지 로드 시간 고려)
    setTimeout(() => {
      const portfolioSection = document.getElementById("portfolio")
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <div className="container max-w-4xl py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">포트폴리오를 찾을 수 없습니다</h2>
      <p className="text-muted-foreground mb-8">요청하신 포트폴리오 항목이 존재하지 않거나 삭제되었습니다.</p>
      <Button onClick={handleBackToPortfolio} className="flex items-center gap-2">
        <ArrowLeft className="h-4 w-4" />
        포트폴리오로 돌아가기
      </Button>
    </div>
  )
}

