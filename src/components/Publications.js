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

const Publications = () => {
  return (
    <>
      <Grid container>
        <List>
          <ListSubheader>2022</ListSubheader>
          <Content
            data={`69) Photo induced dynamic tailoring of near-field coupled terahertz metasurfaces and its effect on Coulomb parameters, Deepak Kumar, Manoj Gupta, Yogesh Shrivastava, Koijam Monika Devi, Ranjan Kumar, and Dibakar Roy Chowdhury, Accepted in Journal of Optics (2022)`}
          />
          <Content
            data={`68) Magnetotransport modulation of Fano resonances in optically thin terahertz superlattice metasurfaces, Subhajit Karmakar, Ravendra Varshney, and Dibakar Roy Chowdhury, Journal of Physics D: Applied Physics, 55, 135109 (2022)`}
          />
          <Content
            data={`67) Demonstration of toroidal metasurfaces through near-field coupling of bright mode resonators, Soumyajyoti Mallick, Nitin Chourasia, Rakesh Singh, and Dibakar Roy Chowdhury, Applied Physics Express, 15, 012005 (2022)`}
          />
          <Content
            data={`66) Effect of asymmetry on topological photonic crystals comprising of dielectric rod structures, Sambhu Jana, K Monika Devi, and Dibakar Roy Chowdhury, Optics Communications, 505, 127589 (2022)`}
          />
          <ListSubheader>2021</ListSubheader>
          <Content
            data={`65) Hybridization of Dark resonating states in terahertz metasurfaces, Sukhvinder Kaur, Subhajit Karmakar, Arun Jana, Ravendra K Varshney, and Dibakar Roy Chowdhury, Journal of Applied Physics, 130, 243101 (2021)`}
          />
          <Content
            data={`64) Ultrasensitive Terahertz sensing with broadside coupled polarization insensitive graphene metamaterial cavities, Sukhvinder Kaur, Subhajit Karmakar, K. Monika Devi, Ravendra K. Varshney, and Dibakar Roy Chowdhury, Optik, 248, 168073 (2021)`}
          />
          <Content
            data={`63) Investigation of dynamical optical study of Bi2Te3 topological insulators thin film based on MWCNT flexible paper using terahertz spectroscopy. Subhash Nimanpore, Animesh Pandey, G Singh, B P Singh, Dibakar Roy Chowdhury, Y U Jeong, Rina Sharma, Sudhir Husale, and Mukesh Jewariya, Optical materials, 121, 111490 (2021)`}
          />
          <Content
            data={`62) Topological Edge states in an all dielectric terahertz photonic crystals, Monika Koijam Devi, Sambhu Jana, and Dibakar Roy Chowdhury, Optical Materials Express, 11, 2445 (2021)`}
          />
          <Content
            data={`61) Elemental, Optical, and Time-Domain Terahertz Spectroscopy Studies on Methyl p-Hydroxybenzoate Single Crystal for THz Applications, Debabrata Nayak, N Vijayan, Manju Kumari, Pargam Vashishtha, Sudha Yadav, Mukesh Jewariya, Dibakar Roy Chowdhury, Govind Gupta, and R. P. Pant, Journal of Electronic Materials, 50, 6121 (2021)`}
          />
          <Content
            data={`60) Dynamically tunable slow light characteristics in graphene-based Terahertz metasurfaces, Deepak Kumar, Monika Koijjam Devi, Ranjan Kumar, and Dibakar Roy Chowdhury, Optics Communications, 491, 126949 (2021)`}
          />
          <Content
            data={`59) Magnetic wires: transverse magnetism in one-dimensional plasmonic system, Subhajit Karmakar, Deepak Kumar, Bishnu P Pal, Ravendra Varshney, and Dibakar Roy Chowdhury, Optics Letters, 46, 1365 (2021)`}
          />
          <Content
            data={`58) Investigation of dynamic optical study of flexible multiwall carbon nanotube paper using terahertz spectroscopy, Subhash Nimanpore, Animesh Pandey, Guruvandra Singh, Satish Teotia, Sabyasachi Banerjee, Sudhir Husale, Bhanu Pratap Singh, Dibakar Roy Chowdhury, Manoj Kumar, Rina Sharma, and Mukesh Jewariya, Journal of Electronic Materials, Accepted (2021)`}
          />
          <Content
            data={`57) Investigation of Dynamic Optical Behavior of Potassium Acid Phthalate Single Crystal using Terahertz Time Domain Spectroscopy for Photonics Applications, Manju Kumari, N Vijayan, Debabrata Nayak, Mukesh Jewariya, Dibakar Roy Chowdhury, Anuj Krishna, and R. P. Pant, Journal of Electronic Materials, Accepted (2021)`}
          />
          <Content
            data={`56) Topological Edge states in an all dielectric terahertz photonic crystals, Monika Koijam Devi, Sambhu Jana, and Dibakar Roy Chowdhury, Optical Materials Express, 11, 2445 (2021)`}
          />
          <Content
            data={`55) Dynamically tunable slow light characteristics in graphene based Terahertz metasurfaces, Deepak Kumar, Monika Koijjam Devi, Ranjan Kumar, and Dibakar Roy Chowdhury, Optics Communications, 491, 126949 (2021)`}
          />
          <Content
            data={`54) Magnetic wires: transverse magnetism in one-dimensional plasmonic system, Subhajit Karmakar, Deepak Kumar, Bishnu P Pal, Ravendra Varshney, and Dibakar Roy Chowdhury, Optics Letters, 46, 1365 (2021)`}
          />
          <ListSubheader>2020</ListSubheader>
          <Content
            data={`53) Growth and Characterization of Single Crystals of L-Histidine Hydrochloride Monohydrate for Nonlinear Optical Applications, S Yadav, M Kumar, D Nayak, S Banerjee, N Khan, S Nimanpure, G Moona, R Sharma, B K. Sharma, D. Roy Chowdhury, N. Vijayan, and M Jewariya, Journal of Electronic Materials, accepted (2020)`}
          />
          <Content
            data={`52) Thin Film Sensing with Terahertz Metamaterials, Dibakar Roy Chowdhury, Parama Pal, and Bishnu Pal, Asian Journal of Physics, 29, 891-906 (2020)`}
          />
          <Content
            data={`51) Modulating Extraordinary Terahertz Transmissions in Multilayer Plasmonic Metasurfaces, Sabyasachi Banerjee, Nakka Lok Abhishikth, Subhajit Karmakar, Deepak Kumar, Shreeya Rane, Sanket Goel, Abul K Azad, Dibakar Roy Chowdhury, Journal of Optics, 22, 125101 (2020)`}
          />
          <Content
            data={`50) Lattice Induced Plasmon Hybridization in Metamaterials, Subhajit Karmakar, Deepak Kumar, Ravendra Varshney, and Dibakar Roy Chowdhury, Optics Letters, 45, 3386 (2020)`}
          />
          <Content
            data={`49) Multifold coupling Enabled High Quality factor Toroidal resonances in Terahertz Metasurfaces, Deepak Kumar, Surya Pranav Ambatipudi, Sabyasachi Banerjee, Ranjan Kumar, and Dibakar Roy Chowdhury, Journal of Applied Physics, 127, 193103 (2020)`}
          />
          <Content
            data={[
              "48) Strong terahertz Matter Interaction induced Ultrasensitive Sensing in Fano Cavity based Metamaterials, Subhajit Karmakar, Deepak Kumar, Ravendra Varshney, and Dibakar Roy Chowdhury, Accepted in Journal of Physics D: Applied Physics (2020);",
              <a href="https://www.doi.org/10.1088/1361-6463/ab94e3">
                doi.org/10.1088/1361-6463/ab94e3
              </a>,
            ]}
          />
          <Content
            data={`47) Bandwidth Enhancement of Planar Terahertz Metasurfaces via overlapping of dipole modes, Deepak Kumar, Sabyasachi Banerjee, Ranjan Kumar, and Dibakar Roy Chowdhury, Accepted in Plasmonics (2020) DOI: 10.1007/s11468-020-01222-7`}
          />
          <Content
            data={`46)Polarization Independent double band electromagnetically Induced Transparency effect in terahertz metamaterials, Rakesh Sarkar, K Monica Devi, Dipa Ghindani, Shriganesh Prabhu, Dibakar Roy Chowdhury, and Gagan Kumar, Journal of Optics, 22, 035105 (2020)`}
          />
          <Content
            data={[
              "45) Resonance Phenomena in Electromagnetic Metamaterials for the Terahertz Metamaterials: A Review, Sabyasachi Banerjee, Bishnu Pal, and Dibakar Roy Chowdhury, Journal of ElectroMagnetic Waves and Applications, 1-24, (2020); doi.org/10.1080/09205071.2020.1713227",
              <a href="https://www.doi.org/10.1080/09205071.2020.1713227">
                doi.org/10.1080/09205071.2020.1713227
              </a>,
            ]}
          />
        </List>
        <List>
          <ListSubheader>2019</ListSubheader>
          <Content
            data={`44) Fano Resonances in THz Metamaterials, Subhajit Karmakar, Ravi Varshney, Dibakar Roy Chowdhury, and Bishnu Pal, Asian Journal of Physics, 28, 663 (2019)`}
          />
          <Content
            data={`43) Ultra Thin Sub-wavelength Film Sensing through the excitation of Dark Modes in Terahertz Metasurfaces, Sabyasachi Banerjee, C. S. Amith, Deepak Kumar, Ganesh Damerla, Anil Kumar Choudhary, Sanket Goel, Bishnu Pal and Dibakar Roy Chowdhury, Optics Communications, 453, 124366 (2019)`}
          />
          <Content
            data={`42) Deep Sub-wavelength Coupling Induced Fano Resonances in Symmetric Terahertz Metamaterials, Subhajit Karmakar, Sabyasachi Banerjee, Deepak Kumar, Girish Kamble, Ravendra Varshney, and Dibakar Roy Chowdhury, Physica Status Solidi: Rapid Research Letters, 13, 1970037 (2019) (Journal cover page)`}
          />
          <Content
            data={`41) Gradual Cross Polarization Conversion of Transmitted Waves in Near Field Coupled Planar Terahertz Metamaterials, S Jagan Mohan Rao, Rakesh Sarkar, Gagan Kumar, and Dibakar Roy Chowdhury, OSA Continuum, 2, 603 (2019)`}
          />
          <Content
            data={`40) Theoretical Investigation of Active Modulation and Enhancement of Fano Resonance in THz Metamaterials, Subhajit Karmakar, Ravi Varshney, and Dibakar Roy Chowdhury, OSA Continuum, 2, 531 (2019)`}
          />
          <Content
            data={`39) Anomalous electric transport across Verwey transition in nanocrystalline Fe3O4 thin films, Murtaza Bohra, Dibakar Roy Chowdhury, Jean-Francois Bobo, and Vidyadhar Singh, Journal of Applied Physics, 125, 013901 (2019)`}
          />
        </List>
        <List>
          <ListSubheader>2018</ListSubheader>
          <Content
            data={`38)  Modulating Fundamental resonance in Capacitive Coupled Assymetric Terahertz Metamaterials, S Jagan Mohan Rao, Yogesh Shrivastava, Gagan Kumar, and Dibakar Roy Chowdhury, Scientific Reports, 8, 16773 (2018)`}
          />
          <Content
            data={`37)Ultrfast Relaxation of Charge Carriers induced switching in Terahertz Metamaterials, S Jagan Mohan Rao, Gagan Kumar, Abul Azad, and Dibakar Roy Chowdhury, Journal of Infrared Millimetre and Terahertz Waves, 39 (12), 1211 (2018)`}
          />
          <Content
            data={`36)Dual-band electromagnetically induced transparency effect in a concentrically coupled asymmetric terahertz metamaterial, K Monika Devi, Dibakar Roy Chowdhury, Gagan Kumar, and Amarendra Sarma, Journal of Applied Physics, 124, 063106 (2018)`}
          />
          <Content
            data={`35)Plasmon Induced Transparency in graphene based terahertz metamaterials, Koijam Monika Devi, Maidul Islam, Dibakar Roy Chowdhury, Amarendra Kumar Sarma, and Gagan Kumar, European Physics Letters, 120, 27005 (2018)`}
          />
        </List>
        <List>
          <ListSubheader>2017</ListSubheader>
          <Content
            data={`34)Terahertz Plasmonic Waveguide based Thin Film Sensors, Maidul Islam, Dibakar Roy Chowdhury, Amir Ahmed, and Gagan Kumar, IEEE Journal of Lightwave Technology, 35, 5215 (2017)`}
          />
          <Content
            data={`33)Role of resonance modes on Terahertz Metamatrials based Thin Film Sensors, Maidul Islam, Jagan Mohan Rao, Gagan Kumar, Bishnu Pal, and Dibakar Roy Chowdhury, Scientific Reports, 7, 7355 (2017)`}
          />
          <Content
            data={`32)Probing the near field inductive coupling in broadside coupled terahertz metamaterials, Jagan Mohan Rao, Deepak Kumar, Gagan Kumar, and Dibakar Roy Chowdhury, IEEE Journal of Selected Topics in Quantum Electronics, 23(4), 1 (2017)`}
          />
          <Content
            data={`31)Plasmon Induced Transparency effects through alternatively coupled Resonators in Terahertz Metamaterials, Koijam Monika Devi, Amarendra Kumar Sarma, Dibakar Roy Chowdhury, and Gagan Kumar, Optics Express, 25, 10484 (2017)`}
          />
          <Content
            data={`30)Modulating the near field coupling through resonator displacement in planar terahertz metamaterials, Jagan Mohan Rao, Deepak Kumar, Gagan Kumar, and Dibakar Roy Chowdhury, Journal of Infrared millimeter and Terahertz Waves, 38, 124 (2017) `}
          />
          <Content
            data={`29)Terahertz Guided Mode Properties in an internally corrugated Plasmonic Waveguide, Maidul Islam, Dibakar Roy Chowdhury, Amir Ahmed, and Gagan Kumar, Journal of Applied Physics, 122, 053105 (2017)`}
          />
        </List>
        <List>
          <ListSubheader>2016</ListSubheader>
          <Content
            data={`28)Displacement current mediated resonances in Terahertz Metamaterials, Chao Liu, Kriti Agarwal, Yuping Zhang, Dibakar Roy Chowdhury, Abul K. Azad, and Jeong-Hyun Cho, Advanced Optical Materials, 4, 1312 (2016) 10.1002/adom.201600196`}
          />
          <Content
            data={`27)Nonradiative and Radiative Resonance Energy Transfer in a Meta-molecule, L. Cong, N. Xu, D. Roy Chowdhury, M. Manjappa, C. Rockstuhl, W. Zhang, and R. Singh, Advanced Optical Materials, 4, 252 (2016)`}
          />
        </List>
        <List>
          <ListSubheader>2015</ListSubheader>
          <Content
            data={`26)Resonance tuning due to Coulomb interaction in strong near field coupled metamaterials, Dibakar Roy Chowdhury, Ningning Xu, Weili Zhang, and Ranjan Singh, Journal of Applied Physics, 118, 023104 (2015)`}
          />
          <Content
            data={`25)Flexible Metasurfaces and Metamaterials: A Review of Materials and Fabrication processes at Micro- and Nano-Scales, Sumeet Walia, Charan Manish Shah, Philipp Gutruf, Hussein Nili, Dibakar Roy Chowdhury, Withawat Withayachumnankul, Madhu Bhaskaran and Sharath Sriram, Applied Physics Review, 2, 011303 (2015)`}
          />
        </List>
        <List>
          <ListSubheader>2014</ListSubheader>
          <Content
            data={`24)Hybrid metasurface for ultra-broadband terahertz modulation, Janet Hayes, Withawat Withayachumnankul, Nathaniel Grady, Dibakar Roy Chowdhury, Abul K. Azad, and Hou-Tong Chen, Applied Physics Letters, 105 (18), 181108 (2014) `}
          />
          <Content
            data={`23)Probing the transition from an uncoupled to a strong near field coupled regime between bright and dark mode resonators in metasurfaces, Ranjan Singh, Ibraheem A. I. Al-Naib, Dibakar Roy Chowdhury, Longqing Cong, Carsten Rockstuhl, and Weili Zhang, Applied Physics Letters, 105 (8), 081108 (2014)`}
          />
          <Content
            data={`22)Dark plasmonic mode excitation through symmetry breaking in terahertz metamaterials, Dibakar Roy Chowdhury, Xiaogang Fang, Yong Zeng, Xiaoshuang Chen, Antoinette J Taylor, and Abul K. Azad, Optics Express, 22, 19401 (2014)`}
          />
          <Content
            data={`21)Ultrafast resonance switching in terahertz metamaterials using ion implanted silicon on sapphire, Dibakar Roy Chowdhury, Ranjan Singh, Antoinette J. Taylor, and Abul K. Azad, ArXiv: 1407.2715 (2014)`}
          />
          <Content
            data={`20)Orthogonally twisted planar concentric split ring resonators towards strong near field coupled terahertz metamaterials, Dibakar Roy Chowdhury, John F. O’Hara, Antoinette J. Taylor, and Abul K. Azad, Applied Physics Letters, 104 (10), 101105 (2014)`}
          />
          <Content
            data={`19)Charge Carrier Relaxation Processes in TbAs nanoinclusions in GaAs Measured By Optical-Pump THz-Probe Transient Absorption Spectroscopy, Laura Vanderhauf, Abul Azad, Cory C. Bomberger, Dibakar Roy Chowdhury, Antoinette J Taylor, Joshua Zide and Matthew Doty, Physical Review B, 89, 045418 (2014)`}
          />
        </List>
        <List>
          <ListSubheader>2013</ListSubheader>
          <Content
            data={`18)Active and Passive coupling schemes in THz metamaterial based devices, Dibakar Roy Chowdhury, Abul K. Azad, Weili Zhang, and Ranjan Singh, IEEE Transactions on Terahertz Science and Technology, 3, 783 (2013)`}
          />
          <Content
            data={`17)Influence of film thickness in THz active metamaterial devices: A comparison between super conductor and metallic split ring resonators, Ranjan Singh, Dibakar Roy Chowdhury, Abul K. Azad, Quanxi Jia, Antoinette J. Taylor, and Hou-Tong Chen, Applied Physics Letters, 103, 061117 (2013)`}
          />
          <Content
            data={`16)Terahertz Metamaterials for Linear Polarization Conversion and Anomalous Refraction, Nathaniel Grady, Janet Hayes, Dibakar Roy Chowdhury, Yong Zeng, Matthew T. Reiten, Abul K. Azad, Antoinette J. Taylor, Diego Dalvit and Hou-Tong Chen, Science, 340, 1304 (2013) `}
          />
          <Content
            data={`15)Ultrafast manipulation of near field coupling between dark and bright modes in terahertz metamaterials, Dibakar Roy Chowdhury, Ranjan Singh, Antoinette J. Taylor, Hou-Tong Chen and Abul K. Azad, Applied Physics Letters, 102, 011122 (2013)`}
          />
        </List>
        <List>
          <ListSubheader>2012</ListSubheader>
          <Content
            data={`14)Impact of resonator geometry and its coupling with ground plane on ultrathin metamaterial perfect absorber, Li Huang*, Dibakar Roy Chowdhury*, Suchitra Ramani, Matthew T. Reiten, Shengnian Luo, Abul K. Azad, Antoinette J. Taylor and Hou-Tong Chen, Applied Physics Letters, 101, 101102 (2012)`}
          />
          <Content
            data={`13)Terahertz chiral metamaterials with giant and dynamically tunable optical activity, Jiangfeng Zhou, Dibakar Roy Chowdhury, Rongkau Zhao, Abul Azad, Hou-Tong Chen, Costas M. Soukoulis, Antoinette J. Taylor and John O’Hara, Physical Review B, 86, 035448 (2012)`}
          />
          <Content
            data={`12)Coupling schemes in planar terahertz metamaterials, Dibakar Roy Chowdhury, Ranjan Singh, Antoinette J. Taylor, Hou-Tong Chen, Weili Zhang and Abul K. Azad, International Journal of Optics, 2012, 148985 (2012) `}
          />
          <Content
            data={`11)Experimental demonstration of terahertz metamaterial absorbers with a broad and flat high absorption band, Li Huang, Dibakar Roy Chowdhury, Suchitra Ramani, Matthew T. Reiten, Shengnian Luo, Antoinette J. Taylor and Hou-Tong Chen, Optics Letters, 37, 154 (2012)`}
          />
        </List>
        <List>
          <ListSubheader>2011</ListSubheader>
          <Content
            data={`10)Dynamically reconfigurable THz metamaterial through photo-doped semiconductor, Dibakar Roy Chowdhury, Ranjan Singh, John F. O’Hara, Hou-Tong Chen, Antoinette J. Taylor and Abul K. Azad, Applied Physics Letters, 99, 231101 (2011) `}
          />
          <Content
            data={`9)Metamaterial induced transparency in a broken symmetry single Fano resonator array, Ranjan Singh, Ibraheem A. I. Al-Naib, Yuping Yang, Dibakar Roy Chowdhury, Wei Cao, Tsuneyuki Ozaki, Roberto Morandotti, and Weili Zhang, Applied Physics Letters, 99, 201107 (2011)`}
          />
          <Content
            data={`8)A broadband terahertz metamaterial with nested structure, Dibakar Roy Chowdhury, Ranjan Singh, Matthew Reiten, Hou-Tong Chen, Antoinette J. Taylor, John F. O’Hara and Abul K. Azad, Optics Express, 19(17) 15817 (2011)`}
          />
          <Content
            data={`7)Tailored resonator coupling for modifying the terahertz metamaterial response, Dibakar Roy Chowdhury, Ranjan Singh, Matthew Reitten, Jiangfeng Zhou, Antonoitte J. Taylor and John F. O’Hara, Optics Express, 19 (11), 10679 (2011)`}
          />
          <Content
            data={`6)Resonance tuning in closely spaced inhomogeneous bilayer metamaterials, M. T. Reiten, D Roy Chowdhury, J. Zhou, A. J. Taylor, J. F. O’Hara and A. K. Azad, Applied Physics Letters, 98, 131105 (2011)`}
          />
        </List>
        <List>
          <ListSubheader>2010</ListSubheader>
          <Content
            data={`5)Field Effects on SnOx and SnO2 nanoparticles synthesized in the gas phase, Dibakar Roy Chowdhury, Ivaturi Aruna, Alexander Nedic, Frank E Kruis and Roland Schmechel, Physica E, 42 (9), 2471-2476 (2010)`}
          />
        </List>
        <List>
          <ListSubheader>2009</ListSubheader>
          <Content
            data={`4)Experimental demonstration of resonant-tunneling-diode operation beyond quasibound-state-lifetime limit, Michael Feiginov and Dibakar Roy Chowdhury, Journal of Physics: Conference Series 193, 012016 (2009)`}
          />
        </List>
        <List>
          <ListSubheader>2007</ListSubheader>
          <Content
            data={`3)Operation of resonant tunneling diode beyond resonant-state lifetime limit, Michael Feiginov and Dibakar Roy Chowdhury, Applied Physics Letters, 91, 203501 (2007) (as journal cover page)`}
          />
          <Content
            data={`2)The planar approach to a Al0.12Ga0.88N/GaN based double barrier HBV, Bogdan Nicolae, Dibakar Roy Chowdhury, Gabor Pop, H. L. Hartnagel, Daniel Pasquet, Frequenz, 61, 247-248 (2007)`}
          />
          <Content
            data={`1)S parameter measurements of superlattice heterostructure barrier junctions towards THz varactors, Bogdan Nicolae, Dibakar Roy Chowdhury and Hans L. Hartnagel, Frequenz, 61, 245-246 (2007)`}
          />
        </List>
      </Grid>
    </>
  );
};

export default Publications;
