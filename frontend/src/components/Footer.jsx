function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold text-white mb-4">
              🛒 ShopSphere
            </h2>

            <p className="text-gray-400 leading-7">
              A production-ready e-commerce application built with
              React, Node.js, PostgreSQL, Docker, Jenkins and AWS.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li className="hover:text-white cursor-pointer">
                Home
              </li>

              <li className="hover:text-white cursor-pointer">
                Products
              </li>

              <li className="hover:text-white cursor-pointer">
                Categories
              </li>

              <li className="hover:text-white cursor-pointer">
                Contact
              </li>

            </ul>

          </div>

          {/* Technologies */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Technologies
            </h3>

            <ul className="space-y-3">

              <li>React</li>

              <li>Node.js</li>

              <li>PostgreSQL</li>

              <li>Docker</li>

              <li>AWS</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-4">
              DevOps Portfolio
            </h3>

            <p>
              Built by
            </p>

            <p className="font-semibold text-white mt-2">
              Akshatha P G
            </p>

            <p className="mt-3 text-gray-400">
              DevOps Engineer
            </p>

          </div>

        </div>

        <hr className="my-10 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">

          <p>
            © 2026 ShopSphere. All Rights Reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Built with ❤️ using React • Node.js • PostgreSQL • Docker
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;