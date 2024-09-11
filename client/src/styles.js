import { styled } from '@mui/material/styles';
import { AppBar, Typography, Grid } from '@mui/material';

// we are creating styled component directly so we can use them directly in js file instead of applying classes
export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: 'rgba(0,183,255, 1)',
}));

export const StyledImg = styled('img')(({ theme }) => ({
  marginLeft: '15px',
}));

export const StyledMainContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse'
  }
}));