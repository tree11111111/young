"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, User, Wrench } from "lucide-react"
import { useEffect, useState } from "react"
import { portfolioItems } from "@/data/portfolioItems"

export default function PortfolioDetailPageClient({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  
  // ID 문자열 비교로 아이템 찾기
  const item = portfolioItems?.find(item => String(item.id) === String(params?.id));
  
  useEffect(() => {
    // useEffect 내부에서만 로깅 (브라우저 콘솔에만 표시)
    console.log("Portfolio items:", portfolioItems?.length || 0);
    console.log("Looking for ID:", params?.id);
    console.log("Found item:", item?.title);
    
    setIsLoading(false);
  }, [params?.id, item?.title]);
  
  if (isLoading) {
    return <div className="container py-12 text-center">
      <h2 className="text-2xl font-bold">로딩 중...</h2>
    </div>
  }

  if (!item) {
    return <div className="container py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">포트폴리오 항목을 찾을 수 없습니다</h2>
      <p className="text-muted-foreground mb-6">요청하신 포트폴리오 항목이 존재하지 않거나 삭제되었습니다.</p>
      <Button onClick={() => router.push("/")} className="flex items-center gap-2 mx-auto">
        <ArrowLeft className="h-4 w-4" />
        홈페이지로 돌아가기
      </Button>
    </div>
  }

  // 포트폴리오 항목 표시 - 디버그 정보 제거
  return (
    <div className="container max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
        <p className="text-muted-foreground mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge>{item.category}</Badge>
          {item.tags?.map((tag, idx) => (
            <Badge key={idx} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* 메인 이미지 또는 비디오 */}
      <Card className="mb-8 overflow-hidden">
        <CardContent className="p-0">
          {item.type === "video" && item.videoUrl ? (
            <div className="aspect-video w-full">
              <iframe
                src={item.videoUrl.includes("youtu") 
                  ? item.videoUrl.replace("youtu.be/", "youtube.com/embed/").split("?")[0]
                  : item.videoUrl.replace(/\/view.*$/, "/preview")}
                className="w-full h-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="relative aspect-video w-full">
              <Image 
                src={item.thumbnail || "/placeholder.svg"} 
                alt={item.title} 
                fill 
                className="object-cover" 
              />
            </div>
          )}
        </CardContent>
      </Card>

      {/* 프로젝트 정보 */}
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4">프로젝트 개요</h2>
          <div className="prose max-w-none">
            {item.fullDescription?.split("\n").map((paragraph, idx) => (
              <p key={idx} className="mb-4 text-base leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-4">프로젝트 정보</h3>
              <ul className="space-y-4">
                {item.client && (
                  <li className="flex items-start gap-3">
                    <User className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">클라이언트</p>
                      <p className="font-medium">{item.client}</p>
                    </div>
                  </li>
                )}
                {item.year && (
                  <li className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">제작 연도</p>
                      <p className="font-medium">{item.year}</p>
                    </div>
                  </li>
                )}
                {item.duration && (
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">제작 기간</p>
                      <p className="font-medium">{item.duration}</p>
                    </div>
                  </li>
                )}
                {item.tools && (
                  <li className="flex items-start gap-3">
                    <Wrench className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">사용 도구</p>
                      <p className="font-medium">{item.tools.join(", ")}</p>
                    </div>
                  </li>
                )}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button onClick={() => router.push("/")} className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          모든 포트폴리오 보기
        </Button>
      </div>
    </div>
  )
}

