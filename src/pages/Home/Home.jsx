import Counter from '../../features/counter/Counter';
import { Typography, Stack } from '@mui/material';

const Home = () => {
  return (
    <Stack gap={3} mt={4} alignItems="center">
      <Typography variant="h1">Viterjs-template</Typography>
      <Typography variant="h4">React + Redux + MuI + Axios + ESlint + Prettier</Typography>
      <Counter />
    </Stack>
  );
};

export default Home;
