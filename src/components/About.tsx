'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Sprout, Sun, Droplet, Award } from 'lucide-react'

export default function About() {
  const timeline = [
    { 
      year: '1997', 
      event: 'Inizio orticole bio',
      icon: Sprout,
      color: 'text-zisa-green'
    },
    { 
      year: '2012', 
      event: 'Primi pannelli solari',
      icon: Sun,
      color: 'text-zisa-yellow'
    },
    { 
      year: '2015', 
      event: 'Pionieri mirtilli e lamponi',
      icon: Droplet,
      color: 'text-zisa-blue'
    },
    { 
      year: '2022', 
      event: 'Premio Residuo Zero',
      icon: Award,
      color: 'text-zisa-yellow'
    },
  ]

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-zisa-blue rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zisa-green rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-extrabold mb-6"
          >
            <span className="text-zisa-blue">Chi</span>
            <span className="gradient-text ml-3">Siamo</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-zisa-green font-opensans italic font-medium"
          >
            Dove il sole siciliano nutre frutti e futuro pulito
          </motion.p>
        </motion.div>

        {/* Storia */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <Card className="glass border-zisa-blue/20 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                Dal <span className="font-bold text-zisa-blue">1997</span> orticole bio, dal{' '}
                <span className="font-bold text-zisa-green">2015</span> mirtilli pionieristici (7 ettari residuo zero), 
                soci Sant'Orsola. <span className="font-semibold text-zisa-blue">Giuseppe Zisa</span> fondatore Zisa Emma & Stamilla Giovanna. 
                Ora + <span className="font-bold text-zisa-yellow">solare rinnovabile</span>.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Timeline 3D */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-zisa-blue via-zisa-green to-zisa-yellow hidden md:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              style={{ originY: 0 }}
            />
            
            <div className="space-y-16">
              {timeline.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: index % 2 === 0 ? -15 : 15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`flex items-center perspective-1000 ${
                      index % 2 === 0 ? 'flex-row md:flex-row' : 'flex-row-reverse md:flex-row-reverse'
                    }`}
                  >
                    <div className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? 'pr-0 md:pr-8 text-left md:text-right' : 'pl-0 md:pl-8 text-left'
                    }`}>
                      <motion.div
                        whileHover={{ 
                          rotateY: index % 2 === 0 ? 5 : -5,
                          rotateX: 5,
                          scale: 1.05,
                          z: 50
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="preserve-3d"
                      >
                        <Card className="bg-gradient-to-br from-zisa-blue to-blue-900 text-white border-0 shadow-2xl overflow-hidden group cursor-pointer">
                          <CardContent className="p-6 md:p-8 relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="flex items-center gap-4 mb-4">
                              <motion.div
                                className={`p-3 rounded-full bg-white/20 backdrop-blur-sm ${item.color}`}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                              >
                                <Icon className="h-6 w-6" />
                              </motion.div>
                              <div className="font-montserrat font-bold text-3xl md:text-4xl">
                                {item.year}
                              </div>
                            </div>
                            <div className="font-opensans text-lg md:text-xl relative z-10">
                              {item.event}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                    
                    <motion.div
                      className="w-12 h-12 md:w-16 md:h-16 bg-zisa-yellow rounded-full border-4 border-zisa-blue z-10 hidden md:flex items-center justify-center shadow-xl"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-2 h-2 bg-zisa-blue rounded-full" />
                    </motion.div>
                    
                    <div className="w-0 md:w-1/2" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Foto Famiglia con 3D Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {['Giuseppe Zisa', 'Giannandrea Zisa', 'Emma Zisa'].map((name, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="perspective-1000"
            >
              <motion.div
                whileHover={{ 
                  rotateY: 10,
                  rotateX: 5,
                  scale: 1.05,
                  z: 50
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="preserve-3d"
              >
                <Card className="overflow-hidden border-2 border-zisa-blue/20 shadow-xl hover:shadow-2xl transition-all group">
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-zisa-blue to-blue-900">
                    <Image
                      src={`https://via.placeholder.com/400x400/1E3A8A/FFFFFF?text=${encodeURIComponent(name)}`}
                      alt={name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zisa-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <h3 className="font-montserrat font-bold text-white text-xl">{name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-montserrat font-semibold text-zisa-blue text-lg group-hover:text-zisa-green transition-colors">
                      {name}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
