import Grid from "@mui/material/Grid";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Invoices from "layouts/admin/export/Invoices";

// Data
// import authorsTableData from "layouts/hespress/authorsTableData";

function Export() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <Grid item xs={12} lg={8}>
        <Invoices />
      </Grid>
    </DashboardLayout>
  );
}

export default Export;
