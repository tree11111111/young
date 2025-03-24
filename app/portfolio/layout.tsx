import type React from "react"
import type { Metadata } from "next"
import PortfolioLayoutClient from "./PortfolioLayoutClient"

export const metadata: Metadata = {
  title: "포트폴리오 | 정영삼",
  description: "정영삼의 포트폴리오 프로젝트 상세 페이지",
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PortfolioLayoutClient>{children}</PortfolioLayoutClient>
}

