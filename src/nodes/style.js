import styled from 'styled-components';
import { TextField, FormControl } from '@mui/material';

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
export const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    color: white;
  }

  & label{
    color: rgb(188, 125, 255);
  }

  & label.Mui-focused {
    color: #b43fff;
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: rgb(188, 125, 255);
    }
    &:hover fieldset {
      border-color: #b43fff;
    }
    &.Mui-focused fieldset {
      border-color: #b43fff;
    }
  }
`;

export const StyledFormControl = styled(FormControl)`
  width: 100%;
  margin-top: 8px;

  & label {
    color: rgb(188, 125, 255);
  }

  & label.Mui-focused {
    color: #b43fff;
  }

  & .MuiOutlinedInput-root {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    color: white;

    & fieldset {
      border-color: rgb(188, 125, 255);;
    }

    &:hover fieldset {
      border-color: #b43fff;
    }

    &.Mui-focused fieldset {
      border-color: #b43fff;
    }
  }

  & .MuiSvgIcon-root {
    color: white;
  }
`;