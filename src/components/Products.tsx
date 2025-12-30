'use client'

import { motion } from 'framer-motion'
import { Droplet, Sun, Package, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function Products() {
  const products = [
    {
      category: 'Agro',
      name: 'Mirtilli',
      description: '7 ettari residuo zero',
      benefits: 'Antiossidanti naturali',
      icon: Droplet,
      bgColor: 'bg-blue-50',
      textColor: 'text-zisa-blue',
      image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=800',
    },
    {
      category: 'Agro',
      name: 'Lamponi',
      description: 'Raccolta fresca Sicilia',
      benefits: 'Dolcezza soleggiata',
      icon: Package,
      bgColor: 'bg-green-50',
      textColor: 'text-zisa-green',
      image: 'https://images.unsplash.com/photo-1615485925511-ef3c1c3e0e0a?w=800',
    },
    {
      category: 'Solare',
      name: 'Pannelli Solari',
      description: 'Installazione chiavi in mano',
      benefits: 'Risparmio + sostenibile',
      icon: Sun,
      bgColor: 'bg-yellow-50',
      textColor: 'text-zisa-yellow',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
    },
  ]

  const tableData = [
    { product: 'Mirtilli', description: '7 ettari residuo zero', benefits: 'Antiossidanti naturali' },
    { product: 'Lamponi', description: 'Raccolta fresca Sicilia', benefits: 'Dolcezza soleggiata' },
    { product: 'Pannelli Solari', description: 'Installazione chiavi in mano', benefits: 'Risparmio + sostenibile' },
  ]

  return (
    <section
      id="products"
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
            <span className="text-zisa-blue-dark">Prodotti</span>
            <span className="text-zisa-green ml-3">e Servizi</span>
          </h2>
        </motion.div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-zisa-blue to-zisa-blue-dark overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`p-4 rounded-full ${product.bgColor} bg-opacity-90`}>
                        <Icon className={`h-10 w-10 ${product.textColor}`} />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-white/20 backdrop-blur-sm">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-montserrat font-bold text-zisa-blue-dark">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className={`flex items-center ${product.textColor} font-semibold`}>
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      <span>{product.benefits}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <Card className="border-2 border-zisa-blue/20 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-zisa-blue to-zisa-blue-dark text-white">
                      <th className="px-6 py-4 text-left font-montserrat font-bold">
                        Prodotto
                      </th>
                      <th className="px-6 py-4 text-left font-montserrat font-bold">
                        Descrizione
                      </th>
                      <th className="px-6 py-4 text-left font-montserrat font-bold">
                        Benefici Bio/Rinnovabile
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {tableData.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-zisa-blue-dark">
                          {row.product}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {row.description}
                        </td>
                        <td className="px-6 py-4 text-zisa-green font-semibold">
                          {row.benefits}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
