import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Routing from './routes/Routing';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
