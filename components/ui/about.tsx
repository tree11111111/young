"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Palette, Globe, User, Heart, Briefcase, MessageCircle } from "lucide-react"

export function About() {
  const [activeTab, setActiveTab] = useState("summary")

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">소개</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            저는 사용자 경험을 중시하는 웹 개발자이며 영상·디자이너입니다. 창의적인 솔루션을 통해 복잡한 문제를 해결하는
            것을 좋아합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 -z-10 blur-xl"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%A0%95%EC%98%81%EC%82%BC%EB%8B%98.jpg-e7eatWkyx4HFNB1FKaCmP1sZFvCzJU.jpeg"
              alt="정영삼"
              width={400}
              height={400}
              className="rounded-lg object-cover border-2 border-primary/20 shadow-md"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg">
              안녕하세요! 저는 정영삼입니다. 방송 영상 제작과 웹 개발 분야에서 다양한 경험을 쌓아온 전문가입니다. 사용자
              중심의 디자인과 효율적인 콘텐츠 제작에 열정을 가지고 있습니다.
            </p>

            <div className="grid gap-4">
              <Card className="border border-primary/10 shadow-sm">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">병원홍보</h3>
                    <p className="text-sm text-muted-foreground">
                     온라인 블로그 글 쓰기, 관리 SNS 관리 및 유튜브 콘텐츠 기획 및 제작, 홈페이지 관리
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-primary/10 shadow-sm">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Palette className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">영상 제작</h3>
                    <p className="text-sm text-muted-foreground">방송 영상 촬영 및 편집, 디지털 콘텐츠 제작</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-primary/10 shadow-sm">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">웹개발</h3>
                    <p className="text-sm text-muted-foreground">React, Next.js, TypeScript를 활용한 현대적인 웹 애플리케이션 개발</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* 자기소개 상세 내용 */}
        <div className="max-w-4xl mx-auto">
          <Card className="border border-primary/10 shadow-md">
            <CardContent className="p-6">
              <Tabs defaultValue="summary" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="summary" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">성장 배경</span>
                  </TabsTrigger>
                  <TabsTrigger value="personality" className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    <span className="hidden sm:inline">성격 및 신조</span>
                  </TabsTrigger>
                  <TabsTrigger value="career" className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span className="hidden sm:inline">경력 및 특기</span>
                  </TabsTrigger>
                  <TabsTrigger value="closing" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    <span className="hidden sm:inline">마무리</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="summary" className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">성장 배경</h3>
                  <div className="space-y-4 text-base leading-relaxed">
                    <p>
                      저는 독립적인 가정 환경에서 자립심과 책임감을 키워온 장남으로서, 어린 시절부터 맡은 역할을 충실히
                      해내는 법을 배웠습니다. 믿음직하고 든든한 모습으로 주변 사람들에게 신뢰를 얻었으며, 타인에 대한
                      배려와 존중을 중요하게 생각하는 성격으로 성장했습니다.
                    </p>
                    <p>
                      특히, 맡은 일에 대한 강한 집중력과 끈기로 끝까지 책임을 다하는 제 모습은 여러 프로젝트와 협업
                      속에서 팀의 신뢰를 얻고 목표 달성에 기여해왔습니다.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="personality" className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">성격 및 생활신조</h3>
                  <div className="space-y-4 text-base leading-relaxed">
                    <p>
                      저는 "No pain, no gain(고통 없이는 얻는 것도 없다)"라는 신조를 바탕으로 노력의 가치를 믿으며,
                      주어진 일에 최선을 다하는 삶을 살아가고 있습니다.
                    </p>
                    <p>
                      주변에서는 저를 두고 "성실함과 체력의 상징"이라고 농담을 하곤 하지만, 저는 이 말을 긍정적으로
                      받아들이며 성실함과 꾸준한 자기 관리가 성공의 기본이라고 믿습니다. 활기차게 목표를 향해 나아가며,
                      사람들과의 관계를 소중히 여겨 지금까지도 많은 선후배와 돈독한 관계를 유지하고 있습니다.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="career" className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">경력 및 특기 사항</h3>
                  <div className="space-y-4 text-base leading-relaxed">
                    <p>
                      현재 저는 이태석 재단에서 근무하며 다양한 역할을 수행하고 있습니다. 현수막, 리플렛, 브로슈어 등
                      디자인 작업부터 홈페이지 관리, 오류 코드 수정 및 리뉴얼 작업, 전산 관련 네트워크 및 NAS 구축까지
                      폭넓은 업무를 담당하고 있습니다.
                    </p>
                    <p>
                      또한, 영상 촬영과 편집 업무를 통해 유튜브와 SNS를 관리하며 재단의 대내외 홍보를 책임지고 있습니다.
                      업무 효율성을 높이기 위해 AI 기술을 적극 활용하며, 데이터 분석과 콘텐츠 최적화를 통해 더 나은
                      결과를 만들어내는 데 주력하고 있습니다.
                    </p>
                    <p>
                      이전에는 종합병원에서 사원과 팀장으로 근무하며 온라인 홍보 업무를 담당했습니다. 병원 홈페이지
                      관리, 네이버 블로그 및 병원 뉴스 글 작성, SNS 콘텐츠 제작, 원내 게시물 작성 등 온라인과 오프라인
                      홍보를 아우르는 업무를 성공적으로 수행하며 병원의 이미지를 효과적으로 전달하는 데 기여했습니다.
                    </p>
                    <p>
                      기술적으로는 MS 오피스와 더불어 프리미어, 애프터 이펙트, 포토샵, 일러스트, 파이널컷, 다빈치 리졸브
                      등 다양한 편집 소프트웨어를 능숙하게 다룰 수 있습니다. 드론, 짐벌, 오스모, DSLR 등 다양한 촬영
                      장비를 운용하며 실무 경험을 쌓아왔고, PC 조립·업그레이드 및 소프트웨어 관리 능력도 보유하고
                      있습니다.
                    </p>
                    <p>
                      저는 도전적이고 학습 의지가 강한 사람으로, 빠르게 변화하는 환경에서도 적응하며 지속적으로
                      성장하려는 열정을 가지고 있습니다.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="closing" className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">마지막으로</h3>
                  <div className="space-y-4 text-base leading-relaxed">
                    <p>
                      저는 맡은 일을 단순히 완수하는 데 그치지 않고, 창의적이고 효율적인 방법으로 더 큰 가치를
                      만들어내고자 노력합니다. 귀사의 목표 실현에 저의 경험과 역량, 그리고 AI 활용 능력을 더해 실질적인
                      성과를 만들어가고 싶습니다.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

