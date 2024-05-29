import React from "react";
import Banner from "../components/common/Banner";
import Footer from "../components/common/Footer";
import NavbarTwo from "../components/common/NavbarTwo";


function Gallery() {
  return (
    <>
      <NavbarTwo />
      <Banner
        title="Life as SSTECH"
        image="https://images.pexels.com/photos/6914421/pexels-photo-6914421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        btitle="MEMORIES"
      />
      
      
      <Footer />
    </>
  );
}

export default Gallery;
