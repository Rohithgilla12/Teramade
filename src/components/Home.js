/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Details from "./Details";
import Collaborators from "./Collaborators";
import Footer from "./Footer";


const Home = () => {
  const keyArr = [...Array(10).keys()];
  return (
    <>
      <Carousel showArrows={true} showThumbs={false} showStatus={false}>
        {keyArr.map(i => {
          return (
            <div>
              <img src={`${process.env.PUBLIC_URL}/img/${i}.jpg`} />
            </div>
          );
        })}
      </Carousel>
      <Details />
      <Collaborators />
      <Footer />
    </>
  );
};

export default Home;
