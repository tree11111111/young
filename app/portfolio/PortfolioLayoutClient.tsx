"use client"

import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function PortfolioLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
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
    <div className="min-h-screen flex flex-col">
      <header className="border-b py-4">
        <div className="container flex justify-between items-center">
          <Button variant="ghost" size="sm" onClick={handleBackToPortfolio} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            포트폴리오로 돌아가기
          </Button>
          <Link href="/" className="text-xl font-bold gradient-text">
            정영삼
          </Link>
        </div>
      </header>
      <main className="flex-1 py-8">{children}</main>
      <footer className="border-t py-4 text-center text-sm text-muted-foreground">
        <div className="container">© 2025 정영삼. 모든 권리 보유.</div>
      </footer>
    </div>
  )
}

