import React from 'react'
import {motion} from 'framer-motion'

const Begin = () => {
    
  return (
    <>
    <motion.div 
        initial={{opacity:0, y:60}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
    >
    <div id='Collection' className='w-full pt-15'>
        <div className='mx-10 flex items-center gap-4'>
            <div className='w-16 h-px bg-[#c4a96e]'></div>
                <span className='text-sm text-[#c4a96e] uppercase font-serif'>
                    The Collection . 2026</span>
        </div>
        <div className='mx-10 mt-5 flex items-center gap-4'>
                <span className='text-3xl md:text-5xl text-black font-sans'>
                    Beauty That Speaks</span>
        </div>
        <div className='mx-20 md:mx-30 mt-2  flex items-center gap-4'>
                <span className=' text-2xl md:text-4xl text-[#c4a96e] font-sans italic'>
                    before words.</span>
        </div>

        <div className='mx-10 mt-5  flex items-center gap-4'>
                <span className='text-sm md:text-lg text-[#9e9088] font-serif italic'>
                    Every formula is thoughtfully created with premium ingredients,<br/> delivering beauty you can see and confidence you can feel...</span>   
        </div>
    </div>
    </motion.div>
    </>
  )
}

export default Begin
