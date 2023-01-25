import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import productImage from "../../assets/AI개발_퍼니스시스템.png";

export default function Furnace() {
  return (
    <>
      <Navbar />
      <img src={productImage} alt="퍼니스시스템"></img>
    </>
  );
}
