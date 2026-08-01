import { useState } from 'react';
import { Phone, Leaf, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Products from './components/Products';
import Contact from './components/Contact';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-emerald-600" />
              <span className="text-xl sm:text-2xl font-bold text-emerald-900 truncate">VED HARBALIC</span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="#products" className="text-gray-700 hover:text-emerald-600 transition-colors">Products</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
              <a href="tel:+918306162518" className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-emerald-100 bg-white">
              <div className="flex flex-col gap-3 px-4 py-4">
                <a
                  href="#products"
                  onClick={closeMobileMenu}
                  className="text-gray-700 hover:text-emerald-600 transition-colors py-2 font-medium"
                >
                  Products
                </a>
                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="text-gray-700 hover:text-emerald-600 transition-colors py-2 font-medium"
                >
                  Contact
                </a>
                <a
                  href="tel:+918306162518"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-4 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium w-full"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <Hero />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
