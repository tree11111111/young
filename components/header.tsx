"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "홈", href: "#home" },
    { name: "소개", href: "#about" },
    { name: "경력", href: "#experience" },
    { name: "포트폴리오", href: "#portfolio" },
    { name: "프로젝트", href: "#projects" },
    { name: "연락처", href: "#contact" },
  ]

  // 스크롤 이동 함수
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false) // 메뉴 닫기

    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      // 부드러운 스크롤 적용
      element.scrollIntoView({ behavior: "smooth" })

      // 스크롤 완료 후 섹션 하이라이트 효과 추가
      setTimeout(() => {
        // 일시적으로 하이라이트 클래스 추가
        element.classList.add("section-highlight")

        // 1.5초 후 하이라이트 클래스 제거
        setTimeout(() => {
          element.classList.remove("section-highlight")
        }, 1500)
      }, 500) // 스크롤이 완료될 때까지 약간의 지연 시간 추가
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold gradient-text">
            정영삼
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-sm border-t">
          <nav className="container py-8 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-lg font-medium py-3 px-4 text-left transition-colors hover:text-primary rounded-md hover:bg-muted/70 flex items-center mobile-menu-item"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

