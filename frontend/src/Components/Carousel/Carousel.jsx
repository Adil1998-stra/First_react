import React, { useEffect, useState } from 'react'
import banner from '../../assets/banner.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'


const Carousel = () => {
const images  = [banner,banner2,banner3]

const [oldBanner,setNewBanner] = useState(0)

useEffect(()=>{
    const interval = setInterval(() => {
       setNewBanner((prev)=>(prev+1) % images.length) 
    }, 6000);
    return ()=> clearInterval(interval)
},[])

  return (

     <div id='Home' className="pt-20 w-full h-[700px] overflow-hidden">
       <div className="flex h-[600px] transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${oldBanner * 100}%)`,
        }}>
            {images.map((img,indx) => {
               return <img className="w-full h-full flex-shrink-0" key={indx} src={img} alt="" /> 
            })}   
       </div>

    </div>
  )
}

export default Carousel
