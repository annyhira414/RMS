import React, { useState } from "react";
import {
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
  MenuItem,
  Select,
  Box,
  DialogActions,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddMenuItemForm from "./AddMenuItemForm";
import MenuItemDetails from "./MenuItemDetails";

const menuItems = [
  {
    menu: "Chicken",
    item: "Chicken Satay Skewers",
    description: "Grilled marinated chicken skewers served with a spicy.",
  },
  {
    menu: "Chicken",
    item: "Chicken Satay Skewers",
    description: "Succulent shrimp sautéed in a rich garlic butter sauce.",
  },
  {
    menu: "Chicken",
    item: "Chicken Satay Skewers",
    description: "Crispy rolls stuffed with fresh vegetables, served.",
  },
];

const MenuItemList = () => {
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility
  const [showDetails, setShowDetails] = useState(false); // State to toggle form visibility

  return (
    <Paper
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
      {showDetails ? (
        <MenuItemDetails />
      ) : (
        <>
          {showForm ? (
            <AddMenuItemForm />
          ) : (
            <>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold" }} mb={2} ml={1}>
                Menu Item
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
                  <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>
                    + Add Menu Item
                  </Button>
                  <TextField size="small" variant="outlined" placeholder="Search" />
                </DialogActions>
              </Box>

              <TableContainer component={Paper} sx={{ mt: 2 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>Menu</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Menu Item</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Description</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {menuItems.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.menu}</TableCell>
                        <TableCell>{item.item}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>
                          <IconButton>
                            <VisibilityIcon onClick={() => setShowDetails(true)} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        </>
      )}
    </Paper>
  );
};

export default MenuItemList;
