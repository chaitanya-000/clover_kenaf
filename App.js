import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styled from 'styled-components';

const App = () => {
  const InformativeFooterText = styled.Text`
    color: rgba(38, 174, 96, 1);
    font-weight: 700;
    align-self: center;
    font-size: 215px;
  `;
  return (
    <View>
      <InformativeFooterText>
        This is the build to see if styled components library is working in
        build or not
      </InformativeFooterText>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
