import { Heart, ShoppingCart, Star } from "lucide-react";

function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">

      {/* Product Image */}
      <div className="relative overflow-hidden">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Discount Badge */}
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          20% OFF
        </span>

        {/* Wishlist */}
        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-red-50 transition">
          <Heart size={18} className="text-gray-600 hover:text-red-500" />
        </button>

      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
          {product.category}
        </span>

        {/* Product Name */}
        <h2 className="text-xl font-bold text-gray-900 mt-4">
          {product.name}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2 h-12 overflow-hidden">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mt-4">

          <Star
            size={18}
            className="text-yellow-400 fill-yellow-400"
          />

          <span className="ml-2 text-gray-700 font-medium">
            {product.rating}
          </span>

        </div>

        {/* Price */}
        <div className="flex items-center justify-between mt-5">

          <div>

            <p className="text-3xl font-bold text-blue-600">
              ₹ {Number(product.price).toLocaleString("en-IN")}
            </p>

            <p className="text-sm text-gray-400 line-through">
              ₹ {Math.round(Number(product.price) * 1.2).toLocaleString("en-IN")}
            </p>

          </div>

          <span
            className={`text-sm font-semibold px-3 py-1 rounded-full ${
              product.stock > 0
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>

        </div>

        {/* Button */}
        <button className="w-full mt-6 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">

          <ShoppingCart size={20} />

          Add to Cart

        </button>

      </div>

    </div>
  );
}

export default ProductCard;