import React from 'react';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { selectMode } from '@/features/user/userSlice';

function AppThemeProvider({ children }) {
  const mode = useSelector(selectMode);
  const theme = responsiveFontSizes(
    createTheme({
      palette: {
        mode,
        primary: {
          main: '#1c9c7c',
        },
        secondary: {
          main: '#9DF3C4',
        },
        Ink: {
          Darkest: '#000000',
          Darker: '#222222',
          Dark: '#303437',
          Base: '#404446',
          Light: '#6C7072',
          Lighter: '#72777A',
        },
        Sky: {
          Dark: '#979C9E',
          Base: '#CDCFD0',
          Light: '#E3E5E5',
          Lighter: '#F2F4F5',
          Lightest: '#F7F9FA',
          White: '#FFFFFF',
        },

        Red: {
          Darkest: '#6B0206',
          Base: '#E8282B',
          Light: '#F94739',
          Lighter: '#FF9898',
          Lightest: '#FFE5E5',
        },

        Green: {
          Darkest: '#0A4C0A',
          Base: '#0F8B0F',
          Light: '#1EB01E',
          Lighter: '#7FF77F',
          Lightest: '#E5FFE5',
        },
        background: {
          default: mode === 'dark' ? '#000000' : '#FCFBFA',
          opposite: mode === 'dark' ? '#FCFBFA' : '#000000',
          paper: mode === 'dark' ? '#131313' : '#FCFCFC',
        },
        text: {
          primary: mode === 'dark' ? '#FFFFFF' : '#000000',
          secondary: '#999999',
          disabled: '#C3C1BD',
        },

        grey: {
          50: mode === 'dark' ? 'hsl(0, 0%, 10%)' : 'hsl(0, 5%, 95%)',
          100: mode === 'dark' ? 'hsl(0, 0%, 20%)' : 'hsl(0, 0%, 90%)',
          200: mode === 'dark' ? 'hsl(0, 0%, 30%)' : 'hsl(0, 0%, 80%)',
          300: mode === 'dark' ? 'hsl(0, 0%, 40%)' : 'hsl(0, 0%, 70%)',
          400: mode === 'dark' ? 'hsl(0, 0%, 50%)' : 'hsl(0, 0%, 60%)',
          500: mode === 'dark' ? 'hsl(0, 0%, 60%)' : 'hsl(0, 0%, 50%)',
          600: mode === 'dark' ? 'hsl(0, 0%, 70%)' : 'hsl(0, 0%, 40%)',
          700: mode === 'dark' ? 'hsl(0, 0%, 80%)' : 'hsl(0, 0%, 30%)',
          800: mode === 'dark' ? 'hsl(0, 0%, 90%)' : 'hsl(0, 0%, 20%)',
          900: mode === 'dark' ? 'hsl(0, 5%, 95%)' : 'hsl(0, 0%, 10%)',
        },
        gradient: {
          bronze: 'linear-gradient(180deg, #9C6D3E 0%, #E8C8A9 100%)',
          silver: 'linear-gradient(180deg, #808080 0%, #DFDFDF 100%)',
          gold: 'linear-gradient(180deg, #A3873C 0%, #E3D294 100%)',
        },
      },

      typography: {
        fontFamily: 'Dosis, sans-serif',

        h1: {
          fontSize: '26px',
          fontWeight: '600',
          // lineHeight: '33px',
        },
        h2: {
          fontSize: '22px',
          fontWeight: '600',
          // lineHeight: '28px',
        },
        h3: {
          fontSize: '20px',
          fontWeight: '600',
          // lineHeight: '25px',
        },
        h4: {
          fontSize: '18px',
          fontWeight: '600',
          // lineHeight: '23px',
        },
        h5: {
          fontSize: '16px',
          fontWeight: '500',
          // lineHeight: '20px',
        },

        CTA1: {
          fontSize: '28px',
          fontWeight: '500',
          // lineHeight: '35px',
        },
        CTA2: {
          fontSize: '18px',
          fontWeight: '500',
          // lineHeight: '23px',
        },
        CTA3: {
          fontSize: '16px',
          fontWeight: '400',
          // lineHeight: '20px',
        },
        Body1: {
          fontFamily: 'Lato, sans-serif',
          fontSize: '14px',
          fontWeight: '400',
          // lineHeight: '18px',
        },
        Body2: {
          fontFamily: 'Lato, sans-serif',
          fontSize: '13px',
          fontWeight: '400',
          // lineHeight: '16px',
        },
        Body3: {
          fontFamily: 'Lato, sans-serif',
          fontSize: '12px',
          fontWeight: '400',
          // lineHeight: '14px',
        },
        Body1Medium: {
          fontFamily: 'Lato, sans-serif',
          fontSize: '14px',
          fontWeight: '500',
          // lineHeight: '17px',
        },
        Body1SemiBold: {
          fontFamily: 'Lato, sans-serif',
          fontSize: '14px',
          fontWeight: '600',
          // lineHeight: '17px',
        },
        body3: {
          fontSize: '12px',
          // lineHeight: '16px',
          display: 'block',
        },
        body4: {
          fontSize: '10px',
          // lineHeight: '14px',
          display: 'block',
        },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              // ---CSS BODY--- \\
            },
          },
        },
        MuiLink: {
          styleOverrides: {
            root: {
              cursor: 'pointer',
              textDecoration: 'none',
              lineHeight: '16px',
              transition: 'all 0.1s ease-in-out',
              '&:hover': {
                opacity: 0.8,
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
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
