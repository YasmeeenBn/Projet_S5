/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
// import logoXD from "assets/images/small-logos/logo-xd.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoJira from "assets/images/small-logos/logo-jira.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        {/* <MDTypography variant="caption">{email}</MDTypography> */}
      </MDBox>
    </MDBox>
  );

  const Job = ({ title }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      {/* <MDTypography variant="caption">{description}</MDTypography> */}
    </MDBox>
  );

  return {
    columns: [
      { Header: "title", accessor: "title", width: "45%", align: "left" },
      { Header: "thematic", accessor: "thematic", align: "left" },
      { Header: "date", accessor: "date", align: "left" },
      { Header: "imageUrl", accessor: "imageUrl", align: "center" },
      { Header: "link", accessor: "link", align: "center" },
    ],

    rows: [
      {
        title: <Author name="John Michael" />,
        thematic: <Job title="Manager" />,
        date: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        imageUrl: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        link: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
