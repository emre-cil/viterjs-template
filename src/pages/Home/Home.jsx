import Counter from '../../components/Counter/Counter';
import { Typography, Stack } from '@mui/material';
import Theme from '../../components/Theme/Theme';
import { Container } from '@mui/material';

const Home = () => {
  return (
    <Container sx={{ py: 2 }}>
      <Stack alignItems="center" gap={1} my={2}>
        <Typography variant="h1">Viterjs-template</Typography>
        <Typography variant="h4">React + Redux + MuI + Axios + ESlint + Prettier</Typography>
      </Stack>
      <Theme />
      <Counter />
    </Container>
  );
};

export default Home;
