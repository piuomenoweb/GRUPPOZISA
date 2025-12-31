'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

export default function Gallery() {
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=800',
      alt: 'Campo di mirtilli',
      title: 'Coltivazioni di Mirtilli',
      category: 'Agro',
    },
    {
      src: 'https://images.unsplash.com/photo-1615485925511-ef3c1c3e0e0a?w=800',
      alt: 'Raccolta lamponi',
      title: 'Raccolta Lamponi',
      category: 'Agro',
    },
    {
      src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
      alt: 'Pannelli solari',
      title: 'Impianto Fotovoltaico',
      category: 'Solare',
    },
    {
      src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c0d8?w=800',
      alt: 'Campi coltivati',
      title: 'Terreni Agricoli',
      category: 'Agro',
    },
    {
      src: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800',
      alt: 'Agricoltura biologica',
      title: 'Pratiche Biologiche',
      category: 'Agro',
    },
    {
      src: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800',
      alt: 'Energia rinnovabile',
      title: 'Sostenibilità',
      category: 'Solare',
    },
  ]

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
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
            <span className="text-zisa-blue-dark">Galleria</span>
            <span className="text-zisa-green ml-3">Fotografica</span>
          </h2>
          <p className="text-lg text-zisa-gray">
            Immagini dei nostri terreni, prodotti e impianti
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="overflow-hidden border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all group cursor-pointer">
                <div className="relative aspect-video overflow-hidden bg-gray-200">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-xs font-semibold text-white bg-zisa-blue/80 px-2 py-1 rounded inline-block mb-2">
                      {image.category}
                    </p>
                    <h3 className="text-white font-montserrat font-bold text-lg">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

