import { bootstrap } from '@theme-ui/preset-bootstrap';

export default {
  ...bootstrap,
  styles: {
    ...bootstrap.styles,
  },
  breakpoints: [...bootstrap.breakpoints, '1400px'],
  sizes: { ...bootstrap.sizes, xxl: 1320 },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
      },
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
    },
  },
};
