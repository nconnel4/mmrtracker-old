import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bg: 'gray.600',
        color: 'white',
      },
    },
  },
  components: {
    SimpleGrid: {
      baseStyle: {
        marginBottom: '20px',
      },
    },
  },
});
