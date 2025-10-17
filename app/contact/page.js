'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitSuccess(false), 3000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      detail: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      detail: 'info@hjhotel.com',
      link: 'mailto:info@hjhotel.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      detail: '123 Luxury Avenue, Suite 500, New York, NY 10001',
      link: 'https://maps.google.com'
    },
    {
      icon: FaClock,
      title: 'Hours',
      detail: '24/7 Concierge Service',
      link: null
    }
  ]

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <p className="section-subtitle">GET IN TOUCH</p>
          <h1 className="section-title">Contact Us</h1>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            We&aposre here to help and answer any questions you might have
          </p>
        </motion.div>

        <div className="grid gap-16 mb-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="mb-6 font-serif text-3xl">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-semibold">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 transition-colors border-2 border-gray-200 rounded-lg outline-none focus:border-gold-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 transition-colors border-2 border-gray-200 rounded-lg outline-none focus:border-gold-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 transition-colors border-2 border-gray-200 rounded-lg outline-none focus:border-gold-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="5"
                  className="w-full px-4 py-3 transition-colors border-2 border-gray-200 rounded-lg outline-none focus:border-gold-500"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full gap-2 btn-primary disabled:bg-gray-400"
              >
                <FaPaperPlane />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitSuccess && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-green-600"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="mb-6 font-serif text-3xl">Contact Information</h2>
            <div className="mb-8 space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start p-4 space-x-4 transition-colors rounded-lg bg-gray-50 hover:bg-gray-100"
                >
                  <info.icon className="mt-1 text-2xl text-gold-500" />
                  <div>
                    <h3 className="mb-1 font-semibold">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-gray-600 transition-colors hover:text-gold-500">
                        {info.detail}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.detail}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="h-64 overflow-hidden bg-gray-200 rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
