import HomePage from '../pages/home/HomePage';
import GridView from '@mui/icons-material/GridView';
import KeyboardDoubleArrowRight from '@mui/icons-material/KeyboardDoubleArrowRight';
import RestaurentList from '../pages/restaurentManagement/RestaurentList';
import EmployeeList from '../pages/employeeManagement/EmployeeList';
import CreateEmployee from '../pages/employeeManagement/CreateEmployee';
import EmployeePageLayout from '../pages/employeeManagement/EmployeePageLayout';
import RestaurentPageLayout from '../pages/restaurentManagement/RestaurentPageLayout';
import MenuPageLayout from '../pages/menuManagement/MenuPageLayout';
import MenuList from '../pages/menuManagement/MenuList';
import MenuItem from '../pages/menuManagement/MenuItem';

const appRoutes = [
  {
    index: true,
    element: <HomePage />,
    state: 'home',
  },
  {
    path: '/restaurent',
    element: <RestaurentPageLayout />,
    state: 'restaurent',
    sidebarProps: {
      displayText: 'Reastaurent Management',
      icon: <GridView />,
    },
    child: [
      {
        path: '/restaurent/list',
        element: <RestaurentList />,
        state: 'restaurent.list',
        sidebarProps: {
          displayText: 'Restaurent List',
          icon: <KeyboardDoubleArrowRight />,
        },
      },
    ],
  },
  {
    path: '/employee',
    element: <EmployeePageLayout />,
    state: 'employee',
    sidebarProps: {
      displayText: 'Employee Management',
      icon: <GridView />,
    },
    child: [
      {
        path: '/employee/list',
        element: <EmployeeList />,
        state: 'employee.list',
        sidebarProps: {
          displayText: 'Employee List',
          icon: <KeyboardDoubleArrowRight />,
        },
      },
      {
        path: '/employee/create',
        element: <CreateEmployee />,
        state: 'employee.create',
        sidebarProps: {
          displayText: 'Create Employee',
          icon: <KeyboardDoubleArrowRight />,
        },
      },
    ],
  },
  {
    path: '/menu',
    element: <MenuPageLayout />,
    state: 'menu',
    sidebarProps: {
      displayText: 'Menu Management',
      icon: <GridView />,
    },
    child: [
      {
        path: '/menu/list',
        element: <MenuList />,
        state: 'menu.list',
        sidebarProps: {
          displayText: 'Menu List',
          icon: <KeyboardDoubleArrowRight />,
        },
      },
      {
        path: '/menu/item',
        element: <MenuItem />,
        state: 'menu.item',
        sidebarProps: {
          displayText: 'Menu Item',
          icon: <KeyboardDoubleArrowRight />,
        },
      },
    ],
  },
];

export default appRoutes;
