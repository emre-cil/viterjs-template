import { Box, Stack, Typography, TextField, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import AuthOutlet from './AuthOutlet';

const Register = () => {
  const ad = useRef(null);
  const soyad = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const passwordConf = useRef(null);
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    let FirstName = ad.current.value.replace(/\s+/g, '');
    let LastName = soyad.current.value.replace(/\s+/g, '');
    let Email = email.current.value.replace(/\s+/g, '');
    let Password = password.current.value.replace(/\s+/g, '');
    let pwdConf = passwordConf.current.value.replace(/\s+/g, '');
    if (FirstName === '') {
      console.log('Please enter name.');
      ad.current.focus();
    } else if (LastName === '') {
      console.log('Please enter surname.');
      soyad.current.focus();
    } else if (Email === '') {
      console.log('Please enter email.');
      email.current.focus();
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{1,20}$/.test(Email)) {
      console.log('Please enter real email.');
      email.current.focus();
    } else if (Password === '') {
      console.log('Please enter password.');
      password.current.focus();
    } else if (pwdConf === '') {
      console.log('Please enter password again.');
      passwordConf.current.focus();
    } else if (Password !== pwdConf) {
      console.log('Passwords do not match.');
      password.current.focus();
    } else if (Password.length < 6) {
      console.log('Password must be at least 6 characters.');
      password.current.focus();
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/.test(Password)) {
      console.log('Password must contain at least one uppercase letter, one lowercase letter and one number.');
      password.current.focus();
    } else {
      //do register stuff
    }
  };

  /**Focus name input when component mounted. */
  useEffect(() => {
    ad.current.focus();
  }, []);

  return (
    <AuthOutlet>
      <Stack direction="row" gap={3} sx={{ alignItems: 'center' }}>
        <TextField inputRef={ad} label="Name" type="text" variant="outlined" autoComplete="off" />
        <TextField inputRef={soyad} label="Surname" type="text" variant="outlined" autoComplete="off" />
      </Stack>
      <TextField inputRef={email} type="email" label="E-mail" variant="outlined" autoComplete="off" />
      <TextField inputRef={password} type="password" autoComplete="new-password" label="Password" variant="outlined" />
      <TextField
        inputRef={passwordConf}
        hidden
        type="password"
        autoComplete="new-password"
        label="Password (again)"
        variant="outlined"
      />

      <Button variant="contained" onClick={registerHandler}>
        Sign Up
      </Button>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="body2" component="p">
          Alredy have an account?{' '}
        </Typography>
        <Link variant="body2" sx={{ display: 'inline', ml: 1 }} onClick={() => navigate('/login')}>
          Sign In
        </Link>
      </Box>
    </AuthOutlet>
  );
};

export default Register;
