'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-zisa-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Slogan */}
          <div>
            <Image
              src="/logo-full.png"
              alt="Gruppo Zisa"
              width={200}
              height={100}
              className="mb-4"
            />
            <p className="text-gray-400 italic">
              Natura Blu, Energia Verde
            </p>
          </div>

          {/* Link Utili */}
          <div>
            <h4 className="font-montserrat font-bold mb-4">Link Utili</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-zisa-yellow transition-colors text-left"
                >
                  Chi Siamo
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="hover:text-zisa-yellow transition-colors text-left"
                >
                  Prodotti
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('map')}
                  className="hover:text-zisa-yellow transition-colors text-left"
                >
                  Terreni
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-zisa-yellow transition-colors text-left"
                >
                  Contatti
                </button>
              </li>
            </ul>
          </div>

          {/* Contatti Footer */}
          <div>
            <h4 className="font-montserrat font-bold mb-4">Contatti</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Santa Croce Camerina, Ragusa</li>
              <li>
                <a
                  href="tel:+390932825131"
                  className="hover:text-zisa-yellow transition-colors"
                >
                  0932 825131
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@gruppozisa.it"
                  className="hover:text-zisa-yellow transition-colors"
                >
                  info@gruppozisa.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Gruppo Zisa. Tutti i diritti riservati.
          </p>
          <p className="mt-2 text-sm">
            Mirtilli e lamponi bio residuo zero | Pannelli solari | Ragusa, Sicilia
          </p>
        </div>
      </div>
    </footer>
  )
}

