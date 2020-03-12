import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  media: {
    width: "auto !important",
    verticalAlign: "top",
    border: 0,
    height: 300
  },
  root: {
    marginTop: 15
  },
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
});

const EachTile = props => {
  return (
    <div style={{ display: "flex" }}>
      {props.imgName !== undefined ? (
        <img
          src={`${process.env.PUBLIC_URL}/img/people/${props.imgName}.png`}
          alt="people"
          style={{
            width: "150px",
            height: "150px",
            margin: 10
          }}
        />
      ) : null}
      <div style={{ display: "flex", flexDirection: "column", padding: 10 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.role}
        </Typography>
        {props.area !== undefined ? (
          <Typography variant="body2" color="textSecondary" component="p">
            {props.area}
          </Typography>
        ) : null}
      </div>
    </div>
  );
};

const People = () => {
  const Alumini = [
    "Ch. Amith, B Tech Final year Thesis, “Coupling Slot Antenna with Metamaterials”, (2019), currently with Technical University of Delft, The Netherlands",
    "Nakka Lok Abhishikht, B Tech Final year Thesis, Title “Controlling extra ordinary transmission through hole arrays using sub wavelength arrays”, (2018), currently with Tech Mahindra, Bangalore",
    "Eppa Akhilesh Reddy, B Tech Final year Thesis, Title “Terahertz Metamaterials based Thin Film sensors with ground plane” (2018)",
    "Shravan Kumar, B. Tech final year Thesis Title “Terahertz propagation through conducting and non conducting medium” (2016) , currently with Karsruhe Institute of Technology, pursuing Masters",
    "Sowmya Purankar, Thesis Title “Metamaterials based Microwave electromagnetic absorbers” Masters Thesis (2016), currently with Accenture",
    "Vyshnavi Reddy, Thesis Title “Thin film sensing with Metamaterials” Masters Thesis (2016), currently with Accenture"
  ];
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={6}>
          <EachTile
            name={"Dr. Dibakar Roy Chowdhury"}
            role={"Professor, Mahindra Ecole Centrale."}
            imgName={"dibakar"}
          />
          <EachTile
            name={"Mr. Sabyasachi Banerjee"}
            role={"Research Fellow"}
            imgName={"sachi"}
            area={"Broad research topic: Resonant meta structures for sensing"}
          />
          <EachTile
            name={"Mr. Deepak Kumar"}
            role={"Research Fellow"}
            imgName={"deepak"}
            area={
              "Broad research topic: Terahertz devices employing metamaterials"
            }
          />
          <EachTile
            name={"Mr. Surya Pranav Ambatipudi"}
            role={"B Tech Thesis"}
            imgName={"surya"}
            area={"Broad research topic: Graphene metamaterials"}
          />
        </Grid>
        <Grid item xs={6}>
          <EachTile
            name={"Mr. Subhajit Karmakar"}
            role={"Research Fellow"}
            imgName={"subhojit"}
            area={"Broad research topic: Fano resonant metamaterials"}
          />
          <EachTile
            name={"Mr. Girish Kamble"}
            role={"Research Fellow"}
            imgName={"girish"}
            area={"Broad research topic: 2D materials for Terahertz"}
          />
          <EachTile
            name={"Ms. Shreeya Rane"}
            role={"MS Thesis"}
            // imgName={"girish"}
            area={"Broad research topic: Terahertz gratings"}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Card variant="outlined" className={classes.wrapper}>
          <CardContent>
            <Typography variant="h4">Alumni</Typography>
            <Divider />
            <Grid container>
              {Alumini.map((element, index) => {
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
      </Grid>
    </>
  );
};

export default People;
