import React, { ReactElement, FC } from "react";
import {Route, Routes } from "react-router-dom";
import HeroSection from "../pages/Layouts/HeroSection/HeroSection";
import Home from "../pages/Home/Home";
import Signup from "../pages/User/SignUp";
import Login from "../pages/User/Login";
import Account from "../pages/User/Account";
import Sidebar from "../pages/User/SIdebar";
import AllProduct from "../pages/AllProducts/AllProduct";
import ProductPage from "../pages/ProductPage/ProductPage";

const IndexRouter: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<HeroSection />} />
        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Product */}
        <Route path="/products" element={<AllProduct />} />
        <Route path="/product/:id" element={<ProductPage />} />

        {/* Account */}
        <Route path="account" element={<Sidebar activeTab="profile" />}>
          <Route index element={<Account />} />
          <Route path="profile" element={<h1>Profile</h1>} />
        </Route>
        
        <Route path="/men" element={<h1>ProductList "Men"</h1>} />
        <Route path="/women" element={<h1>ProductList "Women"</h1>} />
        <Route path="/kid" element={<h1>ProductList "kid"</h1>} />
        <Route path="/product" element={<h1>Product Detail</h1>} />
        <Route path="/wishlist" element={<h1>Wishlist</h1>} />
        <Route path="cart" element={<h1 className="text-xl">Cart</h1>} />

      </Route>
    </Routes>
  );
};

export default IndexRouter;
