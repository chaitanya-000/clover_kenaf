import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components';
import {InformativeFooterText} from './styledComponents';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {width, height} from './styledComponents';

const App = () => {
  const [enteredData, setEnteredData] = useState('');
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('value', JSON.stringify(enteredData));
      alert('data  stored successfully');
    } catch (error) {
      console.log(error);
    }
  };
  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem('value');
      alert(value);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text onPress={storeData}>Store data</Text>
      <TextInput
        style={styles.container_input}
        onChangeText={value => setEnteredData(value)}
        clearButtonMode="always"
      />
      <Text onPress={readData}>Read data</Text>
      <Text onPress={() => setEnteredData('')}>reset</Text>
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
