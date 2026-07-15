import { Mail } from "lucide-react";

function Newsletter() {
  return (
    <section className="bg-blue-600 py-20">

      <div className="max-w-4xl mx-auto px-6 text-center text-white">

        <Mail
          size={60}
          className="mx-auto mb-6"
        />

        <h2 className="text-4xl font-bold">
          Stay Updated
        </h2>

        <p className="mt-5 text-blue-100 text-lg">
          Subscribe to receive exclusive offers,
          product launches and technology updates.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 rounded-xl text-gray-800 w-full md:w-96 outline-none"
          />

          <button
            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;