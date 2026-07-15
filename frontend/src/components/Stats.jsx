import { Package, Users, Building2, Star } from "lucide-react";

function Stats() {
  const stats = [
    {
      icon: <Package size={40} />,
      number: "500+",
      title: "Products",
    },
    {
      icon: <Users size={40} />,
      number: "10K+",
      title: "Happy Customers",
    },
    {
      icon: <Building2 size={40} />,
      number: "50+",
      title: "Trusted Brands",
    },
    {
      icon: <Star size={40} />,
      number: "99%",
      title: "Customer Satisfaction",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 text-center shadow hover:shadow-xl transition duration-300"
            >
              <div className="text-blue-600 flex justify-center mb-5">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold text-gray-900">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-600 font-medium">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;