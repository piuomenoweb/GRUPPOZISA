'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const timeline = [
    { year: '1997', event: 'Inizio orticole bio' },
    { year: '2012', event: 'Primi pannelli solari' },
    { year: '2015', event: 'Pionieri mirtilli e lamponi' },
    { year: '2022', event: 'Premio Residuo Zero' },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-white"
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
            Chi Siamo
          </h2>
          <p className="text-xl text-zisa-green font-opensans italic">
            Dove il sole siciliano nutre frutti e futuro pulito
          </p>
        </motion.div>

        {/* Storia */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-700 leading-relaxed mb-8 text-center"
          >
            Dal 1997 orticole bio, dal 2015 mirtilli pionieristici (7 ettari residuo zero), 
            soci Sant'Orsola. Giuseppe Zisa fondatore Zisa Emma & Stamilla Giovanna. 
            Ora + solare rinnovabile.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-zisa-blue hidden md:block"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row md:flex-row' : 'flex-row-reverse md:flex-row-reverse'}`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-0 md:pr-8 text-left md:text-right' : 'pl-0 md:pl-8 text-left'}`}>
                    <div className="bg-zisa-blue text-white p-4 rounded-lg shadow-lg">
                      <div className="font-montserrat font-bold text-2xl mb-2">{item.year}</div>
                      <div className="font-opensans">{item.event}</div>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-zisa-yellow rounded-full border-4 border-zisa-blue z-10 hidden md:block"></div>
                  <div className="w-0 md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Foto Famiglia (Placeholder - sostituire con immagini reali) */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {['Giuseppe Zisa', 'Giannandrea Zisa', 'Emma Zisa'].map((name, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-gray-200 rounded-lg aspect-square mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={`https://via.placeholder.com/300x300/1E3A8A/FFFFFF?text=${encodeURIComponent(name)}`}
                  alt={name}
                  width={300}
                  height={300}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
              <h3 className="font-montserrat font-semibold text-zisa-blue">{name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

