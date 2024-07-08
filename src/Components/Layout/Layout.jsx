import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Contact from "../Common/component/Contact";
import Login from "../Common/component/Login";
import Recovery from "../Common/component/register/Recovery";
import Singup from "../Common/component/register/Singup";
import Terms from "../Pages/Terms";
import Tours from "../Pages/Tours";
import HotelWeb from "../Pages/main/HotelWeb";
import PacksWeb from "../Pages/main/PacksWeb";


function Layout() {
  return (
    <>
     
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/country/:countryName" element={<Tours/>}/>
          <Route  path="/b2b" element={<Login/>}/>
          <Route path="/b2b/passwordRecovery" element={<Recovery/>}/>
          <Route path="/b2b/signup" element={<Singup/>}/>
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/hotel-bookings/hotel" element={<HotelWeb/>}/>
          <Route path="/tours" element={<PacksWeb/>}/>
        </Routes>
        <Footer />
    </>
  );
}

export default Layout;
