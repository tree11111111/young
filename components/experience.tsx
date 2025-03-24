import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "콘텐츠제작국장",
      company: "이태석재단",
      period: "2024년 10월 - 현재",
      description:
        "홈페이지 관리 및 리뉴얼, 전산 네트워크, 컴퓨터 하드웨어 소프트웨어, 블로그 글, 사인 디자인, 현수막, 리플렛, 브로슈어, 영상 촬영, 영상편집",
      skills: ["웹 개발", "디자인", "영상 제작", "네트워크 관리"],
    },
    {
      title: "홍보팀장",
      company: "검단탑병원",
      period: "2024년 7월 - 2024년 9월",
      description: "병원 홍보 총괄 관리",
      skills: ["홍보", "마케팅", "팀 관리"],
    },
    {
      title: "홍보팀",
      company: "CM병원",
      period: "2022년 9월 - 2024년 6월",
      description:
        "블로그 및 유튜브 채널 관리, 원내 게시물 제작·모니터 관리, 온·오프라인 홍보, 방송 스케줄 관리, 전산 업무",
      skills: ["디지털 마케팅", "콘텐츠 제작", "채널 관리"],
    },
    {
      title: "영상PD",
      company: "SBS 보도국",
      period: "2016년 9월 - 2022년 8월",
      description: "8뉴스, 비디오 머그",
      skills: ["영상 제작", "방송 촬영", "편집"],
    },
    {
      title: "종편 감독",
      company: "한솔미디어센터",
      period: "2014년 12월 - 2016년 9월",
      description: "종합편집 감독",
      skills: ["영상 편집", "방송 제작"],
    },
    {
      title: "영상편집",
      company: "아리랑국제방송",
      period: "2013년 12월 - 2014년 12월",
      description: "뉴스 영상 편집",
      skills: ["영상 편집", "국제 방송"],
    },
    {
      title: "영상PD",
      company: "SBS 보도국",
      period: "2012년 12월 - 2013년 11월",
      description: "8뉴스",
      skills: ["영상 제작", "뉴스 제작"],
    },
    {
      title: "PD",
      company: "블루리본",
      period: "2008년 4월 - 2012년 11월",
      description: "SK그룹 사내방송 PD",
      skills: ["기업 방송", "영상 제작", "PD"],
    },
    {
      title: "영상PD",
      company: "SBS 보도국",
      period: "2006년 7월 - 2007년 3월",
      description: "인터넷 뉴스 영상 제작",
      skills: ["뉴스 제작", "인터넷 방송"],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">경력</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          방송 영상 제작과 디지털 미디어 분야에서의 전문적인 경험
        </p>
      </div>

      <div className="grid gap-6 max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <Card key={index} className="border border-primary/10 shadow-sm transition-colors hover:shadow-md">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <CardTitle>{exp.title}</CardTitle>
                <Badge variant="outline" className="border-primary/20">
                  {exp.period}
                </Badge>
              </div>
              <p className="text-primary font-medium">{exp.company}</p>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

