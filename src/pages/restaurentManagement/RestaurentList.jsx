import React, { useEffect, useState } from 'react';
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
} from '@mui/material';
import { Edit, Delete, Close } from '@mui/icons-material'; // Import Close icon
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRestaurantList,
  selectRestaurantList,
} from '../../redux/features/restaurantListSlice';

const RestaurantList = () => {
  const [open, setOpen] = useState(false); // State to manage add/edit dialog visibility
  const [deleteOpen, setDeleteOpen] = useState(false); // State to manage delete confirmation dialog visibility
  const [selectedRestaurant, setSelectedRestaurant] = useState({
    id: null,
    name: '',
  }); // State to store the selected restaurant
  const [isEditing, setIsEditing] = useState(false); // State to determine if editing or adding

  const dispatch = useDispatch();
  const restaurantListResp = useSelector(selectRestaurantList);

  console.log('restaurantListResp', restaurantListResp);

  useEffect(() => {
    dispatch(fetchRestaurantList);
  }, [dispatch]);

  const [restaurants, setRestaurants] = useState([
    { id: 1, name: 'Flavor Haven' },
    { id: 2, name: 'The Dining Den' },
    { id: 3, name: 'Urban Bites' },
  ]);

  // Function to handle opening the add/edit dialog
  const handleAddEditOpen = (restaurant = { id: null, name: '' }) => {
    setSelectedRestaurant(restaurant); // Set the selected restaurant
    setIsEditing(!!restaurant.id); // Determine if editing based on the presence of a restaurant ID
    setOpen(true);
  };

  // Function to handle closing the add/edit dialog
  const handleAddEditClose = () => {
    setOpen(false);
    setSelectedRestaurant({ id: null, name: '' }); // Reset selected restaurant
    setIsEditing(false);
  };

  // Function to handle saving the data (add or update a restaurant)
  const handleSave = () => {
    if (isEditing) {
      // Update restaurant logic
      setRestaurants((prev) =>
        prev.map((restaurant) =>
          restaurant.id === selectedRestaurant.id
            ? { ...restaurant, name: selectedRestaurant.name }
            : restaurant
        )
      );
    } else {
      // Add restaurant logic
      setRestaurants((prev) => [
        ...prev,
        { id: prev.length + 1, name: selectedRestaurant.name },
      ]);
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
    setSelectedRestaurant({ id: null, name: '' }); // Reset selected restaurant
  };

  // Function to handle deleting a restaurant
  const handleDelete = () => {
    setRestaurants((prev) =>
      prev.filter((restaurant) => restaurant.id !== selectedRestaurant.id)
    );
    handleDeleteClose();
  };

  return (
    <Container maxWidth='md'>
      <Typography
        variant='h5'
        gutterBottom
        sx={{
          backgroundColor: 'white', // Set the background color to white
          border: '1px solid', // Define the border style
          borderColor: 'grey.300',
          padding: '8px 16px',
          borderRadius: '4px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        Restaurant Management System
      </Typography>

      <Typography variant='subtitle1' gutterBottom>
        RMS &gt; Restaurant List
      </Typography>
      <Box
        sx={{
          backgroundColor: 'white',
          border: '1px solid',
          borderColor: 'grey.300',
          padding: '8px 16px 30px 16px',
          borderRadius: '4px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          mb={2}
        >
          <DialogActions>
            <Box>Show</Box>
            <Select defaultValue={10} size='small'>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </DialogActions>

          <DialogActions>
            <Button
              variant='contained'
              color='primary'
              onClick={() => handleAddEditOpen()}
            >
              + Add Restaurant
            </Button>
            <TextField size='small' variant='outlined' placeholder='Search' />
          </DialogActions>
        </Box>

        <TableContainer component={Paper} sx={{ width: '100%' }}>
          <Table size='small'>
            <TableHead>
              <TableRow>
                <TableCell align='center' sx={{ fontWeight: 'bold' }}>
                  Restaurant Name
                </TableCell>
                <TableCell align='center' sx={{ fontWeight: 'bold' }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {restaurants.map((restaurant) => (
                <TableRow key={restaurant.id}>
                  <TableCell align='center'>{restaurant.name}</TableCell>
                  <TableCell align='center'>
                    <IconButton
                      color='primary'
                      onClick={() => handleAddEditOpen(restaurant)}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      color='secondary'
                      onClick={() => handleDeleteOpen(restaurant)}
                    >
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
          '& .MuiDialog-paper': {
            width: '500px',
            maxWidth: '100%',
            maxHeight: '100%',
          },
        }}
      >
        <DialogTitle>
          {isEditing ? 'Edit Restaurant' : 'Create Restaurant'}
          <IconButton
            aria-label='close'
            onClick={handleAddEditClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {isEditing
              ? 'Edit the restaurant name'
              : 'Enter the restaurant name'}
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            label='Restaurant Name'
            type='text'
            fullWidth
            variant='outlined'
            value={selectedRestaurant.name}
            onChange={(e) =>
              setSelectedRestaurant({
                ...selectedRestaurant,
                name: e.target.value,
              })
            }
          />
          <Box sx={{ p: 2 }}></Box>
          <Button onClick={handleSave} variant='contained' fullWidth>
            {isEditing ? 'Update' : 'Save'}
          </Button>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteOpen} onClose={handleDeleteClose}>
        <DialogTitle>Delete Restaurant</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {selectedRestaurant.name}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDeleteClose}
            variant='outlined'
            color='grey[500]'
          >
            Cancel
          </Button>
          <Button onClick={handleDelete} variant='contained' color='error'>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default RestaurantList;
