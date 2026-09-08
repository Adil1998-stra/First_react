import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-12 lg:px-20">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        
          {/* Brand */}
          <div>
            <h2 className="mb-4 text-2xl font-bold">
                Natura<span className="text-orange-500">lable</span>
            </h2>

            <p className="max-w-xs leading-7 text-gray-400">
              Quality products, trusted service, and a shopping experience
              made with you in mind.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition hover:bg-orange-500 hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition hover:bg-orange-500 hover:text-white"
              >
                ◎
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition hover:bg-orange-500 hover:text-white"
              >
                𝕏
              </a>

            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a
                  href="#Home"
                  className="transition hover:text-orange-500"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#Collection"
                  className="transition hover:text-orange-500"
                >
                  Products
                </a>
              </li>

              <li>
                <a
                  href="#About"
                  className="transition hover:text-orange-500"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#Faq"
                  className="transition hover:text-orange-500"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="#Contact"
                  className="transition hover:text-orange-500"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>


          {/* Support */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Support
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a
                  href="#"
                  className="transition hover:text-orange-500"
                >
                  Shipping & Delivery
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-orange-500"
                >
                  Return Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-orange-500"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-orange-500"
                >
                  Terms & Conditions
                </a>
              </li>

            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Contact Us
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="flex gap-3">
                <span className="text-orange-500">✉</span>
                <span>hello@example.com</span>
              </li>

              <li className="flex gap-3">
                <span className="text-orange-500">☎</span>
                <span>+91 98765 43210</span>
              </li>

              <li className="flex gap-3">
                <span className="text-orange-500">📍</span>
                <span>New Delhi, India</span>
              </li>

            </ul>
          </div>

        </div>
      </div>


      {/* Bottom Bar */}
      <div className="border-t border-gray-800">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-gray-500 md:flex-row md:px-12 lg:px-20">

          <p>
            © 2026 YourBrand. All rights reserved.
          </p>

          <p>
            Made with <span className="text-orange-500">♥</span> for our customers
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
