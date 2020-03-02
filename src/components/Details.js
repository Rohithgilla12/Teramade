/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
  },
  img: {
    height: 200,
    width: "100%"
  }
}));
const Details = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3} spacing={2}>
          <Paper className={classes.paper}>
            <img
              src={`${process.env.PUBLIC_URL}/img/1.jpg`}
              className={classes.img}
            />
            <Typography variant="h6" className={classes.title}>
              Terahertz Metamaterials
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3} spacing={2}>
          <Paper className={classes.paper}>
            <img
              src={`${process.env.PUBLIC_URL}/img/details/meta.png`}
              className={classes.img}
            />
            <Typography variant="h6" className={classes.title}>
              Meta Surfaces
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3} spacing={2}>
          <Paper className={classes.paper}>
            <img
              src={`${process.env.PUBLIC_URL}/img/details/2d.png`}
              className={classes.img}
            />
            <Typography variant="h6" className={classes.title}>
              2D Materials
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3} spacing={2}>
          <Paper className={classes.paper}>
            <img
              src={`${process.env.PUBLIC_URL}/img/details/sensors.png`}
              className={classes.img}
            />
            <Typography variant="h6" className={classes.title}>
              Sensors
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3} spacing={2}>
          <Paper className={classes.paper}>
            <img
              src={`${process.env.PUBLIC_URL}/img/details/micro.png`}
              className={classes.img}
            />
            <Typography variant="h6" className={classes.title}>
              Microwaves
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Details;
