import React, {useEffect, useState, useContext} from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import {useNavigation, useIsFocused} from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';

import {LivroContext} from './EnviaLivro';

export default function Home() {
  //Criando o banco de dados
  const db = SQLite.openDatabase('db.MainDB');

  //importa a funcao do context
  const {alteraLivro} = useContext(LivroContext);
  
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [livros, setLivros] = useState([]);

  useEffect(() => {
    resetLivro();
    pegaLivros();
    createTable();
  }, [isFocused]);

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql("CREATE TABLE IF NOT EXISTS livro (" +
                    "codigo INTEGER PRIMARY KEY AUTOINCREMENT, " +
                    "titulo TEXT, " +
                    "assunto TEXT, " +
                    "editora TEXT, " +
                    "autor TEXT)");
    })
  }

  const apagaTabela = () => {
    db.transaction((tx) => {
      tx.executeSql('DROP TABLE livro');
    })
  }

  const resetLivro = () => {
    alteraLivro('', '', '', '', '');
  }

  const pegaLivros = () => {
    db.transaction((tx) => {
      tx.executeSql('SELECT codigo, titulo, assunto, editora, autor FROM livro', 
                    [],
                    (tx, resultado) => {
                      var temp = [];
                      for(let i = 0; i < resultado.rows.length; i++){
                        temp.push(resultado.rows.item(i));
                        setLivros(temp);
                      }
                    });
    })
  }

  function novoLivro(){
    navigation.navigate('Formulario');
  }

  function enviaLivroForm(codigo, titulo, assunto, editora, autor){
    alteraLivro(codigo, titulo, assunto, editora, autor);
    navigation.navigate('Formulario');
  }
  
  return (
    <View style={styles.container}>
      <FlatList 
        style={styles.lista}
        data={livros}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item} onPress={() => enviaLivroForm(item.codigo, item.titulo, item.assunto, item.editora, item.autor)}>
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