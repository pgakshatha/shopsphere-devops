function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <div>

            <span className="inline-block bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Production Ready E-Commerce Platform
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Smart Shopping.
              <br />
              Powered by DevOps.
            </h1>

            <p className="text-lg text-gray-300 mt-8 leading-8">
              ShopSphere is a modern e-commerce platform built using
              React, Node.js, PostgreSQL, Docker, and AWS.
              This project demonstrates production-ready DevOps
              practices including containerization, CI/CD, cloud deployment,
              and scalable architecture.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition">
                Shop Now
              </button>

              <button className="border border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition">
                Learn More
              </button>

            </div>

          </div>

          {/* Right Content */}

          <div className="flex justify-center">

            <img
                src="/images/hero.jpg"
                alt="Technology Workspace"
                className="rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;