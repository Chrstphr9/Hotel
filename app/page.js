'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaStar, FaConciergeBell, FaUtensils, FaBed } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative flex items-center justify-center h-screen">
        <div className="absolute inset-0 bg-black">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80"
            alt="Hotel Lobby"
            className="object-cover w-full h-full opacity-50"
          />
        </div>
        <div className="relative z-10 px-4 text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-sm tracking-widest uppercase text-gold-500"
          >
            Welcome to the H&J Hotel
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 font-serif text-5xl leading-tight md:text-7xl lg:text-8xl"
          >
            QUALITY AND DESIGN
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/reservation" className="inline-block btn-primary">
              Book Your Stay
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
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
              <p className="mb-6 leading-relaxed text-gray-600">
                A harmonious blend of contemporary design and timeless elegance. Our hotel stands as a testament 
                to refined luxury, where every detail has been carefully curated to provide an unforgettable experience.
              </p>
              <p className="mb-8 leading-relaxed text-gray-600">
                From the moment you step through our doors, you&aposll be enveloped in an atmosphere of sophistication 
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
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="section-subtitle">FRESH AVAILABILITY</p>
            <h2 className="section-title">Our Premium Rooms</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
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
                className="p-8 text-center transition-shadow duration-300 bg-white group hover:shadow-xl"
              >
                <room.icon className="mx-auto mb-4 text-5xl transition-transform duration-300 text-gold-500 group-hover:scale-110" />
                <h3 className="mb-3 font-serif text-xl">{room.title}</h3>
                <p className="mb-6 text-gray-600">{room.description}</p>
                <Link href="/reservation" className="text-sm tracking-wider text-black uppercase transition-colors hover:text-gold-500">
                  Reserve Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 text-white bg-black">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
            alt="Fine Dining"
            className="object-cover w-full h-full opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="section-subtitle text-gold-500">MICHELIN RESTAURANTS</p>
            <h2 className="mb-6 section-title">Culinary Excellence</h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-300">
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
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="section-subtitle">DESIGN SUITING</p>
              <h2 className="section-title">Artistry in Architecture</h2>
              <p className="mb-6 leading-relaxed text-gray-600">
                Every corner of our hotel reflects a commitment to exceptional design. From the grand lobby 
                to the intimate corners of your suite, experience spaces that inspire and comfort.
              </p>
              <p className="leading-relaxed text-gray-600">
                Our award-winning interior design seamlessly blends modern aesthetics with classic elegance, 
                creating an environment that&aposs both visually stunning and wonderfully livable.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
                alt="Modern Design"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-32 text-white bg-gray-900">
        <div className="max-w-4xl px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 font-serif text-4xl md:text-5xl">WELCOME TO THE FINEST HOTEL</h2>
            <p className="mb-8 text-xl leading-relaxed text-gray-300">
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
