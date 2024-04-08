import React from 'react';

import { GluestackUIProvider, Text } from "@gluestack-ui/themed"
import { config } from '@gluestack-ui/config';
import RootLayout from './Layout';
import { AuthProvider } from './src/contexts/AuthProvider';

export default function App() {
  return (
    <GluestackUIProvider config={config} >
      <AuthProvider>

        <RootLayout />
      </AuthProvider>

    </GluestackUIProvider>

  );
}
