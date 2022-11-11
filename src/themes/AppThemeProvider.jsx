import { ThemeProvider, createTheme } from '@mui/material/styles';
import { selectMode } from '../features/user/userSlice';
import { useSelector } from 'react-redux';

export const AppThemeProvider = ({ children }) => {
  const mode = useSelector(selectMode);
  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#DD3333',
      },
      secondary: {
        main: '#222489',
      },
      background: {
        default: mode === 'dark' ? '#1F1F1F' : '#FCFBFA',
        paper: mode === 'dark' ? '#131313' : '#fcfcfc',
        opposite: mode === 'dark' ? '#FCFBFA' : '#1F1F1F',
        light: '#FCFBFA',
      },
      grey: {
        50: mode === 'dark' ? 'rgb(70, 70, 70)' : 'rgb(246, 243, 243)',
        100: mode === 'dark' ? 'rgb(90, 90, 90)' : 'rgb(230, 227, 226)',
        200: mode === 'dark' ? 'rgb(110, 110, 110)' : 'rgb(210, 210, 210)',
        300: mode === 'dark' ? 'rgb(133, 133, 133)' : 'rgb(190, 190, 190)',
        400: mode === 'dark' ? 'rgb(155, 155, 155)' : 'rgb(155, 155, 155)',
        500: mode === 'dark' ? 'rgb(189, 189, 189)' : 'rgb(133, 134, 138)',
        600: mode === 'dark' ? 'rgb(224, 224, 224)' : 'rgb(99, 101, 106)',
        700: mode === 'dark' ? 'rgb(240, 240, 240)' : 'rgb(70, 70, 70)',
      },
    },

    text: {
      primary: mode === 'dark' ? '#FCFBFA' : '#5C5C5C',
      disabled: '#C3C1BD',
      secondary: '#999999',
    },

    typography: {
      fontFamily: 'Lato, sans-serif',
      fontstyle: 'normal',
      h1: {
        fontSize: '82px',
        fontWeight: '500',
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
        fontSize: '26px',
        fontWeight: '500',
        lineHeight: '32px',
      },
      h3: {
        fontSize: '22px',
        fontWeight: '500',
        lineHeight: '26px',
      },
      h4: {
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '23px',
      },
      h5: {
        fontSize: '17px',
        fontWeight: '500',
        lineHeight: '20px',
      },
      h6: {
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '19px',
      },

      body1: {
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '20px',
      },
      body2: {
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '18px',
      },
      body3: {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '16px',
        component: 'span',
      },
      body4: {
        fontSize: '10px',
        fontWeight: '400',
        lineHeight: '14px',
      },
      //subtitle1
      //subtitle2
      //button
      //caption
      //overline
    },
    components: {
      MuiLink: {
        styleOverrides: {
          root: {
            color: '#ABA8AA',
            cursor: 'pointer',
            textDecoration: 'none',
            lineHeight: '24px',
            '&:hover': {
              color: mode === 'dark' ? 'rgb(224, 224, 224)' : 'rgb(99, 101, 106)',
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            aspectRatio: '1/1',
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
};
