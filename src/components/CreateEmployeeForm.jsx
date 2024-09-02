import React from "react";
import { Card, CardContent, TextField, Button, Grid, Typography } from "@mui/material";

const CreateEmployeeForm = () => {
  return (
    <Card
      sx={{
        maxWidth: "auto",
        margin: "auto",
        mt: 4,
        p: 2,
        backgroundColor: "white",
        border: "1px solid",
        borderColor: "grey.300",
        padding: "8px 16px 30px 16px",
        borderRadius: "4px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div">
          Create Employee Information
        </Typography>
        <form noValidate autoComplete="off">
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item size="grow">
              <TextField
                fullWidth
                //   id="standard-helperText"
                label="Restaurant Name"
                defaultValue="Default Value"
                variant="outlined"
              />
            </Grid>
            <Grid item size="grow">
              <TextField fullWidth label="First Name" variant="outlined" />
            </Grid>
            <Grid item size="grow">
              <TextField fullWidth label="Last Name" variant="outlined" />
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item size="grow">
              <TextField fullWidth label="Email" variant="outlined" />
            </Grid>
            <Grid item size="grow">
              <TextField fullWidth label="Phone" variant="outlined" />
            </Grid>
            <Grid item size="grow">
              <TextField fullWidth label="Username" variant="outlined" />
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item size="grow">
              <TextField fullWidth label="Salary" variant="outlined" />
            </Grid>
            <Grid item size="grow">
              <TextField fullWidth label="Username" variant="outlined" />
            </Grid>
            <Grid item size="grow">
              <TextField fullWidth label="Password" variant="outlined" type="password" />
            </Grid>
          </Grid>
          <Button variant="contained" fullWidth color="primary" sx={{ mt: 2 }}>
            Save
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateEmployeeForm;
