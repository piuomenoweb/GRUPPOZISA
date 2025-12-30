'use client'

import { motion } from 'framer-motion'
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
      className="relative py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            <span className="text-zisa-blue-dark">Chi</span>
            <span className="text-zisa-green ml-3">Siamo</span>
          </h2>
          <p className="text-lg text-zisa-gray italic">
            Dove il sole siciliano nutre frutti e futuro pulito
          </p>
        </motion.div>

        {/* Storia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="border-2 border-zisa-blue/20 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                Dal <span className="font-bold text-zisa-blue">1997</span> orticole bio, dal{' '}
                <span className="font-bold text-zisa-green">2015</span> mirtilli pionieristici (7 ettari residuo zero), 
                soci Sant'Orsola. <span className="font-semibold text-zisa-blue-dark">Giuseppe Zisa</span> fondatore Zisa Emma & Stamilla Giovanna. 
                Ora + <span className="font-bold text-zisa-yellow">solare rinnovabile</span>.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-zisa-blue via-zisa-green to-zisa-yellow hidden md:block transform -translate-x-1/2" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'flex-row md:flex-row' : 'flex-row-reverse md:flex-row-reverse'
                    }`}
                  >
                    <div className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? 'pr-0 md:pr-8 text-left md:text-right' : 'pl-0 md:pl-8 text-left'
                    }`}>
                      <Card className="bg-gradient-to-br from-zisa-blue to-zisa-blue-dark text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-3">
                            <div className={`p-2 rounded-lg bg-white/20 ${item.color}`}>
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <div className="font-montserrat font-bold text-2xl md:text-3xl">
                              {item.year}
                            </div>
                          </div>
                          <div className="font-opensans text-base md:text-lg">
                            {item.event}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-zisa-yellow rounded-full border-4 border-white z-10 hidden md:flex items-center justify-center shadow-lg">
                      <div className="w-2 h-2 bg-zisa-blue-dark rounded-full" />
                    </div>
                    
                    <div className="w-0 md:w-1/2" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Foto Famiglia */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {['Giuseppe Zisa', 'Giannandrea Zisa', 'Emma Zisa'].map((name, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-zisa-blue to-blue-900">
                  <Image
                    src={`https://via.placeholder.com/400x400/3B82F6/FFFFFF?text=${encodeURIComponent(name)}`}
                    alt={name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-montserrat font-semibold text-zisa-blue-dark">
                    {name}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
