// src/components/AddMenuItemForm.js

import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const AddMenuItemForm = () => {
  const [menu, setMenu] = useState("Chicken");
  const [menuItem, setMenuItem] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [picture, setPicture] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log({
      menu,
      menuItem,
      price,
      description,
      isVegetarian,
      isGlutenFree,
      isAvailable,
      picture,
    });
  };

  return (
    <Paper sx={{ p: 4 }}>
      <h2>Add Menu Item</h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Menu</InputLabel>
              <Select value={menu} onChange={(e) => setMenu(e.target.value)} label="Menu">
                <MenuItem value="Chicken">Chicken</MenuItem>
                <MenuItem value="Beef">Beef</MenuItem>
                <MenuItem value="Vegetarian">Vegetarian</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Menu Item"
              variant="outlined"
              fullWidth
              value={menuItem}
              onChange={(e) => setMenuItem(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="outlined" component="label" fullWidth>
              Choose File
              <input type="file" hidden onChange={(e) => setPicture(e.target.files[0])} />
            </Button>
            {picture ? <span>{picture.name}</span> : <span>No File Selected yet</span>}
          </Grid>
          <Grid item xs={12} sm={6} container spacing={2}>
            <Grid item>
              <FormControlLabel
                control={<Checkbox checked={isVegetarian} onChange={(e) => setIsVegetarian(e.target.checked)} />}
                label="Is-Vegetarian"
              />
            </Grid>
            <Grid item>
              <FormControlLabel
                control={<Checkbox checked={isGlutenFree} onChange={(e) => setIsGlutenFree(e.target.checked)} />}
                label="Is-gluten free"
              />
            </Grid>
            <Grid item>
              <FormControlLabel
                control={<Checkbox checked={isAvailable} onChange={(e) => setIsAvailable(e.target.checked)} />}
                label="Is-available"
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default AddMenuItemForm;
