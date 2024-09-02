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
import AddMenuItemForm from "./AddMenuItemForm";

const MenuItemDetails = () => {
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

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
        <AddMenuItemForm />
      ) : (
        <Box
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
              <Button variant="contained" color="primary" onClick={() => setShowForm(true)} startIcon={<EditIcon />}>
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
                  <strong>Menu :</strong> Chicken
                </Typography>
                <Typography variant="body1" sx={{ pt: 2 }}>
                  <strong>Is-Vegetarian :</strong> yes
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={4}>
              <CardContent>
                <Typography variant="body1">
                  <strong>Menu Item :</strong> Chicken
                </Typography>
                <Typography variant="body1" sx={{ pt: 2 }}>
                  <strong>Is-gluten free :</strong> yes
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={4}>
              <CardContent>
                <Typography variant="body1">
                  <strong>Price :</strong> 220 BDT
                </Typography>
                <Typography variant="body1" sx={{ pt: 2 }}>
                  <strong>Is-available : </strong> Yes
                </Typography>
              </CardContent>
            </Grid>
          </Grid>

          <Box>
            <strong>Description : </strong> Grilled marinated chicken skewers served with a spicy peanut sauce.
          </Box>

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

export default MenuItemDetails;
