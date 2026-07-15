import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones
} from "lucide-react";

function TrustBanner() {

  const items = [
    {
      icon: <Truck size={28} />,
      title: "Free Shipping"
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Secure Payment"
    },
    {
      icon: <RotateCcw size={28} />,
      title: "Easy Returns"
    },
    {
      icon: <Headphones size={28} />,
      title: "24×7 Support"
    }
  ];

  return (

    <section className="bg-white border-y">

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="grid md:grid-cols-4 gap-8">

          {items.map((item, index) => (

            <div
              key={index}
              className="flex items-center justify-center gap-3"
            >

              <div className="text-blue-600">
                {item.icon}
              </div>

              <h3 className="font-semibold">
                {item.title}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default TrustBanner;