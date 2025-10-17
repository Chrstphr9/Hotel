import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="text-white bg-black">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="mb-4">
              <Image src="/images/logo.png" alt="Hotel Haven Logo" width={140} height={46} />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Experience luxury and elegance at our finest hotel. Quality and design in perfect harmony.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-400 transition-colors hover:text-gold-500">Home</Link></li>
              <li><Link href="/reservation" className="text-sm text-gray-400 transition-colors hover:text-gold-500">Reservation</Link></li>
              <li><Link href="/gallery" className="text-sm text-gray-400 transition-colors hover:text-gold-500">Gallery</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 transition-colors hover:text-gold-500">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold tracking-wider uppercase">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <FaMapMarkerAlt className="mt-1 text-gold-500" />
                <span className="text-gray-400">No.3 B.T.Ben Okonkuyo Close Off Okpanam Road<br />No.3 B.T.Ben Okonkuyo Close Off Okpanam Road
                By Liberty Event Center</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <FaPhone className="text-gold-500" />
                <span className="text-gray-400">09032281081</span>
                <span className="text-gray-400">09032281081</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <FaEnvelope className="text-gold-500" />
                <span className="text-gray-400">info@hjhotel.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold tracking-wider uppercase">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-gold-500">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-gold-500">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-gold-500">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-12 text-center border-t border-gray-800">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Hotel Haven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
