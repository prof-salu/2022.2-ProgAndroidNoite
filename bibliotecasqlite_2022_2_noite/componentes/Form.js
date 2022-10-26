import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Form() {

  const [inputTitulo, setInputTitulo] = useState('');
  const [inputAssunto, setInputAssunto] = useState('');
  const [inputEditora, setInputEditora] = useState('');
  const [inputAutor, setInputAutor] = useState('');

  function mostraLivro(){
    console.log(inputTitulo + ' ' + inputAssunto + ' ' + inputEditora + ' ' + inputAutor);
  }

  return (
    <View style={styles.container}>
      <View>
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

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao} onPress={mostraLivro}>Gravar</Text>
        </TouchableOpacity>

      </View>
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
    borderRadius: 20
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold'
  }
});
