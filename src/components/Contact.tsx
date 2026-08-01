import { Phone, Mail, MapPin, Leaf } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our products? We'd love to hear from you. Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <a
            href="tel:+918306162518"
            className="flex flex-col items-center gap-4 p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 group"
          >
            <div className="bg-emerald-100 p-4 rounded-full group-hover:bg-emerald-600 transition-colors">
              <Phone className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+91 83061 62518</p>
            </div>
          </a>

          <a
            href="mailto:vedharbal@gmail.com"
            className="flex flex-col items-center gap-4 p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 group"
          >
            <div className="bg-emerald-100 p-4 rounded-full group-hover:bg-emerald-600 transition-colors">
              <Mail className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">vedharbal@gmail.com</p>
            </div>
          </a>

          <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group">
            <div className="bg-emerald-100 p-4 rounded-full group-hover:bg-emerald-600 transition-colors">
              <MapPin className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Row House No. 5, Premkunj Society,<br />
                Sonivli, Badlapur West,<br />
                Thane, Maharashtra
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience Natural Wellness?</h3>
          <p className="text-emerald-50 mb-6 max-w-2xl mx-auto">
            Order our premium organic herbal products today and embark on your journey to holistic health
          </p>
          <a
            href="tel:+918306162518"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-lg"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now to Order</span>
          </a>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-emerald-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-emerald-600" />
            <span className="text-xl font-bold text-emerald-900">VED HARBALIC</span>
          </div>
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} VED HARBALIC. All rights reserved. | 100% Organic & Natural Products
          </p>
        </div>
      </footer>
    </section>
  );
}
