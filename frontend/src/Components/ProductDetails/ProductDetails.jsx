import React, { useContext, useState } from 'react'
import stars from '../../assets/star_icon.png'
import stars_dull from '../../assets/star_dull_icon.png'
import ShopContext from '../../ContextApi/shopContext'


const ProductDetails = (props) => {
 const [quantity,setQauntity] = useState(1)
 const {addToCart} = useContext(ShopContext)
 

const quantityAdd= ()=>{
    setQauntity(quantity+1)
}


const quantityLess= ()=>{

    setQauntity(Math.max(1, quantity-1))

}

  const{product} = props

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-700">
          Product Not Found
        </h2>
      </div>
    );
  }

    return (
    <>
    <div className="min-h-screen mt-15 bg-[#f8f5ef] px-4 py-10">

          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">

              {/* Product Image */}
              <div className="flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full max-w-lg h-80 md:h-[500px] object-cover rounded-2xl"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col justify-center">

                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {product.name}
                </h1>

                <div className="mt-5">
                  <span className="text-lg text-gray-400 line-through">
                    Rs. {product.old_price}
                  </span>

                  <p className="text-3xl font-bold text-[#c4a96e] mt-1">
                    Rs. {product.new_price}
                  </p>
                </div>

                <p className="text-gray-600 mt-6 leading-7">
                  This is a beautiful product with premium quality
                  and elegant design.
                </p>

                {/* Quantity */}
                <div className="flex items-center gap-4 mt-8">
                  <span className="font-semibold text-gray-700">
                    Quantity:
                  </span>

                  <button onClick={quantityLess} className="w-9 h-9 border rounded-full">
                    -
                  </button>

                  <span className="font-semibold">{quantity}</span>

                  <button onClick={quantityAdd} className="w-9 h-9 border rounded-full">
                    +
                  </button>
                </div>

                {/* Add To Cart */}
                <button onClick={()=>addToCart(Number(product.id),quantity)}
                  className="w-full md:w-80 h-12 mt-8
                  bg-[#c4a96e] text-white
                  rounded-3xl font-semibold
                  hover:bg-[#3d3530]
                  transition duration-300"
                >
                  Add To Cart
                </button>

              </div>

            </div>

          </div>

        </div>

    </>
  )
}

export default ProductDetails
