import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <section className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Title */}
        <h2 className="text-5xl font-bold text-center mb-4">
          Featured Products
        </h2>

        <p className="text-center text-gray-500 mb-10">
          Discover our premium collection of technology products.
        </p>

        {/* Search Bar */}
        <div className="max-w-lg mx-auto mb-12">
          <input
            type="text"
            placeholder="🔍 Search products..."
            className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProductList;