import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import productImage from "../../assets/AI개발_안전모감지.png";

export default function SafetyHelmetDetection() {
  return (
    <>
      <Navbar />
      <img src={productImage} alt="안전모 감지"></img>
    </>
  );
}
