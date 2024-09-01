import { AppBar, Toolbar, Typography } from '@mui/material';
import colorConfigs from '../../configs/colorConfigs';
import sizeConfigs from '../../configs/sizeConfigs';

const Topbar = () => {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width} )`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: '1px',
        borderRadius: '5px',
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color,
        top: '10px',
        height: '50px',
        justifyContent: 'center',
      }}
    >
      <Toolbar>
        <Typography variant='h6'>Restaurent Management System</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
