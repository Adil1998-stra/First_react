import { CheckCircle } from "lucide-react";
import model from '../../assets/model2.JPG'
import {motion} from 'framer-motion'

const About = () => {
  const features = [
    "Premium quality products",
    "Fast and secure delivery",
    "Affordable prices",
    "24/7 customer support",
  ];

  return (
              <motion.div 
                initial={{opacity:0, y:60}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:1}}
                viewport={{once:true}}

            >
    <section id="About" className="py-32 bg-[#e4ddd0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-15 items-center">

          {/* Image */}
          <div>
            <img
              src={model}
              alt="About us"
              className="rounded-2xl shadow-lg w-full object-cover grayscale"
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-3">
                <div className='w-16 h-px bg-[#c4a96e]'></div>
                <p className="text-black font-semibold ">
                About Us.
                </p>
            </div>       

            <h2 className="text-4xl font-serif text-gray-900 mb-2">
              Creating quality products for a 
            </h2>
            <h2 className='text-5xl text-[#c4a96e] font-sans italic mb-6'>
                better experience
            </h2>

            <p className="text-[#9e9088] font-sans  leading-relaxed mb-6">
                We believe shopping should be simple, enjoyable, and affordable. Our team is 
                dedicated to providing high-quality products that combine modern design with 
                lasting performance Since our journey began, our focus has been on delivering 
                exceptional value and building lasting relationships with our customers. Every product is carefully selected to ensure it meets our standards for quality and reliability.
                Whether you're looking for the latest trends or everyday essentials, we're here to make your shopping experience smooth, secure, and satisfying.
                
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-black w-6 h-6" />
                  <span className="text-[#9e9088]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

  

          </div>

        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default About;
