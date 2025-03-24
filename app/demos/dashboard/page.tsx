"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
} from "recharts"
import {
  Home,
  BarChart3,
  Users,
  Settings,
  Bell,
  Search,
  HelpCircle,
  User,
  LogOut,
  ArrowUpRight,
  ArrowDownRight,
  Layers,
  ShoppingCart,
  CreditCard,
} from "lucide-react"

// 샘플 데이터
const salesData = [
  { name: "1월", 매출: 4000, 비용: 2400 },
  { name: "2월", 매출: 3000, 비용: 1398 },
  { name: "3월", 매출: 2000, 비용: 9800 },
  { name: "4월", 매출: 2780, 비용: 3908 },
  { name: "5월", 매출: 1890, 비용: 4800 },
  { name: "6월", 매출: 2390, 비용: 3800 },
  { name: "7월", 매출: 3490, 비용: 4300 },
]

const userActivityData = [
  { name: "월", 활동: 2400 },
  { name: "화", 활동: 1398 },
  { name: "수", 활동: 9800 },
  { name: "목", 활동: 3908 },
  { name: "금", 활동: 4800 },
  { name: "토", 활동: 3800 },
  { name: "일", 활동: 4300 },
]

const categoryData = [
  { name: "전자기기", value: 400 },
  { name: "의류", value: 300 },
  { name: "식품", value: 300 },
  { name: "가구", value: 200 },
  { name: "기타", value: 100 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]

export default function DashboardDemo() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 사이드바 */}
      <div className="hidden md:flex w-64 flex-col bg-white border-r">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold gradient-text">AnalyticsPro</h1>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("overview")}>
            <Home className="mr-2 h-4 w-4" />
            대시보드
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("analytics")}>
            <BarChart3 className="mr-2 h-4 w-4" />
            분석
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-2 h-4 w-4" />
            고객
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Layers className="mr-2 h-4 w-4" />
            제품
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <ShoppingCart className="mr-2 h-4 w-4" />
            주문
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            설정
          </Button>
        </nav>
        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full justify-start">
            <LogOut className="mr-2 h-4 w-4" />
            로그아웃
          </Button>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 헤더 */}
        <header className="bg-white border-b p-4">
          <div className="flex items-center justify-between">
            <div className="md:hidden">
              <h1 className="text-xl font-bold gradient-text">AnalyticsPro</h1>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="검색..."
                  className="pl-8 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <HelpCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* 콘텐츠 */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="overview">개요</TabsTrigger>
              <TabsTrigger value="analytics">상세 분석</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              {/* 요약 카드 */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">총 매출</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">₩45,231,890</div>
                    <p className="text-xs text-muted-foreground flex items-center">
                      <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
                      <span className="text-green-500">+20.1%</span> 지난 달 대비
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">신규 고객</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2,350</div>
                    <p className="text-xs text-muted-foreground flex items-center">
                      <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
                      <span className="text-green-500">+10.5%</span> 지난 달 대비
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">주문 수</CardTitle>
                    <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground flex items-center">
                      <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
                      <span className="text-green-500">+8.2%</span> 지난 달 대비
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">활성 사용자</CardTitle>
                    <User className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground flex items-center">
                      <ArrowDownRight className="mr-1 h-3 w-3 text-red-500" />
                      <span className="text-red-500">-2.5%</span> 지난 달 대비
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* 차트 */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>매출 추이</CardTitle>
                    <CardDescription>월별 매출 및 비용 추이</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={salesData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="매출" fill="hsl(var(--primary))" />
                        <Bar dataKey="비용" fill="hsl(var(--secondary))" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>카테고리별 판매</CardTitle>
                    <CardDescription>제품 카테고리별 판매 비율</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={categoryData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>사용자 활동 분석</CardTitle>
                  <CardDescription>일별 사용자 활동 추이</CardDescription>
                </CardHeader>
                <CardContent className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={userActivityData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="활동" stroke="hsl(var(--primary))" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

