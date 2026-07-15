import { Truck, ShieldCheck, Headphones, BadgeDollarSign } from "lucide-react";

function Features() {

  const features = [

    {
      icon: <Truck size={40} />,
      title: "Fast Delivery",
      desc: "Get products delivered quickly across India."
    },

    {
      icon: <ShieldCheck size={40} />,
      title: "Secure Payment",
      desc: "100% safe and secure payment gateway."
    },

    {
      icon: <BadgeDollarSign size={40} />,
      title: "Best Prices",
      desc: "Premium quality products at competitive prices."
    },

    {
      icon: <Headphones size={40} />,
      title: "24/7 Support",
      desc: "Our support team is available anytime."
    }

  ];

  return (

    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 text-center shadow hover:shadow-xl transition"
            >

              <div className="text-blue-600 flex justify-center mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold">
                {feature.title}
              </h3>

              <p className="text-gray-500 mt-3">
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Features;