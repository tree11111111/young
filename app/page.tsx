import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Popups } from "@/components/popups"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ToastContainer } from "@/components/toast-container"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Popups />
      <ScrollToTop />
      <ToastContainer />
    </div>
  )
}

