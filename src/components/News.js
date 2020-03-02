import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListSubheader,
  Divider
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

const newsArr = [
  "Review article on Terahertz Metamaterials is published by Journal of Electromagnetic Materials and Waves in January 2020 [January 2020]",
  "Prof. Michael feiginov from TU Vienna visited for one week [December 2019]",
  "Mr. Sabyasachi Banerjee received best poster award in BITS Pilani Hyderabad PhD presentation symposium [November 2019]",
  "Our work (Deep Sub-wavelength Coupling Induced Fano Resonances in Symmetric Terahertz Metamaterials) highlighted in the cover page of Physica Status Solidi: Rapid Research Letters October, 2019 ",
  "Mr. Subhajit Karmakar received best poster award in ICOL 2019 held in Dehradun for Fano resonant Metamaterials [September, 2019]"
];

const News = () => {
  return (
    <>
      <Grid container>
        <List>
          <ListSubheader>News</ListSubheader>
          {newsArr.map(element => {
            return <Content data={element} />;
          })}
        </List>
      </Grid>
    </>
  );
};

export default News;
