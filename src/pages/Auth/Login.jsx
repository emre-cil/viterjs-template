import { Box, Stack, Typography, TextField, InputAdornment, Button, Link, IconButton } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import AuthOutlet from './AuthOutlet';
import { useState } from 'react';

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
    if (user === '') {
      console.log('Please enter your email.');
      email.current.focus();
    } else if (pwd === '') {
      console.log('Please enter your password.');
      password.current.focus();
    } else {
      //do login stuff
    }
  };

  /**Focus email input when component mounted. */
  useEffect(() => {
    email.current.focus();
  }, []);

  return (
    <AuthOutlet>
      <TextField inputRef={email} type="email" label="E-mail" variant="outlined" autoComplete="off" />
      <Stack gap={1}>
        <TextField
          inputRef={password}
          type={showPassword ? 'text' : 'password'}
          label="Password"
          variant="outlined"
          sx={{ '& .MuiInputBase-root ': { pr: '4px' } }}
          autoComplete="new-password"
          InputProps={{
            // <-- This is where the toggle button sis added.
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
          Forgot password?
        </Link>

        <Button variant="contained" onClick={loginHandler}>
          Sign in
        </Button>
      </Stack>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="body2" component="p">
          Dont you have an account?{' '}
        </Typography>
        <Link variant="body2" sx={{ display: 'inline', ml: 1 }} onClick={() => navigate('/register')}>
          Register
        </Link>
      </Box>
    </AuthOutlet>
  );
};

export default Login;
