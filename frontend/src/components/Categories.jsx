function Categories() {

    const categories = [
        "Laptops",
        "Monitors",
        "Keyboard",
        "Mouse"
    ];

    return (

        <section className="py-10 bg-white">

            <div className="max-w-7xl mx-auto px-8">

                <h2 className="text-3xl font-bold mb-6">
                    Categories
                </h2>

                <div className="flex flex-wrap gap-4">

                    {
                        categories.map(category => (

                            <button
                                key={category}
                                className="bg-blue-100 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-full transition"
                            >

                                {category}

                            </button>

                        ))
                    }

                </div>

            </div>

        </section>

    );

}

export default Categories;