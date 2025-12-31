'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Leaf, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Certifications() {
  const certifications = [
    {
      icon: Leaf,
      title: 'Agricoltura Biologica',
      description: 'Certificazione biologica per i nostri prodotti agricoli, garantendo qualità e sostenibilità.',
      color: 'text-zisa-green',
      bgColor: 'bg-green-50',
    },
    {
      icon: Award,
      title: 'Residuo Zero',
      description: 'Premio Residuo Zero 2022 - 7 ettari di mirtilli coltivati senza residui di pesticidi.',
      color: 'text-zisa-yellow',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: Shield,
      title: 'Qualità Certificata',
      description: 'Standard di qualità elevati con certificazioni internazionali per tutti i nostri prodotti.',
      color: 'text-zisa-blue',
      bgColor: 'bg-blue-50',
    },
    {
      icon: CheckCircle2,
      title: 'Sostenibilità Ambientale',
      description: 'Impegno costante per un futuro sostenibile attraverso energie rinnovabili e pratiche ecologiche.',
      color: 'text-zisa-emerald',
      bgColor: 'bg-emerald-50',
    },
  ]

  return (
    <section
      id="certifications"
      className="py-20 bg-white"
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
            <span className="text-zisa-blue-dark">Certificazioni</span>
            <span className="text-zisa-green ml-3">e Qualità</span>
          </h2>
          <p className="text-lg text-zisa-gray max-w-2xl mx-auto">
            Le nostre certificazioni garantiscono qualità, sostenibilità e rispetto per l'ambiente
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-zisa-blue transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className={`w-14 h-14 ${cert.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`h-7 w-7 ${cert.color}`} />
                    </div>
                    <CardTitle className="text-xl font-montserrat font-bold text-zisa-blue-dark">
                      {cert.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {cert.description}
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

