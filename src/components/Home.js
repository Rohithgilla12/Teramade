/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "2rem",
    marginLeft: "10px",
    marginRight: "10px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Home = () => {
  const classes = useStyles();
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
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={3} spacing={2}>
            <Paper className={classes.paper}>Terahertz Metamaterials</Paper>
          </Grid>
          <Grid item xs={3} spacing={2}>
            <Paper className={classes.paper}>Meta Surfaces</Paper>
          </Grid>
          <Grid item xs={3} spacing={2}>
            <Paper className={classes.paper}>2D Materials</Paper>
          </Grid>
          <Grid item xs={3} spacing={2}>
            <Paper className={classes.paper}>Sensors</Paper>
          </Grid>
          <Grid item xs={3} spacing={2}>
            <Paper className={classes.paper}>Microwaves</Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
