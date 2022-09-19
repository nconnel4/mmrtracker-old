import { Box, Image } from '@chakra-ui/react';
import * as React from 'react';

/*eslint import/namespace: ['error', { allowComputed: true }]*/
import * as icons from '../../../assets/icons';
import { Item as ItemType } from '../types';

type ItemProps = {
  item: ItemType;
  active: boolean;
  handleClick: React.MouseEventHandler;
};

export const Item = ({ item, active, handleClick }: ItemProps) => {
  return (
    <Box as="button" onClick={handleClick} onContextMenu={handleClick}>
      <Image
        boxSize="48px"
        objectFit="fill"
        id={item.id}
        src={icons[item.image]}
        fallbackSrc="https://via.placeholder.com/48"
        alt={item.name}
        opacity={active ? 1 : 0.5}
      />
    </Box>
  );
};
