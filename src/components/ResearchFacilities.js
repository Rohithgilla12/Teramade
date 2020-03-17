import React from "react";
import ViewCard from "./ViewCard";

const ResearchFacilities = () => {
  const Fabrication = [
    "UV Mask Aligner based photo Lithography",
    "Centrifuge",
    "Surface Profiler",
    "Metal deposition (Physical vapor Deposition)"
  ];
  const Characterization = [
    "Terahertz Time Domain Spectroscopy (THz TDS)",
    "Free space Microwave transmission and reflection measurements",
    "I-V, C-V and dynamic measurement up to 26 GHz",
    "Optical spectrophotometer (Vis - NIR)"
  ];
  const Simulations = [
    "High performance computer server for numerical simulations",
    "CST Microwave studio for Electromagnetic simulations"
  ];
  return (
    <>
      <ViewCard title={"Fabrication"} dataArr={Fabrication} />
      <ViewCard title={"Characterization"} dataArr={Characterization} />
      <ViewCard title={"Simulations"} dataArr={Simulations} />
    </>
  );
};

export default ResearchFacilities;
