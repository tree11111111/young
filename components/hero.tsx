"use client"

import { useState } from "react"
import Image from "next/image"

export function Hero() {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleAnimation = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 1000)
  }

  return (
    <section id="home" className="py-24 md:py-32 container relative">
      <div className="absolute inset-0 -z-10 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1545670723-196ed0954986?q=80&w=2952&auto=format&fit=crop"
          alt="배경 이미지"
          fill
          className="object-cover"
        />
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <h1
          className={`text-4xl md:text-6xl font-bold tracking-tight mb-6 transition-all duration-500 ${
            isAnimating ? "scale-110" : ""
          }`}
          onClick={handleAnimation}
        >
          안녕하세요, <span className="gradient-text">정영삼</span>입니다
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">병원 홍보 & 웹 개발자 & 영상·디자이너</p>
      </div>
    </section>
  )
}

