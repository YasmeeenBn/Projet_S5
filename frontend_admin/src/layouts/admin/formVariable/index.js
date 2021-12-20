import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDInput from "components/MDInput";
// import DataTable from "examples/Tables/DataTable";
// Data
// react-router components
// import { Link } from "react-router-dom";
// import IconButton from "@mui/material/IconButton";
// import Icon from "@mui/material/Icon";
// import { navbarIconButton } from "examples/Navbars/DashboardNavbar/styles";

function FormVariable() {
  // const { columns, rows } = authorsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox>
                <MDBox>
                  <MDBox pr={2} pt={1}>
                    {" "}
                  </MDBox>
                  <MDBox p={3} pl={3} pt={3} pb={3} pr={1}>
                    <p>Website</p>
                    <MDInput label="Website" />
                  </MDBox>
                  <MDBox p={3} pl={3} pt={1} pb={3} pr={1}>
                    <p>Title</p>
                    <MDInput label="title here" />
                  </MDBox>{" "}
                  <MDBox p={3} pl={3} pt={1} pb={3} pr={1}>
                    <p>Date</p>
                    <MDInput label="date here" />
                  </MDBox>{" "}
                  <MDBox p={3} pl={3} pt={1} pb={3} pr={1}>
                    <p>Image URL</p>
                    <MDInput label="Image URL here" />
                  </MDBox>{" "}
                  <MDBox p={3} pl={3} pt={1} pb={3} pr={1}>
                    <p>Link</p>
                    <MDInput label="Link here" />
                  </MDBox>
                  {/* <MDBox p={3} pl={3} pt={1} pb={3} pr={1}>
                    <p>Thematic</p>
                    <MDInput label="Thematic here" />
                  </MDBox> */}
                  {/* <MDBox>
                    <Link to="/authentication/sign-in/basic">
                      <IconButton size="small" disableRipple>
                        <Icon>account_circle</Icon>
                      </IconButton>
                    </Link>
                  </MDBox> */}
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default FormVariable;
