import React from 'react';
import { View, StyleSheet } from 'react-native';

import ListaVirtualizada from './componentes/ListaVirtualizada';
import ListaSecao from './componentes/ListaSecao';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<ListaVirtualizada />*/}
      <ListaSecao />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
