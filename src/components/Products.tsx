'use client'

import { motion } from 'framer-motion'
import { FiDroplet, FiSun, FiPackage } from 'react-icons/fi'

export default function Products() {
  const products = [
    {
      category: 'Agro',
      name: 'Mirtilli',
      description: '7 ettari residuo zero',
      benefits: 'Antiossidanti naturali',
      icon: FiDroplet,
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=800',
    },
    {
      category: 'Agro',
      name: 'Lamponi',
      description: 'Raccolta fresca Sicilia',
      benefits: 'Dolcezza soleggiata',
      icon: FiPackage,
      color: 'green',
      image: 'https://images.unsplash.com/photo-1615485925511-ef3c1c3e0e0a?w=800',
    },
    {
      category: 'Solare',
      name: 'Pannelli Solari',
      description: 'Installazione chiavi in mano',
      benefits: 'Risparmio + sostenibile',
      icon: FiSun,
      color: 'yellow',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
    },
  ]

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-zisa-blue mb-4">
            Prodotti e Servizi
          </h2>
        </motion.div>

        {/* Cards Prodotti */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 bg-gradient-to-br from-zisa-blue to-blue-600">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="text-6xl text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-zisa-green font-semibold mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-zisa-blue mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center text-zisa-green">
                    <FiPackage className="mr-2" />
                    <span className="font-semibold">{product.benefits}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Tabella Prodotti */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto overflow-x-auto"
        >
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead className="bg-zisa-blue text-white">
              <tr>
                <th className="px-6 py-4 text-left font-montserrat">Prodotto</th>
                <th className="px-6 py-4 text-left font-montserrat">Descrizione</th>
                <th className="px-6 py-4 text-left font-montserrat">Benefici Bio/Rinnovabile</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 font-semibold text-zisa-blue">Mirtilli</td>
                <td className="px-6 py-4">7 ettari residuo zero</td>
                <td className="px-6 py-4 text-zisa-green">Antiossidanti naturali</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-zisa-blue">Lamponi</td>
                <td className="px-6 py-4">Raccolta fresca Sicilia</td>
                <td className="px-6 py-4 text-zisa-green">Dolcezza soleggiata</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-zisa-blue">Pannelli Solari</td>
                <td className="px-6 py-4">Installazione chiavi in mano</td>
                <td className="px-6 py-4 text-zisa-green">Risparmio + sostenibile</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}

