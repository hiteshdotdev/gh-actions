import { ShoppingBag, Check } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Organic Amla Powder',
    description: 'Rich in Vitamin C, boosts immunity and promotes healthy hair growth. 100% chemical-free and pesticide-free.',
    image: '/images/WhatsApp_Image_2026-03-07_at_1.58.17_PM.jpeg',
    weight: '100gm',
    features: ['Organic & Herbal', '100% Chemical Free', 'No Pesticides']
  },
  {
    id: 2,
    name: 'Organic Beetroot Powder',
    description: 'Pure organic beetroot powder for natural energy and healthy blood circulation. Rich in nutrients and antioxidants.',
    image: '/images/WhatsApp_Image_2026-03-07_at_1.58.18_PM.jpeg',
    weight: '100gm',
    features: ['Organic & Herbal', '100% Chemical Free', 'No Pesticides']
  },
  {
    id: 3,
    name: 'Organic Bhringraj Powder',
    description: 'Traditional hair care solution for stronger, thicker and lustrous hair. Promotes hair growth and prevents hair fall.',
    image: '/images/WhatsApp_Image_2026-03-07_at_1.58.18_PM_(1).jpeg',
    weight: '100gm',
    features: ['100% Natural', 'Organic & Herbal', 'No Pesticides']
  },
  {
    id: 4,
    name: 'Rose Water',
    description: 'Pure rose water for glowing, radiant skin. Natural toner and refresher for all skin types.',
    image: '/images/WhatsApp_Image_2026-03-07_at_1.58.18_PM_(2).jpeg',
    weight: '100ml',
    features: ['For Glowing Skin', 'Natural & Pure', '100% Organic']
  }
];

export default function Products() {
  return (
    <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked organic herbal products crafted with traditional Ayurvedic wisdom for your holistic wellness
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-white p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 sm:h-64 object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.weight}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2 mb-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="tel:+918306162518"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors group-hover:shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order Now</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
