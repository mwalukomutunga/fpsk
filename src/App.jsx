import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import Footer from "./components/footer";
import Banner from "./components/Banner";
import Wrapper from "./components/Wrapper";
import Summary from "./components/Summary";
import Why from "./components/Why";
import Services from "./components/Services";
import Testimanials from "./components/testimonials";
import Advicers from "./components/Advicers";
import AboutPage from "./components/About2";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Wrapper>
        <Summary />
        <AboutPage />
        <Why />
        <Services />
        <Testimanials />
        <Advicers />
        {/* <Contact /> */}
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
