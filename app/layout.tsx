import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { PopupProvider } from "@/components/popup-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "정영삼 포트폴리오",
  description: "정영삼의 개인 포트폴리오 웹사이트",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <PopupProvider>{children}</PopupProvider>
      </body>
    </html>
  )
}



import './globals.css'