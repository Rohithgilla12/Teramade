import React from "react";
import ViewCard from "./ViewCard";

const Collaborators = () => {
  const Collabs = [
    "Prof. Shriganesh Prabhu, Tata Institute of Fundamental research, Mumbai, India",
    "Prof. Michael Feiginov, TU Vienna, Austria",
    "Dr. Gagan Kumar, IIT Guwahati, Guwahati, India",
    "Prof. Ravi K Varshney, IIT Delhi, Delhi, India",
    "Dr. Abul Azad, Loa Alamos National Laboratory, Los Alamos, USA",
    "Prof. Ranjan Kumar, Panjab University, Chandigarh, India",
    "Prof. Sanket Goel, BITS Pilani-Hyderabad, Hyderabad, India",
    "Prof. Anil K Chaudhury, University of Hyderabad, Hyderabad, India"
  ];
  return (
    <>
      <ViewCard title={"Collaborators"} dataArr={Collabs} />
    </>
  );
};

export default Collaborators;
