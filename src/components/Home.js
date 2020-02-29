/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Details from "./Details";
import Collaborators from "./Collaborators";
import Footer from "./Footer";
import News from "./News";
import { Grid } from "@material-ui/core";

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
      <Grid container>
        <Grid item xs={9}>
          <Collaborators />
        </Grid>
        <Grid item xs={3}>
          <News />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Home;
