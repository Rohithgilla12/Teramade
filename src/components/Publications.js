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

const Publications = () => {
  return (
    <>
      <Grid container>
        <List>
          <ListSubheader>2020</ListSubheader>
          <Content
            data={`1.	Polarization Independent double band electromagnetically Induced Transparency effect in terahertz metamaterials, Rakesh Sarkar, K Monica Devi, Dipa Ghindani, Shriganesh Prabhu, Dibakar Roy Chowdhury, and Gagan Kumar, Journal of Optics, Accepted (2020)`}
          />
          <Content
            data={`2.	Resonance Phenomena in Electromagnetic Metamaterialsfor the Terahertz Metamaterials: A Review, Sabyasachi Banerjee, Bishnu Pal, and Dibakar Roy Chowdhury, Journal of ElectroMagnetic Waves and Applications, Accepted, (2020)`}
          />
        </List>
        <List>
          <ListSubheader>2019</ListSubheader>
          <Content
            data={`3.	Fano Resonances in THz Metamaterials, Subhajit Karmakar, Ravi Varshney, Dibakar Roy Chowdhury, and Bishnu Pal, Asian Journal of Physics, 28, 663 (2019)`}
          />
          <Content
            data={`4.	Ultra Thin Sub-wavelength Film Sensing through the excitation of Dark Modes in Terahertz Metasurfaces, Sabyasachi Banerjee, C. S. Amith, Deepak Kumar, Ganesh Damerla, Anil Kumar Choudhary, Sanket Goel, Bishnu Pal and Dibakar Roy Chowdhury, Optics Communications, 453, 124366 (2019)`}
          />
          <Content
            data={`5.	Deep Sub-wavelength Coupling Induced Fano Resonances in Symmetric Terahertz Metamaterials, Subhajit Karmakar, Sabyasachi Banerjee, Deepak Kumar, Girish Kamble, Ravendra Varshney, and Dibakar Roy Chowdhury, Physica Status Solidi: Rapid Research Letters, 13, 1970037 (2019) (Journal cover page)`}
          />
          <Content
            data={`6.	Gradual Cross Polarization Conversion of Transmitted Waves in Near Field Coupled Planar Terahertz Metamaterials, S Jagan Mohan Rao, Rakesh Sarkar, Gagan Kumar, and Dibakar Roy Chowdhury, OSA Continuum, 2, 603 (2019)`}
          />
          <Content
            data={`7.	Theoretical Investigation of Active Modulation and Enhancement of Fano Resonance in THz Metamaterials, Subhajit Karmakar, Ravi Varshney, and Dibakar Roy Chowdhury, OSA Continuum, 2, 531 (2019)`}
          />
          <Content
            data={`8.	Anomalous electric transport across Verwey transition in nanocrystalline Fe3O4 thin films, Murtaza Bohra, Dibakar Roy Chowdhury, Jean-Francois Bobo, and Vidyadhar Singh, Journal of Applied Physics, 125, 013901 (2019)`}
          />
        </List>
        <List>
          <ListSubheader>2018</ListSubheader>
          <Content
            data={`9.	Modulating Fundamental resonance in Capacitive Coupled Assymetric Terahertz Metamaterials, S Jagan Mohan Rao, Yogesh Shrivastava, Gagan Kumar, and Dibakar Roy Chowdhury, Scientific Reports, 8, 16773 (2018)`}
          />
          <Content
            data={`10.	Ultrfast Relaxation of Charge Carriers induced switching in Terahertz Metamaterials, S Jagan Mohan Rao, Gagan Kumar, Abul Azad, and Dibakar Roy Chowdhury, Journal of Infrared Millimetre and Terahertz Waves, 39 (12), 1211 (2018)`}
          />
          <Content
            data={`11.	Dual-band electromagnetically induced transparency effect in a concentrically coupled asymmetric terahertz metamaterial, K Monika Devi, Dibakar Roy Chowdhury, Gagan Kumar, and Amarendra Sarma, Journal of Applied Physics, 124, 063106 (2018)`}
          />
          <Content
            data={`12.	Plasmon Induced Transparency in graphene based terahertz metamaterials, Koijam Monika Devi, Maidul Islam, Dibakar Roy Chowdhury, Amarendra Kumar Sarma, and Gagan Kumar, European Physics Letters, 120, 27005 (2018)`}
          />
        </List>
        <List>
          <ListSubheader>2017</ListSubheader>
          <Content
            data={`13.	Terahertz Plasmonic Waveguide based Thin Film Sensors, Maidul Islam, Dibakar Roy Chowdhury, Amir Ahmed, and Gagan Kumar, IEEE Journal of Lightwave Technology, 35, 5215 (2017)`}
          />
          <Content
            data={`14.	Role of resonance modes on Terahertz Metamatrials based Thin Film Sensors, Maidul Islam, Jagan Mohan Rao, Gagan Kumar, Bishnu Pal, and Dibakar Roy Chowdhury, Scientific Reports, 7, 7355 (2017)`}
          />
          <Content
            data={`15.	Probing the near field inductive coupling in broadside coupled terahertz metamaterials, Jagan Mohan Rao, Deepak Kumar, Gagan Kumar, and Dibakar Roy Chowdhury, IEEE Journal of Selected Topics in Quantum Electronics, 23(4), 1 (2017)`}
          />
          <Content
            data={`16.	Plasmon Induced Transparency effects through alternatively coupled Resonators in Terahertz Metamaterials, Koijam Monika Devi, Amarendra Kumar Sarma, Dibakar Roy Chowdhury, and Gagan Kumar, Optics Express, 25, 10484 (2017)`}
          />
          <Content
            data={`17.	Modulating the near field coupling through resonator displacement in planar terahertz metamaterials, Jagan Mohan Rao, Deepak Kumar, Gagan Kumar, and Dibakar Roy Chowdhury, Journal of Infrared millimeter and Terahertz Waves, 38, 124 (2017) `}
          />
          <Content
            data={`18.	Terahertz Guided Mode Properties in an internally corrugated Plasmonic Waveguide, Maidul Islam, Dibakar Roy Chowdhury, Amir Ahmed, and Gagan Kumar, Journal of Applied Physics, 122, 053105 (2017)`}
          />
        </List>
        <List>
          <ListSubheader>2016</ListSubheader>
          <Content
            data={`19.	Displacement current mediated resonances in Terahertz Metamaterials, Chao Liu, Kriti Agarwal, Yuping Zhang, Dibakar Roy Chowdhury, Abul K. Azad, and Jeong-Hyun Cho, Advanced Optical Materials, 4, 1312 (2016) 10.1002/adom.201600196`}
          />
          <Content
            data={`20.	Nonradiative and Radiative Resonance Energy Transfer in a Meta-molecule, L. Cong, N. Xu, D. Roy Chowdhury, M. Manjappa, C. Rockstuhl, W. Zhang, and R. Singh, Advanced Optical Materials, 4, 252 (2016)`}
          />
        </List>
        <List>
          <ListSubheader>2015</ListSubheader>
          <Content
            data={`21.	Resonance tuning due to Coulomb interaction in strong near field coupled metamaterials, Dibakar Roy Chowdhury, Ningning Xu, Weili Zhang, and Ranjan Singh, Journal of Applied Physics, 118, 023104 (2015)`}
          />
          <Content
            data={`22.	Flexible Metasurfaces and Metamaterials: A Review of Materials and Fabrication processes at Micro- and Nano-Scales, Sumeet Walia, Charan Manish Shah, Philipp Gutruf, Hussein Nili, Dibakar Roy Chowdhury, Withawat Withayachumnankul, Madhu Bhaskaran and Sharath Sriram, Applied Physics Review, 2, 011303 (2015)`}
          />
        </List>
        <List>
          <ListSubheader>2014</ListSubheader>
          <Content
            data={`23.	Hybrid metasurface for ultra-broadband terahertz modulation, Janet Hayes, Withawat Withayachumnankul, Nathaniel Grady, Dibakar Roy Chowdhury, Abul K. Azad, and Hou-Tong Chen, Applied Physics Letters, 105 (18), 181108 (2014) `}
          />
          <Content
            data={`24.	Probing the transition from an uncoupled to a strong near field coupled regime between bright and dark mode resonators in metasurfaces, Ranjan Singh, Ibraheem A. I. Al-Naib, Dibakar Roy Chowdhury, Longqing Cong, Carsten Rockstuhl, and Weili Zhang, Applied Physics Letters, 105 (8), 081108 (2014)`}
          />
          <Content
            data={`25.	Dark plasmonic mode excitation through symmetry breaking in terahertz metamaterials, Dibakar Roy Chowdhury, Xiaogang Fang, Yong Zeng, Xiaoshuang Chen, Antoinette J Taylor, and Abul K. Azad, Optics Express, 22, 19401 (2014)`}
          />
          <Content
            data={`26.	Ultrafast resonance switching in terahertz metamaterials using ion implanted silicon on sapphire, Dibakar Roy Chowdhury, Ranjan Singh, Antoinette J. Taylor, and Abul K. Azad, ArXiv: 1407.2715 (2014)`}
          />
          <Content
            data={`27.	Orthogonally twisted planar concentric split ring resonators towards strong near field coupled terahertz metamaterials, Dibakar Roy Chowdhury, John F. O’Hara, Antoinette J. Taylor, and Abul K. Azad, Applied Physics Letters, 104 (10), 101105 (2014)`}
          />
          <Content
            data={`28.	Charge Carrier Relaxation Processes in TbAs nanoinclusions in GaAs Measured By Optical-Pump THz-Probe Transient Absorption Spectroscopy, Laura Vanderhauf, Abul Azad, Cory C. Bomberger, Dibakar Roy Chowdhury, Antoinette J Taylor, Joshua Zide and Matthew Doty, Physical Review B, 89, 045418 (2014)`}
          />
        </List>
        <List>
          <ListSubheader>2013</ListSubheader>
          <Content
            data={`29.	Active and Passive coupling schemes in THz metamaterial based devices, Dibakar Roy Chowdhury, Abul K. Azad, Weili Zhang, and Ranjan Singh, IEEE Transactions on Terahertz Science and Technology, 3, 783 (2013)`}
          />
          <Content
            data={`30.	Influence of film thickness in THz active metamaterial devices: A comparison between super conductor and metallic split ring resonators, Ranjan Singh, Dibakar Roy Chowdhury, Abul K. Azad, Quanxi Jia, Antoinette J. Taylor, and Hou-Tong Chen, Applied Physics Letters, 103, 061117 (2013)`}
          />
          <Content
            data={`31.	Terahertz Metamaterials for Linear Polarization Conversion and Anomalous Refraction, Nathaniel Grady, Janet Hayes, Dibakar Roy Chowdhury, Yong Zeng, Matthew T. Reiten, Abul K. Azad, Antoinette J. Taylor, Diego Dalvit and Hou-Tong Chen, Science, 340, 1304 (2013) `}
          />
          <Content
            data={`32.	Ultrafast manipulation of near field coupling between dark and bright modes in terahertz metamaterials, Dibakar Roy Chowdhury, Ranjan Singh, Antoinette J. Taylor, Hou-Tong Chen and Abul K. Azad, Applied Physics Letters, 102, 011122 (2013)`}
          />
        </List>
        <List>
          <ListSubheader>2012</ListSubheader>
          <Content
            data={`33.	Impact of resonator geometry and its coupling with ground plane on ultrathin metamaterial perfect absorber, Li Huang*, Dibakar Roy Chowdhury*, Suchitra Ramani, Matthew T. Reiten, Shengnian Luo, Abul K. Azad, Antoinette J. Taylor and Hou-Tong Chen, Applied Physics Letters, 101, 101102 (2012)`}
          />
          <Content
            data={`34.	Terahertz chiral metamaterials with giant and dynamically tunable optical activity, Jiangfeng Zhou, Dibakar Roy Chowdhury, Rongkau Zhao, Abul Azad, Hou-Tong Chen, Costas M. Soukoulis, Antoinette J. Taylor and John O’Hara, Physical Review B, 86, 035448 (2012)`}
          />
          <Content
            data={`35.	Coupling schemes in planar terahertz metamaterials, Dibakar Roy Chowdhury, Ranjan Singh, Antoinette J. Taylor, Hou-Tong Chen, Weili Zhang and Abul K. Azad, International Journal of Optics, 2012, 148985 (2012) `}
          />
          <Content
            data={`36.	Experimental demonstration of terahertz metamaterial absorbers with a broad and flat high absorption band, Li Huang, Dibakar Roy Chowdhury, Suchitra Ramani, Matthew T. Reiten, Shengnian Luo, Antoinette J. Taylor and Hou-Tong Chen, Optics Letters, 37, 154 (2012)`}
          />
        </List>
        <List>
          <ListSubheader>2011</ListSubheader>
          <Content
            data={`37.	Dynamically reconfigurable THz metamaterial through photo-doped semiconductor, Dibakar Roy Chowdhury, Ranjan Singh, John F. O’Hara, Hou-Tong Chen, Antoinette J. Taylor and Abul K. Azad, Applied Physics Letters, 99, 231101 (2011) `}
          />
          <Content
            data={`38.	Metamaterial induced transparency in a broken symmetry single Fano resonator array, Ranjan Singh, Ibraheem A. I. Al-Naib, Yuping Yang, Dibakar Roy Chowdhury, Wei Cao, Tsuneyuki Ozaki, Roberto Morandotti, and Weili Zhang, Applied Physics Letters, 99, 201107 (2011)`}
          />
          <Content
            data={`39.	A broadband terahertz metamaterial with nested structure, Dibakar Roy Chowdhury, Ranjan Singh, Matthew Reiten, Hou-Tong Chen, Antoinette J. Taylor, John F. O’Hara and Abul K. Azad, Optics Express, 19(17) 15817 (2011)`}
          />
          <Content
            data={`40.	Tailored resonator coupling for modifying the terahertz metamaterial response, Dibakar Roy Chowdhury, Ranjan Singh, Matthew Reitten, Jiangfeng Zhou, Antonoitte J. Taylor and John F. O’Hara, Optics Express, 19 (11), 10679 (2011)`}
          />
          <Content
            data={`41.	Resonance tuning in closely spaced inhomogeneous bilayer metamaterials, M. T. Reiten, D Roy Chowdhury, J. Zhou, A. J. Taylor, J. F. O’Hara and A. K. Azad, Applied Physics Letters, 98, 131105 (2011)`}
          />
        </List>
        <List>
          <ListSubheader>2010</ListSubheader>
          <Content
            data={`42.	Field Effects on SnOx and SnO2 nanoparticles synthesized in the gas phase, Dibakar Roy Chowdhury, Ivaturi Aruna, Alexander Nedic, Frank E Kruis and Roland Schmechel, Physica E, 42 (9), 2471-2476 (2010)`}
          />
        </List>
        <List>
          <ListSubheader>2009</ListSubheader>
          <Content
            data={`43.	Experimental demonstration of resonant-tunneling-diode operation beyond quasibound-state-lifetime limit, Michael Feiginov and Dibakar Roy Chowdhury, Journal of Physics: Conference Series 193, 012016 (2009)`}
          />
        </List>
        <List>
          <ListSubheader>2007</ListSubheader>
          <Content
            data={`44.	Operation of resonant tunneling diode beyond resonant-state lifetime limit, Michael Feiginov and Dibakar Roy Chowdhury, Applied Physics Letters, 91, 203501 (2007) (as journal cover page)`}
          />
          <Content
            data={`45.	The planar approach to a Al0.12Ga0.88N/GaN based double barrier HBV, Bogdan Nicolae, Dibakar Roy Chowdhury, Gabor Pop, H. L. Hartnagel, Daniel Pasquet, Frequenz, 61, 247-248 (2007)`}
          />
          <Content
            data={`46.	S parameter measurements of superlattice heterostructure barrier junctions towards THz varactors, Bogdan Nicolae, Dibakar Roy Chowdhury and Hans L. Hartnagel, Frequenz, 61, 245-246 (2007)`}
          />
        </List>
      </Grid>
    </>
  );
};

export default Publications;
