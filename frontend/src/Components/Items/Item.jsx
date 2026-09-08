import React from 'react'
import all_product from '../../assets/all_product'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'


// framer motion section pr scroll se ane pr jo transition hoti hai uske liye hai 
// viewport once only one time 

const Item = (props) => {

  return (
    <>
          <motion.div 
                initial={{opacity:0, y:60}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:1}}
                viewport={{once:true}}

            >
      <div className="mx-auto w-[90%]  max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-md mt-6 sm:mt-10 mb-5 overflow-hidden shadow-xl cursor-pointer bg-[#ede7dc] border border-[#c4a96e] rounded-3xl">

          {/* Image */}
          <div className="overflow-hidden rounded-t-2xl">
            <Link to={`/product/${props.id}`}>
              <img
                src={props.image}
                alt={props.name}
                className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </Link>
          </div>

          {/* Product Name */}
          <div className="px-4 pt-3">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 truncate">
              {props.name}
            </h2>
          </div>

          {/* Price */}
          <div className="flex items-end flex-col px-4 mt-2">
            <span className="text-sm sm:text-base md:text-lg text-gray-400 line-through">
              Rs. {props.old_price}
            </span>

            <span className="text-xl sm:text-2xl font-bold text-[#c4a96e]">
              Rs. {props.new_price}
            </span>
          </div>

          {/* Add To Cart */}
          <div className="flex justify-center px-4 pb-5 mt-3">
            <button
              className="w-full sm:w-60 h-10 border-2 border-[#c4a96e]
              rounded-3xl text-[#c4a96e] hover:text-white font-medium
              hover:bg-[#3d3530] transition duration-300"
            >
              Add To Cart
            </button>
          </div>

        </div>
      </motion.div> 
    </>
  )
}

export default Item
