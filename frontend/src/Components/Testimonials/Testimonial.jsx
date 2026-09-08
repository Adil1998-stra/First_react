import React from 'react'
import {motion} from 'framer-motion'

const Testimonial = () => {
  const testimonials = [
     { id: 1, 
        name: "Rahul Sharma", 
        role: "Verified Customer", 
        image: "https://i.pravatar.cc/150?img=12", 
        review: "The quality of the products is amazing. I really loved the overall shopping experience.",
     },
    
    { id: 2, name: "Priya Singh", role: "Verified Customer", image: "https://i.pravatar.cc/150?img=47", review: "Great products, fast delivery and excellent customer support. Highly recommended!", }, { id: 3, name: "Aman Verma", role: "Verified Customer", image: "https://i.pravatar.cc/150?img=33", review: "I am very happy with my purchase. The product was exactly as shown on the website.", }, ];
    
    return (
    <>
           <motion.div 
                initial={{opacity:0, y:60}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:1}}
                viewport={{once:true}}

            >
    <section className="bg-[#f5f0e8] px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto mb-12 max-w-2xl text-center"> 
        <p className="mb-3 text-sm font-bold tracking-[5px] text-orange-500"> 
            TESTIMONIALS 
        </p>  
        {/* {"  "} this is for space */}

         <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"> What Our{"  "} 
            <span className="text-orange-500">Customers Say</span> 
        </h2>
        </div>
        
        {/* Testimonials Cards */} 
        
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
         {testimonials.map((testimonial) => ( 
            <div key={testimonial.id} className="rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg" >
            {/* Stars */} 
            <div className="mb-5 text-lg text-yellow-400"> ★★★★★ </div>
            {/* Review */} 
            <p className="mb-6 leading-7 text-gray-600"> "{testimonial.review}" </p>
            {/* Customer */} 
            <div className="flex items-center gap-4"> 
                <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" />
            <div>

            <h3 className="font-semibold text-gray-900"> {testimonial.name} </h3>
            
            <p className="text-sm text-gray-500"> {testimonial.role} </p>
            </div> 
            </div> 
            </div> 
            ))} 

        </div>

    </section>
    </motion.div>
      
    </>
  )
}
export default Testimonial
