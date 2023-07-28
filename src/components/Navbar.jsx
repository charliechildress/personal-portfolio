import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const drawerWidth = '100%';

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          backgroundColor: '#308A6C',
          overflow: 'hidden',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          '&:hover': { backgroundColor: '#9B9B9B' },
          '&.Mui-selected': {
            backgroundColor: '#C7DDD6',
          },
        },
      },
    },
  },
});

export default function PermanentDrawerLeft({ active }) {
  return (
    <ThemeProvider theme={theme}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            maxWidth: drawerWidth,
          },
        }}
        variant='permanent'
        anchor='top'
      >
        <div className='flex flex-row m-10'>
          <a href='#top'>
            <p>Charlie Childress</p>
          </a>
          <div className='flex flex-grow justify-end'>
            <a href='#about' className='pr-10'>
              {active === 'About' && (
                <Box sx={{ backgroundColor: 'red' }}>
                  <p>About</p>
                </Box>
              )}
              {active !== 'About' && (
                <Box>
                  <p>About</p>
                </Box>
              )}
            </a>
            <a href='#projects' className='pr-10'>
              {active === 'Projects' && (
                <Box sx={{ backgroundColor: 'red' }}>
                  <p>Projects</p>
                </Box>
              )}
              {active !== 'Projects' && (
                <Box>
                  <p>Projects</p>
                </Box>
              )}
            </a>
            <a href='#skills' className='pr-10'>
              {active === 'Skills' && (
                <Box sx={{ backgroundColor: 'red' }}>
                  <p>Skills</p>
                </Box>
              )}
              {active !== 'Skills' && (
                <Box>
                  <p>Skills</p>
                </Box>
              )}
            </a>
            <a href='#contact'>
              {active === 'Contact' && (
                <Box sx={{ backgroundColor: 'red' }}>
                  <p>Contact</p>
                </Box>
              )}
              {active !== 'Contact' && (
                <Box>
                  <p>Contact</p>
                </Box>
              )}
            </a>
          </div>
        </div>
      </Drawer>
    </ThemeProvider>
  );
}
