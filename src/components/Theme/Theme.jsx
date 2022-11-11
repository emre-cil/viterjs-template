import { Stack, Box, Typography } from '@mui/material';

const Theme = () => {
  const colors = [
    {
      type: 'primary',
      colors: ['.light', '.main', '.dark'],
    },
    {
      type: 'secondary',
      colors: ['.light', '.main', '.dark'],
    },
    {
      type: 'error',
      colors: ['.light', '.main', '.dark'],
    },
    {
      type: 'warning',
      colors: ['.light', '.main', '.dark'],
    },
    {
      type: 'info',
      colors: ['.light', '.main', '.dark'],
    },
    {
      type: 'success',
      colors: ['.light', '.main', '.dark'],
    },
    {
      type: 'grey',
      colors: ['.50', '.100', '.200', '.300', '.400', '.500', '.600', '.700'],
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

  const typographies = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'body3',
    'body4',
    'button',
    'caption',
    'overline',
  ];
  const themeTypes = (type, func) => (
    <Stack
      sx={{
        background: 'black',
        p: 2,
        borderRadius: 5,
      }}
      gap={2}
    >
      <h1>{type}</h1> {func}
    </Stack>
  );

  const colorCards = colors.map((cat) => (
    <Stack key={cat.type} gap={1}>
      <Typography variant="h3">{cat.type}</Typography>
      <Stack direction="row" flexWrap="wrap" gap={2}>
        {cat.colors.map((color) => (
          <Stack key={color}>
            <Box
              sx={{
                width: { xs: 62, sm: 100, md: 125 },
                height: { xs: 62, sm: 100, md: 125 },
                backgroundColor: cat.type + color,
                background: color === 'gradient' && cat.type + color,
                borderRadius: 1,
                p: 0.65,
                '& p': {
                  fontSize: { xs: 10, sm: 14, md: 16 },
                  textShadow: '0px 0px 10px white',
                },
              }}
            >
              <Typography color="black" fontWeight="bold">
                {color}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Stack>
  ));

  const typoCards = typographies.map((typo) => (
    <Stack key={typo} gap={1}>
      <Typography variant={typo}>{typo}</Typography>
    </Stack>
  ));

  return (
    <Stack gap={5}>
      {themeTypes('#Colors', colorCards)}
      {themeTypes('#Typography', typoCards)}
    </Stack>
  );
};

export default Theme;
