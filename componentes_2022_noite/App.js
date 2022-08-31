import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button} from 'react-native';

export default function App(){
  //Area JS
  const disciplina = 'Desenvolvimento Mobile em Android';

  //hook (useState)
const [nome, setNome] = useState('');
const [idade, setIdade] = useState('');


  //Area visual
  return(
    <View style={styles.container}>
      <Text>
        Olá mundo!
      </Text>
      <Text>
        {/*Comentario no JSX*/}
        {/*Executar/acessar codigo JavaScript */}        
        {'\n'}Bem vindos a aula de {disciplina}.
      </Text>

      <Image style={styles.minhaImagem} 
      source={{uri:'https://conceito.de/wp-content/uploads/2022/04/icon-1971128_1280.png'}}/>

      <Image style={styles.minhaImagem} 
      source={require('/imagens/react.png')}/>

      <TextInput 
        style={styles.campoInput} 
        placeholder='Seu nome' 
        onChangeText={setNome}/>
      
      <TextInput 
        style={styles.campoInput} 
        placeholder='Sua idade' 
        onChangeText={setIdade}
        keyboardType='numeric' />

      <Button 
        title='Clique aqui' 
        color='red'
        onPress={ () => alert('Nome: ' + nome + '\nIdade: ' + idade)}/>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 20,
  }, 
  minhaImagem: {
    width: 200,
    height: 200,
  },
  campoInput: {
    height: 20,
    margin: 2,
    borderWidth: 1,
    padding: 5
  }
});