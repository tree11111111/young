"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, FileText, Code, Film } from "lucide-react"
import Link from "next/link"
import { portfolioItems } from "@/data/portfolioItems"

// 카테고리 목록 추출
const categories = ["전체", ...Array.from(new Set(portfolioItems.map((item) => item.category)))]

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("전체")
  const [activeItem, setActiveItem] = useState<number | null>(null)

  // 카테고리별 필터링
  const filteredItems =
    selectedCategory === "전체" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  // 아이템 상세 보기
  const handleItemClick = (id: number) => {
    setActiveItem(activeItem === id ? null : id)
  }

  // 아이콘 선택 함수
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Film className="h-4 w-4" />
      case "design":
        return <FileText className="h-4 w-4" />
      case "web":
        return <Code className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">포트폴리오</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            다양한 분야에서의 프로젝트 경험과 결과물을 소개합니다
          </p>

          {/* 카테고리 필터 */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* 포트폴리오 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className={`overflow-hidden border border-primary/10 transition-all hover:shadow-md cursor-pointer ${
                activeItem === item.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => handleItemClick(item.id)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.thumbnail || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="rounded-full bg-white/80 p-3">
                      <Play className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                )}
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="line-clamp-1">{item.title}</CardTitle>
                  <Badge variant="outline">{item.category}</Badge>
                </div>
                <CardDescription className="line-clamp-2">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              {activeItem === item.id && (
                <CardFooter className="border-t pt-4">
                  <Button className="w-full" asChild>
                    <Link href={item.url}>
                      {getTypeIcon(item.type)}
                      <span className="ml-2">자세히 보기</span>
                    </Link>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">해당 카테고리의 포트폴리오 항목이 없습니다.</p>
          </div>
        )}
      </div>
    </section>
  )
}

