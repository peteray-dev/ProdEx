import React from "react"
import {Route} from 'react-router-dom'
// const webpack = require('webpack');

// plugins: [
//     new webpack.ProvidePlugin({
//       $: 'jquery',
//       jQuery: 'jquery',
//       'window.jQuery': 'jquery'
//     }),
// ];


import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './vendors/css/style.css'
import './vendors/fonts/fonts.css'
import 'animate.css/animate.min.css'
import 'flat-icons/interface.css'
import 'magnific-popup/dist/magnific-popup.css'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'react-icons'
// import 'owl.carousel'
// import {} from 'animate.css/source/ft'
// import 'react-bootstrap-date-picker'
// import 'react-bootstrap-date-picker/src/index'
// import 'react-jqueryui-datepicker'

//-------------------------------
// import './vendors/css/animate.css'
// import './vendors/css/bootstrap-datepicker.css'
// import './vendors/css/flaticon.css'
// import './vendors/css/jquery-timepicker.css'
// import './vendors/css/magnific-popup.css'
// import './vendors/css/owl.carousel.min.css'
// import './vendors/css/owl.theme.default.min.css'

//-------------JS Script-----
// import 'owl-carousel/owl-carousel/owl.carousel'
// import './vendors/js/jquery-3.3.1.slim.min.js'
// import './vendors/js/popper.min.js'
// import './vendors/js/bootstrap.min.js'





import HomePage from "./Pages/HomePage"
import About from "./Pages/About"
import ServicePage from "./Pages/ServicePage"
import ProjectPage from "./Pages/ProjectPage"
import Blog from "./Pages/Blog"




class App extends React.Component {
  state = {  }
  render() { 
    return ( 

      <>
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/about' component={About}></Route>
      <Route path="/service" component={ServicePage}></Route>
      <Route path="/project" component={ProjectPage}></Route>
      <Route path="/blog" component={Blog}/>
      
      
      
      
      
      </>



     );
  }
}
 
export default App;
