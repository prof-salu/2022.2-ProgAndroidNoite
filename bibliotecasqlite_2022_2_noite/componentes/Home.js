import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import {useNavigation} from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';

export default function Home() {

const db = SQLite.openDatabase('db.MainDB');

const createTable = () => {
  db.transaction((tx) => {
    tx.executeSql('CREATE TABLE IF NOT EXISTS livro (' + 
                    'codigo INTEGER PRIMARY KEY, ' + 
                    'titulo TEXT, ' +
                    'assunto TEXT, ' +
                    'autor TEXT)');
  });
}


const teste = [{codigo: 1, titulo: 'Aprendendo react', assunto: 'Programacao', editora: 'NOVATEC', autor: 'Zeca'}];

  const navigation = useNavigation();

  function novoLivro(){
    navigation.navigate('Formulario');
  }
  
  return (
    <View style={styles.container}>
      <FlatList 
        style={styles.lista}
        data={teste}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item}>
            <Text>ID: {item.codigo}</Text>
            <Text>Titulo: {item.titulo}</Text>
            <Text>Assunto: {item.assunto}</Text>
            <Text>Editora: {item.editora}</Text>
            <Text>Autor: {item.autor}</Text>
          </TouchableOpacity>
        )}  />

        <TouchableOpacity style={styles.botao} onPress={novoLivro}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }, 
  lista: {
    marginTop: 10,
  },
  item:{
    borderBottomWidth: 2,
    padding: 3
  },
  botao: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position:'absolute',
    bottom: 20,
    right: 5,
    height: 70,
    borderRadius: 100,
     backgroundColor: 'green',
  },
  textoBotao: {
    color: 'white',
    fontSize: 30,
    lineHeight: 70
  }
});