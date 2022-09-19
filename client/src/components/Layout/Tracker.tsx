import { Box } from '@chakra-ui/react';
import * as React from 'react';

import { Items } from '@/features/items';

export const Tracker = () => {
  return (
    <div>
      <Box
        w="360px"
        border="5px"
        borderStyle="solid"
        borderColor="purple.400"
        margin="10px"
        padding="10px"
        borderRadius="10px"
      >
        <Items />
      </Box>
    </div>
  );
};
