'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

export default function Partners() {
  const partners = [
    {
      name: 'Sant\'Orsola',
      description: 'Partnership strategica per la distribuzione dei nostri prodotti biologici',
      logo: '🌿',
    },
    {
      name: 'Consorzi Bio',
      description: 'Collaborazione con i principali consorzi per l\'agricoltura biologica',
      logo: '🍃',
    },
    {
      name: 'Enti Certificatori',
      description: 'Certificazioni con enti riconosciuti a livello internazionale',
      logo: '✅',
    },
    {
      name: 'Rete Energia Verde',
      description: 'Parte di una rete più ampia per lo sviluppo di energie rinnovabili',
      logo: '⚡',
    },
  ]

  return (
    <section
      id="partners"
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
            <span className="text-zisa-blue-dark">Partner</span>
            <span className="text-zisa-green ml-3">e Collaborazioni</span>
          </h2>
          <p className="text-lg text-zisa-gray max-w-2xl mx-auto">
            Lavoriamo con partner affidabili per garantire qualità e sostenibilità
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-gray-200 hover:border-zisa-green transition-all hover:shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="text-6xl mb-6">
                    {partner.logo}
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-zisa-blue-dark mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {partner.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

