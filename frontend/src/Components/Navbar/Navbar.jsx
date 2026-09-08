import React, { useContext, useState } from 'react'
import Main_logo from '../../assets/Capture.svg';
import Cart from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import ShopContext from '../../ContextApi/shopContext';


const Navbar = () => {
  const[menu,setMenu] = useState("Home")
  const [mobileMenu, setMobileMenu] = useState(false)
  const{cartItem} = useContext(ShopContext)
  console.log(cartItem)

  const totalCartItems = Object.values(cartItem).reduce(
  (total, quantity) => total + quantity,
  0
);

  return (
    <>
      <nav>
        <div className="fixed top-0 left-0 z-50 w-full bg-[#f5f0e8]  border-b border-[#c4a96e] ">
            <div className='flex items-center justify-between px-4 md:px-2'>
               <div className="flex items-center">
                  <img className='w-25 h-20 'src={Main_logo} alt="" />
                  <span className=' pt-4 font-bold text-[#c4a96e] text-2xl md:text-3xl lg:text-4xl '>Naturalable</span>
                </div>
           
            <div className=" hidden md:block md:text-sm lg:text-lg  text-[#c4a96e]  ">
                <ul className=' flex items-center gap-4 lg:gap-13' >
                    <li onClick={()=>{setMenu("Home")}}><Link to='/'>Home</Link> {menu==='Home'?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("About")}}><a href='#About'>About Us</a>{menu==='About'?<hr/>:<></>}</li>
                    {/* <li onClick={()=>{setMenu("Home")}}><Link to='/About'>About Us</Link> {menu==='Home'?<hr/>:<></>}</li> */}
                    {/* is tarah se hm use krte hai jb hme click kre pr dusre page ko load krna hai bina buffrering
                    lekin agar single page ke kisi section pr jaan ho to hmm (a href) use krte hai jaise kiya hai us 
                    section me same naam se id = '' pass krni hoti hai check any component */}
                    <li onClick={()=>{setMenu("Collection")}}><a href='#Collection'>Collection</a>{menu==='Collection'?<hr/>:<></>}</li>   
                    <li onClick={()=>{setMenu("Contact")}}><a href='#Contact'>Contact</a>{menu==='Contact'?<hr/>:<></>}</li>
                   
                </ul>
            </div> 
            <div className='relative hidden md:block '>
                <div className="absolute -top-2 -right-2 bg-red-700 w-5 h-5 text-center text-[13px] text-white rounded-full">{totalCartItems}</div>
                <Link to='/Cart'><img className='size-8 cursor-pointer ' src={Cart} alt="" /></Link>           
                
           </div>
           <Link to='/Login/Signup' ><button className="hidden md:block cursor-pointer mr-9 md:w-25 md:text-sm lg:w-40 lg:font-medium h-10 mt-5  border-2 border-[#c4a96e]
             rounded-3xl text-[#c4a96e] hover:text-white  hover:bg-[#b39458]
             transition duration-300">
            Login/Signup
            </button></Link>  
             <button
                  onClick={() => setMobileMenu(!mobileMenu)}
                  className="md:hidden text-[#c4a96e] text-3xl cursor-pointer"
                >
                  {mobileMenu ? "✕" : "☰"}
            </button>

           </div>

                        {/* ================= MOBILE MENU ================= */}
          {mobileMenu && (
            <div className="md:hidden bg-[#f5f0e8] border-t border-[#c4a96e]">
              <ul className="flex flex-col items-center gap-5 py-6 
              text-lg text-[#c4a96e]">

                <li
                  onClick={() => {
                    setMenu("Home");
                    setMobileMenu(false);
                  }}
                >
                  <Link to="/Home">
                    Home
                  </Link>
                </li>

                <li
                  onClick={() => {
                    setMenu("About");
                    setMobileMenu(false);
                  }}
                >
                  <a href="#About">
                    About Us
                  </a>
                </li>

                <li
                  onClick={() => {
                    setMenu("Contact");
                    setMobileMenu(false);
                  }}
                >
                  <a href="#Contact">
                    Contact
                  </a>
                </li>

                <li
                  onClick={() => {
                    setMenu("Collection");
                    setMobileMenu(false);
                  }}
                >  
                  <a href="#Collection">
                    Collection
                  </a>
                </li>
                {/* cart items */}
                <li>
                   <div className='relative  '>
                    <div className="absolute -top-2 -right-2 bg-red-700 w-5 h-5 text-center text-[13px] text-white rounded-full">{totalCartItems}</div>
                    <Link to='/cart'><img className='size-8 cursor-pointer ' src={Cart} alt="" /></Link>           
                    </div>
                </li>

                {/* Mobile Login */}
                <li>
                  <Link to="/Login/Signup">
                    <button
                      onClick={() => setMobileMenu(false)}
                      className="w-40 h-10 
                      border-2 border-[#c4a96e]
                      rounded-3xl text-[#c4a96e]
                      hover:text-white
                      hover:bg-[#b39458]
                      transition duration-300"
                    >
                      Login/Signup
                    </button>
                  </Link>
                </li>


              </ul>

            </div>
          )}

        </div>
      </nav> 
    </>
  )
}

export default Navbar
