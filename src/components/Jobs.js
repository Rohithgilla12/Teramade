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
        <p>{props.data}</p>
        <Divider />
      </Grid>
    </ListItem>
  );
};

const JobsArr = [
  "BRNS sponsored JRF position is available on 'Development of Terahertz Metagrating for deep sub wavelength particle detection'",
  "SERB sponsored JRF position is available on 'Non linear metamaterials for Terahertz source'"
];

const Jobs = () => {
  return (
    <>
      <Grid container>
        <List>
          <ListSubheader>Jobs</ListSubheader>
          {JobsArr.map(element => {
            return <Content data={element} />;
          })}
        </List>
        <Typography variant="body" color="textSecondary" component="p">
          More details will be given to suitable candidates. General GOI norms
          are applied for both the positions.
        </Typography>
        <Divider />
        <Typography variant="body" color="textSecondary" component="p">
          Bachelors thesis, Masters thesis and short term internships are
          available for highly motivated candidates.
        </Typography>
      </Grid>
    </>
  );
};

export default Jobs;
