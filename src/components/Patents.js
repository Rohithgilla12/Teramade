import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListSubheader,
  Divider,
} from "@material-ui/core";

const Content = (props) => {
  return (
    <ListItem>
      <Grid item xs={12}>
        <p>{props.data}</p>
        <Divider />
      </Grid>
    </ListItem>
  );
};

const patentsData = [
  "Hand Held Metasurface-based Microbe Detection Device (H2M2D2), Dibakar Roy Chowdhury and Sabyasachi Banerjee, Indian Patent Applied, Application Number: 202041026401 (2020)",
  "Stacked Fano Metamaterials based thin film sensors, Dibakar Roy Chowdhury, Subhajit Karmakar, Ravi Varshney, Sabyasachi Banerjee, Deepak Kumar, Indian Patent applied, Application Number: 202041003489 (2020)",
];

const Patent = () => {
  return (
    <Grid container>
      <List>
        <ListSubheader>Patents</ListSubheader>
        {patentsData.map((patent) => (
          <Content data={patent} />
        ))}
      </List>
    </Grid>
  );
};

export default Patent;
