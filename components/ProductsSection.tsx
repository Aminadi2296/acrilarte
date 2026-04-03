import { useState } from "react";

const categories = ["Todos", "Lámparas", "Corpóreos", "Habladores", "Medallas"];

const products = [
  { id: 1, name: "Lámpara LED Acrílico", category: "Lámparas", price: "$25" },
  { id: 2, name: "Trofeo Corporativo", category: "Trofeos", price: "$12" },
  { id: 3, name: "Medalla", category: "Medallas", price: "$5" },
  { id: 4, name: "Corpóreo 40cm", category: "Corpóreos", price: "$120" },
];

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts = selectedCategory === "Todos"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Productos</h2>

        <div className="mb-12">
          <div className="flex justify-center md:justify-center">
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
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/10 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">{product.price}</span>
                  <button className="px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition-colors">
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
