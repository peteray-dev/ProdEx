import React from 'react'
import AboutFront from '../Components/AboutFront'
import BestProvider from '../Components/BestProvider'
import Footer from '../Components/Footer'
import NavBarHeader from '../Components/NavBarHeader'
import NavHead from '../Components/NavHead'
import Quote from '../Components/QuoteRequest'
import TeamList from '../Components/TeamList'
import TestimonialList from '../Components/TestimonialList'
import WelcomeFront from '../Components/WelcomeFront'

class About extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
                <NavHead/>
                <NavBarHeader/>
                <AboutFront/>
                <WelcomeFront/>
                <Quote/>
                <BestProvider/>
                <TeamList/>
                <TestimonialList/>
                <Footer/>
            </>
         );
    }
}
 
export default About;