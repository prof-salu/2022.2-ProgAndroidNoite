import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AutenticaContext} from './ContextoLoja';

export default function Pedido(){

  const {meusPedidos} = useContext(AutenticaContext);

  return(
      <View style={styles.container}>
        <Text>Seus ultimos pedidos: </Text>
        
        <Text>{meusPedidos[0].codigo + ' - ' + meusPedidos[0].descricao + ' - ' + meusPedidos[0].valor}</Text>
        
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})