import { ComponentMeta } from '@storybook/react';
import * as React from 'react';

import { Item as ItemType } from '../types';

import { Item } from './Item';

export default {
  title: 'Item',
  component: Item,
} as ComponentMeta<typeof Item>;

export const Normal = () => {
  const [active, setActive] = React.useState(false);
  const item: ItemType = {
    id: 'bow',
    name: "Hero's Bow",
    image: 'bow',
    type: 'item',
  };

  const handleClick = () => {
    setActive(!active);
  };

  return <Item item={item} active={active} handleClick={handleClick} />;
};

export const Progressive = () => {
  const [active, setActive] = React.useState(false);
  const [itemLevel, setItemLevel] = React.useState(-1);
  const maxLevel = 2;

  const kokiriSword: ItemType = {
    id: 'sword',
    name: 'Kokiri Sword',
    image: 'kokiriSword',
    type: 'item',
  };
  const razorSword: ItemType = {
    id: 'sword',
    name: 'Razor Sword',
    image: 'razorSword',
    type: 'item',
  };
  const gildedSword: ItemType = {
    id: 'sword',
    name: 'Gilded Sword',
    image: 'gildedSword',
    type: 'item',
  };

  const handleClick: React.MouseEventHandler = (event) => {
    event.preventDefault();
    if (event.type === 'click') {
      if (itemLevel < maxLevel) {
        setItemLevel((prevState) => prevState + 1);
        setActive(true);
      } else {
        setItemLevel(-1);
        setActive(false);
      }
    } else if (event.type === 'contextmenu') {
      if (itemLevel > -1) {
        setItemLevel((prevState) => {
          if (prevState - 1 == -1) setActive(false);

          return prevState - 1;
        });
      } else {
        setItemLevel(maxLevel);
        setActive(true);
      }
    }
  };

  return (
    <div>
      {itemLevel <= 0 && <Item item={kokiriSword} active={active} handleClick={handleClick} />}
      {itemLevel == 1 && <Item item={razorSword} active={active} handleClick={handleClick} />}
      {itemLevel == 2 && <Item item={gildedSword} active={active} handleClick={handleClick} />}
    </div>
  );
};
