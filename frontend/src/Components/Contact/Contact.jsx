import React from 'react'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <>
         <motion.div 
                initial={{opacity:0, y:60}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:1}}
                viewport={{once:true}}

            >
    <section id='Contact' className="bg-[#f5f0e8] px-6 py-20 md:px-12 lg:px-20">

      {/* Heading */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-3 text-sm font-bold tracking-[3px] text-orange-500">
          CONTACT
        </p>

        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          We'd Love to{" "}
          <span className="text-orange-500">Hear From You</span>
        </h2>

        <p className="text-gray-500">
          Have a question or need help? Feel free to get in touch with us.
        </p>
      </div>


      {/* Contact Content */}
      <div className="mx-auto grid max-w-6xl gap-18 lg:grid-cols-2">

        {/* Left Side */}
        <div className="rounded-xl bg-gray-900 p-8 text-white md:p-10">

          <p className="mb-3 text-sm font-bold tracking-[3px] text-orange-500">
            GET IN TOUCH
          </p>

          <h3 className="mb-4 text-3xl font-bold">
            Let's talk about your{" "}
            <span className="text-orange-500">needs.</span>
          </h3>

          <p className="mb-20 max-w-md  leading-7 text-gray-400">
            Whether you have a question about our products, delivery,
            or anything else, our team is ready to help.
          </p>


          {/* Contact Info */}
          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-500">
                ✉
              </div>

              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium">hello@example.com</p>
              </div>
            </div>


            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-500">
                ☎
              </div>

              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium">+91 98765 43210</p>
              </div>
            </div>


            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-500">
                📍
              </div>

              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-medium">New Delhi, India</p>
              </div>
            </div>

          </div>
        </div>


        {/* Right Side - Form */}
        <div className="rounded-xl border border-gray-200 bg-white p-8 md:p-10">

          <h3 className="mb-2 text-2xl font-bold text-gray-900">
            Send us a message
          </h3>

          <p className="mb-8 text-gray-500">
            Fill out the form and we'll get back to you soon.
          </p>


          <form className="space-y-5">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>


            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>


            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              ></textarea>
            </div>


            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-600 hover:-translate-y-0.5"
            >
              Send Message →
            </button>

          </form>
        </div>

      </div>
    </section>
    </motion.div>

    </>
  )
}

export default Contact
