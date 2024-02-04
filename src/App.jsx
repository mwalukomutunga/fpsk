import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Footer from './components/footer'
import Banner from './components/Banner'
import Wrapper from './components/Wrapper'
import Summary from './components/Summary'

function App() {


  return (
    <>
     <Header/>
     <Banner/>
     <Wrapper>
      <Summary/>
     </Wrapper>
     <Footer/>
    </>
  )
}

export default App
