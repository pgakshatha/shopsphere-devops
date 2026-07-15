function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          {product.category}
        </span>

        <h2 className="text-xl font-bold mt-4">
          {product.name}
        </h2>

        <p className="text-yellow-500 mt-2">
          ⭐ {product.rating}
        </p>

        <p className="text-3xl font-bold text-blue-600 mt-3">
          ₹ {product.price.toLocaleString()}
        </p>

        <p
          className={`mt-3 font-semibold ${
            product.stock === "In Stock"
              ? "text-green-600"
              : "text-orange-500"
          }`}
        >
          {product.stock}
        </p>

        <button
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;