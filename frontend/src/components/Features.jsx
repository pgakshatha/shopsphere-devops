function Features() {
  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why ShopSphere?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="text-center">
            <div className="text-5xl">🚚</div>
            <h3 className="font-bold mt-4">Fast Delivery</h3>
            <p className="text-gray-500 mt-2">
              Quick and secure shipping.
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl">🔒</div>
            <h3 className="font-bold mt-4">Secure Shopping</h3>
            <p className="text-gray-500 mt-2">
              Safe online transactions.
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl">☁️</div>
            <h3 className="font-bold mt-4">AWS Hosted</h3>
            <p className="text-gray-500 mt-2">
              Cloud infrastructure ready.
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl">🐳</div>
            <h3 className="font-bold mt-4">Docker Ready</h3>
            <p className="text-gray-500 mt-2">
              Containerized deployment.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Features;