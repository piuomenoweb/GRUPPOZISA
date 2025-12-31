'use client'

import { motion } from 'framer-motion'
import { Leaf, Sun, MapPin, Award } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function Stats() {
  const stats = [
    {
      icon: Leaf,
      value: '7',
      unit: 'ha',
      label: 'Ettari Mirtilli Residuo Zero',
      color: 'text-zisa-green',
      bgColor: 'bg-green-50',
    },
    {
      icon: Sun,
      value: '50+',
      unit: 'kW',
      label: 'Energia Solare Prodotta',
      color: 'text-zisa-yellow',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: MapPin,
      value: '25+',
      unit: 'anni',
      label: 'Esperienza nel Settore',
      color: 'text-zisa-blue',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Award,
      value: '100%',
      unit: '',
      label: 'Qualità Certificata Bio',
      color: 'text-zisa-emerald',
      bgColor: 'bg-emerald-50',
    },
  ]

  return (
    <section
      id="stats"
      className="py-20 bg-gradient-to-br from-zisa-blue via-zisa-blue-dark to-zisa-black text-white"
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
            I Nostri Numeri
          </h2>
          <p className="text-xl text-blue-200">
            Risultati concreti che dimostrano il nostro impegno
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center h-full hover:bg-white/15 transition-colors">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <Icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                    <div className="mb-4">
                      <span className="text-5xl md:text-6xl font-montserrat font-bold">
                        {stat.value}
                      </span>
                      {stat.unit && (
                        <span className="text-2xl font-semibold ml-2">{stat.unit}</span>
                      )}
                    </div>
                    <p className="text-blue-100 text-lg font-opensans">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

