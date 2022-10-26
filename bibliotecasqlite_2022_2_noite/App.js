import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navegacao from './componentes/Navegacao';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Navegacao />
      </NavigationContainer>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
