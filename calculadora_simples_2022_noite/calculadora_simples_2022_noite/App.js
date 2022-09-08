//IMPORTS (cabeçalho)
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

export default function App(){
  //Area JS
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('0');

  const somar = function(){
    setResultado(Number(valor1) + Number(valor2));
  }

  const subtrair = function(){
    setResultado(Number(valor1) - Number(valor2));
  }

  const multiplicar = function(){
    setResultado(Number(valor1) * Number(valor2));
  }

  const dividir = function(){
    if(Number(valor2) == 0){
      setResultado('Infinito');
      return;
    }
    setResultado((Number(valor1) / Number(valor2)).toFixed(10));
  }

  //AREA JSX
  return(
    <View style={styles.container}>
      {/*ARMAZENA OS COMPONENTES DO FORMULARIO DE ENTRADA*/}
      <View style={styles.entrada}>
        <TextInput
        style={styles.campoInput}
        placeholder='Valor 01'
        keyboardType='numeric' 
        onChangeText={(valor) => {setValor1(valor)}}/>

        <TextInput
        style={styles.campoInput}
        placeholder='Valor 02'
        keyboardType='numeric' 
        onChangeText={(valor) => {setValor2(valor)}}/>
      </View>

      <View style={styles.operacoes}>
        {/*ARMAZENA OS BOTÕES DA APLICAÇÃO*/}

        <TouchableOpacity
          style={styles.botao}
          onPress={somar}>
            <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={subtrair}>
            <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={multiplicar}>
            <Text style={styles.textoBotao}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={dividir}>
            <Text style={styles.textoBotao}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultado}>
        {/*ARMAZENA O COMPONENTE QUE EXIBE O RESULTADO DA OPERAÇÃO*/}
        <Text 
          style={styles.textoResultado}>
            {resultado}
        </Text>
      </View>
      
    </View>
  );
}

//AREA FORMATAÇÃO
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  entrada: {
    borderWidth: 2,
    borderColor: 'blue',
    width: 250,
  }, 
  campoInput: {
    fontSize: 30,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'orange',
    margin: 5,
  },
  operacoes: {
    marginTop: 5,
    borderWidth: 2,
    borderColor: 'blue',
    width: 250,
    flexDirection: 'row',
    justifyContent: 'center'
  }, 
  botao: {
    backgroundColor: 'orange',
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 5,
    textAlign: 'center',
    margin: 5,
  },
  textoBotao: {
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 45
  },
  resultado: {
    textAlign: 'center',
  },
  textoResultado: {
    fontSize: 30,
    borderWidth: 2,
    borderColor: 'blue',
    width: 250,
    height: 50,
    marginTop: 5,    
    backgroundColor: 'pink',
  }
});
