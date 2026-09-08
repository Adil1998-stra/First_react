import { Key } from 'lucide-react';
import React, { useState } from 'react'
import {motion} from 'framer-motion'

const Faq = () => {

    const askedQustion = [
       { question: "What is your return policy?", 
        answer: "We offer a 7-day return policy on eligible products. The product should be unused and in its original condition.", 
    },
    { question: "How long does delivery take?", 
      answer: "Usually, orders are delivered within 3 to 7 business days depending on your location.", 

    },
    { question: "Do you offer cash on delivery?", 
      answer: "Yes, cash on delivery is available on selected products and locations.", 

    },
    { question: "How can I track my order?", 
      answer: "Once your order is shipped, you will receive a tracking link through which you can track your order.", 

    },
]
 const [openIndex, setOpenIndex] = useState(null);

 const handleToggle = (index)=>{
    if (openIndex === index ){
        setOpenIndex(null)
    }
    else{
        setOpenIndex(index)
    }
 }


  return (
    
    <>
     <motion.div 
                initial={{opacity:0, y:60}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:1}}
                viewport={{once:true}}

            >
      <section id='Faq' className="bg-[#f8f5f1] px-6 py-20 md:px-12 lg:px-20">
        {/* Heading */} 
        <div className="mx-auto mb-12 max-w-2xl text-center"> 
            <p className="mb-3 text-sm font-bold tracking-[3px] text-orange-500">
                 FAQ 
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"> Frequently Asked{" "} 
                <span className="text-orange-500">Questions</span> 
            </h2>
            <p className="text-gray-500"> 
                Find answers to some of the most common questions. 
            </p> 
        </div>

        <div className="mx-auto  max-w-3xl space-y-5">
            {askedQustion.map((faq,index)=>{
              
                return  <div className="overflow-hidden rounded-xl border border-gray-200"
                        key= {index}>
                    <button onClick={()=>{handleToggle(index)}} className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 hover:bg-gray-50">
                        <span>{faq.question}</span>
                        
                        <span className="ml-4 text-2xl text-orange-500"> 
                            {openIndex === index ? "-" : "+"} </span>
                    </button>
                        
                        {openIndex === index && (
                            <div className="border-t border-gray-100 px-6 py-5">
                                <p className="leading-7 text-gray-600">{faq.answer}</p>

                            </div>
                        )}
                </div>
                })}
        </div>
     
      </section>
      </motion.div>
    </>
  )
}

export default Faq
