'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaStar, FaConciergeBell, FaUtensils, FaBed } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80"
            alt="Hotel Lobby"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm uppercase tracking-widest mb-4 text-gold-500"
          >
            Welcome to the H&J Hotel
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight"
          >
            QUALITY AND DESIGN
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/reservation" className="btn-primary inline-block">
              Book Your Stay
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
                alt="Hotel Interior"
                className="w-full h-[600px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="section-subtitle">ABOUT HOTEL MASTER</p>
              <h2 className="section-title">Excellence in Every Detail</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                A harmonious blend of contemporary design and timeless elegance. Our hotel stands as a testament 
                to refined luxury, where every detail has been carefully curated to provide an unforgettable experience.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From the moment you step through our doors, you'll be enveloped in an atmosphere of sophistication 
                and warmth, where world-class service meets exceptional comfort.
              </p>
              <Link href="/contact" className="btn-secondary">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle">FRESH AVAILABILITY</p>
            <h2 className="section-title">Our Premium Rooms</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaBed, title: 'Deluxe Suite', description: 'Spacious elegance with premium amenities' },
              { icon: FaStar, title: 'Executive Room', description: 'Perfect blend of comfort and luxury' },
              { icon: FaConciergeBell, title: 'Presidential Suite', description: 'Ultimate luxury experience' },
            ].map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 text-center group hover:shadow-xl transition-shadow duration-300"
              >
                <room.icon className="text-5xl text-gold-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-serif mb-3">{room.title}</h3>
                <p className="text-gray-600 mb-6">{room.description}</p>
                <Link href="/reservation" className="text-sm uppercase tracking-wider text-black hover:text-gold-500 transition-colors">
                  Reserve Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-black text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
            alt="Fine Dining"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="section-subtitle text-gold-500">MICHELIN RESTAURANTS</p>
            <h2 className="section-title mb-6">Culinary Excellence</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Experience world-class dining at our Michelin-starred restaurant. Our renowned chefs create 
              extraordinary culinary masterpieces that delight the senses and celebrate the finest ingredients.
            </p>
            <Link href="/contact" className="btn-primary">
              View Menu
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="section-subtitle">DESIGN SUITING</p>
              <h2 className="section-title">Artistry in Architecture</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every corner of our hotel reflects a commitment to exceptional design. From the grand lobby 
                to the intimate corners of your suite, experience spaces that inspire and comfort.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our award-winning interior design seamlessly blends modern aesthetics with classic elegance, 
                creating an environment that's both visually stunning and wonderfully livable.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
                alt="Modern Design"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">WELCOME TO THE FINEST HOTEL</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Where luxury meets comfort, and every moment is crafted to perfection
            </p>
            <Link href="/reservation" className="btn-primary">
              Make a Reservation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
