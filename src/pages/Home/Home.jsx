import { Typography, Stack, Container } from '@mui/material';
import Counter from '../../components/Counter/Counter';
import TemplateTester from '../../components/TemplateTester/TemplateTester';

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
      <TemplateTester />
      <Counter />
    </Container>
  );
};

export default Home;
