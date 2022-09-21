import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const contatos = [
    {nome: 'Antonio', email: 'antonio@email.com', tel: '12345678'},
    {nome: 'Clara', email: 'clara@email.com', tel: '87654321'},
    {nome: 'Zeca', email: 'zeca@email.com', tel: '11223344'},
  ];

  const [nomeContato, setNomeContato] = useState('');
  const [emailContato, setEmailContato] = useState('');
  const [telefoneContato, setTelefoneContato] = useState('');
  const [lista, setLista] = useState(contatos);

  const addContato = () => {
    //alert(nomeContato + ' - ' + emailContato + ' - ' + telefoneContato);
    if(nomeContato == '' || emailContato == '' || telefoneContato == ''){
      return;
    }

    setLista( (lista) => [
      ...lista, {nome: nomeContato, email: emailContato, tel:telefoneContato}
    ]);

    limparInputs();
  }

  const editaContato = () => {
    if(nomeContato == '' || emailContato == '' || telefoneContato == ''){
      return;
    }

    setLista(
      lista.map((contato) =>
        contato.email == emailContato 
          ? {...contato, nome: nomeContato, tel: telefoneContato}
          : {...contato}
      ));

      limparInputs();
  }

  //Retorna o indice de um elemento da lista
  const indice = lista.findIndex(
    (item) => item.email == emailContato
  );

  const apagaContato = () => {
    if(emailContato == ''){
      return;
    }
    
    setLista([
      ...contatos.slice(0, indice),
      ...contatos.slice(indice + 1, contatos.length)
    ])

    limparInputs();
  }

  function limparInputs(){
    setNomeContato('');
    setEmailContato('');
    setTelefoneContato('');
  }

  return (
    <View style={styles.container}>

    <View>
    {/*INPUT*/}
      <TextInput
        style={styles.entrada}
        placeholder='Nome' 
        value={nomeContato}
        onChangeText={(valor) => {setNomeContato(valor)}}/>

      <TextInput
        style={styles.entrada}
        placeholder='E-mail' 
        value={emailContato}
        onChangeText={(valor) => {setEmailContato(valor)}}/>
      
      <TextInput
        style={styles.entrada}
        placeholder='Telefone' 
        value={telefoneContato}
        keyboardType='numeric'
        onChangeText={(valor) => {setTelefoneContato(valor)}}/>
    </View>

    <View>
      {/*BUTTONS*/}
      <TouchableOpacity
        style={styles.botao}
        onPress={addContato}>
        <Text style={styles.textoBotao}>Adicionar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={editaContato}>
        <Text style={styles.textoBotao}>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={apagaContato}>
        <Text style={styles.textoBotao}>Apagar</Text>
      </TouchableOpacity>
    </View>

    <View>
    {/*LISTA*/}
      <FlatList 
        data={lista}
        renderItem={({item}) => (
          <Text style={styles.item}> {item.nome + ' - ' + item.email + ' - ' + item.tel} </Text>
        )} />
    </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#FFF',
    padding: 8,
    marginTop: 20,
  },
  entrada: {
    textAlign: 'center',
    borderWidth: 2,
    marginBottom: 5,
    borderRadius: 5,
    fontSize: 20,
  },
  botao: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
    marginBottom: 5,
    borderRadius: 20,
    fontSize: 20,
  },
  textoBotao: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bolder',
  },
  item: {
    marginBottom: 1,
    fontSize: 16,
    color: 'blue'
  }
});