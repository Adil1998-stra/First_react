import React from 'react'
import Remove from '../../assets/cart_cross_icon.png'
import ShopContext from '../../ContextApi/shopContext'
import { useContext } from 'react'

const CartItem = () => {
const {product,cartItem,removeToCart,getTotalAmt} = useContext(ShopContext)

  return (
    <>
        <div className="mt-25">
            {/* Cart Header */}
            <div className="hidden max-w-7xl mx-auto md:grid grid-cols-6 items-center bg-gray-100 px-6 py-4 rounded-t-lg font-semibold text-gray-700">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p className="text-center">Remove</p>
                
            </div>
               

            {/* Cart Item */}
            {product.map((e)=>{
                    if (cartItem[Number(e.id)]>0){
                    return (<React.Fragment key={e.id}>
                    {/* ---------------Desktop UI--------------- */}
                    <div className="hidden md:max-w-7xl md:mx-auto md:grid mb-30 grid-cols-6 items-center gap-4 px-6 py-5 border-b border-gray-200">
                {/* Product Image */}
                                <div className="md:flex md:items-center  md:gap-3  ">
                                <img src={e?.image} alt={e?.name} className="w-20 h-20  object-contain rounded-md"/>
                                </div>
                                <p className='text-gray-800 md:font-medium mr-4'>{e.name}</p>
                                <p className='text-gray-700'>₹{e.new_price}</p>
                                <p className='ml-6 text-gray-700'>{cartItem[e.id]}</p>
                                <p className='text-gray-700'>₹{e.new_price * cartItem[e.id]}</p>
                                <button onClick={()=>{removeToCart(e.id,cartItem[e.id])}} className='flex justify-center cursor-pointer'><img src={Remove} alt="" /> </button>
                    </div>


                   {/* ---------------Mobile UI--------------- */}
                <div className="md:hidden px-4 py-4">
                 <div className="relative border border-gray-200 rounded-xl p-4 shadow-sm">

                    {/* Product + Remove */}
                    <div className="flex items-start gap-4">
                    <img src={e.image} alt={e.name} className="w-20 h-20 object-contain rounded-lg"/>
                        <div className="flex-1 pr-6">
                            <h3 className="text-gray-800 font-medium">{e.name}</h3>
                            <p className="text-gray-600 mt-1">₹{e.new_price}</p>
                        </div>
                            {/* Remove */}
                            <button onClick={()=>{removeToCart(e.id)}}  ><img src={Remove} alt="Remove" className="w-4 h-4"/></button>
                    </div>

            {/* Quantity */}
            <div className="flex items-center justify-between mt-5">

              <p className="text-sm text-gray-500">Quantity</p>
                <p className="w-10 h-9 flex items-center justify-center border-x border-gray-300">
                  {cartItem[e.id]}
                </p>
            </div>
            {/* Total */}
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">Total</p>
                <p className="font-semibold">₹{e.new_price * cartItem[e.id]}</p>

            </div>

          </div>
        </div>
                    </React.Fragment>    
                )}
            })}     
                     
        </div>

<div className="max-w-7xl mt-12 mx-auto px-4 md:px-6 pb-10">
  <div className="w-full md:w-108 border border-gray-200 rounded-xl p-6 shadow-sm">

    <h2 className="text-xl font-semibold mb-5">
      Cart Total
    </h2>

    <div className="flex justify-between mb-3">
      <p className="text-gray-600">Subtotal</p>
      <p className="font-medium">₹{getTotalAmt()}</p>
    </div>

    <div className="flex justify-between mb-4">
      <p className="text-gray-600">Shipping</p>
      <p className="font-medium">₹ Free</p>
    </div>

    <div className="border-t pt-4 flex justify-between">
      <p className="text-lg font-semibold">Total</p>
      <p className="text-lg font-semibold">
        ₹{getTotalAmt()}
      </p>
    </div>

    <button className="w-full mt-5 bg-black text-white py-3 rounded-lg hover:bg-gray-800">
      Proceed to Checkout
    </button>

  </div>
</div>
          
    </>
  )
}

export default CartItem
 

