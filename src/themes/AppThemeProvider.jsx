import { ThemeProvider, createTheme } from '@mui/material/styles';
import { selectMode } from '../features/user/userSlice';
import { useSelector } from 'react-redux';

export const AppThemeProvider = ({ children }) => {
  const mode = useSelector(selectMode);
  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#F8A52D',
      },
      secondary: {
        main: '#0014ad',
      },
      grey: {
        50: '#FCFCFC',
        100: '#FAFAFA',
        200: mode === 'dark' ? '#1E1E1E' : '#F7F7F7',
        300: mode === 'dark' ? '#3D3D3D' : '#F6F3F3',
        400: mode === 'dark' ? '#4D4D4D' : '#E6E3E2',
        500: mode === 'dark' ? '#BDBDBD' : '#85868a',
        600: mode === 'dark' ? '#E0E0E0' : '#63656A',
      },

      background: {
        light: '#FCFBFA',
        paper: mode === 'dark' ? '#1F1F1F' : '#FCFBFA',
        default: mode === 'dark' ? '#1F1F1F' : '#FCFBFA',
        opposite: mode === 'dark' ? '#FCFBFA' : '#1F1F1F',
        gradient: 'linear-gradient(180deg, #55bfec 0%, #1c2eb3 100%)',
      },
    },

    text: {
      primary: mode === 'dark' ? '#FCFBFA' : '#5C5C5C',
      disabled: '#C3C1BD',
      secondary: '#999999',
    },

    typography: {
      fontFamily: 'Poppins, sans-serif',
      fontstyle: 'normal',
      h1: {
        fontSize: '82px',
        fontWeight: '400',
        color: '#999999',
        lineHeight: '85px',
        '@media (max-width: 1280px)': {
          fontSize: '50px',
          lineHeight: '55px',
        },
        '@media (max-width: 825px)': {
          fontSize: '35px',
          lineHeight: '38px',
        },
        '@media (max-width: 500px)': {
          fontSize: '28px',
          lineHeight: '30px',
        },
      },
      h2: {
        fontSize: '30px',
        fontWeight: '600',
        color: mode === 'dark' ? '#FCFBFA' : '#5C5C5C',
        lineHeight: '33px',
      },
      h3: {
        fontSize: '20px',
        fontWeight: '600',
        color: '#ABA8AA',
        lineHeight: '25px',
      },
      h4: {
        fontSize: '18px',
        fontWeight: '500',
        color: '#ABA8AA',
        lineHeight: '23px',
      },
      h5: {
        fontSize: '16px',
        fontWeight: '500',
        color: '#ABA8AA',
        lineHeight: '20px',
      },

      body1: {
        fontSize: '16px',
        fontWeight: '400',
        color: '#ABA8AA',
        lineHeight: '19px',
      },
      body2: {
        fontSize: '15px',
        fontWeight: '400',
        color: '#ABA8AA',
        lineHeight: '20px',
      },
      body3: {
        fontSize: '13px',
        fontWeight: '400',
        color: '#ABA8AA',
        lineHeight: '15px',
      },

      body1Medium: {
        fontSize: '16px',
        fontWeight: '500',
        color: '#5C5C5C',
        lineHeight: '18px',
      },
      body1Big: {
        display: 'block',
        fontSize: '22px',
        fontWeight: '400',
        color: '#ABA8AA',
        lineHeight: '25px',
        '@media (max-width: 1280px)': {
          fontSize: '18px',
          lineHeight: '22px',
        },
        '@media (max-width: 825px)': {
          fontSize: '16px',
          lineHeight: '20px',
        },
      },
      body1SemiBold: {
        display: 'block',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '18px',
        fontWeight: '500',
        color: mode === 'dark' ? '#FCFBFA' : '#000',
        lineHeight: '22px',
      },
      textDefault: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        color: mode === 'dark' ? '#FCFBFA' : '#000',
        lineHeight: '24px',
      },
    },
  });

  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
};
