import './home.css'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Values from '../../components/Values'
import FAQs from '../../components/FAQS'
import Testimonials from '../../components/Testimonials'
import React, {  useEffect } from 'react';

const Home = () =>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
        <MainHeader />
        <Programs />
        <Values/>
        <FAQs/>
        <Testimonials/>
        
        </>
    )
}
export default Home;