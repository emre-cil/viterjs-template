import { Stack, useTheme, Typography } from '@mui/material';
import { FormSX } from './Auth.styles';

const AuthOutlet = ({ children, header }) => {
  const theme = useTheme();
  return (
    <form>
      <Stack
        gap={3}
        sx={{
          ...FormSX,
          border: `1px solid ${theme.palette.grey.border}`,
          background: theme.palette.grey[50],
        }}
      >
        {header ? (
          <Typography textAlign="center" variant="h2">
            {header}
          </Typography>
        ) : (
          <img
            src={theme.palette.mode === 'dark' ? 'https://picsum.photos/100/50' : 'https://picsum.photos/200/300'}
            alt="logo"
          />
        )}
        {children}
      </Stack>
    </form>
  );
};

export default AuthOutlet;
