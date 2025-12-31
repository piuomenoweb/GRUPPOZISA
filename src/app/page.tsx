'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Stats from '@/components/Stats'
import Values from '@/components/Values'
import Certifications from '@/components/Certifications'
import Gallery from '@/components/Gallery'
import Map from '@/components/Map'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Stats />
      <Values />
      <Certifications />
      <Gallery />
      <Map />
      <Contact />
      <Footer />
    </main>
  )
}
