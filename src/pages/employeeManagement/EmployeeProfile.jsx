// EmployeeProfile.js
import React, { useState } from "react";
import {
  Box,
  Button,
  CardContent,
  Grid,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CreateEmployeeForm from "../../components/CreateEmployeeForm";

const EmployeeProfile = () => {
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    console.log("Employee deleted");
    setOpen(false);
  };

  return (
    <>
      {showForm ? (
        <CreateEmployeeForm />
      ) : (
        <Box
          sx={{
            maxWidth: 800,
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
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" gutterBottom>
              Employees Profile
            </Typography>
            <Box mt={2}>
              <Button
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                sx={{ mr: 1 }}
                onClick={handleClickOpen}
              >
                Delete
              </Button>
              <Button variant="contained" color="primary" startIcon={<EditIcon />} onClick={() => setShowForm(true)}>
                Edit
              </Button>
            </Box>
          </Box>
          <Typography variant="body1" gutterBottom sx={{ py: 4 }}>
            Restaurant Name : The Dining Den
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <CardContent>
                <Typography variant="body1">
                  <strong>Name :</strong> Ahsan Kabir
                </Typography>
                <Typography variant="body1">
                  <strong>Salary :</strong> 10000 BDT
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={4}>
              <CardContent>
                <Typography variant="body1">
                  <strong>Phone :</strong> +8801770592578
                </Typography>
                <Typography variant="body1">
                  <strong>Date of Birth :</strong> 1992/12/06
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={4}>
              <CardContent>
                <Typography variant="body1">
                  <strong>Email :</strong> ahsan.kabir@gmail.com
                </Typography>
                <Typography variant="body1">
                  <strong>Username :</strong> ahsan92
                </Typography>
              </CardContent>
            </Grid>
          </Grid>

          {/* Delete Confirmation Dialog */}
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogContent>
              <DialogContentText>Are you sure you want to delete this employee?</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleDelete} color="error">
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      )}
    </>
  );
};

export default EmployeeProfile;
