import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "프로젝트 데모 | 정영삼 포트폴리오",
  description: "정영삼의 포트폴리오 프로젝트 데모 페이지",
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b py-4">
        <div className="container flex justify-between items-center">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/#projects" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              포트폴리오로 돌아가기
            </Link>
          </Button>
          <Link href="/" className="text-xl font-bold gradient-text">
            정영삼
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t py-4 text-center text-sm text-muted-foreground">
        <div className="container">© 2025 정영삼. 이 데모는 포트폴리오 목적으로 제작되었습니다.</div>
      </footer>
    </div>
  )
}

