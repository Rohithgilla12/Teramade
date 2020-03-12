import React from "react";
import { Grid, List, ListItem, Divider, Typography } from "@material-ui/core";

const Content = props => {
  return (
    <ListItem>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h5" component="h2">
          {`Project Title: ${props.projectTitle}`}
        </Typography>
        <Typography gutterBottom variant="body" component="h2">
          {`${props.company}`}
        </Typography>
        <Typography gutterBottom variant="body" component="h2">
          {`Funding agency: ${props.agency}`}
        </Typography>
        <Typography gutterBottom variant="body" component="h2">
          {`Amount Funded: ${props.funded}`}
        </Typography>
        <Divider />
      </Grid>
    </ListItem>
  );
};

const SponsoredProjects = () => {
  return (
    <div style={{ margin: 15 }}>
      <Grid container>
        <Typography gutterBottom variant="h4" component="h2">
          External Research Grants (as PI)
        </Typography>
        <List>
          <Content
            projectTitle={
              "Metamaterials induced perfect absorption in thin film absorber"
            }
            company={"Early Career Research Award"}
            agency={"Department of Science and Technology (DST), India"}
            funded={"29.68 L "}
          />
          <Content
            projectTitle={
              "Electromagnetic Metamaterials based ultra thin film sensors"
            }
            company={"Extra Mural Research (EMR)"}
            agency={"Department of Science and Technology (DST), India"}
            funded={"37.86 L"}
          />
          <Content
            projectTitle={
              "Metamaterials for phase control of Resonant Tunneling Diode based oscillators"
            }
            company={"Indo Austria International Research Funding Scheme"}
            agency={"Department of Science and Technology (DST), India"}
            funded={"16.4 L (Ongoing) "}
          />
          <Content
            projectTitle={
              "Development of Terahertz Metagratings for detection of ultra-small deep subwavelength particles (Ongoing)"
            }
            company={""}
            agency={
              "Board of Research in Nuclear Sciences (BRNS), Department of Atomic Energy, India"
            }
            funded={"30 L "}
          />
          <Content
            projectTitle={
              "Non linear metamaterials for room temperature terahertz source"
            }
            company={"Core Research Grant (CRG)"}
            agency={"SERB, Department of Science and Technology (DST), India"}
            funded={"30 L (Ongoing) "}
          />
        </List>
      </Grid>
      <Grid container>
        <Typography gutterBottom variant="h4" component="h2">
          External Research Grants (as Co-PI)
        </Typography>
        <List>
          <Content
            projectTitle={
              "Complex Dielectric Structures as Tunable Metamaterials"
            }
            company={"Extra Mural Research (EMR)"}
            agency={"Department of Science and Technology (DST), India"}
            funded={"24.45 L (Ongoing)"}
          />
          <Content
            projectTitle={
              "Developing perovskite solar cell using multiferroic Bi1-xMxFeO3 (M=Pb, Ca, La) thin films"
            }
            company={"Indo-Taiwan S&T Cooperation programme"}
            agency={"DST (India) & MOST (Taiwan)"}
            funded={"25 L (as Co-PI) (Ongoing)"}
          />
        </List>
      </Grid>
      <Grid container>
        <Typography gutterBottom variant="h4" component="h2">
          Grants to conduct conferences (as Convener)
        </Typography>
        <List>
          <Content
            projectTitle={
              "IEEE WRAP 2017 (Conference in Photonics, 17 – 19 December, 2017)"
            }
            company={""}
            agency={"IEEE Photonics Society"}
            funded={"8000.00 USD (5.2 L INR)"}
          />
        </List>
      </Grid>
    </div>
  );
};

export default SponsoredProjects;
