import React from 'react';

import { AppProvider } from '@/providers/app';
function App() {
  return (
    <AppProvider>
      <h1>Test</h1>
    </AppProvider>
  );
}

export default App;
