"use client"

import { X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { usePopup } from "./popup-context"

// === 관리자가 수정할 설정값 ===
// true: 해당 팝업을 띄움, false: 해당 팝업을 안 띄움
const ENABLE_POPUP1 = false
const ENABLE_POPUP2 = false

export function Popups() {
  const { showPopup1, showPopup2, closePopup1, closePopup2, closePopup1ForToday, closePopup2ForToday } = usePopup()

  // Check if any popup is showing, 개별 설정 적용
  const isAnyPopupShowing = (ENABLE_POPUP1 && showPopup1) || (ENABLE_POPUP2 && showPopup2)

  return (
    <>
      {/* Popup Container */}
      {isAnyPopupShowing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="container flex flex-col md:flex-row gap-4 justify-center items-center px-4">
            {/* Popup 1 */}
            {ENABLE_POPUP1 && showPopup1 && (
              <Card className="w-full max-w-[380px] relative overflow-hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closePopup1}
                  className="absolute top-2 right-2 z-10 bg-background/80 hover:bg-background"
                >
                  <X className="h-4 w-4" />
                </Button>

                <CardContent className="p-0">
                  <div className="relative w-full h-[360px]">
                    <Image
                      src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop"
                      alt="팝업 이미지 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between p-2 bg-background/80 absolute bottom-0 w-full">
                  <Button variant="outline" size="sm" onClick={closePopup1ForToday}>
                    오늘 하루 닫기
                  </Button>
                  <Button size="sm" onClick={closePopup1}>
                    닫기
                  </Button>
                </CardFooter>
              </Card>
            )}

            {/* Popup 2 */}
            {ENABLE_POPUP2 && showPopup2 && (
              <Card className="w-full max-w-[380px] relative overflow-hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closePopup2}
                  className="absolute top-2 right-2 z-10 bg-background/80 hover:bg-background"
                >
                  <X className="h-4 w-4" />
                </Button>

                <CardContent className="p-0">
                  <div className="relative w-full h-[360px]">
                    <Image
                      src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop"
                      alt="팝업 이미지 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between p-2 bg-background/80 absolute bottom-0 w-full">
                  <Button variant="outline" size="sm" onClick={closePopup2ForToday}>
                    오늘 하루 닫기
                  </Button>
                  <Button size="sm" onClick={closePopup2}>
                    닫기
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      )}
    </>
  )
}

