"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Heart, Share2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// 프로젝트 데이터
const allProjects = [
  {
    title: "온라인 쇼핑몰",
    description: "Next.js와 Tailwind CSS로 개발한 현대적인 이커머스 플랫폼",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
    tags: ["Next.js", "React", "Tailwind CSS", "Prisma"],
    category: "웹 개발",
    liveUrl: "/demos/shopping-mall",
    githubUrl: "#",
  },
  {
    title: "대시보드 애플리케이션",
    description: "기업용 데이터 시각화 및 분석 대시보드",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "D3.js", "TypeScript", "Firebase"],
    category: "데이터 시각화",
    liveUrl: "/demos/dashboard",
    githubUrl: "#",
  },
  {
    title: "소셜 미디어 앱",
    description: "실시간 채팅 및 게시물 공유 기능을 갖춘 소셜 플랫폼",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
    tags: ["React Native", "Node.js", "Socket.io", "MongoDB"],
    category: "모바일 앱",
    liveUrl: "/demos/social-app",
    githubUrl: "#",
  },
  {
    title: "포트폴리오 웹사이트",
    description: "개인 포트폴리오를 위한 반응형 웹사이트",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    category: "웹 개발",
    liveUrl: "/demos/portfolio",
    githubUrl: "#",
  },
  {
    title: "AI 이미지 생성기",
    description: "텍스트 프롬프트를 기반으로 이미지를 생성하는 AI 도구",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop",
    tags: ["Python", "TensorFlow", "React", "Flask"],
    category: "AI/ML",
    liveUrl: "/demos/ai-generator",
    githubUrl: "#",
  },
]

// 카테고리 목록 추출
const categories = ["전체", ...Array.from(new Set(allProjects.map((project) => project.category)))]

export function Projects() {
  const { toast } = useToast()
  const [selectedCategory, setSelectedCategory] = useState("전체")
  const [likedProjects, setLikedProjects] = useState<string[]>([])

  // 카테고리별 프로젝트 필터링
  const filteredProjects =
    selectedCategory === "전체" ? allProjects : allProjects.filter((project) => project.category === selectedCategory)

  // 좋아요 토글 함수
  const toggleLike = (title: string) => {
    setLikedProjects((prev) => {
      if (prev.includes(title)) {
        return prev.filter((p) => p !== title)
      } else {
        toast({
          title: "프로젝트를 좋아합니다!",
          description: `"${title}" 프로젝트를 좋아요 목록에 추가했습니다.`,
        })
        return [...prev, title]
      }
    })
  }

  // 공유 함수
  const shareProject = (title: string) => {
    if (navigator.share) {
      navigator
        .share({
          title: `정영삼의 포트폴리오 - ${title}`,
          text: `정영삼의 포트폴리오에서 ${title} 프로젝트를 확인해보세요!`,
          url: window.location.href,
        })
        .catch(() => {
          copyToClipboard()
        })
    } else {
      copyToClipboard()
    }
  }

  // 클립보드 복사 함수
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    toast({
      title: "링크가 복사되었습니다",
      description: "포트폴리오 링크가 클립보드에 복사되었습니다.",
    })
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">프로젝트</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">최근에 진행한 주요 프로젝트들을 소개합니다</p>

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden flex flex-col group border-primary/10 transition-all hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Badge variant="outline" className="mt-2">
                  {project.category}
                </Badge>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={() => toggleLike(project.title)}>
                    <Heart
                      className={`h-4 w-4 ${likedProjects.includes(project.title) ? "fill-primary text-primary" : ""}`}
                    />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => shareProject(project.title)}>
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubUrl}>
                      <Github className="h-4 w-4 mr-2" />
                      코드
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.liveUrl}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      데모
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">해당 카테고리의 프로젝트가 없습니다.</p>
          </div>
        )}
      </div>
    </section>
  )
}

