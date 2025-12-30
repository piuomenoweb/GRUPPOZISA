'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin, Instagram, CheckCircle2, AlertCircle } from 'lucide-react'
import { createClient } from '@/lib/supabase'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

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
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      
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
      className="py-24 bg-gradient-to-br from-zisa-blue via-zisa-blue-dark to-zisa-black text-white"
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
            Contatti
          </h2>
          <p className="text-xl text-zisa-yellow">
            Siamo qui per rispondere alle tue domande
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Contatti */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat font-bold text-white">
                  Sedi e Recapiti
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: MapPin, label: 'Sede Legale', value: 'Via Principe Umberto, Santa Croce Camerina' },
                  { icon: MapPin, label: 'Sede Operativa', value: 'Contrada Petraro SP20 Km1, 97010 Santa Croce' },
                  { icon: Phone, label: 'Telefono', value: '0932 825131', href: 'tel:+390932825131' },
                  { icon: Mail, label: 'Email', value: 'info@gruppozisa.it', href: 'mailto:info@gruppozisa.it' },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-white/10">
                        <Icon className="h-5 w-5 text-zisa-yellow" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1 text-white">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-gray-300 hover:text-zisa-yellow transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-300">{item.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-zisa-green hover:bg-zisa-emerald text-white flex-1"
                asChild
              >
                <a href="https://wa.me/393XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="border border-white/20 hover:bg-white/10"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="border border-white/20 hover:bg-white/10"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Form Contatti */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat font-bold text-white">
                  Invia un Messaggio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="nome" className="block mb-2 font-semibold text-white">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zisa-yellow"
                      placeholder="Il tuo nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 font-semibold text-white">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zisa-yellow"
                      placeholder="la-tua-email@esempio.it"
                    />
                  </div>

                  <div>
                    <label htmlFor="tipo" className="block mb-2 font-semibold text-white">
                      Tipo Interesse *
                    </label>
                    <select
                      id="tipo"
                      required
                      value={formData.tipo}
                      onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-zisa-yellow"
                    >
                      <option value="Agro" className="bg-zisa-blue">Agro</option>
                      <option value="Solare" className="bg-zisa-blue">Solare</option>
                      <option value="Visita" className="bg-zisa-blue">Visita</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="messaggio" className="block mb-2 font-semibold text-white">
                      Messaggio *
                    </label>
                    <textarea
                      id="messaggio"
                      required
                      rows={5}
                      value={formData.messaggio}
                      onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zisa-yellow resize-none"
                      placeholder="Scrivi il tuo messaggio..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-zisa-yellow hover:bg-yellow-500 text-zisa-blue-dark font-bold"
                  >
                    {isSubmitting ? (
                      'Invio in corso...'
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Invia Messaggio
                      </>
                    )}
                  </Button>

                  {submitStatus === 'success' && (
                    <div className="bg-zisa-green/20 border border-zisa-green text-white p-4 rounded-lg flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-zisa-green flex-shrink-0" />
                      <p>Messaggio inviato con successo! Ti risponderemo presto.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-500/20 border border-red-500 text-white p-4 rounded-lg flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                      <p>Errore nell'invio. Riprova più tardi.</p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
