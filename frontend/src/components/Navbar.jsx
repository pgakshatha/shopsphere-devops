import { ShoppingCart, Search, User } from "lucide-react";
import { SITE } from "../constants/site";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-blue-600">
            {SITE.name}
          </h1>

          <p className="text-xs text-gray-500">
            {SITE.tagline}
          </p>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {SITE.navigation.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <button className="hover:text-blue-600 transition duration-300">
            <Search size={22} />
          </button>

          <button className="relative hover:text-blue-600 transition duration-300">
            <ShoppingCart size={22} />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              0
            </span>

          </button>

          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition duration-300">

            <User size={18} />

            Login

          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;