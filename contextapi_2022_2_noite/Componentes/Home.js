import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {AutenticaContext} from './ContextoLoja';
import {useNavigation} from '@react-navigation/native';

export default function Home(){  
  const navigation = useNavigation();
  const {nome} = useContext(AutenticaContext);
  const {email} = useContext(AutenticaContext);

  function meusPedidos(){
    navigation.navigate('Pedido');
  }

  return(
    <View style={styles.container}> 
      <Text style={styles.texto}>Bem vindo, {nome}</Text>
      <Text style={styles.texto}>E-mail: {email}</Text>
      
      <TouchableOpacity 
        style={styles.botao}
        onPress={meusPedidos}>
        <Text style={styles.textoBotao}>Seus pedidos</Text>
      </TouchableOpacity>
      
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texto: {
    fontSize: 20,
    color: 'blue',
    paddingHorizontal: 10,
  },
  botao: {
    width: '90%',
    height: 45,
    backgroundColor: 'red',
    borderRadius: 5,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10,
  }, 
  textoBotao: {
    color: 'white',
    fontSize: 20,
    lineHeight: 45,
  }
})