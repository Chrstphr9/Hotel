import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">H&J</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience luxury and elegance at our finest hotel. Quality and design in perfect harmony.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Home</Link></li>
              <li><Link href="/reservation" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Reservation</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <FaMapMarkerAlt className="text-gold-500 mt-1" />
                <span className="text-gray-400">123 Luxury Avenue, Suite 500<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <FaPhone className="text-gold-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <FaEnvelope className="text-gold-500" />
                <span className="text-gray-400">info@hjhotel.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wider">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} H&J Hotel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
