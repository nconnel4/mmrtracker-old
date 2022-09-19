import * as icons from '@/assets/icons';

export type Item = {
  id: string;
  name: string;
  image: keyof typeof icons;
  type: string;
  quantity?: number;
  trackerText?: string;
};

export type Items = {
  [key: string]: Item;
};
