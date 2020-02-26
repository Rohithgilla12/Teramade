import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Person, LocationCity, School, Phone, Email } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Footer = () => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.wrapper}>
      <Typography variant="h4">Contact Information</Typography>
      <Divider />
      <CardContent className={classes.wrapper}>
        <Grid container>
          <Grid item xs={12} className={classes.footerRow}>
            <Person className={classes.footerIcon} /> Dr. Dibakar Roy Chowdhury
          </Grid>
          <Grid item xs={12} className={classes.footerRow}>
            <School className={classes.footerIcon} /> Mahindra Ecole Centrale
          </Grid>
          <Grid item xs={12} className={classes.footerRow}>
            <LocationCity className={classes.footerIcon} /> Hyderabad, 500043,
            India
          </Grid>
          <Grid item xs={12} className={classes.footerRow}>
            <Email className={classes.footerIcon} />
            {/* <a href="mailto:dibakar.roychowdhury@mechyd.ac.in" target="_top">
            dibakar.roychowdhury@mechyd.ac.in
          </a> */}
            dibakar.roychowdhury@mechyd.ac.in
          </Grid>
          <Grid item xs={12} className={classes.footerRow}>
            <Phone className={classes.footerIcon} /> 91-40-6713-5169 (Office)
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Footer;

const useStyles = makeStyles(theme => ({
  footerIcon: {
    marginRight: "5px"
  },
  footerDesc: {
    fontSize: "1rem",
    marginTop: "1rem"
  },
  wrapper: {
    padding: "16px",
    margin: "10px"
  },
  footerRow: {
    display: "flex",
    margin: "10px"
  }
}));
