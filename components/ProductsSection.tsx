import { useState } from "react";

const categories = ["Todos", "Lámparas", "Corpóreos", "Habladores", "Medallas"];

const products = [
  { id: 1, name: "Lámpara LED Acrílico", category: "Lámparas", price: "$25" },
  { id: 2, name: "Trofeo Corporativo", category: "Trofeos", price: "$12" },
  { id: 3, name: "Medalla", category: "Medallas", price: "$5" },
  { id: 4, name: "Corpóreo 40cm", category: "Corpóreos", price: "$120" },
  { id: 5, name: "Hablador Pestaña", category: "Habladores", price: "$35" },
];

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Productos</h2>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 px-4 md:px-0 max-w-full">
            <div className="inline-flex rounded-2xl bg-gray-100 p-1 whitespace-nowrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-xl transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-white text-black shadow-md"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden flex flex-col"
            >
              {/* Image — square ratio, scales with card width */}
              <div className="relative bg-gray-50 aspect-square flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-200 rounded-xl" />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                >
                  <svg
                    width="14" height="14" viewBox="0 0 24 24"
                    fill={favorites.includes(product.id) ? "#e24b4a" : "none"}
                    stroke={favorites.includes(product.id) ? "#e24b4a" : "#888"}
                    strokeWidth="1.8"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>

              {/* Info */}
              <div className="p-3 flex flex-col flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1 leading-snug">
                  {product.name}
                </p>
                <p className="text-2xl font-bold text-gray-900 mb-3">{product.price}</p>
                <button className="mt-auto w-full py-2.5 rounded-xl bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors">
                  Añadir
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}