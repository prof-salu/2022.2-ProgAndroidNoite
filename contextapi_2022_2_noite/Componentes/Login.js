import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {AutenticaContext} from './ContextoLoja';

export default function Login(){

  const[inputEmail, setInputEmail] = useState('');
  const[inputSenha, setInputSenha] = useState('');

  const {email} = useContext(AutenticaContext);
  const {senha} = useContext(AutenticaContext);

  const navigation = useNavigation();

  function testeLogin(){
    if(inputEmail == email && inputSenha == senha){
      console.log('Login efetuado!');
      navigation.navigate('Home');

    }else{
      console.log('FORMULARIO[E-mail: ' + inputEmail + ', Senha: ' + inputSenha + ']');
      console.log('CONTEXTO[E-mail: ' + email + ', Senha: ' + senha + ']');
    }
  }

  return(
    <View style={styles.container}> 
      <TextInput
        value={inputEmail}
        style={styles.input}
        placeholder='Seu e-mail' 
        onChangeText={(valor) => setInputEmail(valor)} />

      <TextInput
        value={inputSenha}
        style={styles.input}
        placeholder='Sua senha'
        //campo de senha
        secureTextEntry={true}
        onChangeText={(valor) => setInputSenha(valor)} />

      <TouchableOpacity 
        style={styles.botao} 
        onPress={testeLogin}>
          <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input:{
    width: '90%',
    height: 45,
    borderRadius: 4,
    marginBottom: 10,
    padding: 8,
    borderWidth: 1,
  },
  botao: {
    width: '90%',
    height: 45,
    backgroundColor: 'red',
    borderRadius: 5,
    justifyContent: 'center',
    textAlign: 'center',
  }, 
  textoBotao: {
    color: 'white',
    fontSize: 20,
  }
})