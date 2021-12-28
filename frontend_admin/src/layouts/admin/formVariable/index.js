import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDInput from "components/MDInput";
import Button from 'react-bootstrap/Button';
// import axios from "axios";
// import { useForm } from "react-hook-form";
// import  { useState } from "react";

function FormVariable() {

  // const {  handleSubmit } = useForm();

  // const onSubmit = async (data) => {
  //   console.log(data);
    // let formData = new FormData();
    // // formData.append("var_title", data.var_title);
    // // formData.append("var_link", data.var_link);
    // axios.post('http://localhost:8000/variables/')
    //     .then(response => setState({ var_title: response.data.var_title }));

    // history.push(`/web-master/experts/${codeCountry}`);
  // };

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
                    <MDInput id="website" label="Website" />
                  </MDBox>
                  <MDBox p={3} pl={3} pt={1} pb={3} pr={1}>
                    <p>Title</p>
                    <MDInput id="title" label="title here" />
                  </MDBox>{" "}
                  <MDBox p={3} pl={3} pt={1} pb={3} pr={1}>
                    <p>Date</p>
                    <MDInput id="date" label="date here" />
                  </MDBox>{" "}
                  <MDBox p={3} pl={3} pt={1} pb={3} pr={1}>
                    <p>Image URL</p>
                    <MDInput id="imageUrl" label="Image URL here" />
                  </MDBox>{" "}                  
                  <MDBox p={3} pl={3} pt={1} pb={3} pr={1}>
                    <p>Thematic</p>
                    <MDInput id="thematic" label="Thematic here" />
                  </MDBox>{" "}
                  <MDBox p={3} pl={3} pt={1} pb={3} pr={1}>
                    <p>Link</p>
                    <MDInput id="link" label="Link here" />
                  </MDBox>
                  <MDBox p={3} pl={3} pt={1} pb={3} pr={1}>
                        <Button type='submit' >Submit</Button>                    
                        {/* <Button type='submit' onClick={handleSubmit(onSubmit)}>Submit</Button>                     */}
                  </MDBox>
                  
  
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
