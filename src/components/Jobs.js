import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListSubheader,
  Divider,
  Typography
} from "@material-ui/core";

const Content = props => {
  return (
    <ListItem>
      <Grid item xs={12}>
        <Typography gutterBottom variant="body" component="h3">
          {props.data}
        </Typography>
        <Divider />
      </Grid>
    </ListItem>
  );
};

const JobsArr = [
  "Terahertz Metamaterials, Metasurfaces and Topological Photonics"
];

const Jobs = () => {
  return (
    <>
      <Grid container>
        <List>
          <ListSubheader>
            <Typography gutterBottom variant="body" component="h2">
              Jobs
            </Typography>
          </ListSubheader>
          {JobsArr.map(element => {
            return <Content data={element} />;
          })}
        </List>
        <Grid item={12} style={{ margin: 15 }}>
          <Typography gutterBottom variant="body" component="h2">
            Note
          </Typography>
          <Typography variant="body" color="textSecondary" component="h4">
            More details will be given to suitable candidates. General GOI norms
            are applied for both the positions.
          </Typography>
          <Typography variant="body" color="textSecondary" component="h4">
            Bachelors thesis, Masters thesis and short term internships are
            available for highly motivated candidates.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Jobs;
