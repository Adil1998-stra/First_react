import React from 'react'
import Carousel from '../Carousel/Carousel'
import Begin from '../BeginThoughts/Begin'
import Product from '../Products/Product'
import About from '../About/About'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import Testimonial from '../Testimonials/Testimonial'
import Faq from '../FAQ/Faq'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'


const Home = () => {
  return (
    <>
      <Carousel/>
      <Begin/>
      <Product/>
      <About/>
      <WhyChooseUs/>
      <Testimonial/>
      <Faq/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
