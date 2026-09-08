import React from 'react'
import {motion} from 'framer-motion'

const WhyChooseUs = () => {
  return (
    <>
           <motion.div 
                initial={{opacity:0, y:60}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:1}}
                viewport={{once:true}}

            >
      {/* ```jsx */}
<section className="w-full bg-[#f8f5f1] py-16 px-4 sm:px-6 lg:px-10">
  <div className="max-w-7xl mx-auto">

    {/* Section Heading */}
    <div className="text-center mb-12">
      <p className="text-sm tracking-[0.3em] uppercase text-[#c4a96e] font-medium">
        Why Choose Us
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3d3530] mt-3">
        Beauty That Cares
      </h2>

      <p className="max-w-2xl mx-auto text-gray-600 mt-4 text-sm sm:text-base leading-7">
        We believe beauty should feel as good as it looks. Every product
        is thoughtfully created to bring quality, care, and confidence
        into your everyday routine.
      </p>
    </div>

    {/* Features */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Card 1 */}
      <div className="group bg-white rounded-2xl p-7  text-center
        border border-[#e8dfd5] hover:border-[#c4a96e]
        shadow-sm hover:shadow-lg transition-all duration-300">

        <div className="w-16 h-16 mx-auto flex items-center justify-center
          rounded-full bg-[#f8f1e6] text-3xl
          group-hover:bg-[#c4a96e] transition duration-300">
          🌿
        </div>

        <h3 className="text-xl font-semibold text-[#3d3530] mt-5">
          Natural Ingredients
        </h3>

        <p className="text-gray-600 text-sm leading-6 mt-3">
          Carefully selected ingredients that are gentle, effective,
          and made with your skin in mind.
        </p>
      </div>

      {/* Card 2 */}
      <div className="group bg-white rounded-2xl p-7 text-center
        border border-[#e8dfd5] hover:border-[#c4a96e]
        shadow-sm hover:shadow-lg transition-all duration-300">

        <div className="w-16 h-16 mx-auto flex items-center justify-center
          rounded-full bg-[#f8f1e6] text-3xl
          group-hover:bg-[#c4a96e] transition duration-300">
          ✨
        </div>

        <h3 className="text-xl font-semibold text-[#3d3530] mt-5">
          Premium Quality
        </h3>

        <p className="text-gray-600 text-sm leading-6 mt-3">
          High-quality beauty products crafted with attention to
          detail and a commitment to excellence.
        </p>
      </div>

      {/* Card 3 */}
      <div className="group bg-white rounded-2xl p-7 text-center
        border border-[#e8dfd5] hover:border-[#c4a96e]
        shadow-sm hover:shadow-lg transition-all duration-300">

        <div className="w-16 h-16 mx-auto flex items-center justify-center
          rounded-full bg-[#f8f1e6] text-3xl
          group-hover:bg-[#c4a96e] transition duration-300">
          🐰
        </div>

        <h3 className="text-xl font-semibold text-[#3d3530] mt-5">
          Cruelty Free
        </h3>

        <p className="text-gray-600 text-sm leading-6 mt-3">
          Beauty products created with compassion, because looking
          beautiful should never come at a cost to animals.
        </p>
      </div>

      {/* Card 4 */}
      <div className="group bg-white rounded-2xl p-7 text-center
        border border-[#e8dfd5] hover:border-[#c4a96e]
        shadow-sm hover:shadow-lg transition-all duration-300">

        <div className="w-16 h-16 mx-auto flex items-center justify-center
          rounded-full bg-[#f8f1e6] text-3xl
          group-hover:bg-[#c4a96e] transition duration-300">
          💖
        </div>

        <h3 className="text-xl font-semibold text-[#3d3530] mt-5">
          Skin-Loving Care
        </h3>

        <p className="text-gray-600 text-sm leading-6 mt-3">
          Thoughtfully designed products that fit beautifully into
          your daily skincare and beauty routine.
        </p>
      </div>

    </div>
  </div>
</section>
</motion.div>

    </>
  )
}

export default WhyChooseUs
