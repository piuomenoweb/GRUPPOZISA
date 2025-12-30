'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiX } from 'react-icons/fi'

interface Terreno {
  id: number
  name: string
  type: string
  lat: number
  lng: number
  superficie: string
  description: string
  image: string
}

const terreni: Terreno[] = [
  {
    id: 1,
    name: 'Mirtilli Principale',
    type: 'Mirtilli',
    lat: 36.77,
    lng: 14.89,
    superficie: '4 ha',
    description: 'Campo principale mirtilli residuo zero',
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400',
  },
  {
    id: 2,
    name: 'Lamponi Nord',
    type: 'Lamponi',
    lat: 36.82,
    lng: 14.78,
    superficie: '3 ha',
    description: 'Campo lamponi verso Chiaramonte Gulfi',
    image: 'https://images.unsplash.com/photo-1615485925511-ef3c1c3e0e0a?w=400',
  },
  {
    id: 3,
    name: 'Solare Est',
    type: 'Pannelli Solari',
    lat: 36.77,
    lng: 14.93,
    superficie: '50 kW',
    description: 'Impianto fotovoltaico area Comiso',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400',
  },
  {
    id: 4,
    name: 'Misti Ovest',
    type: 'Misto',
    lat: 36.75,
    lng: 14.85,
    superficie: '2 ha + pannelli',
    description: 'Terreno misto con pannelli solari',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c0d8?w=400',
  },
  {
    id: 5,
    name: 'Sede Operativa',
    type: 'Sede',
    lat: 36.77,
    lng: 14.88,
    superficie: 'Sede',
    description: 'Via Roma 123, Santa Croce Camerina',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
  },
]

declare global {
  interface Window {
    google: any
  }
}

export default function Map() {
  const [selectedTerreno, setSelectedTerreno] = useState<Terreno | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapInstance, setMapInstance] = useState<any>(null)
  const [markers, setMarkers] = useState<any[]>([])

  useEffect(() => {
    // Load Google Maps script
    if (typeof window !== 'undefined' && !window.google) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`
      script.async = true
      script.defer = true
      script.onload = () => setMapLoaded(true)
      script.onerror = () => console.error('Error loading Google Maps')
      document.head.appendChild(script)

      return () => {
        const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`)
        if (existingScript) {
          document.head.removeChild(existingScript)
        }
      }
    } else if (window.google) {
      setMapLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (!mapLoaded || typeof window === 'undefined' || !window.google) return

    const mapElement = document.getElementById('map')
    if (!mapElement) return

    const map = new window.google.maps.Map(mapElement, {
      center: { lat: 36.77, lng: 14.88 },
      zoom: 14,
      styles: [
        {
          featureType: 'all',
          elementType: 'geometry',
          stylers: [{ color: '#e8f4f8' }],
        },
      ],
    })

    setMapInstance(map)

    // Create custom icon
    const customIcon = {
      url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="12" fill="#1E3A8A" stroke="#FCD34D" stroke-width="2"/>
          <text x="16" y="20" font-size="16" fill="white" text-anchor="middle" font-weight="bold">Z</text>
        </svg>
      `),
      scaledSize: new window.google.maps.Size(32, 32),
    }

    // Add markers
    const newMarkers = terreni.map((terreno) => {
      const marker = new window.google.maps.Marker({
        position: { lat: terreno.lat, lng: terreno.lng },
        map,
        title: terreno.name,
        icon: customIcon,
      })

      marker.addListener('click', () => {
        setSelectedTerreno(terreno)
      })

      return marker
    })

    setMarkers(newMarkers)
  }, [mapLoaded])

  return (
    <section
      id="map"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-zisa-blue mb-4">
            I Nostri Terreni
          </h2>
          <p className="text-lg text-gray-600">
            Scopri le nostre coltivazioni e impianti nella provincia di Ragusa
          </p>
        </motion.div>

        {/* Mappa */}
        <div className="relative max-w-6xl mx-auto mb-8">
          <div
            id="map"
            className="w-full h-96 rounded-lg shadow-lg overflow-hidden bg-gray-200"
          >
            {!mapLoaded && (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Caricamento mappa...
              </div>
            )}
          </div>
        </div>

        {/* Lista Terreni */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {terreni.map((terreno, index) => (
            <motion.button
              key={terreno.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => {
                setSelectedTerreno(terreno)
                if (mapInstance && markers[index]) {
                  mapInstance.setCenter({ lat: terreno.lat, lng: terreno.lng })
                  mapInstance.setZoom(16)
                }
              }}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left border-2 border-transparent hover:border-zisa-blue"
            >
              <div className="flex items-center mb-2">
                <FiMapPin className="text-zisa-blue mr-2" />
                <h3 className="font-montserrat font-semibold text-zisa-blue text-sm">
                  {terreno.name}
                </h3>
              </div>
              <p className="text-xs text-gray-600">{terreno.type}</p>
              <p className="text-xs text-zisa-green font-semibold mt-2">
                {terreno.superficie}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Popup Terreno Selezionato */}
        {selectedTerreno && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedTerreno(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedTerreno(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
                aria-label="Chiudi"
              >
                <FiX className="text-2xl" />
              </button>

              <img
                src={selectedTerreno.image}
                alt={selectedTerreno.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="text-2xl font-montserrat font-bold text-zisa-blue mb-2">
                {selectedTerreno.name}
              </h3>
              <p className="text-gray-600 mb-4">{selectedTerreno.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">Tipo: {selectedTerreno.type}</span>
                <span className="text-sm font-semibold text-zisa-green">
                  {selectedTerreno.superficie}
                </span>
              </div>

              <button
                onClick={() => {
                  setSelectedTerreno(null)
                  const contactSection = document.getElementById('contact')
                  contactSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="w-full bg-zisa-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contattaci per Visita
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

