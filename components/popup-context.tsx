"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type PopupContextType = {
  showPopup1: boolean
  showPopup2: boolean
  openPopup1: () => void
  openPopup2: () => void
  closePopup1: () => void
  closePopup2: () => void
  closePopup1ForToday: () => void
  closePopup2ForToday: () => void
}

const PopupContext = createContext<PopupContextType | undefined>(undefined)

export function PopupProvider({ children }: { children: ReactNode }) {
  const [showPopup1, setShowPopup1] = useState(false)
  const [showPopup2, setShowPopup2] = useState(false)

  useEffect(() => {
    // Check if popup1 should be shown (not closed today)
    const popup1ClosedUntil = localStorage.getItem("popup1ClosedUntil")
    const shouldShowPopup1 = !popup1ClosedUntil || new Date() > new Date(popup1ClosedUntil)

    // Check if popup2 should be shown (not closed today)
    const popup2ClosedUntil = localStorage.getItem("popup2ClosedUntil")
    const shouldShowPopup2 = !popup2ClosedUntil || new Date() > new Date(popup2ClosedUntil)

    // Set a small delay for better UX
    const timer1 = setTimeout(() => {
      setShowPopup1(shouldShowPopup1)
    }, 1000)

    const timer2 = setTimeout(() => {
      setShowPopup2(shouldShowPopup2)
    }, 1500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  const openPopup1 = () => setShowPopup1(true)
  const openPopup2 = () => setShowPopup2(true)

  const closePopup1 = () => setShowPopup1(false)
  const closePopup2 = () => setShowPopup2(false)

  const closePopup1ForToday = () => {
    // Set expiration to end of today
    const today = new Date()
    today.setHours(23, 59, 59, 999)
    localStorage.setItem("popup1ClosedUntil", today.toISOString())
    setShowPopup1(false)
  }

  const closePopup2ForToday = () => {
    // Set expiration to end of today
    const today = new Date()
    today.setHours(23, 59, 59, 999)
    localStorage.setItem("popup2ClosedUntil", today.toISOString())
    setShowPopup2(false)
  }

  return (
    <PopupContext.Provider
      value={{
        showPopup1,
        showPopup2,
        openPopup1,
        openPopup2,
        closePopup1,
        closePopup2,
        closePopup1ForToday,
        closePopup2ForToday,
      }}
    >
      {children}
    </PopupContext.Provider>
  )
}

export function usePopup() {
  const context = useContext(PopupContext)
  if (context === undefined) {
    throw new Error("usePopup must be used within a PopupProvider")
  }
  return context
}

