import React from 'react';

import { MainLayout, Tracker } from '@/components/Layout';
import { AppProvider } from '@/providers/app';

function App() {
  return (
    <AppProvider>
      <MainLayout>
        <Tracker />
      </MainLayout>
    </AppProvider>
  );
}

export default App;
