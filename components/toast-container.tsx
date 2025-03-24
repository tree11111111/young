"use client"

import { useToast } from "@/hooks/use-toast"
import { X } from "lucide-react"

export function ToastContainer() {
  const { toasts } = useToast()

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            p-4 rounded-lg shadow-lg max-w-sm w-full 
            transition-all duration-300 ease-in-out
            ${toast.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
            ${toast.variant === "destructive" ? "bg-destructive text-destructive-foreground" : "bg-background border"}
          `}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">{toast.title}</h3>
              {toast.description && <p className="text-sm mt-1 opacity-90">{toast.description}</p>}
            </div>
            <button className="ml-4 p-1 rounded-full hover:bg-muted">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

