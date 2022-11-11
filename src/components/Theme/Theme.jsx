import { Stack, Box, Typography } from '@mui/material';

const Theme = () => {
  const colors = [
    {
      type: 'primary',
      colors: ['.main'],
    },
    {
      type: 'secondary',
      colors: ['.main'],
    },
    {
      type: 'grey',
      colors: ['.50', '.100', '.200', '.300', '.400', '.500', '.600'],
    },
    {
      type: 'background',
      colors: ['.default', '.paper', '.opposite', '.light'],
    },
    {
      type: 'text',
      colors: ['.primary', '.secondary', '.disabled'],
    },
  ];

  const colorCards = colors.map((cat) => (
    <Stack key={cat.type} gap={1}>
      <Typography variant="h3">{cat.type}</Typography>
      <Stack direction="row" flexWrap="wrap" gap={2}>
        {cat.colors.map((color) => (
          <Stack key={color}>
            <Box
              sx={{
                width: 100,
                height: 100,
                backgroundColor: cat.type + color,
                background: color === 'gradient' && cat.type + color,
                borderRadius: 1,
              }}
            />
            <Typography color="grey.400">{color}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  ));

  return (
    <Stack
      sx={{
        background: 'black',
        p: 2,
        borderRadius: 5,
      }}
      gap={2}
    >
      <h1>Colors</h1> {colorCards}
    </Stack>
  );
};

export default Theme;
