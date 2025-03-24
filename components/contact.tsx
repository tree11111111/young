import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">연락처</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">병원 홍보</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="border-primary/10 shadow-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl">연락 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 py-6">
            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-sm text-muted-foreground">이메일</h3>
                <p className="font-medium">youth03sam@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-sm text-muted-foreground">전화번호</h3>
                <p className="font-medium">010-8608-8059</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-sm text-muted-foreground">주소</h3>
                <p className="font-medium">서울시 양천구 목동</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

