/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Details from "./Details";

const Home = () => {
  return (
    <>
      <Carousel showArrows={true} showThumbs={false} showStatus={false}>
        <div>
          <img src={`${process.env.PUBLIC_URL}/img/2.jpg`} />
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/img/3.jpg`} />
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/img/1.jpg`} />
        </div>
      </Carousel>
      <Details />
    </>
  );
};

export default Home;
