import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styled from 'styled-components';

const App = () => {
  const InformativeFooterText = styled.Text`
    color: rgba(38, 174, 96, 1);
    font-weight: 700;
    align-self: center;
    font-size: 25px;
  `;
  return (
    <View>
      <InformativeFooterText>
        Shifted the app.json to src folder
      </InformativeFooterText>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
