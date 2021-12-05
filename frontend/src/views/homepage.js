import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { getProjectsOfMonthApi } from "../../apis/projectApi";
// import { getExpertsofMonth } from "../../apis/userApi";
// import {
//   getDonorsOfMonth,
//   getImplementersOfMonth,
// } from "../../apis/organizationApi";

import ProjectCard from "../components/project/ProjectCard";

// import PublicHeader from "../layout/header/PublicHeader";
// import PublicFooter from "../layouts/footer/PublicFooter";
import PublicFooterHomepage from "../layouts/footer/PublicFooterHomepage";

const homepage = () => {
//   const [projects, setProjects] = useState();
//   const [experts, setExperts] = useState();
//   const [donors, setDonors] = useState();
//   const [implementers, setImplementers] = useState();

//   const history = useHistory();

//   useEffect(() => {
//     getDataFromApi();
//   }, []);

//   const getDataFromApi = async () => {
//     const proj = await getProjectsOfMonthApi(3, 1);
//     setProjects(proj?.data);
//     const exper = await getExpertsofMonth(3, 1);
//     setExperts(exper);
//     const donor = await getDonorsOfMonth(3, 1, "");
//     setDonors(donor?.data);
//     const imple = await getImplementersOfMonth(3, 1);
//     setImplementers(imple?.data);
//   };

  return (
    <>
      {/* <PublicHeader /> */}
      <div style={{ minHeight: "100vh" }}>
        {/* {projects &&( */}
          <div className="container my-5">
            <h1 className="heading mt-5">
              Articles<span className="sub-heading"> </span>
            </h1>
            <div className="row">
              {/* {projects?.map((project, index) => ( */}
                {/* <div key={index} className="col-12 col-md-6 col-lg-4 my-4"> */}
                <div  className="col-12 col-md-6 col-lg-4 my-4">
                  {/* <ProjectCard project={project} key={index} /> */}
                  <ProjectCard />
                </div>
              {/* ))} */}
            </div>
            </div>
        {/* )} */}
      </div>
 
      <PublicFooterHomepage />
    </>
  );
};

export default homepage;
