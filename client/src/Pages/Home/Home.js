import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Footer from "../../Components/Footer/Footer";
import Navigation from "../../Components/Navigation/Navigation";
// import ScrollArrow from "../../Components/ScrollArrow/ScrollArrow";

function Home() {
    return (
        <>
            <Navigation />
            <div>
 
      <section className="py-40 bg-[#2484ED] h-screen">
  
  


        <div className="container mx-auto flex flex-col items-center justify-center">

        <h1 className="text-5xl font-bold text-white text-center mb-8">
        Garrison Engineering & Robotics Society
          </h1>

          <h1 className="text-5xl font-bold text-white text-center mb-8">
            Manage your inventory with ease
          </h1>

          <p className="text-lg text-white text-center mb-12 px-10">
  Say goodbye to the hassle of tracking society items manually or making spreadsheets. Our inventory management system makes it simple and stress-free. Say hello to organized and efficient inventory management for our community.
</p>


        

          <Link
            to={"/auth/signup"}
            className="bg-[#ffffff] hover:bg-[#F48C41] text-black text-lg font-medium py-4 px-8 rounded-full transition-all duration-300"
          >
            Sign up now
          </Link>
        </div>

        <p className="text-lg text-white text-center mb-12 px-10 py-14">
        Made with ❤️ by Karimullah <br></br>
        ©2023 7Up's Studio All Rights Reserved
</p>



      </section>
    </div>

        </>
    );
}

export default Home;
