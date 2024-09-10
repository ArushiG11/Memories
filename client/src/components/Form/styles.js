import styled from '@emotion/styled';
import { Paper } from '@mui/material';

export const StyledRoot = styled('div')(({ theme }) => ({
  '& .MuiTextField-root': {
    margin: 10,
  },
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: 10,
}));

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

export const StyledFileInput = styled('div')(({ theme }) => ({
  width: '97%',
  margin: '10px 0',
}));

export const StyledSubmitButton = styled('Button')(({ theme }) => ({
  marginBottom: 10,
}));