import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Footer from './components/footer'
import Banner from './components/Banner'
import Wrapper from './components/Wrapper'
import Summary from './components/Summary'
import About from './components/About'
import Why from './components/Why'
import Services from './components/Services'
import Testimanials from './components/testimonials'
import Advicers from './components/Advicers'

function App() {


  return (
    <>
     <Header/>
     <Banner/>
     <Wrapper>
      <Summary/>
      <About/>
      <Why/>
      <Services/>
    
      <Testimanials/>
      <Advicers/>
     </Wrapper>
     <Footer/>
    </>
  )
}

export default App
