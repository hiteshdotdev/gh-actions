import { Sparkles, Leaf, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">100% Organic & Natural</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
            Pure <span className="text-emerald-600">Herbal</span> Wellness
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Discover the ancient wisdom of Ayurveda with VED HARBALIC's premium collection
            of organic herbal powders and natural wellness products. Chemical-free, pesticide-free,
            and crafted with care for your health.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#products"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-medium border-2 border-emerald-600 hover:bg-emerald-50 transition-all"
            >
              Contact Us
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-emerald-100 p-3 rounded-full">
                <Leaf className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900">100% Organic</h3>
              <p className="text-sm text-gray-600 text-center">Certified organic ingredients without chemicals</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-emerald-100 p-3 rounded-full">
                <Heart className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Ayurvedic Quality</h3>
              <p className="text-sm text-gray-600 text-center">Traditional formulations for modern wellness</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-emerald-100 p-3 rounded-full">
                <Sparkles className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Premium Grade</h3>
              <p className="text-sm text-gray-600 text-center">Carefully sourced and processed for purity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
