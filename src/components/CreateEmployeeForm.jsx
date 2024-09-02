import React, { useState } from "react";
import {
  Card,
  Box,
  Container,
  CardContent,
  TextField,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const CreateEmployeeForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({});
  };
  const [restaurantName, setRestaurantName] = useState("KfC");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [salary, setSalary] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [picture, setPicture] = useState("");

  return (
    <Box maxWidth="auto">
      <Typography variant="subtitle1" gutterBottom>
        RMS &gt; Create Employee
      </Typography>
      <Container
        sx={{
          margin: "auto",
          backgroundColor: "white",
          border: "1px solid",
          borderColor: "grey.300",
          padding: "8px 16px 30px 16px",
          borderRadius: "4px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <Typography variant="h6" component="div" mb={"24px"}>
            Create Employee Information
          </Typography>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item size="grow" xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>RestaurantName</InputLabel>
                  <Select value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)} label="Menu">
                    <MenuItem value="CFC">CFC</MenuItem>
                    <MenuItem value="KacheeBhai">Kachee Bhai</MenuItem>
                    <MenuItem value="BFC">BFC</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item size="grow" xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
              </Grid>
              <Grid item size="grow" xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid item size="grow" xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Grid>
              <Grid item size="grow" xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Phone"
                  variant="outlined"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </Grid>
              <Grid item size="grow" xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid item size="grow" xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Salary"
                  variant="outlined"
                  onChange={(e) => setSalary(e.target.value)}
                  value={salary}
                />
              </Grid>
              <Grid item size="grow" xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  variant="outlined"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  value={dateOfBirth}
                />
              </Grid>
              <Grid item size="grow" xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Picture"
                  variant="outlined"
                  onChange={(e) => setPicture(e.target.value)}
                  value={picture}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid item size="grow" xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" sx={{ mt: 2 }} fullWidth>
              Save
            </Button>
          </form>
        </CardContent>
      </Container>
    </Box>
  );
};

export default CreateEmployeeForm;
