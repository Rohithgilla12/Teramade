import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

const Collaborators = () => {
  const classes = useStyles();
  const Collabs = [
    "Prof. Shriganesh Prabhu, Tata Institute of Fundamental research, Mumbai, India",
    "Prof. Michael Feiginov, TU Vienaa, Austria",
    "Dr. Gagan Kumar, IIT Guwahati, Guwahati, India",
    "Prof. Ravi K Varshney, IIT Delhi, Delhi, India",
    "Dr. Abul Azad, Loa Alamos National Laboratory, Los Alamos, USA",
    "Prof. Ranjan Kumar, Panjab University, Chandigarh, India",
    "Prof. Sanket Goel, BITS Pilani-Hyderabad, Hyderabad, India",
    "Prof. Anil K Chaudhury, University of Hyderabad, Hyderabad, India"
  ];
  return (
    <Card variant="outlined" className={classes.wrapper}>
      <CardContent>
        <Typography variant="h4">Collaborators</Typography>
        <Divider />
        <Grid container>
          {Collabs.map((element, index) => {
            return (
              <Grid item xs={12} className={classes.collabInfo}>
                <span>
                  {index + 1}) {element}
                </span>
              </Grid>
            );
          })}
          <Grid item xs={12} className={classes.collabInfo}></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Collaborators;

const useStyles = makeStyles(theme => ({
  collabInfo: {
    display: "flex",
    float: "left",
    padding: "16px",
    fontSize: 18
  },
  wrapper: {
    padding: "16px",
    margin: "10px"
  }
}));
