import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import useCounterStore from './store';

const App = () => {
  const {count, increment, decrement} = useCounterStore();
  return (
    <View style={styles.container}>
      <Text>Counter: {count}</Text>
      <Text onPress={increment}>Increment</Text>
      <Text onPress={decrement}>Decrement</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  container_input: {
    width: '40%',
    height: '10%',
    borderWidth: 3,
  },
});
