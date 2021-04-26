import React from 'react'
import NavBarHeader from '../Components/NavBarHeader'
import NavHead from '../Components/NavHead'
import ServiceMainList from '../Components/ServiceMainList'
import ServiceFront from '../Components/ServiceFront'
import Footer from '../Components/Footer'

class ServicePage extends React.Component {
    state = {  }
    render() { 
        return (
            <>
               <NavHead/>
               <NavBarHeader/>
               <ServiceFront/>
               <ServiceMainList/>
               <Footer/>
            </>
          );
    }
}
 
export default ServicePage;

