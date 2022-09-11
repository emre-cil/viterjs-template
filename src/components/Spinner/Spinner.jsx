import { Box, useTheme } from '@mui/material';
const Spinner = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        m: '2rem auto',
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '50%',
        animation: 'spinner 0.5s linear infinite',
        border: `5px solid ${theme.palette.grey[300]}`,
        borderTop: `5px solid ${theme.palette.primary.main}`,

        ' @keyframes spinner ': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      }}
    ></Box>
  );
};

export default Spinner;
