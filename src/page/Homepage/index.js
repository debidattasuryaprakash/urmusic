import React from "react";
import Navbar from "../../component/navbar/index";
import Footer from "../../component/footer/footer"
import { HomeStyled } from "./style"
import BgLayout from "../../Layouts/bglayout1/bgLayout1"
import Testimonials from "../../component/Testimonals/testi"
import Cards from "../../component/Cards/Cards";
import TextCard from "../../component/Text-Card/TextCard";
import Community from "../../component/Community/Community";
import Range from "../../component/Range/Range";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

function Homepage() {
  return (
    <>
      <BgLayout>
        <Navbar />
        <HomeStyled>
          <div className="Donate-Button">
            <RiMoneyDollarCircleFill className="Icon" />
          </div>


          <div className="Header-Section">
            <span className="Header-Title">Be Among the  <br />first to experience <br /> UR Music</span>
            <span className="Header-Text">Embark on a musical journey unlike any other and join the ranks of pioneers discovering UR Music's innovative soundscape. </span>
            <button className="Header-button">Sign Up</button>
          </div>
          <TextCard />
          <Cards />
          <Range />
          <Testimonials />
          <Community />
          <Footer />
        </HomeStyled>
      </BgLayout>
    </>
  );
}

export default Homepage;
