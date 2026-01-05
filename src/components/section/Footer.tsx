import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold mb-4">Arya Softwtech</p>
            <p className="text-gray-400 mb-6">
              Building innovative software solutions for a smarter tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-5 h-5 text-indigo-400" />
                Adiwasi Colony, Kushalpur, Raipur, Chhattisgarh
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-5 h-5 text-indigo-400" />
                9926827368 | 9755413647
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-5 h-5 text-indigo-400" />
                aryasoftwtech@gmail.com
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-6">
              <a href="https://x.com/aryand002" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/arya-softwtech-381407397?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/aryasoftwtech?igsh=MTFiY3dkMTkwZXRhZA==" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Arya Softwtech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}