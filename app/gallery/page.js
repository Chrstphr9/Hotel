'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export default function Gallery() {
  const [photoIndex, setPhotoIndex] = useState(-1)

  const images = [
    { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80', category: 'Lobby' },
    { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80', category: 'Rooms' },
    { src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80', category: 'Rooms' },
    { src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80', category: 'Rooms' },
    { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80', category: 'Restaurant' },
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80', category: 'Restaurant' },
    { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80', category: 'Design' },
    { src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80', category: 'Amenities' },
    { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80', category: 'Lobby' },
    { src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80', category: 'Amenities' },
    { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80', category: 'Restaurant' },
    { src: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?w=1200&q=80', category: 'Design' },
  ]

  const categories = ['All', ...new Set(images.map(img => img.category))]
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory)

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="section-subtitle">EXPLORE OUR HOTEL</p>
          <h1 className="section-title">Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Discover the elegance and luxury that awaits you at H&J Hotel
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              onClick={() => setPhotoIndex(images.findIndex(img => img.src === image.src))}
            >
              <img
                src={image.src}
                alt={image.category}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Lightbox
          open={photoIndex >= 0}
          close={() => setPhotoIndex(-1)}
          index={photoIndex}
          slides={images.map(img => ({ src: img.src }))}
        />
      </div>
    </div>
  )
}
