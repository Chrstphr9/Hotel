'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FaCalendar, FaUsers, FaBed, FaCheckCircle } from 'react-icons/fa'

export default function Reservation() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    checkIn: new Date(),
    checkOut: new Date(Date.now() + 86400000),
    guests: 2,
    roomType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const roomTypes = [
    { id: 'deluxe', name: 'Deluxe Suite', price: '$299/night', image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&q=80' },
    { id: 'executive', name: 'Executive Room', price: '$399/night', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&q=80' },
    { id: 'presidential', name: 'Presidential Suite', price: '$799/night', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80' }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setTimeout(() => {
          setSubmitSuccess(false)
          setStep(1)
          setFormData({
            checkIn: new Date(),
            checkOut: new Date(Date.now() + 86400000),
            guests: 2,
            roomType: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            specialRequests: ''
          })
        }, 3000)
      }
    } catch (error) {
      console.error('Error submitting reservation:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="section-subtitle">BOOK YOUR STAY</p>
          <h1 className="section-title">Make a Reservation</h1>
        </motion.div>

        <div className="mb-12">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center flex-1">
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    step >= num ? 'bg-gold-500 text-white' : 'bg-gray-300 text-gray-600'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {num}
                </motion.div>
                {num < 3 && (
                  <div className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                    step > num ? 'bg-gold-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between max-w-3xl mx-auto mt-4 px-6">
            <span className="text-sm text-gray-600">Dates & Room</span>
            <span className="text-sm text-gray-600">Guest Info</span>
            <span className="text-sm text-gray-600">Confirm</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-serif mb-8">Select Dates & Room</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="datepicker-custom">
                  <label className="block text-sm font-semibold mb-2 flex items-center">
                    <FaCalendar className="mr-2 text-gold-500" /> Check-In Date
                  </label>
                  <DatePicker
                    selected={formData.checkIn}
                    onChange={(date) => setFormData({ ...formData, checkIn: date })}
                    minDate={new Date()}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 outline-none"
                  />
                </div>
                <div className="datepicker-custom">
                  <label className="block text-sm font-semibold mb-2 flex items-center">
                    <FaCalendar className="mr-2 text-gold-500" /> Check-Out Date
                  </label>
                  <DatePicker
                    selected={formData.checkOut}
                    onChange={(date) => setFormData({ ...formData, checkOut: date })}
                    minDate={formData.checkIn}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 outline-none"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold mb-2 flex items-center">
                  <FaUsers className="mr-2 text-gold-500" /> Number of Guests
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 outline-none"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold mb-4 flex items-center">
                  <FaBed className="mr-2 text-gold-500" /> Select Room Type
                </label>
                <div className="grid md:grid-cols-3 gap-6">
                  {roomTypes.map((room) => (
                    <motion.div
                      key={room.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFormData({ ...formData, roomType: room.id })}
                      className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        formData.roomType === room.id ? 'border-gold-500 shadow-xl' : 'border-gray-200'
                      }`}
                    >
                      <img src={room.image} alt={room.name} className="w-full h-40 object-cover" />
                      <div className="p-4">
                        <h3 className="font-semibold mb-1">{room.name}</h3>
                        <p className="text-gold-500 font-bold">{room.price}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <button
                onClick={nextStep}
                disabled={!formData.roomType}
                className="btn-primary w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Continue to Guest Information
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-serif mb-8">Guest Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 outline-none"
                    required
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold mb-2">Special Requests (Optional)</label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 outline-none"
                  placeholder="Any special requests or preferences..."
                />
              </div>

              <div className="flex gap-4">
                <button onClick={prevStep} className="btn-secondary flex-1">
                  Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                  className="btn-primary flex-1 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Review Reservation
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
            >
              {submitSuccess ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center py-12"
                >
                  <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
                  <h2 className="text-3xl font-serif mb-4">Reservation Confirmed!</h2>
                  <p className="text-gray-600">A confirmation email has been sent to {formData.email}</p>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-3xl font-serif mb-8">Review & Confirm</h2>
                  
                  <div className="space-y-6 mb-8">
                    <div className="border-b pb-4">
                      <h3 className="font-semibold text-lg mb-2">Reservation Details</h3>
                      <p className="text-gray-600">Check-In: {formData.checkIn.toLocaleDateString()}</p>
                      <p className="text-gray-600">Check-Out: {formData.checkOut.toLocaleDateString()}</p>
                      <p className="text-gray-600">Guests: {formData.guests}</p>
                      <p className="text-gray-600">Room: {roomTypes.find(r => r.id === formData.roomType)?.name}</p>
                    </div>
                    
                    <div className="border-b pb-4">
                      <h3 className="font-semibold text-lg mb-2">Guest Information</h3>
                      <p className="text-gray-600">{formData.firstName} {formData.lastName}</p>
                      <p className="text-gray-600">{formData.email}</p>
                      <p className="text-gray-600">{formData.phone}</p>
                    </div>

                    {formData.specialRequests && (
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Special Requests</h3>
                        <p className="text-gray-600">{formData.specialRequests}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <button onClick={prevStep} className="btn-secondary flex-1">
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="btn-primary flex-1 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Confirm Reservation'}
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
