import React from 'react';

// import { useGetItemsQuery } from '@/features/items';
import { Items } from '@/features/items';
import { AppProvider } from '@/providers/app';

function WrappedElement() {
  return (
    <div>
      <Items />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <WrappedElement />
    </AppProvider>
  );
}

export default App;
