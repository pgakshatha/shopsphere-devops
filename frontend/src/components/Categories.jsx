function Categories() {

  const categories = [
    "💻 Laptops",
    "🖥️ Monitors",
    "⌨️ Keyboards",
    "🖱️ Mouse"
  ];

  return (

    <section className="bg-slate-100 py-16">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-10">
          Shop by Category
        </h2>

        <div className="flex flex-wrap justify-center gap-6">

          {categories.map((category) => (

            <button
              key={category}
              className="bg-white px-8 py-4 rounded-full shadow hover:bg-blue-600 hover:text-white transition"
            >
              {category}
            </button>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Categories;