import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { selectMode } from '../features/user/userSlice';
import { useSelector } from 'react-redux';

export const AppThemeProvider = ({ children }) => {
  const mode = useSelector(selectMode);
  const theme = responsiveFontSizes(
    createTheme({
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
          50: mode === 'dark' ? 'hsl(0, 0%, 5%)' : 'hsl(0, 10%, 95%)',
          100: mode === 'dark' ? 'hsl(0, 0%, 15%)' : 'hsl(0, 5%, 90%)',
          200: mode === 'dark' ? 'hsl(0, 0%, 25%)' : 'hsl(0, 2%, 83%)',
          300: mode === 'dark' ? 'hsl(0, 0%, 35%)' : 'hsl(0, 0%, 80%)',
          400: mode === 'dark' ? 'hsl(0, 0%, 50%)' : 'hsl(0, 0%, 70%)',
          500: mode === 'dark' ? 'hsl(0, 0%, 70%)' : 'hsl(0, 0%, 50%)',
          600: mode === 'dark' ? 'hsl(0, 0%, 80%)' : 'hsl(0, 0%, 35%)',
          700: mode === 'dark' ? 'hsl(0, 2%, 83%)' : 'hsl(0, 0%, 25%)',
          800: mode === 'dark' ? 'hsl(0, 5%, 90%)' : 'hsl(0, 0%, 15%)',
          900: mode === 'dark' ? 'hsl(0, 10%, 95%)' : 'hsl(0, 0%, 5%)',
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
        body1: {
          lineHeight: '20px',
        },
        body2: {
          lineHeight: '18px',
        },
        body3: {
          fontSize: '12px',
          lineHeight: '16px',
          display: 'block',
        },
        body4: {
          fontSize: '10px',
          lineHeight: '14px',
          display: 'block',
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
    }),
  );

  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
};
