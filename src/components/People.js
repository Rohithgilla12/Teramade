import React from "react";
import {
  Grid,
  Card,
  CardMedia,
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
        <Grid item xs={3} spacing={3}>
          <Card>
            <CardMedia
              className={classes.media}
              image={`${process.env.PUBLIC_URL}/img/people/dibakar.png`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Dr. Dibakar Roy Chowdhury
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Professor, Mahindra Ecole Centrale.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} spacing={3}>
          <Card>
            <CardMedia
              className={classes.media}
              image={`${process.env.PUBLIC_URL}/img/people/sachi.png`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Mr. Sabyasachi Banerjee
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Research Fellow
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} spacing={3}>
          <Card>
            <CardMedia
              className={classes.media}
              image={`${process.env.PUBLIC_URL}/img/people/deepak.png`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Mr. Deepak Kumar
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Research Fellow
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} spacing={3}>
          <Card>
            <CardMedia
              className={classes.media}
              image={`${process.env.PUBLIC_URL}/img/people/subhojit.png`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Mr. Subhajit Karmakar
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Research Fellow
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} spacing={3}>
          <Card>
            <CardMedia
              className={classes.media}
              image={`${process.env.PUBLIC_URL}/img/people/girish.png`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Mr. Girish Kamble
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Research Fellow
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} spacing={3}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Ms. Shreeya Rane
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                MS Thesis
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} spacing={3}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Mr. Surya Pranav Ambatipudi
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                B Tech Thesis
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container>
        <Card variant="outlined" className={classes.wrapper}>
          <CardContent>
            <Typography variant="h4">Alumini</Typography>
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
