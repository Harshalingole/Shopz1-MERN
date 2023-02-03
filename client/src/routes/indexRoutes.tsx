import React, { ReactElement, FC } from "react";
import {Route, Routes } from "react-router-dom";
import HeroSection from "../pages/Layouts/HeroSection/HeroSection";
import Home from "../pages/Home/Home";
import Signup from "../pages/Account/SignUp";
import Login from "../pages/Account/Login";

const IndexRouter: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<HeroSection />} />
        <Route path="home" element={<HeroSection />} />
        <Route path="cart" element={<h1 className="text-xl">Cart</h1>} />
        <Route path="account" element={<h1>Account</h1>}>
          <Route index element={<h1>Profile</h1>} />
          <Route path="profile" element={<h1>Profile</h1>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/men" element={<h1>ProductList "Men"</h1>} />
        <Route path="/women" element={<h1>ProductList "Women"</h1>} />
        <Route path="/kid" element={<h1>ProductList "kid"</h1>} />
        <Route path="/product" element={<h1>Product Detail</h1>} />
        <Route path="/wishlist" element={<h1>Wishlist</h1>} />
      </Route>
    </Routes>
  );
};

export default IndexRouter;
