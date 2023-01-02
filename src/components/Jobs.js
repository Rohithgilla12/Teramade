import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListSubheader,
  Divider,
  Typography,
  Paper,
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
        <Grid item={12} style={{ margin: 15 }}>
          <List>
            <ListSubheader>
              <Typography gutterBottom variant="body" component="h2">
                Jobs
              </Typography>
              <Typography variant="body" component="h3">
                Junior Research Fellow and Postdoctoral Fellow positions:
              </Typography>
            </ListSubheader>
            {JobsArr.map(element => {
              return <Content data={element} />;
            })}
            <Typography gutterBottom variant="body2" component="p" style={{ padding: "16px" }}>
              Applications are invited to pursue research in Terahertz materials and devices.
              Several junior research fellow (JRFs) and postdoctoral positions are currently
              available in these above-mentioned topics with the undersigned. Deserving JRFs
              will be considered for Ph.D.
            </Typography>
            <Typography gutterBottom variant="body1" component="p" style={{ padding: "16px", fontWeight: 600 }}>
              Eligibility:
            </Typography>

            <ul style={{ marginBottom: "12px" }}>
              <li>Solid background in Electromagnetism/optics highly desirable.</li>
              <li>Fellowship:</li>
              <ul>
                <li>₹25,000 per month + boarding & Lodging (JRFs)</li>
                <li>₹50,000 per month (consolidated) (postdoctoral fellows)</li>
              </ul>
            </ul>

            <Typography variant="subtitle1" component="span" style={{ padding: "16px" }}>
              How to apply: Please apply with detailed resume and appropriate cover letter to the below mentioned email id.
            </Typography>

            <Paper elevation={4} style={{ padding: "12px", display: "grid", width: "400px" }}>
              <span><strong>Dr. Dibakar Roy Chowdhury,</strong></span>
              <span>FInstP (UK),</span>
              <span>Topical Editor Optics Letter,</span>
              <span>Associate Editor Frontiers in Physics,</span>
              <span>Professor & Head of Physics Department,</span>
              <span>Mahindra University,</span>
              <span>Survey No 62/1A, Hyderabad, 500043, India</span>
              <a href="tel:0091-40-6713-5169" >0091-40-6713-5169 (o)</a>
              <span>dibakar.roychowdhury@mahindrauniversity.edu.in</span>
              <a href="https://scholar.google.co.in/citations?user=63q8bcwAAAAJ&hl=en">https://scholar.google.co.in/citations?user=63q8bcwAAAAJ&hl=en</a>
              <a href="http://www.mahindraecolecentrale.edu.in/faculty/32/Dibakar-Roy-Chowdhury.html">http://www.mahindraecolecentrale.edu.in/faculty/32/Dibakar-Roy-Chowdhury.html</a>
              <a href="https://teramade.com/">www.teramade.com</a>
            </Paper>
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default Jobs;
