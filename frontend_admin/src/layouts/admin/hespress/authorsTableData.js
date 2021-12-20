/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
// import axios from "axios";

export default function data() {
  const Author = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
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

  // const [metropoleCities, setMetropoleCities] = useState([]);
  // const cities = await axios.get(`http://127.0.0.1:8000/articles/ny/`);
  // setMetropoleCities(cities.data);

  // };
  // axios.get(`http://127.0.0.1:8000/articles/ny/`).then((res) => {
  //   const articles = res.data;
  //   articles = [(title = "yas")];
  // });

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
        title: <Author name="yasmine" />,
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
