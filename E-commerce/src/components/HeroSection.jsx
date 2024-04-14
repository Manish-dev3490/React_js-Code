import { ProductCard } from "./ProductCard";
import React, { useState, useEffect } from "react";
import usePopulateData from "../utils/usePopulateData";

export const HeroSection = () => {

    const {popularData,setPopularData}=usePopulateData;
   
    return (
        <>
          <div className="hero-section">
            <div className="hero-image">
                <img src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="Hero" />
            </div>

            <div className="shipped-information">
                <div className="products-button">
                    <button><i className="ri-riding-line"></i> Free Shipping</button>
                    <button><i className="ri-store-fill"></i> Authentic products</button>
                    <button><i className="ri-truck-fill"></i> Easy Return</button>
                    <button><i className="ri-bank-card-line"></i> Secure Payment</button>
                </div>
            </div>

            <h2>Popular Products</h2>
            <div className="products-list">
                {popularData.map((card)=>{
                    return <ProductCard  cardData={card}/>
                })}
            </div>

          </div>
        </>
    );
};
