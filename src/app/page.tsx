import { NavBar } from "@/components/ui/NavBar"
import { Hero } from "./hero"
import { About } from "./about"
import { Specials } from "./specials"
import { Reviews } from "./reviews"
import { Contact } from "./contact"
import { Footer } from "./footer"

export default function Home() {
  return (
  <div className="h-full">
    <NavBar />
    <Hero />
    <About />
    <Specials />
    <Reviews />
    <Contact />
    <Footer />
  </div>
  )
}
