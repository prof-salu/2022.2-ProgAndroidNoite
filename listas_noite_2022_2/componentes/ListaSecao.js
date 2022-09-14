import React from 'react';
import { View, Text, StyleSheet, SectionList} from 'react-native';

class ListaSecao extends React.Component{
  produtos=[
    {titulo: 'Eletronicos', data: ['TV', 'Caixa de som', 'Toca discos']},
    {titulo: 'Vestuario', data: ['Camisas', 'Camisetas', 'Agasalhos']},
    {titulo: 'Livros', data: ['Ficção', 'Terror', 'Aventura']}
  ];

  Item = ({titulo}) => (
    <View style={styles.item}>
      <Text style={styles.titulo}> {titulo} </Text>
    </View>
  )

  render(){
    return(
      <View style={styles.constainer}>
        <SectionList 
          sections={this.produtos}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => 
            <this.Item titulo={item}/>} 
            renderSectionHeader={({section: {titulo}}) => 
              (<Text style={styles.header}> {titulo} </Text> )} />
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    marginHorizontal: 16,
  }, item: {
    backgroundColor: '#FFFCCC',
    padding: 20,
    marginVertical: 8,
  }, header:{
    fontSize: 32,
    backgroundColor: '#FFF',
  }, titulo: {
    fontSize: 24,
  }
});

export default ListaSecao;