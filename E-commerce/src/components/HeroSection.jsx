import { ProductCard } from "./ProductCard";
import React, { useState, useEffect } from "react";
import usePopulateData from "../utils/usePopulateData";
import { hero_section_img } from "../utils/constant";

export const HeroSection = () => {

    const {popularData,setPopularData}=usePopulateData();
   
    return (
        <>
          <div className="hero-section">
            <div className="hero-image">
                <img src={hero_section_img}  alt="Hero" />
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
                {
                    popularData.map((check)=>{
                        return <ProductCard key={check.id} cardData={check}></ProductCard>
                         
                    })
                }
            </div>

          </div>
        </>
    );
};
