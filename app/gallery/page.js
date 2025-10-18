'use client'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export default function Gallery() {
  const [photoIndex, setPhotoIndex] = useState(-1)

  const images = [
    { src: '/images/room1.jpg', category: 'Rooms' },
    { src: '/images/room2.jpg', category: 'Rooms' },
    { src: '/images/room3.jpg', category: 'Rooms' },
    { src: '/images/lounge3.jpg', category: 'Lounges' },
    { src: '/images/apartment.jpg', category: 'Apartments' },
    { src: '/images/res1.jpg', category: 'Restaurant' },
    { src: '/images/apartment2.jpg', category: 'Apartments' },
    { src: '/images/res2.jpg', category: 'Restaurant' },
    { src: '/images/room5.jpg', category: 'Rooms' },
    { src: '/images/lounge1.jpg', category: 'Lounges' },
    { src: '/images/lounge2.jpg', category: 'Lounges' },
    { src: '/images/apartment3.jpg', category: 'Apartments' },
    { src: '/images/room4.jpg', category: 'Rooms' },
    { src: '/images/lobby1.jpg', category: 'Lobbies' },
    { src: '/images/lobby2.jpg', category: 'Lobbies' },
  ]

  const categories = ['All', ...new Set(images.map(img => img.category))]
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory)

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <p className="section-subtitle">EXPLORE OUR HOTEL</p>
          <h1 className="section-title">Gallery</h1>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Discover the elegance and luxury that awaits you at Sky Dew Hotel
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
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
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
              <Image
                src={image.src}
                alt={image.category}
                width={1200}
                height={800}
                className="object-cover w-full transition-transform duration-500 h-80 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-40">
                <span className="text-lg font-semibold text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
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
