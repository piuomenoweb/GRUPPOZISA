'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, X, Navigation } from 'lucide-react'
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
  icon: 'blue' | 'green' | 'yellow' | 'purple' | 'orange'
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
    icon: 'blue',
  },
  {
    id: 2,
    name: 'Lamponi Nord',
    type: 'Lamponi',
    superficie: '3 ha',
    description: 'Campo lamponi verso Chiaramonte Gulfi',
    image: 'https://images.unsplash.com/photo-1615485925511-ef3c1c3e0e0a?w=400',
    indirizzo: 'Direzione Chiaramonte Gulfi',
    icon: 'green',
  },
  {
    id: 3,
    name: 'Solare Est',
    type: 'Pannelli Solari',
    superficie: '50 kW',
    description: 'Impianto fotovoltaico area Comiso',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400',
    indirizzo: 'Area Comiso',
    icon: 'yellow',
  },
  {
    id: 4,
    name: 'Misti Ovest',
    type: 'Misto',
    superficie: '2 ha + pannelli',
    description: 'Terreno misto con pannelli solari',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c0d8?w=400',
    indirizzo: 'Ragusa sud',
    icon: 'purple',
  },
  {
    id: 5,
    name: 'Sede Operativa',
    type: 'Sede',
    superficie: 'Sede',
    description: 'Sede operativa Gruppo Zisa',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
    indirizzo: 'Via Roma 123, Santa Croce Camerina',
    icon: 'orange',
  },
]

const iconColors = {
  blue: 'bg-blue-500 border-blue-600',
  green: 'bg-green-500 border-green-600',
  yellow: 'bg-yellow-500 border-yellow-600',
  purple: 'bg-purple-500 border-purple-600',
  orange: 'bg-orange-500 border-orange-600',
}

export default function Map() {
  const [selectedTerreno, setSelectedTerreno] = useState<Terreno | null>(null)

  return (
    <section
      id="map"
      className="relative py-24 bg-gradient-to-b from-white via-zisa-green/5 to-white overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-zisa-green rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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
            <span className="text-zisa-blue">I Nostri</span>
            <span className="gradient-text ml-3">Terreni</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 font-opensans"
          >
            Scopri le nostre coltivazioni e impianti nella provincia di Ragusa
          </motion.p>
        </motion.div>

        {/* Map Placeholder with 3D Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto mb-16 perspective-1000"
        >
          <motion.div
            whileHover={{ rotateY: 5, rotateX: 2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="preserve-3d"
          >
            <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-zisa-blue via-blue-800 to-zisa-black">
              <CardContent className="p-0">
                <div className="relative h-96 md:h-[500px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-zisa-blue/50 to-zisa-green/30" />
                  <motion.div
                    className="text-center text-white p-8 z-10"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="mb-6 inline-block"
                    >
                      <MapPin className="h-20 w-20 text-zisa-yellow drop-shadow-2xl" />
                    </motion.div>
                    <h3 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
                      Mappa Interattiva
                    </h3>
                    <p className="text-blue-100 text-lg mb-2">
                      La mappa interattiva sarà disponibile a breve
                    </p>
                    <p className="text-sm text-blue-200">
                      Scorri in basso per vedere l'elenco completo dei nostri terreni
                    </p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Terreni Grid with 3D Cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {terreni.map((terreno, index) => (
            <motion.div
              key={terreno.id}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="perspective-1000"
            >
              <motion.div
                whileHover={{
                  rotateY: 10,
                  rotateX: 5,
                  scale: 1.05,
                  z: 50,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="preserve-3d"
              >
                <Card
                  className="border-2 border-zisa-blue/20 shadow-xl hover:shadow-2xl transition-all cursor-pointer group bg-white/90 backdrop-blur-sm hover:bg-white h-full"
                  onClick={() => setSelectedTerreno(terreno)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <motion.div
                        className={`p-3 rounded-full border-2 ${iconColors[terreno.icon]} text-white`}
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <MapPin className="h-5 w-5" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-montserrat font-bold text-zisa-blue text-lg group-hover:text-zisa-green transition-colors mb-1">
                          {terreno.name}
                        </h3>
                        <p className="text-sm text-gray-600">{terreno.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                      <span className="text-xs text-gray-500">Superficie</span>
                      <span className="text-sm font-bold text-zisa-green">
                        {terreno.superficie}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
                <DialogTitle className="text-3xl font-montserrat font-bold text-zisa-blue">
                  {selectedTerreno.name}
                </DialogTitle>
                <DialogDescription className="text-lg text-gray-600">
                  {selectedTerreno.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative h-64 rounded-lg overflow-hidden"
                >
                  <Image
                    src={selectedTerreno.image}
                    alt={selectedTerreno.name}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-600 mb-1">Tipo</p>
                      <p className="font-semibold text-zisa-blue">{selectedTerreno.type}</p>
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
                  variant="zisa"
                  size="lg"
                  className="w-full rounded-full"
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
