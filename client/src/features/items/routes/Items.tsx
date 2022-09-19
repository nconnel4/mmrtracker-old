import { SimpleGrid } from '@chakra-ui/react';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useGetItemsQuery } from '@/features/items';
import {
  inventoryListSelector,
  itemLevelSelector,
  addItem,
  removeItem,
  incrementItemLevel,
  decrementItemLevel,
  ProgressiveItems,
} from '@/stores/inventorySlice';

import { Item } from '../components/Item';

export const Items = () => {
  const { data: items, error, isLoading } = useGetItemsQuery();
  const inventoryList = useSelector(inventoryListSelector);
  const dispatch = useDispatch();
  const itemLevel = useSelector(itemLevelSelector);

  const handleClick: React.MouseEventHandler = (event) => {
    event.preventDefault();
    const eventTarget = event.target as HTMLButtonElement;
    const id = eventTarget.id;
    console.log(inventoryList);
    console.log(eventTarget.id);

    if (['sword', 'shield', 'bow', 'bomb', 'bottle', 'wallet'].includes(id)) {
      if (event.type === 'click') {
        dispatch(incrementItemLevel(id as keyof ProgressiveItems));
      } else if (event.type === 'contextmenu') {
        dispatch(decrementItemLevel(id as keyof ProgressiveItems));
      }
    } else {
      if (inventoryList.includes(id)) {
        dispatch(removeItem(id));
      } else {
        dispatch(addItem(id));
      }
    }
  };

  const checkActive = (id: string) => {
    return inventoryList.includes(id);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else if (error) {
    console.error(error);
    return <h2 style={{ color: 'red' }}>Something went wrong</h2>;
  }

  return (
    <div>
      {' '}
      {items && (
        <SimpleGrid columns={6}>
          <Item
            item={items.ocarina}
            active={items.ocarina.id in inventoryList}
            handleClick={handleClick}
          />
          <Item
            item={items.heroBow}
            active={checkActive(items.heroBow.id)}
            handleClick={handleClick}
          />
          <Item
            item={items.fireArrow}
            active={checkActive(items.fireArrow.id)}
            handleClick={handleClick}
          />
          <Item
            item={items.iceArrow}
            active={checkActive(items.iceArrow.id)}
            handleClick={handleClick}
          />
          <Item
            item={items.lightArrow}
            active={checkActive(items.lightArrow.id)}
            handleClick={handleClick}
          />
          <Item
            item={items.moonTear}
            active={checkActive(items.moonTear.id)}
            handleClick={handleClick}
          />
          <Item
            item={items.bombBag}
            active={checkActive(items.bombBag.id)}
            handleClick={handleClick}
          />
          <Item
            item={items.bombchu}
            active={checkActive(items.bombchu.id)}
            handleClick={handleClick}
          />
          <Item
            item={items.dekuStick}
            active={checkActive(items.dekuStick.id)}
            handleClick={handleClick}
          />
          <Item
            item={items.dekuNut}
            active={checkActive(items.dekuNut.id)}
            handleClick={handleClick}
          />
          <Item
            item={items.magicBean}
            active={checkActive(items.magicBean.id)}
            handleClick={handleClick}
          />
          <Item
            item={items.landTitleDeed}
            active={checkActive(items.landTitleDeed.id)}
            handleClick={handleClick}
          />
          <Item
            item={items.powderKeg}
            active={checkActive(items.powderKeg.id)}
            handleClick={handleClick}
          />
          <Item
            item={items.pictographBox}
            active={checkActive(items.pictographBox.id)}
            handleClick={handleClick}
          />
          <Item
            item={items.lensOfTruth}
            active={checkActive(items.lensOfTruth.id)}
            handleClick={handleClick}
          />
          <Item
            item={items.hookshot}
            active={checkActive(items.hookshot.id)}
            handleClick={handleClick}
          />
          <Item
            item={items.fairySword}
            active={checkActive(items.fairySword.id)}
            handleClick={handleClick}
          />
          <Item
            item={items.swampTitleDeed}
            active={checkActive(items.swampTitleDeed.id)}
            handleClick={handleClick}
          />

          {itemLevel.bottle < 1 && (
            <Item
              item={items.bottle1}
              active={checkActive(items.bottle1.id)}
              handleClick={handleClick}
            />
          )}
          {itemLevel.bottle == 1 && (
            <Item
              item={items.bottle2}
              active={checkActive(items.bottle2.id)}
              handleClick={handleClick}
            />
          )}
          {itemLevel.bottle == 2 && (
            <Item
              item={items.bottle3}
              active={checkActive(items.bottle3.id)}
              handleClick={handleClick}
            />
          )}
          {itemLevel.bottle == 3 && (
            <Item
              item={items.bottle4}
              active={checkActive(items.bottle4.id)}
              handleClick={handleClick}
            />
          )}
          {itemLevel.bottle == 4 && (
            <Item
              item={items.bottle5}
              active={checkActive(items.bottle5.id)}
              handleClick={handleClick}
            />
          )}
          {itemLevel.bottle == 5 && (
            <Item
              item={items.bottle6}
              active={checkActive(items.bottle6.id)}
              handleClick={handleClick}
            />
          )}
          <Item
            item={items.goldDust}
            active={checkActive(items.goldDust.id)}
            handleClick={handleClick}
          />
          <Item
            item={items.roomKey}
            active={checkActive(items.roomKey.id)}
            handleClick={handleClick}
          />
          <Item
            item={items.kafeiLetter}
            active={checkActive(items.kafeiLetter.id)}
            handleClick={handleClick}
          />
          <Item
            item={items.pendantOfMemories}
            active={checkActive(items.pendantOfMemories.id)}
            handleClick={handleClick}
          />
          <Item
            item={items.mountainTitleDeed}
            active={checkActive(items.mountainTitleDeed.id)}
            handleClick={handleClick}
          />
          {itemLevel.sword < 1 && (
            <Item
              item={items.kokiriSword}
              active={checkActive(items.kokiriSword.id)}
              handleClick={handleClick}
            />
          )}
          {itemLevel.sword == 1 && (
            <Item
              item={items.razorSword}
              active={checkActive(items.razorSword.id)}
              handleClick={handleClick}
            />
          )}
          {itemLevel.sword == 2 && (
            <Item
              item={items.gildedSword}
              active={checkActive(items.gildedSword.id)}
              handleClick={handleClick}
            />
          )}
          {itemLevel.shield < 1 && (
            <Item
              item={items.hylianShield}
              active={checkActive(items.hylianShield.id)}
              handleClick={handleClick}
            />
          )}
          {itemLevel.shield == 1 && (
            <Item
              item={items.mirrorShield}
              active={checkActive(items.mirrorShield.id)}
              handleClick={handleClick}
            />
          )}
          <Item item={items.magic} active={checkActive(items.magic.id)} handleClick={handleClick} />
          {itemLevel.wallet < 1 && (
            <Item
              item={items.wallet}
              active={checkActive(items.wallet.id)}
              handleClick={handleClick}
            />
          )}
          {itemLevel.wallet == 1 && (
            <Item
              item={items.adultWallet}
              active={checkActive(items.adultWallet.id)}
              handleClick={handleClick}
            />
          )}
          {itemLevel.wallet == 2 && (
            <Item
              item={items.giantWallet}
              active={checkActive(items.giatnWallet.id)}
              handleClick={handleClick}
            />
          )}
          <Item
            item={items.letterToMama}
            active={checkActive(items.letterToMama.id)}
            handleClick={handleClick}
          />
          <Item
            item={items.oceanTitleDeed}
            active={checkActive(items.oceanTitleDeed.id)}
            handleClick={handleClick}
          />
        </SimpleGrid>
      )}
    </div>
  );
};
