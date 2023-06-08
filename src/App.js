import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabsNavigation from './TabsNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
  );
}
