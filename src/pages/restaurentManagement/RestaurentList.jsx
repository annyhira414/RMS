import React, { useEffect, useState } from "react";
import axios from "axios";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantList, selectRestaurantList } from "../../redux/features/restaurantListSlice";
import sizeConfigs from "../../configs/sizeConfigs";

const RestaurantList = () => {
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState({
    id: null,
    name: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();
  const restaurantListResp = useSelector(selectRestaurantList);

  const [restaurants, setRestaurants] = useState([]); // Initialize with an empty array

  // Fetch restaurants from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://rms.techsistltd.com/restaurant/v1/restaurant/");
        // Assuming the API returns the list directly in 'results' key
        setRestaurants(response.data);
        console.log("vul  vul");
      } catch (error) {
        console.error("Error fetching restaurants ....:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);

  // Function to handle opening the add/edit dialog
  const handleAddEditOpen = (restaurant = { id: null, name: "" }) => {
    setSelectedRestaurant(restaurant);
    setIsEditing(!!restaurant.id);
    setOpen(true);
  };

  // Function to handle closing the add/edit dialog
  const handleAddEditClose = () => {
    setOpen(false);
    setSelectedRestaurant({ id: null, name: "" });
    setIsEditing(false);
  };

  // Function to handle saving the data (add or update a restaurant)
  const handleSave = () => {
    if (isEditing) {
      // Update restaurant logic
      setRestaurants((prev) =>
        prev.map((restaurant) =>
          restaurant.id === selectedRestaurant.id ? { ...restaurant, name: selectedRestaurant.name } : restaurant
        )
      );
    } else {
      // Add restaurant logic
      setRestaurants((prev) => [...prev, { id: prev.length + 1, name: selectedRestaurant.name }]);
    }
    handleAddEditClose();
  };

  // Function to handle opening the delete confirmation dialog
  const handleDeleteOpen = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setDeleteOpen(true);
  };

  // Function to handle closing the delete confirmation dialog
  const handleDeleteClose = () => {
    setDeleteOpen(false);
    setSelectedRestaurant({ id: null, name: "" });
  };

  // Function to handle deleting a restaurant
  const handleDelete = () => {
    setRestaurants((prev) => prev.filter((restaurant) => restaurant.id !== selectedRestaurant.id));
    handleDeleteClose();
  };

  return (
    <Container
      maxWidth="auto"
      // sx={{
      //   width: `calc(100% - ${sizeConfigs.sidebar.width} )`,
      // }}
    >
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
        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold" }}>
          Restaurant List
        </Typography>
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

      {/* Add/Edit Restaurant Dialog */}
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
