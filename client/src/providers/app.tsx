import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import { Provider as StoreProvider } from 'react-redux';

import { store } from '@/stores/store';
type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <StoreProvider store={store}>
      <ChakraProvider>{children}</ChakraProvider>
    </StoreProvider>
  );
};
