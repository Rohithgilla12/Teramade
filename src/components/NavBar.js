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
          <Typography variant="h6" className={classes.title}>
            Terahertz Materials and Devices
          </Typography>
          <Button onClick={() => history.push("/news")} color="inherit">
            News
          </Button>
          <Button onClick={() => history.push("/people")} color="inherit">
            People
          </Button>
          <Button onClick={() => history.push("/publications")} color="inherit">
            Publications
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
