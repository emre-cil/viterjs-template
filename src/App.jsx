import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Routing from './route/Routing';

const App = () => {
  return (
    <BrowserRouter>
      <Routing />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
