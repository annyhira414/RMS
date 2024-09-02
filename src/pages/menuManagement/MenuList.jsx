import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Breadcrumbs,
  Link,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import MenuTable from "./MenuTable";

const MenuList = () => {
  const [menus, setMenus] = useState([
    {
      restaurantName: "Flavor Haven",
      menuName: "Chicken",
      description: "Grilled marinated chicken skewers served with a spicy.",
    },
    {
      restaurantName: "The Dining Den",
      menuName: "Beef",
      description: "Succulent shrimp sautéed in a rich garlic butter sauce.",
    },
    {
      restaurantName: "Urban Bites",
      menuName: "Vegetable",
      description: "Crispy rolls stuffed with fresh vegetables, served.",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentMenu, setCurrentMenu] = useState({
    restaurantName: "",
    menuName: "",
    description: "",
  });
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleOpen = () => {
    setCurrentMenu({ restaurantName: "", menuName: "", description: "" });
    setEditMode(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteClose = () => {
    setOpenDeleteDialog(false);
  };

  const handleSave = () => {
    if (editMode) {
      const updatedMenus = menus.map((menu, index) => (index === currentMenu.index ? currentMenu : menu));
      setMenus(updatedMenus);
    } else {
      setMenus([...menus, currentMenu]);
    }
    setOpen(false);
  };

  const handleEdit = (index) => {
    setCurrentMenu({ ...menus[index], index });
    setEditMode(true);
    setOpen(true);
  };

  const handleDeleteConfirm = () => {
    const updatedMenus = menus.filter((_, index) => index !== deleteIndex);
    setMenus(updatedMenus);
    setOpenDeleteDialog(false);
  };

  const handleDelete = (index) => {
    setDeleteIndex(index);
    setOpenDeleteDialog(true);
  };

  return (
    <Container>
      <Box mt={4} mb={2}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography variant="subtitle1" gutterBottom>
            RMS &gt; Menu List
          </Typography>
        </Breadcrumbs>
      </Box>
      <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold" }}>
        Menu List
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
          <Button variant="contained" color="primary" onClick={() => handleOpen()}>
            + Add Menu
          </Button>
          <TextField size="small" variant="outlined" placeholder="Search" />
        </DialogActions>
      </Box>

      <MenuTable menus={menus} onEdit={handleEdit} onDelete={handleDelete} />

      {/* Add/Edit Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editMode ? "Edit Menu" : "Add New Menu"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Restaurant Name"
            fullWidth
            value={currentMenu.restaurantName}
            onChange={(e) => setCurrentMenu({ ...currentMenu, restaurantName: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Menu Name"
            fullWidth
            value={currentMenu.menuName}
            onChange={(e) => setCurrentMenu({ ...currentMenu, menuName: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            multiline
            rows={3}
            value={currentMenu.description}
            onChange={(e) => setCurrentMenu({ ...currentMenu, description: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            {editMode ? "Save Changes" : "Add Menu"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDeleteDialog} onClose={handleDeleteClose}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this menu?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default MenuList;
