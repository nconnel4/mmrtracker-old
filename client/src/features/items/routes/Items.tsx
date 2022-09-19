import { SimpleGrid, Box } from '@chakra-ui/react';
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
      {items && (
        <div>
          <SimpleGrid columns={6} id="items" spacingY="5px">
            <Item
              item={items.ocarina}
              active={checkActive(items.ocarina.id)}
              handleClick={handleClick}
            />
            {itemLevel.bow < 1 && (
              <Item
                item={items.heroBow}
                active={checkActive(items.heroBow.id)}
                handleClick={handleClick}
              />
            )}
            {itemLevel.bow == 1 && (
              <Item
                item={items.bigQuiver}
                active={checkActive(items.bigQuiver.id)}
                handleClick={handleClick}
              />
            )}
            {itemLevel.bow == 2 && (
              <Item
                item={items.biggestQuiver}
                active={checkActive(items.biggestQuiver.id)}
                handleClick={handleClick}
              />
            )}

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
            {itemLevel.bomb < 1 && (
              <Item
                item={items.bombBag}
                active={checkActive(items.bombBag.id)}
                handleClick={handleClick}
              />
            )}
            {itemLevel.bomb == 1 && (
              <Item
                item={items.bigBombBag}
                active={checkActive(items.bigBombBag.id)}
                handleClick={handleClick}
              />
            )}
            {itemLevel.bomb == 2 && (
              <Item
                item={items.biggerBombBag}
                active={checkActive(items.biggerBombBag.id)}
                handleClick={handleClick}
              />
            )}
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
            <Item
              item={items.magic}
              active={checkActive(items.magic.id)}
              handleClick={handleClick}
            />
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
                active={checkActive(items.giantWallet.id)}
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
          <Box padding="24px">
            <SimpleGrid columns={5} id="songs" spacingY="5px">
              <Item
                item={items.songOfTime}
                active={checkActive(items.songOfTime.id)}
                handleClick={handleClick}
              />
              <Item
                item={items.songOfHealing}
                active={checkActive(items.songOfHealing.id)}
                handleClick={handleClick}
              />
              <Item
                item={items.eponaSong}
                active={checkActive(items.eponaSong.id)}
                handleClick={handleClick}
              />
              <Item
                item={items.songOfSoaring}
                active={checkActive(items.songOfSoaring.id)}
                handleClick={handleClick}
              />
              <Item
                item={items.songOfStorms}
                active={checkActive(items.songOfStorms.id)}
                handleClick={handleClick}
              />
              <Item
                item={items.sonataOfAwakening}
                active={checkActive(items.sonataOfAwakening.id)}
                handleClick={handleClick}
              />
              <Item
                item={items.goronLullaby}
                active={checkActive(items.goronLullaby.id)}
                handleClick={handleClick}
              />
              <Item
                item={items.newWaveBossaNova}
                active={checkActive(items.newWaveBossaNova.id)}
                handleClick={handleClick}
              />
              <Item
                item={items.elegyOfEmptiness}
                active={checkActive(items.elegyOfEmptiness.id)}
                handleClick={handleClick}
              />
              <Item
                item={items.oathToOrder}
                active={checkActive(items.oathToOrder.id)}
                handleClick={handleClick}
              />
            </SimpleGrid>
          </Box>
          <SimpleGrid columns={6} id="masks" spacingY="5px">
            <Item
              item={items.postmanHat}
              active={checkActive(items.postmanHat.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.allNightMask}
              active={checkActive(items.allNightMask.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.blastMask}
              active={checkActive(items.blastMask.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.stoneMask}
              active={checkActive(items.stoneMask.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.greatFairyMask}
              active={checkActive(items.greatFairyMask.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.dekuMask}
              active={checkActive(items.dekuMask.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.keatonMask}
              active={checkActive(items.keatonMask.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.bremenMask}
              active={checkActive(items.bremenMask.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.bunnyHood}
              active={checkActive(items.bunnyHood.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.donGeroMask}
              active={checkActive(items.donGeroMask.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.maskOfScents}
              active={checkActive(items.maskOfScents.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.goronMask}
              active={checkActive(items.goronMask.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.romaniMask}
              active={checkActive(items.romaniMask.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.circusLeaderMask}
              active={checkActive(items.circusLeaderMask.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.kafeiMask}
              active={checkActive(items.kafeiMask.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.coupleMask}
              active={checkActive(items.coupleMask.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.maskOfTruth}
              active={checkActive(items.maskOfTruth.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.zoraMask}
              active={checkActive(items.zoraMask.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.kamaroMask}
              active={checkActive(items.kamaroMask.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.gibdoMask}
              active={checkActive(items.gibdoMask.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.garoMask}
              active={checkActive(items.garoMask.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.captainHat}
              active={checkActive(items.captainHat.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.giantMask}
              active={checkActive(items.giantMask.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.fierceDeityMask}
              active={checkActive(items.fierceDeityMask.id)}
              handleClick={handleClick}
            />
          </SimpleGrid>
          <SimpleGrid columns={6} id="remains" spacingY="5px">
            <Box h="48px" w="48px" />
            <Item
              item={items.odolwaRemains}
              active={checkActive(items.odolwaRemains.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.gohtRemains}
              active={checkActive(items.gohtRemains.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.gyorgRemains}
              active={checkActive(items.gyorgRemains.id)}
              handleClick={handleClick}
            />
            <Item
              item={items.twinmoldRemains}
              active={checkActive(items.twinmoldRemains.id)}
              handleClick={handleClick}
            />
            <Box h="48px" w="48px" />
          </SimpleGrid>
        </div>
      )}
    </div>
  );
};
