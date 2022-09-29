import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';

const enviarEmail = () => {
  Linking.openURL('mailto:contato@mussumipsum.com?subject=ASSUNTO-DO-EMAIL&body=CORPO-DO-EMAIL');
}

const ligar = () => {
  Linking.openURL('tel:12345678');
}

const enviarSms = () => {
  Linking.openURL('sms:12345678?body=CORPO-DO-SMS');
}

const abrirMapa = () => {
  Linking.openURL('geo:-22.91297,-43.22316');
}

class ContatoScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.titulo}>Contato</Text>
        </View>

        <View>  
          <TouchableOpacity 
            style={styles.botao}
            onPress={enviarEmail}>
            <Text style={styles.textoBotao}>E-mail</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.botao}
            onPress={ligar}>
            <Text style={styles.textoBotao}>Telefone</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.botao}
            onPress={enviarSms}>
            <Text style={styles.textoBotao}>SMS</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.botao}
            onPress={abrirMapa}>
            <Text style={styles.textoBotao}>Mapa</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  botao: {
    alignSelf: 'center',
    width: 250,
    heigth: 50,
    backgroundColor: 'green',
    marginBottom: 5,
    borderRadius: 5,
  },
  textoBotao: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    lineHeight: 40,
  }
});

export default ContatoScreen;