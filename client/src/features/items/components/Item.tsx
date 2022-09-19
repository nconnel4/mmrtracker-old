import { Box, Tooltip } from '@chakra-ui/react';
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
    <Tooltip label={item.name} openDelay={500} hasArrow bg={'purple.600'}>
      <Box
        as="button"
        onClick={handleClick}
        onContextMenu={handleClick}
        textAlign="right"
        color="lightgreen"
        fontWeight="bold"
        id={item.id}
        bgImage={icons[item.image] ? icons[item.image] : 'url(https://via.placeholder.com/48)'}
        bgSize="contain"
        bgRepeat="no-repeat"
        w="48px"
        h="48px"
        opacity={active ? 1 : 0.5}
        paddingTop="25px"
        fontSize={item.type === 'song' ? 'xs' : 'lg'}
      >
        {active && item.quantity}
        {item.trackerText}
      </Box>
    </Tooltip>
  );
};
