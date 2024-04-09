import React from 'react';

import { GluestackUIProvider, Text } from "@gluestack-ui/themed"
import RootLayout from './Layout';
import { AuthProvider } from './src/contexts/AuthProvider';
import { config } from './config/gluestack-ui.config';

export default function App() {
  return (
    <GluestackUIProvider config={config} >
      <AuthProvider>

        <RootLayout />
      </AuthProvider>

    </GluestackUIProvider>

  );
}
