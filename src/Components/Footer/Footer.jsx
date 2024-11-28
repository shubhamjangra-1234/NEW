
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              National Engineering Works
            </h3>
            <p className="text-gray-400">
            C-162,Chincholi MIDC, Solapur
              <br />
             413255
            </p>
            <p className="text-gray-400 mt-2">
              Contact: 9634781042 || 6395233717 || 9579802492
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-indigo-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-indigo-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-indigo-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/machines" className="hover:text-indigo-400 transition">
                  Machines
                </a>
              </li>
              <li>
                <a href="/quote" className="hover:text-indigo-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Information */}
          <div className="">
       
          <div className="w-full p-2 h-64 bg-gray-50 rounded-lg shadow-sm overflow-hidden">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3799.6071625495006!2d75.81840897517357!3d17.76313968318953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQ1JzQ3LjMiTiA3NcKwNDknMTUuNSJF!5e0!3m2!1sen!2sin!4v1732551143265!5m2!1sen!2sin"
              className="w-full h-full"
              style={{border:"0"}}
              allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
         
        </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            © 2024 National Engineering Works. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
