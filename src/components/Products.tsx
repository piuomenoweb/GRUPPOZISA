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
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=800',
    },
    {
      category: 'Agro',
      name: 'Lamponi',
      description: 'Raccolta fresca Sicilia',
      benefits: 'Dolcezza soleggiata',
      icon: Package,
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      image: 'https://images.unsplash.com/photo-1615485925511-ef3c1c3e0e0a?w=800',
    },
    {
      category: 'Solare',
      name: 'Pannelli Solari',
      description: 'Installazione chiavi in mano',
      benefits: 'Risparmio + sostenibile',
      icon: Sun,
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
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
      className="relative py-24 bg-gradient-to-b from-white via-zisa-blue/5 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-zisa-blue rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
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
            <span className="gradient-text">Prodotti</span>
            <span className="text-zisa-blue ml-3">e Servizi</span>
          </motion.h2>
        </motion.div>

        {/* Product Cards with 3D Effect */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="perspective-1000 h-full"
              >
                <motion.div
                  whileHover={{
                    rotateY: 10,
                    rotateX: 5,
                    scale: 1.05,
                    z: 50,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="preserve-3d h-full"
                >
                  <Card className="h-full border-0 shadow-2xl overflow-hidden group cursor-pointer bg-white/80 backdrop-blur-sm hover:bg-white transition-all">
                    <div className={`relative h-64 bg-gradient-to-br ${product.color} overflow-hidden`}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={800}
                        height={400}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className={`p-6 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/50 ${product.textColor}`}>
                          <Icon className="h-16 w-16" />
                        </div>
                      </motion.div>
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${product.bgColor} bg-opacity-80 backdrop-blur-sm`}>
                          {product.category}
                        </span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-3xl font-montserrat font-bold text-zisa-blue group-hover:text-zisa-green transition-colors">
                        {product.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 text-lg">{product.description}</p>
                      <div className={`flex items-center ${product.textColor} font-semibold`}>
                        <CheckCircle2 className="mr-2 h-5 w-5" />
                        <span>{product.benefits}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Comparison Table with 3D Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto perspective-1000"
        >
          <motion.div
            whileHover={{ rotateY: 5, rotateX: 2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="preserve-3d"
          >
            <Card className="border-2 border-zisa-blue/20 shadow-2xl overflow-hidden bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-zisa-blue to-blue-700 text-white">
                        <th className="px-6 py-6 text-left font-montserrat font-bold text-lg">
                          Prodotto
                        </th>
                        <th className="px-6 py-6 text-left font-montserrat font-bold text-lg">
                          Descrizione
                        </th>
                        <th className="px-6 py-6 text-left font-montserrat font-bold text-lg">
                          Benefici Bio/Rinnovabile
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {tableData.map((row, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="hover:bg-blue-50/50 transition-colors"
                        >
                          <td className="px-6 py-5 font-semibold text-zisa-blue text-lg">
                            {row.product}
                          </td>
                          <td className="px-6 py-5 text-gray-700 text-lg">
                            {row.description}
                          </td>
                          <td className="px-6 py-5 text-zisa-green font-semibold text-lg">
                            {row.benefits}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
