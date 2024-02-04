import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import Footer from "./components/footer";
import Wrapper from "./components/Wrapper";
import Contact from "./components/contact";
import SubBanner from "./components/SubBanner";

function Cont() {
  return (
    <>
      <Header />
      <SubBanner />
      <Wrapper>
        <Contact />
      </Wrapper>
      <Footer />
    </>
  );
}

export default Cont;
