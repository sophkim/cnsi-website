import React from "react";
import Banner from "../components/Banner/Banner";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import VideoContents from "../components/VideoContents/VideoContents";

export default function Main() {
  return (
    <>
      <Navbar />
      <Header />
      <Banner />
      <Carousel />
      <VideoContents />
      <Footer />
    </>
  );
}
