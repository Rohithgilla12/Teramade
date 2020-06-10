import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  img: {
    height: 50,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <HomeIcon onClick={() => history.push("/")} />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            TERAMADE (Terahertz Materials and Devices group)
          </Typography>
          <a href="https://www.mahindraecolecentrale.edu.in/">
            <img
              src={`${process.env.PUBLIC_URL}/img/logo.png`}
              alt="MEC"
              className={classes.img}
            />
          </a>
        </Toolbar>
      </AppBar>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Button onClick={() => history.push("/people")} color="inherit">
            <Typography variant="h6">People</Typography>
          </Button>
          <Button onClick={() => history.push("/publications")} color="inherit">
            <Typography variant="h6">Publications</Typography>
          </Button>
          <Button
            onClick={() => history.push("/collaborators")}
            color="inherit"
          >
            <Typography variant="h6">Collaborators</Typography>
          </Button>
          <Button onClick={() => history.push("/jobs")} color="inherit">
            <Typography variant="h6">Jobs</Typography>
          </Button>
          <Button
            onClick={() => history.push("/sponsoredProjects")}
            color="inherit"
          >
            <Typography variant="h6">Sponsored Projects</Typography>
          </Button>
          <Button
            onClick={() => history.push("/researchFacilities")}
            color="inherit"
          >
            <Typography variant="h6">Research Facilities</Typography>
          </Button>
          <Button onClick={() => history.push("/contact")} color="inherit">
            <Typography variant="h6">Contact</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
