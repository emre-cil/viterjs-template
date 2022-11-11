import { Typography, Stack, Container } from '@mui/material';
import Counter from '../../components/Counter/Counter';
import Theme from '../../components/Theme/Theme';

const Home = () => {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack gap={1} my={2}>
        <Typography textAlign="center" variant="h2">
          Viterjs-template
        </Typography>
        <Typography textAlign="center" variant="subtitle1">
          React + Redux + MuI + Axios + ESlint + Prettier
        </Typography>
      </Stack>
      <Theme />
      <Counter />
    </Container>
  );
};

export default Home;
