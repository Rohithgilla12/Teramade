import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  media: {
    width: "auto !important",
    verticalAlign: "top",
    border: 0,
    height: 300,
  },
  root: {
    marginTop: 15,
    padding: 16,
  },
  collabInfo: {
    display: "flex",
    float: "left",
    padding: "16px",
    fontSize: 18,
  },
  wrapper: {
    padding: "16px",
    margin: "10px",
  },
});

const EachTile = (props) => {
  return (
    <div style={{ display: "flex" }}>
      {props.imgName !== undefined ? (
        <img
          src={`${process.env.PUBLIC_URL}/img/people/${props.imgName}.png`}
          alt="people"
          style={{
            width: "150px",
            height: "150px",
            margin: 10,
          }}
        />
      ) : null}
      <div style={{ display: "flex", flexDirection: "column", padding: 10 }}>
        <Typography gutterBottom variant="h4" component="h2">
          {props.name}
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          component="p"
          style={{ alignSelf: "flex-start", marginLeft: 10 }}
        >
          {props.role}
        </Typography>
        {props.area !== undefined ? (
          <Typography
            variant="h6"
            color="textSecondary"
            component="p"
            style={{ alignSelf: "flex-start", marginLeft: 10 }}
          >
            {props.area}
          </Typography>
        ) : null}
        {props.respo !== undefined
          ? props.respo.split("\n").map(function (item, key) {
              return (
                <span
                  key={key}
                  style={{
                    alignSelf: "flex-start",
                    marginLeft: 10,
                    marginBottom: -20,
                  }}
                >
                  <Typography variant="h6" color="textSecondary" component="p">
                    {item}
                  </Typography>
                  <br />
                </span>
              );
            })
          : null}
      </div>
    </div>
  );
};

const People = () => {
  const Alumini = [
    "Ms. Shreeya Rane, MS Thesis, Anomalous refraction of THz waves (2020), currently with Mahindra University, India",
    "Dr. S Jagan Mohan Rao, PhD, “Exploring the Near Fiel Coupling and Ultrafast Switching in Terahertz Metamaterials” (2020)",
    "Mr. Girish Kamble, (2020), currently with Shivaji University, Kolhapur, India",
    "Mr. Surya Pranav Ambatipudi, B Tech Thesis, Graphene metamaterials, (2020), currently with UCLA, USA",
    "Ch. Amith, B Tech Final year Thesis, “Coupling Slot Antenna with Metamaterials”, (2019), currently with Technical University of Delft, The Netherlands",
    "Nakka Lok Abhishikht, B Tech Final year Thesis, Title “Controlling extra ordinary transmission through hole arrays using sub wavelength arrays”, (2018), currently with Tech Mahindra, Bangalore",
    "Eppa Akhilesh Reddy, B Tech Final year Thesis, Title “Terahertz Metamaterials based Thin Film sensors with ground plane” (2018)",
    "Shravan Kumar, B. Tech final year Thesis Title “Terahertz propagation through conducting and non conducting medium” (2016) , currently with Karsruhe Institute of Technology, pursuing Masters",
    "Sowmya Purankar, Thesis Title “Metamaterials based Microwave electromagnetic absorbers” Masters Thesis (2016), currently with Accenture",
    "Vyshnavi Reddy, Thesis Title “Thin film sensing with Metamaterials” Masters Thesis (2016), currently with Accenture",
  ];
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={6}>
          <EachTile
            name={"Dr. Dibakar Roy Chowdhury"}
            role={"Professor, Mahindra Ecole Centrale."}
            respo={`Professor & Head of Physics, \n Leader Nanotechnology Program,\n Fellow IETE, \n  Fellow OSI`}
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
            role={"Inspire Research Fellow"}
            imgName={"deepak"}
            area={
              "Broad research topic: Terahertz devices employing metamaterials"
            }
          />
          <EachTile
            name={"Mr. Soumyajyoti Mallick"}
            role={"Research Fellow"}
            imgName={"mallick"}
            area={"Broad research topic: Nonlinear Metamaterials."}
          />
          <EachTile
            name={"Mr. Arun Jana"}
            role={"Research Fellow"}
            imgName={"arun"}
            area={"Broad research topic : Terahertz magnetization"}
          />
          <EachTile
            name={"Ms. Vaishnavi Sajeev"}
            role={"Research Fellow"}
            imgName={"vaishnavi"}
            area={"Terahertz plasmonics"}
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
            name={"Dr. Koijam Monika Devi (PhD IIT Guwahati)"}
            role={"Postdoctoral Research Fellow"}
            imgName={"monika"}
            area={
              "Broad Research topic: Metamaterials, Topological Photonics, Terahertz"
            }
          />
          <EachTile
            name={"Ms. Shreeya Rane"}
            role={"Junior Research Fellow"}
            imgName={"shreya"}
            area={"Broad research topic: Terahertz gratings"}
          />
          <EachTile
            name={"Ms. Indu krishna K N "}
            role={"Junior Research Fellow"}
            imgName={"sowmya"}
            area={"Broad research topic: Terahertz gratings"}
          />
          <EachTile
            name={"Mr. Sambhu Jana"}
            role={"Research Fellow"}
            imgName={"sambhu"}
            area={"Broad Research Topic : Topological Photonic Insulator"}
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
                      {index + 1} {element}
                    </span>
                  </Grid>
                );
              })}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default People;
