// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   Box,
// } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { Container, Typography, Button, Breadcrumbs, Link } from "@mui/material";

// const createData = (restaurantName, menuName, description) => {
//   return { restaurantName, menuName, description };
// };

// const rows = [
//   createData("Flavor Haven", "Chicken", "Grilled marinated chicken skewers served with a spicy."),
//   createData("The Dining Den", "Beef", "Succulent shrimp sautéed in a rich garlic butter sauce."),
//   createData("Urban Bites", "Vegetable", "Crispy rolls stuffed with fresh vegetables, served."),
// ];

// const MenuTable = () => {
//   return (
//     <Container>
//       <Box mt={4} mb={2}>
//         <Typography variant="h4">Restaurant Management System</Typography>
//         <Breadcrumbs aria-label="breadcrumb">
//           <Link underline="hover" color="inherit" href="/">
//             RMS
//           </Link>
//           <Typography color="text.primary">Menu List</Typography>
//         </Breadcrumbs>
//       </Box>

//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//         <Typography variant="h5">Menu List</Typography>
//         <Button variant="contained" color="primary">
//           + Add Menu
//         </Button>
//       </Box>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Restaurant Name</TableCell>
//               <TableCell>Menu Name</TableCell>
//               <TableCell>Description</TableCell>
//               <TableCell>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row, index) => (
//               <TableRow key={index}>
//                 <TableCell>{row.restaurantName}</TableCell>
//                 <TableCell>{row.menuName}</TableCell>
//                 <TableCell>{row.description}</TableCell>
//                 <TableCell>
//                   <IconButton aria-label="edit">
//                     <EditIcon />
//                   </IconButton>
//                   <IconButton aria-label="delete">
//                     <DeleteIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Container>
//   );
// };

// export default MenuTable;
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const MenuTable = ({ menus, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Restaurant Name</TableCell>
            <TableCell>Menu Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menus.map((menu, index) => (
            <TableRow key={index}>
              <TableCell>{menu.restaurantName}</TableCell>
              <TableCell>{menu.menuName}</TableCell>
              <TableCell>{menu.description}</TableCell>
              <TableCell>
                <IconButton aria-label='edit' onClick={() => onEdit(index)}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label='delete' onClick={() => onDelete(index)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MenuTable;
