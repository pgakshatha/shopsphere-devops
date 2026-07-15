function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-3xl font-bold text-blue-400">
          🛍 ShopSphere
        </h1>

        <ul className="flex gap-8 text-lg">

          <li className="hover:text-blue-400 cursor-pointer">
            Home
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Products
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            About
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Contact
          </li>

        </ul>

        <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg">
          Login
        </button>

      </div>
    </nav>
  );
}

export default Navbar;