"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      enableSystem={true} // 시스템 설정 활성화
      disableTransitionOnChange // 테마 전환 시 트랜지션 비활성화
    >
      {children}
    </NextThemesProvider>
  )
}

