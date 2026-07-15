import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "./ProductCard";
import LoadingSpinner from "./LoadingSpinner";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);

        const data = await getProducts();

        // Simulate API delay (Demo Purpose)
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-slate-100 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900">
            Featured Products
          </h2>

          <p className="text-gray-500 text-lg mt-4">
            Discover our premium collection of technology products.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-14">
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              px-5
              py-4
              rounded-xl
              border
              border-gray-300
              shadow-md
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              bg-white
            "
          />
        </div>

        {/* Product Count */}
        {!loading && (
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-semibold">
              Products
            </h3>

            <span className="text-gray-500">
              {filteredProducts.length} Products Found
            </span>
          </div>
        )}

        {/* Loading Spinner */}
        {loading ? (
          <LoadingSpinner />
        ) : filteredProducts.length > 0 ? (

          /* Products Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        ) : (

          /* Empty State */
          <div className="text-center py-24">

            <h2 className="text-4xl font-bold text-gray-800">
              No Products Found 🔍
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              Try searching for another product.
            </p>

          </div>

        )}

      </div>
    </section>
  );
}

export default ProductList;