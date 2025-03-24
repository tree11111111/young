"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Home,
  Search,
  Bell,
  MessageSquare,
  User,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  ImageIcon,
  Smile,
} from "lucide-react"

// 게시물 이미지 업데이트
const posts = [
  {
    id: 1,
    user: {
      name: "김민지",
      username: "@minji_kim",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    },
    content: "오늘 새로 산 카메라로 찍은 사진들이에요! 여러분은 어떤 취미를 가지고 계신가요?",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1974&auto=format&fit=crop",
    likes: 124,
    comments: 32,
    time: "2시간 전",
  },
  {
    id: 2,
    user: {
      name: "이준호",
      username: "@junho_lee",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    },
    content: "주말에 다녀온 제주도 여행! 정말 아름다운 풍경이었습니다. 다음에는 더 오래 머물고 싶네요.",
    image: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?q=80&w=2070&auto=format&fit=crop",
    likes: 256,
    comments: 48,
    time: "5시간 전",
  },
  {
    id: 3,
    user: {
      name: "박소연",
      username: "@soyeon_park",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    },
    content: "오늘 완성한 프로젝트! 몇 주 동안 열심히 작업한 결과물인데 여러분의 의견이 궁금합니다.",
    likes: 89,
    comments: 15,
    time: "어제",
  },
]

// 스토리 아바타 업데이트
const stories = [
  {
    id: 1,
    user: "나의 스토리",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    active: false,
  },
  {
    id: 2,
    user: "김민지",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    active: true,
  },
  {
    id: 3,
    user: "이준호",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    active: true,
  },
  {
    id: 4,
    user: "박소연",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    active: true,
  },
  {
    id: 5,
    user: "정우진",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    active: true,
  },
  {
    id: 6,
    user: "최지은",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    active: true,
  },
]

export default function SocialAppDemo() {
  const [activeTab, setActiveTab] = useState("feed")
  const [postContent, setPostContent] = useState("")
  const [likedPosts, setLikedPosts] = useState<number[]>([])
  const [savedPosts, setSavedPosts] = useState<number[]>([])

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  const toggleSave = (postId: number) => {
    setSavedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 모바일 헤더 */}
      <header className="sticky top-0 z-10 bg-white border-b md:hidden">
        <div className="container mx-auto p-4">
          <h1 className="text-xl font-bold gradient-text text-center">ConnectMe</h1>
        </div>
      </header>

      <div className="flex">
        {/* 데스크톱 사이드바 */}
        <aside className="hidden md:block w-64 h-screen sticky top-0 border-r bg-white">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold gradient-text">ConnectMe</h1>
          </div>
          <nav className="p-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("feed")}>
              <Home className="mr-2 h-5 w-5" />홈
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Search className="mr-2 h-5 w-5" />
              검색
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("messages")}>
              <MessageSquare className="mr-2 h-5 w-5" />
              메시지
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Bell className="mr-2 h-5 w-5" />
              알림
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("profile")}>
              <User className="mr-2 h-5 w-5" />
              프로필
            </Button>
          </nav>
          <div className="absolute bottom-4 left-4 right-4">
            <Button className="w-full gradient-bg border-0">게시하기</Button>
          </div>
        </aside>

        {/* 메인 콘텐츠 */}
        <main className="flex-1">
          <Tabs defaultValue="feed" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="md:hidden sticky top-[57px] z-10 bg-white border-b">
              <TabsList className="w-full justify-between">
                <TabsTrigger value="feed" className="flex-1">
                  <Home className="h-5 w-5" />
                </TabsTrigger>
                <TabsTrigger value="search" className="flex-1">
                  <Search className="h-5 w-5" />
                </TabsTrigger>
                <TabsTrigger value="messages" className="flex-1">
                  <MessageSquare className="h-5 w-5" />
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex-1">
                  <Bell className="h-5 w-5" />
                </TabsTrigger>
                <TabsTrigger value="profile" className="flex-1">
                  <User className="h-5 w-5" />
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="feed" className="m-0">
              <div className="container mx-auto py-4 max-w-2xl">
                {/* 스토리 */}
                <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                  <div className="flex space-x-4 overflow-x-auto pb-2 no-scrollbar">
                    {stories.map((story) => (
                      <div key={story.id} className="flex flex-col items-center space-y-1 flex-shrink-0">
                        <div
                          className={`relative rounded-full ${story.active ? "p-0.5 bg-gradient-to-r from-primary to-secondary" : ""}`}
                        >
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={story.avatar} alt={story.user} />
                            <AvatarFallback>{story.user[0]}</AvatarFallback>
                          </Avatar>
                        </div>
                        <span className="text-xs">{story.user}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 게시물 작성 */}
                <Card className="mb-4">
                  <CardContent className="pt-4">
                    <div className="flex space-x-2">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="내 프로필" />
                        <AvatarFallback>ME</AvatarFallback>
                      </Avatar>
                      <Textarea
                        placeholder="무슨 생각을 하고 계신가요?"
                        className="flex-1"
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <ImageIcon className="h-4 w-4 mr-1" />
                        사진
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Smile className="h-4 w-4 mr-1" />
                        이모티콘
                      </Button>
                    </div>
                    <Button size="sm" className="gradient-bg border-0" disabled={!postContent.trim()}>
                      게시하기
                    </Button>
                  </CardFooter>
                </Card>

                {/* 게시물 목록 */}
                {posts.map((post) => (
                  <Card key={post.id} className="mb-4">
                    <CardHeader className="p-4 pb-0 flex flex-row items-start space-y-0">
                      <div className="flex items-center space-x-2 flex-1">
                        <Avatar>
                          <AvatarImage src={post.user.avatar} alt={post.user.name} />
                          <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{post.user.name}</div>
                          <div className="text-xs text-muted-foreground flex items-center space-x-1">
                            <span>{post.user.username}</span>
                            <span>•</span>
                            <span>{post.time}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                          <circle cx="5" cy="12" r="1" />
                        </svg>
                      </Button>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="mb-3">{post.content}</p>
                      {post.image && (
                        <div className="relative h-64 w-full rounded-md overflow-hidden mb-3">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt="게시물 이미지"
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="flex items-center text-sm text-muted-foreground space-x-4">
                        <span>{post.likes} 좋아요</span>
                        <span>{post.comments} 댓글</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 border-t">
                      <div className="flex justify-between w-full">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleLike(post.id)}
                          className={likedPosts.includes(post.id) ? "text-primary" : ""}
                        >
                          <Heart className={`h-4 w-4 mr-1 ${likedPosts.includes(post.id) ? "fill-primary" : ""}`} />
                          좋아요
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          댓글
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4 mr-1" />
                          공유
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleSave(post.id)}
                          className={savedPosts.includes(post.id) ? "text-primary" : ""}
                        >
                          <Bookmark className={`h-4 w-4 mr-1 ${savedPosts.includes(post.id) ? "fill-primary" : ""}`} />
                          저장
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="messages" className="m-0">
              <div className="container mx-auto py-4 max-w-2xl">
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-bold">메시지</h2>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="border-b">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center space-x-4 p-4 hover:bg-muted/50 cursor-pointer">
                          <Avatar>
                            <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={`사용자 ${i}`} />
                            <AvatarFallback>U{i}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium">사용자 {i}</div>
                            <p className="text-sm text-muted-foreground truncate">안녕하세요! 어떻게 지내세요?</p>
                          </div>
                          <div className="text-xs text-muted-foreground">3분 전</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="profile" className="m-0">
              <div className="container mx-auto py-4 max-w-2xl">
                <Card>
                  <CardContent className="p-0">
                    <div className="relative h-40 bg-gradient-to-r from-primary/30 to-secondary/30">
                      <div className="absolute -bottom-16 left-4">
                        <Avatar className="h-32 w-32 border-4 border-background">
                          <AvatarImage src="/placeholder.svg?height=128&width=128" alt="프로필 이미지" />
                          <AvatarFallback>ME</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                    <div className="pt-20 px-4 pb-4">
                      <div className="flex justify-end mb-4">
                        <Button>프로필 편집</Button>
                      </div>
                      <h2 className="text-2xl font-bold">홍길동</h2>
                      <p className="text-muted-foreground">@honggildong</p>
                      <p className="mt-2">웹 개발자 | 디자이너 | 여행 애호가</p>
                      <div className="flex space-x-4 mt-4 text-sm">
                        <div>
                          <span className="font-bold">120</span> 게시물
                        </div>
                        <div>
                          <span className="font-bold">1.5K</span> 팔로워
                        </div>
                        <div>
                          <span className="font-bold">350</span> 팔로잉
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-4 grid grid-cols-3 gap-1">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                    <div key={i} className="aspect-square relative">
                      <Image
                        src={`/placeholder.svg?height=300&width=300`}
                        alt={`게시물 ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

