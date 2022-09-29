import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class SobreScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.titulo}>Sobre</Text>
        </View>

        <View>
          <Text style= {styles.texto}>Mussum Ipsum, cacilds vidis litro abertis. 
          Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
          Praesent malesuada urna nisi, quis volutpat erat hendrerit non. 
          Nam vulputate dapibus.Mé faiz elementum girarzis, nisi eros vermeio.
          Detraxit consequat et quo num tendi nada.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  texto: {
    fontSize: 16,
    padding: 15,
    textAlign: 'justify'
  }
});
export default SobreScreen;