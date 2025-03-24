import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, Heart, User, Menu } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "미니멀 데스크 램프",
    price: 89000,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1974&auto=format&fit=crop",
    category: "인테리어",
  },
  {
    id: 2,
    name: "프리미엄 무선 이어폰",
    price: 159000,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=2070&auto=format&fit=crop",
    category: "전자기기",
  },
  {
    id: 3,
    name: "가죽 노트북 파우치",
    price: 45000,
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1964&auto=format&fit=crop",
    category: "액세서리",
  },
  {
    id: 4,
    name: "스마트 워치",
    price: 299000,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop",
    category: "전자기기",
  },
  {
    id: 5,
    name: "캔버스 토트백",
    price: 35000,
    image: "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?q=80&w=1942&auto=format&fit=crop",
    category: "패션",
  },
  {
    id: 6,
    name: "아로마 디퓨저",
    price: 42000,
    image: "https://images.unsplash.com/photo-1602928298849-325cec8771c0?q=80&w=1974&auto=format&fit=crop",
    category: "인테리어",
  },
]

const categories = ["전체", "전자기기", "패션", "인테리어", "액세서리"]

export default function ShoppingMallDemo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-2xl font-bold gradient-text">StyleShop</h1>
            </div>

            <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-4">
              <Input placeholder="검색어를 입력하세요" className="rounded-full" />
              <Button size="icon" className="rounded-full">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">3</Badge>
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="container mx-auto py-8">
        {/* 모바일 검색 */}
        <div className="md:hidden flex items-center gap-2 mb-6">
          <Input placeholder="검색어를 입력하세요" className="rounded-full" />
          <Button size="icon" className="rounded-full">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        {/* 카테고리 */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-6 no-scrollbar">
          {categories.map((category) => (
            <Button key={category} variant="outline" className="rounded-full whitespace-nowrap">
              {category}
            </Button>
          ))}
        </div>

        {/* 배너 */}
        <div className="relative h-48 md:h-64 rounded-lg overflow-hidden mb-8 bg-gradient-to-r from-primary/20 to-secondary/20">
          <div className="absolute inset-0 flex flex-col justify-center p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">여름 시즌 특별 할인</h2>
            <p className="text-muted-foreground mb-4">최대 40% 할인된 가격으로 여름 아이템을 만나보세요</p>
            <Button className="w-fit gradient-bg border-0">지금 쇼핑하기</Button>
          </div>
        </div>

        {/* 제품 그리드 */}
        <h2 className="text-2xl font-bold mb-6">인기 상품</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden border border-primary/10 hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 bg-gray-100">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 rounded-full h-8 w-8">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">{product.category}</p>
                <h3 className="font-medium line-clamp-1">{product.name}</h3>
                <p className="font-bold text-primary">{product.price.toLocaleString()}원</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" variant="outline">
                  장바구니에 추가
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

