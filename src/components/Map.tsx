'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import Image from 'next/image'

interface Terreno {
  id: number
  name: string
  type: string
  superficie: string
  description: string
  image: string
  indirizzo: string
}

const terreni: Terreno[] = [
  {
    id: 1,
    name: 'Mirtilli Principale',
    type: 'Mirtilli',
    superficie: '4 ha',
    description: 'Campo principale mirtilli residuo zero',
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400',
    indirizzo: 'Contrada Petraro SP20 Km1, Santa Croce Camerina',
  },
  {
    id: 2,
    name: 'Lamponi Nord',
    type: 'Lamponi',
    superficie: '3 ha',
    description: 'Campo lamponi verso Chiaramonte Gulfi',
    image: 'https://images.unsplash.com/photo-1615485925511-ef3c1c3e0e0a?w=400',
    indirizzo: 'Direzione Chiaramonte Gulfi',
  },
  {
    id: 3,
    name: 'Solare Est',
    type: 'Pannelli Solari',
    superficie: '50 kW',
    description: 'Impianto fotovoltaico area Comiso',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400',
    indirizzo: 'Area Comiso',
  },
  {
    id: 4,
    name: 'Misti Ovest',
    type: 'Misto',
    superficie: '2 ha + pannelli',
    description: 'Terreno misto con pannelli solari',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c0d8?w=400',
    indirizzo: 'Ragusa sud',
  },
  {
    id: 5,
    name: 'Sede Operativa',
    type: 'Sede',
    superficie: 'Sede',
    description: 'Sede operativa Gruppo Zisa',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
    indirizzo: 'Via Roma 123, Santa Croce Camerina',
  },
]

export default function Map() {
  const [selectedTerreno, setSelectedTerreno] = useState<Terreno | null>(null)

  return (
    <section
      id="map"
      className="py-20 bg-gray-50"
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
            <span className="text-zisa-blue-dark">I Nostri</span>
            <span className="text-zisa-green ml-3">Terreni</span>
          </h2>
          <p className="text-lg text-zisa-gray">
            Scopri le nostre coltivazioni e impianti nella provincia di Ragusa
          </p>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <Card className="border-2 border-zisa-blue/20 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-zisa-blue to-zisa-blue-dark flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-zisa-yellow" />
                  <h3 className="text-2xl md:text-3xl font-montserrat font-bold mb-2">
                    Mappa Interattiva
                  </h3>
                  <p className="text-blue-100 mb-2">
                    La mappa interattiva sarà disponibile a breve
                  </p>
                  <p className="text-sm text-blue-200">
                    Scorri in basso per vedere l'elenco completo dei nostri terreni
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Terreni Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {terreni.map((terreno, index) => (
            <motion.div
              key={terreno.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card
                className="border-2 border-gray-200 shadow-md hover:shadow-lg hover:border-zisa-blue transition-all cursor-pointer h-full"
                onClick={() => setSelectedTerreno(terreno)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-zisa-blue flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-montserrat font-bold text-zisa-blue-dark text-sm mb-1">
                        {terreno.name}
                      </h3>
                      <p className="text-xs text-gray-600">{terreno.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                    <span className="text-xs text-gray-500">Superficie</span>
                    <span className="text-xs font-bold text-zisa-green">
                      {terreno.superficie}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dialog for Terreno Details */}
      <Dialog open={!!selectedTerreno} onOpenChange={() => setSelectedTerreno(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedTerreno && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-montserrat font-bold text-zisa-blue-dark">
                  {selectedTerreno.name}
                </DialogTitle>
                <DialogDescription className="text-base text-gray-600">
                  {selectedTerreno.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={selectedTerreno.image}
                    alt={selectedTerreno.name}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-600 mb-1">Tipo</p>
                      <p className="font-semibold text-zisa-blue-dark">{selectedTerreno.type}</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-600 mb-1">Superficie</p>
                      <p className="font-semibold text-zisa-green">{selectedTerreno.superficie}</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gray-50">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Navigation className="h-5 w-5 text-zisa-blue mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Indirizzo</p>
                        <p className="font-semibold text-gray-800">{selectedTerreno.indirizzo}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button
                  className="w-full bg-zisa-blue hover:bg-zisa-blue-dark text-white"
                  onClick={() => {
                    setSelectedTerreno(null)
                    setTimeout(() => {
                      const contactSection = document.getElementById('contact')
                      contactSection?.scrollIntoView({ behavior: 'smooth' })
                    }, 300)
                  }}
                >
                  Contattaci per Visita
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
