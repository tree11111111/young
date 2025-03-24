import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Mail, Download, ArrowRight } from "lucide-react"

export default function PortfolioDemo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                안녕하세요, <span className="gradient-text">정영삼</span>입니다
              </h1>
              <p className="text-xl text-muted-foreground mb-6">창의적인 솔루션을 만드는 웹 개발자 & 디자이너</p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-sm py-1">React</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-sm py-1">Next.js</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-sm py-1">TypeScript</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-sm py-1">UI/UX 디자인</Badge>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="gradient-bg border-0">
                  <Mail className="mr-2 h-4 w-4" />
                  연락하기
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  이력서 다운로드
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl -z-10"></div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="정영삼"
                width={400}
                height={400}
                className="rounded-full mx-auto border-4 border-background"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 섹션 */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">프로젝트</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              다양한 웹 개발 및 디자인 프로젝트를 통해 사용자 중심의 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border border-primary/10 hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop"
                  alt="온라인 쇼핑몰"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">온라인 쇼핑몰</h3>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="/demos/shopping-mall">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Next.js와 Tailwind CSS로 개발한 현대적인 이커머스 플랫폼으로, 반응형 디자인과 사용자 친화적인
                  인터페이스를 갖추고 있습니다.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">Prisma</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-primary/10 hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                  alt="대시보드 애플리케이션"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">대시보드 애플리케이션</h3>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="/demos/dashboard">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  기업용 데이터 시각화 및 분석 대시보드로, 복잡한 데이터를 직관적인 차트와 그래프로 표현합니다.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">D3.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Firebase</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-primary/10 hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop"
                  alt="소셜 미디어 앱"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">소셜 미디어 앱</h3>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="/demos/social-app">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  실시간 채팅 및 게시물 공유 기능을 갖춘 소셜 플랫폼으로, 사용자 간의 소통과 콘텐츠 공유를 지원합니다.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Socket.io</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-primary/10 hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop"
                  alt="AI 이미지 생성기"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">AI 이미지 생성기</h3>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="/demos/ai-generator">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  텍스트 프롬프트를 기반으로 이미지를 생성하는 AI 도구로, 사용자의 창의적인 아이디어를 시각화합니다.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">TensorFlow</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Flask</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/#projects">
                더 많은 프로젝트 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

