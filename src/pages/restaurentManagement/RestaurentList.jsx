import React, { useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  TextField,
  Box,
  Select,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Edit, Delete, Close } from "@mui/icons-material";

const RestaurantList = () => {
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState({ id: null, name: "" });
  const [isEditing, setIsEditing] = useState(false);

  const [restaurants, setRestaurants] = useState([
    { id: 1, name: "Flavor Haven" },
    { id: 2, name: "The Dining Den" },
    { id: 3, name: "Urban Bites" },
  ]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get("https://rms.techsistltd.com/restaurant/v1/restaurant/");
  //         setRestaurants(response.data);
  //       } catch (error) {
  //         console.error("Error fetching restaurants ....:", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  const handleAddEditOpen = (restaurant = { id: null, name: "" }) => {
    setSelectedRestaurant(restaurant);
    setIsEditing(!!restaurant.id);
    setOpen(true);
  };

  const handleAddEditClose = () => {
    setOpen(false);
    setSelectedRestaurant({ id: null, name: "" });
    setIsEditing(false);
  };

  const handleSave = () => {
    if (isEditing) {
      setRestaurants((prev) =>
        prev.map((restaurant) =>
          restaurant.id === selectedRestaurant.id ? { ...restaurant, name: selectedRestaurant.name } : restaurant
        )
      );
    } else {
      setRestaurants((prev) => [...prev, { id: prev.length + 1, name: selectedRestaurant.name }]);
    }
    handleAddEditClose();
  };

  const handleDeleteOpen = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
    setSelectedRestaurant({ id: null, name: "" });
  };

  const handleDelete = () => {
    setRestaurants((prev) => prev.filter((restaurant) => restaurant.id !== selectedRestaurant.id));
    handleDeleteClose();
  };

  return (
    <Container maxWidth="auto">
      <Typography variant="subtitle1" gutterBottom>
        RMS &gt; Restaurant List
      </Typography>
      <Box
        sx={{
          backgroundColor: "white",
          border: "1px solid",
          borderColor: "grey.300",
          padding: "8px 16px 30px 16px",
          borderRadius: "4px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <DialogActions>
            <Box>Show</Box>
            <Select defaultValue={10} size="small">
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </DialogActions>

          <DialogActions>
            <Button variant="contained" color="primary" onClick={() => handleAddEditOpen()}>
              + Add Restaurant
            </Button>
            <TextField size="small" variant="outlined" placeholder="Search" />
          </DialogActions>
        </Box>

        <TableContainer component={Paper} sx={{ width: "100%" }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Restaurant Name
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {restaurants.map((restaurant) => (
                <TableRow key={restaurant.id}>
                  <TableCell align="center">{restaurant.name}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleAddEditOpen(restaurant)}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteOpen(restaurant)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Dialog
        open={open}
        onClose={handleAddEditClose}
        sx={{
          "& .MuiDialog-paper": {
            width: "500px",
            maxWidth: "100%",
            maxHeight: "100%",
          },
        }}
      >
        <DialogTitle>
          {isEditing ? "Edit Restaurant" : "Create Restaurant"}
          <IconButton
            aria-label="close"
            onClick={handleAddEditClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{isEditing ? "Edit the restaurant name" : "Enter the restaurant name"}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Restaurant Name"
            type="text"
            fullWidth
            variant="outlined"
            value={selectedRestaurant.name}
            onChange={(e) =>
              setSelectedRestaurant({
                ...selectedRestaurant,
                name: e.target.value,
              })
            }
          />
          <Box sx={{ p: 2 }}></Box>
          <Button onClick={handleSave} variant="contained" fullWidth>
            {isEditing ? "Update" : "Save"}
          </Button>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteOpen} onClose={handleDeleteClose}>
        <DialogTitle>Delete Restaurant</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete {selectedRestaurant.name}?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose} variant="outlined" color="grey[500]">
            Cancel
          </Button>
          <Button onClick={handleDelete} variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default RestaurantList;
