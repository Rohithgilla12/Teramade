import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
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
            Teramade (Terahertz Materials and Devices group)
          </Typography>
          <Button onClick={() => history.push("/news")} color="inherit">
            <Typography variant="h6">News</Typography>
          </Button>
          <Button onClick={() => history.push("/people")} color="inherit">
            <Typography variant="h6">People</Typography>
          </Button>
          <Button onClick={() => history.push("/publications")} color="inherit">
            <Typography variant="h6">Publications</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
