import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styled from 'styled-components';
import {InformativeFooterText} from './styledComponents';

const App = () => {
  return (
    <View>
      <InformativeFooterText>
        This is to test whether the imports from the styledComponents file in
        the root directory is working or not
      </InformativeFooterText>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
