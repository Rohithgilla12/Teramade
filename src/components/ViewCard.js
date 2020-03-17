import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

const ViewCard = props => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.wrapper}>
      <CardContent>
        <Typography variant="h4">{props.title}</Typography>
        <Divider />
        <Grid container>
          {props.dataArr.map((element, index) => {
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

export default ViewCard;
