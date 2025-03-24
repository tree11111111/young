import { Metadata } from 'next';
import { portfolioItems } from '@/data/portfolioItems';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Wrench } from 'lucide-react';

// 메타데이터 생성
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const item = portfolioItems.find(item => String(item.id) === params.id);
  
  return {
    title: item ? `${item.title} - 포트폴리오` : '포트폴리오 상세',
    description: item?.description || '포트폴리오 상세 페이지',
  };
}

// 정적 경로 생성
export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    id: String(item.id),
  }));
}

export default function PortfolioDetailPage({ params }: { params: { id: string } }) {
  // ID로 포트폴리오 아이템 찾기
  const item = portfolioItems.find((item) => String(item.id) === params.id);
  
  // 없는 경우 404 메시지 표시
  if (!item) {
    return (
      <div className="container py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">포트폴리오 항목을 찾을 수 없습니다</h2>
        <p className="text-muted-foreground mb-6">요청하신 포트폴리오 항목이 존재하지 않거나 삭제되었습니다.</p>
        <Link href="/">
          <Button className="flex items-center gap-2 mx-auto">
            <ArrowLeft className="h-4 w-4" />
            홈페이지로 돌아가기
          </Button>
        </Link>
      </div>
    );
  }

  // 비디오 URL 변환 함수
  function getEmbedUrl(url: string) {
    if (!url) return "";
    
    if (url.includes('youtu.be')) {
      const videoId = url.split('/').pop()?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('youtube.com/watch')) {
      try {
        const videoId = new URL(url).searchParams.get('v');
        return `https://www.youtube.com/embed/${videoId}`;
      } catch (e) {
        const videoId = url.split('v=')[1]?.split('&')[0];
        return `https://www.youtube.com/embed/${videoId}`;
      }
    } else if (url.includes('drive.google.com')) {
      return url.replace(/\/view.*$/, "/preview");
    }
    
    return url;
  }

  // 포트폴리오 상세 페이지 렌더링
  return (
    <div className="container max-w-4xl py-8">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          모든 포트폴리오 보기
        </Link>
        
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
                src={getEmbedUrl(item.videoUrl)}
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

      {/* 관련 포트폴리오 */}
      {portfolioItems.filter(relatedItem => 
        relatedItem.id !== item.id && 
        (relatedItem.category === item.category || 
         relatedItem.tags?.some(tag => item.tags?.includes(tag)))
      ).length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">관련 포트폴리오</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {portfolioItems
              .filter(relatedItem => 
                relatedItem.id !== item.id && 
                (relatedItem.category === item.category || 
                 relatedItem.tags?.some(tag => item.tags?.includes(tag)))
              )
              .slice(0, 3)
              .map((relatedItem) => (
                <Link href={`/portfolio/${relatedItem.id}`} key={relatedItem.id}>
                  <div className="group cursor-pointer overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={relatedItem.thumbnail || "/placeholder.svg"}
                        alt={relatedItem.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{relatedItem.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{relatedItem.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

