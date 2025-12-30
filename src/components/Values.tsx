'use client'

import { motion } from 'framer-motion'
import { Leaf, Sun, Users, Shield, TrendingUp, Heart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Values() {
  const values = [
    {
      icon: Leaf,
      title: 'Sostenibilità',
      description: 'Impegno costante per un\'agricoltura biologica e sostenibile, nel rispetto dell\'ambiente.',
      color: 'text-zisa-green',
      bgColor: 'bg-green-50',
    },
    {
      icon: Sun,
      title: 'Energia Verde',
      description: 'Produzione di energia rinnovabile attraverso pannelli solari per un futuro più pulito.',
      color: 'text-zisa-yellow',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: Users,
      title: 'Tradizione Familiare',
      description: 'Valori tramandati attraverso generazioni, con dedizione e passione per il territorio siciliano.',
      color: 'text-zisa-blue',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Shield,
      title: 'Qualità Certificata',
      description: 'Prodotti a residuo zero, certificazioni biologiche e standard di qualità elevati.',
      color: 'text-zisa-emerald',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: TrendingUp,
      title: 'Innovazione',
      description: 'Tecnologie all\'avanguardia per migliorare costantemente processi e risultati.',
      color: 'text-zisa-blue-dark',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Heart,
      title: 'Passione',
      description: 'Amore per la terra e per ciò che facciamo, ogni giorno con entusiasmo e dedizione.',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
  ]

  return (
    <section
      id="values"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            <span className="text-zisa-blue-dark">I Nostri</span>
            <span className="text-zisa-green ml-3">Valori</span>
          </h2>
          <p className="text-lg text-zisa-gray max-w-2xl mx-auto">
            I principi che guidano il nostro lavoro ogni giorno
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-zisa-blue transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className={`w-12 h-12 ${value.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`h-6 w-6 ${value.color}`} />
                    </div>
                    <CardTitle className="text-xl font-montserrat font-bold text-zisa-blue-dark">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
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

