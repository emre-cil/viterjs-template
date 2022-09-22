import { Box, Stack, Typography, TextField, InputAdornment, Button, Link, IconButton } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthOutlet from './AuthOutlet';

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const loginHandler = async (e) => {
    e.preventDefault();
    let user = email.current.value.replace(/\s+/g, '');
    let pwd = password.current.value.replace(/\s+/g, '');
    //do login here
  };

  /**Focus email input when component mounted. */
  useEffect(() => {
    email.current.focus();
  }, []);

  return (
    <AuthOutlet>
      <TextField inputRef={email} type="email" label="E-mail" variant="outlined" />
      <Stack gap={1}>
        <TextField
          inputRef={password}
          type={showPassword ? 'text' : 'password'}
          autoComplete=""
          label="Password"
          variant="outlined"
          sx={{ '& .MuiInputBase-root ': { pr: '4px' } }}
          InputProps={{
            // <-- This is where the toggle button is added.
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Link variant="body2" textAlign="right" onClick={() => navigate('/forgot-password')}>
          Forgot Password?
        </Link>
        <Button variant="contained" onClick={loginHandler}>
          Login
        </Button>
      </Stack>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="body2" component="p">
          Not a member?{' '}
        </Typography>
        <Link variant="body2" sx={{ display: 'inline', ml: 1 }} onClick={() => navigate('/register')}>
          Register
        </Link>
      </Box>
    </AuthOutlet>
  );
};

export default Login;
