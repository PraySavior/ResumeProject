import Navbar from './Components/Navbar';
import Top from './Components/Top';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Testimonial from './Components/Testimonial';
import Services from './Components/Services';
import Blog from './Components/Blog';
import Touch from './Components/Touch';
import Footer from './Components/Footer';
import React, { useEffect } from 'react';




function App() {
  useEffect(() => {
    document.title = 'Charles Anderson Resume';
  }, []);
  return (
    <div className='main-div'>
      <Navbar></Navbar>
      <Top></Top>
      <Portfolio></Portfolio>
      <Resume></Resume>
      <Testimonial></Testimonial>
      <Services></Services>
      <Blog></Blog>
      <Touch></Touch>
      <Footer></Footer>
      {/* <div className='try'></div> */}
    </div>
  );
}

export default App;
