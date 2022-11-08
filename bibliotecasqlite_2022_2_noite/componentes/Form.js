import React, {useState, useEffect, useContext} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import {useNavigation} from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';
import {LivroContext} from './EnviaLivro';


export default function Form() {
  const db = SQLite.openDatabase('db.MainDB');
  const navigation = useNavigation();
  const {livro} = useContext(LivroContext);

  const [codigo, setCodigo] = useState('');
  const [inputTitulo, setInputTitulo] = useState('');
  const [inputAssunto, setInputAssunto] = useState('');
  const [inputEditora, setInputEditora] = useState('');
  const [inputAutor, setInputAutor] = useState('');

  useEffect(() => {
    setCodigo(livro.codigo);
    setInputTitulo(livro.titulo);
    setInputAssunto(livro.assunto);
    setInputEditora(livro.editora);
    setInputAutor(livro.autor);
  }, [])

  const gravaLivro = async () => {
    await db.transaction(async (tx) => {
      await tx.executeSql(
        "INSERT INTO livro (titulo, assunto, editora, autor) VALUES (?, ?, ?, ?)",
        [inputTitulo, inputAssunto, inputEditora, inputAutor],
        (tx, resultado) => {
          console.log('Resultado', resultado.rowsAffected);
          if(resultado.rowsAffected > 0){
            console.log('Dados gravados com sucesso');
          }else{
            console.log('Falha na gravacao');
          }
        }
        
      );
    })
    navigation.navigate('Home');
  }

  const apagaLivro = () => {
    db.transaction((tx) => {
      tx.executeSql('DELETE FROM livro WHERE codigo = ?',
                    [codigo],
                    (tx, resultado) => {
                      console.log('Resultado: ', resultado.rowsAffected);
                      if(resultado.rowsAffected > 0){
                        console.log('Livro apagado!');
                      }else{
                        console.log('Erro.')
                      }
                    })
    })
    navigation.navigate('Home');
  }

  const alteraLivro = () => {
    db.transaction((tx) => {
      tx.executeSql('UPDATE livro SET titulo=?, assunto=?, editora=?, autor=? WHERE codigo=?',
      [inputTitulo, inputAssunto, inputEditora, inputAutor, codigo],
      (tx, resultado) => {
        console.log('Resultado: ', resultado.rowsAffected);
        if(resultado.rowsAffected > 0){
          console.log('Livro alterado');
        }else{
          console.log('Erro!');
        }
      })
    })
    navigation.navigate('Home');
  }

  function mostraLivro(){
    console.log(inputTitulo + ' ' + inputAssunto + ' ' + inputEditora + ' ' + inputAutor);
  }

  return (
    <View style={styles.container}>
        <TextInput 
          style={styles.input}
          placeholder='Titulo' 
          value={inputTitulo}
          onChangeText={(valor) => setInputTitulo(valor)}/>

        <TextInput 
          style={styles.input}
          placeholder='Assunto' 
          value={inputAssunto}
          onChangeText={(valor) => setInputAssunto(valor)}/>
        
        <TextInput 
          style={styles.input}
          placeholder='Editora' 
          value={inputEditora}
          onChangeText={(valor) => setInputEditora(valor)}/>

        <TextInput 
          style={styles.input}
          placeholder='Autor' 
          value={inputAutor}
          onChangeText={(valor) => setInputAutor(valor)}/>

        {(codigo == '' ? (<TouchableOpacity style={styles.botao} onPress={gravaLivro}>
          <Text style={styles.textoBotao} >Gravar</Text>
        </TouchableOpacity>) : null )}         

        {(codigo != '' ? (<TouchableOpacity style={styles.botao} onPress={alteraLivro}>
          <Text style={styles.textoBotao} >Altera</Text>
        </TouchableOpacity>) : null)}

        {(codigo != '' ? (<TouchableOpacity style={styles.botao} onPress={apagaLivro}>
          <Text style={styles.textoBotao} >Apaga</Text>
        </TouchableOpacity>) : null)}      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input:{
    alignItems: 'center',
    borderWidth: 2,
    marginBottom: 3,
    fontSize: 20
  },
  botao: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 20,
    marginBottom: 5,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold'
  }
});
