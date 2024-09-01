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
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormHelperText,
  Select,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import EmployeeProfile from "./EmployeeProfile";
const EmployeeList = () => {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectRestaurant, setSelectRestaurant] = useState("");
  const [showDetails, setShowDetails] = useState(false); // State to toggle form visibility

  const [Employees, setEmployees] = useState([
    {
      id: 1,
      name: "Flavor Haven",
      phoneNumber: "01534567889",
      email: "abc@gmail.com",
    },
    {
      id: 2,
      name: "The Dining Den",
      phoneNumber: "01734567800",
      email: "abc@gmail.com",
    },
    {
      id: 3,
      name: "Urban Bites",
      phoneNumber: "01534567889",
      email: "abc@gmail.com",
    },
  ]);

  // Function to handle opening the add/edit dialog
  const handleAddEditOpen = (EmployeeName = "") => {
    setSelectedEmployee(EmployeeName);
  };

  // Function to handle opening the delete confirmation dialog
  const handleDeleteOpen = (EmployeeName) => {
    setSelectedEmployee(EmployeeName);
    setDeleteOpen(true);
  };

  // Function to handle closing the delete confirmation dialog
  const handleDeleteClose = () => {
    setDeleteOpen(false);
    setSelectedEmployee("");
  };

  // Function to handle deleting a Employee
  const handleDelete = () => {
    setEmployees((prev) => prev.filter((Employee) => Employee.name !== selectedEmployee));
    handleDeleteClose();
  };

  const handleChange = (event) => {
    setSelectRestaurant(event.target.value);
  };

  return (
    <>
      {showDetails ? (
        <EmployeeProfile />
      ) : (
        <Container maxWidth="md">
          <Typography variant="subtitle1" gutterBottom>
            RMS &gt; Employee List
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
            <Typography
              sx={{
                fontWeight: "bold",
                padding: "16px 0px",
              }}
            >
              Employee Management System
            </Typography>
            <FormHelperText>Restaurant</FormHelperText>
            <FormControl sx={{ minWidth: 250 }}>
              <Select
                value={selectRestaurant}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Select Restaurant</em>
                </MenuItem>
                <MenuItem value={10}>KFC</MenuItem>
                <MenuItem value={20}>BFC</MenuItem>
                <MenuItem value={30}>CFC</MenuItem>
              </Select>
            </FormControl>

            <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ py: 2 }}>
              <DialogActions>
                <Box>Show</Box>
                <Select defaultValue={10} size="small">
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={25}>25</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                </Select>
              </DialogActions>

              <DialogActions>
                <TextField size="small" variant="outlined" placeholder="Search" />
              </DialogActions>
            </Box>

            <TableContainer component={Paper} sx={{ width: "100%" }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Employee Name
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Phone Number
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Email
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Employees.map((Employee) => (
                    <TableRow key={Employee.id}>
                      <TableCell align="center">{Employee.name}</TableCell>
                      <TableCell align="center">{Employee.phoneNumber}</TableCell>
                      <TableCell align="center">{Employee.email}</TableCell>
                      <TableCell align="center">
                        <IconButton color="default" onClick={() => handleAddEditOpen(Employee.name)}>
                          <RemoveRedEyeOutlinedIcon onClick={() => setShowDetails(true)} />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteOpen(Employee.name)}>
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Delete Confirmation Dialog */}
          <Dialog open={deleteOpen} onClose={handleDeleteClose}>
            <DialogTitle>Delete Employee</DialogTitle>
            <DialogContent>
              <DialogContentText>Are you sure you want to delete?</DialogContentText>
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
      )}
    </>
  );
};

export default EmployeeList;
