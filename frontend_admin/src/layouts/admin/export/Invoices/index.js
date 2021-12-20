import Card from "@mui/material/Card";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";
// Billing page components
import Invoice from "layouts/admin/export/Invoice";

function Invoices() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          {" "}
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice name="name" noGutter />{" "}
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Invoices;
