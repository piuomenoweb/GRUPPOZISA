'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-zisa-blue via-blue-800 to-zisa-black text-white"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-zisa-yellow rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-zisa-green rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Parallax Content */}
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 z-10 relative"
      >
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo with 3D Effect */}
          <motion.div
            className="mb-8 flex justify-center perspective-1000"
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="preserve-3d"
              whileHover={{ rotateY: 15, rotateX: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/logo-full.png"
                alt="Gruppo Zisa Logo Completo"
                width={350}
                height={250}
                className="w-auto h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Slogan with Gradient Text */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-extrabold mb-6 leading-tight"
          >
            <span className="block text-white">Natura Blu,</span>
            <span className="block gradient-text animate-float3d">
              Energia Verde
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl font-opensans mb-12 text-zisa-yellow/90"
          >
            – Gruppo Zisa –
          </motion.p>

          {/* Video Container with 3D Card Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="max-w-5xl mx-auto mb-12 perspective-1000"
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl preserve-3d"
              whileHover={{ rotateY: 5, rotateX: 2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="relative pb-[56.25%] h-0 overflow-hidden bg-black/20">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/8nPDsQF9M7I?autoplay=1&mute=1&loop=1&playlist=8nPDsQF9M7I&controls=0&modestbranding=1"
                  title="Video Gruppo Zisa"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zisa-blue/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="zisaYellow"
              size="lg"
              onClick={() => {
                const mapSection = document.getElementById('map')
                mapSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group rounded-full px-8 py-6 text-lg font-bold shadow-2xl hover:shadow-zisa-yellow/50 transition-all"
            >
              <span>Scopri i Nostri Terreni</span>
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const aboutSection = document.getElementById('about')
                aboutSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="rounded-full px-8 py-6 text-lg border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/50"
            >
              <Play className="mr-2 h-5 w-5" />
              <span>La Nostra Storia</span>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator with 3D Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => {
            const aboutSection = document.getElementById('about')
            aboutSection?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
            Scorri
          </span>
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1.5 backdrop-blur-sm group-hover:border-white transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1.5 h-3 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
