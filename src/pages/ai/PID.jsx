import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import productImage from "../../assets/AI개발_PID도면해석.png";

export default function PID() {
  return (
    <>
      <Navbar />
      <img src={productImage} alt="PID 도면해석"></img>
    </>
  );
}
