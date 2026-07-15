function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-24">

      <div className="max-w-7xl mx-auto px-8 text-center">

        <h1 className="text-6xl font-bold mb-6">
          🛍 ShopSphere
        </h1>

        <p className="text-2xl text-blue-400 mb-4">
          Modern E-Commerce Platform
        </p>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          A Production Ready DevOps Project demonstrating
          React, Node.js, Docker, Docker Compose,
          Jenkins, AWS and Nginx deployment.
        </p>

        <div className="mt-10 flex justify-center gap-6">

          <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg text-lg font-semibold transition">
            Browse Products
          </button>

          <a
            href="https://github.com/pgakshatha/shopsphere-devops"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition"
          >
            GitHub Repository
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;