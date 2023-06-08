import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PaymentLogs from './screens/PaymentLogs';
import QuickSale from './screens/QuickSale';
import Refund from './screens/Refund';
import BankDetails from './screens/BankDetails';
import ProfileUpdate from './screens/ProfileUpdate';
import Payment from './screens/Payment';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="QuickSale" component={QuickSale} />
        <Stack.Screen name="PaymentLogs" component={PaymentLogs} />
        <Stack.Screen name="Refund" component={Refund} />
        <Stack.Screen name="BankDetails" component={BankDetails} />
        <Stack.Screen name="ProfileUpdate" component={ProfileUpdate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
