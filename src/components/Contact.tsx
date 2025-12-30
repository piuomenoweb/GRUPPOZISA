'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { createClient } from '@/lib/supabase'

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    messaggio: '',
    tipo: 'Agro',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const supabase = createClient()
      const { error } = await supabase.from('leads').insert([
        {
          nome: formData.nome,
          email: formData.email,
          messaggio: formData.messaggio,
          tipo_interesse: formData.tipo,
          created_at: new Date().toISOString(),
        },
      ])

      if (error) throw error

      setSubmitStatus('success')
      setFormData({ nome: '', email: '', messaggio: '', tipo: 'Agro' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-zisa-blue to-blue-900 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Contatti
          </h2>
          <p className="text-xl text-zisa-yellow">
            Siamo qui per rispondere alle tue domande
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Contatti */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-montserrat font-bold mb-6">
                Sedi e Recapiti
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <FiMapPin className="text-zisa-yellow text-2xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Sede Legale</p>
                    <p className="text-gray-300">
                      Via Principe Umberto, Santa Croce Camerina
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiMapPin className="text-zisa-yellow text-2xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Sede Operativa</p>
                    <p className="text-gray-300">
                      Contrada Petraro SP20 Km1, 97010 Santa Croce
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiPhone className="text-zisa-yellow text-2xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Telefono</p>
                    <a
                      href="tel:+390932825131"
                      className="text-gray-300 hover:text-zisa-yellow transition-colors"
                    >
                      0932 825131
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiMail className="text-zisa-yellow text-2xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a
                      href="mailto:info@gruppozisa.it"
                      className="text-gray-300 hover:text-zisa-yellow transition-colors"
                    >
                      info@gruppozisa.it
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/393XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-zisa-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  <span className="mr-2">💬</span>
                  WhatsApp
                </a>
              </div>

              <div className="mt-6 flex space-x-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-zisa-yellow transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-zisa-yellow transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Contatti */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block mb-2 font-semibold">
                  Nome *
                </label>
                <input
                  type="text"
                  id="nome"
                  required
                  value={formData.nome}
                  onChange={(e) =>
                    setFormData({ ...formData, nome: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg text-zisa-blue focus:outline-none focus:ring-2 focus:ring-zisa-yellow"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-semibold">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg text-zisa-blue focus:outline-none focus:ring-2 focus:ring-zisa-yellow"
                />
              </div>

              <div>
                <label htmlFor="tipo" className="block mb-2 font-semibold">
                  Tipo Interesse *
                </label>
                <select
                  id="tipo"
                  required
                  value={formData.tipo}
                  onChange={(e) =>
                    setFormData({ ...formData, tipo: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg text-zisa-blue focus:outline-none focus:ring-2 focus:ring-zisa-yellow"
                >
                  <option value="Agro">Agro</option>
                  <option value="Solare">Solare</option>
                  <option value="Visita">Visita</option>
                </select>
              </div>

              <div>
                <label htmlFor="messaggio" className="block mb-2 font-semibold">
                  Messaggio *
                </label>
                <textarea
                  id="messaggio"
                  required
                  rows={5}
                  value={formData.messaggio}
                  onChange={(e) =>
                    setFormData({ ...formData, messaggio: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg text-zisa-blue focus:outline-none focus:ring-2 focus:ring-zisa-yellow resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-zisa-yellow text-zisa-blue px-6 py-4 rounded-lg font-montserrat font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                {isSubmitting ? (
                  'Invio in corso...'
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Invia Messaggio
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-zisa-green text-white p-4 rounded-lg">
                  Messaggio inviato con successo! Ti risponderemo presto.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500 text-white p-4 rounded-lg">
                  Errore nell'invio. Riprova più tardi.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

