import React, { ReactElement, FC } from "react";
import {Route, Routes } from "react-router-dom";
import HeroSection from "../pages/Layouts/HeroSection/HeroSection";
import Home from "../pages/Home/Home";
import Signup from "../pages/User/SignUp";
import Login from "../pages/User/Login";
import Account from "../pages/User/Account";
import Sidebar from "../pages/User/SIdebar";
import AllProduct from "../pages/AllProducts/AllProduct";

const IndexRouter: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<HeroSection />} />
        <Route path="home" element={<HeroSection />} />
        <Route path="cart" element={<h1 className="text-xl">Cart</h1>} />
        <Route path="account" element={<Sidebar activeTab="profile" />}>
          <Route index element={<Account />} />
          <Route path="profile" element={<h1>Profile</h1>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/men" element={<AllProduct />} />
        <Route path="/women" element={<h1>ProductList "Women"</h1>} />
        <Route path="/kid" element={<h1>ProductList "kid"</h1>} />
        <Route path="/product" element={<h1>Product Detail</h1>} />
        <Route path="/wishlist" element={<h1>Wishlist</h1>} />
      </Route>
    </Routes>
  );
};

export default IndexRouter;
