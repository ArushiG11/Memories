import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';


//   smMargin: {
//     margin: theme.spacing(1),
//   },
//   actionDiv: {
//     textAlign: 'center',
//   },
// }));

export const StyledContainer = styled(Grid)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
}));
