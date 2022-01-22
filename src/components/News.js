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

const newsArr = [
  "Ms. Vaishnavi Sajeev received best presentation award for her talk entitled “Geometry dependent extra ordinary transmissions in terahertz hole arrays” in International Conference on Advanced Materials and Devices for Futuristic Applications-2021 (IC-AMDFA-2021) (November 2021)",
  "Our recent work is highlighted as feature article/cover page by Journal of Applied Physics in their December 30th, 2021 issue, Hybridization of Dark resonating states in terahertz metasurfaces, Journal of Applied Physics, 130, 243101 (2021)",
  "Prof. Dibakar Roy Chowdhury elected as Senior Member of Optical Society of America (OSA) [July 2020]",
  [
    "Our recent work is highlighted by JPD in twitter,",
    <a href="https://twitter.com/JPhysD/status/1269736008008032258">
      Tweet Link
    </a>,
    "[June 2020]",
  ],
  "Dr. S Jagan Mohan Rao successfully defended his doctoral thesis, March 2020",
  "Review article on Terahertz Metamaterials is published by Journal of Electromagnetic Materials and Waves in January 2020 [January 2020]",
  "Prof. Michael feiginov from TU Vienna visited for one week [December 2019]",
  "Mr. Sabyasachi Banerjee received best poster award in BITS Pilani Hyderabad PhD presentation symposium [November 2019]",
  "Our work (Deep Sub-wavelength Coupling Induced Fano Resonances in Symmetric Terahertz Metamaterials) highlighted in the cover page of Physica Status Solidi: Rapid Research Letters October, 2019 ",
  "Mr. Subhajit Karmakar received best poster award in ICOL 2019 held in Dehradun for Fano resonant Metamaterials [September, 2019]",
];

const News = () => {
  return (
    <div style={{ height: 600, overflowY: "hidden" }}>
      <Grid container>
        <List>
          <ListSubheader>News</ListSubheader>
          {/*  eslint-disable-next-line */}
          <marquee direction="down" scrollamount="2">
            {newsArr.map((element) => {
              return <Content key={element} data={element} />;
            })}
          </marquee>
        </List>
      </Grid>
    </div>
  );
};

export default News;
