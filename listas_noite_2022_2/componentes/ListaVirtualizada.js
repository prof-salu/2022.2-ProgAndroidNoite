//ListaVirtualizada.js

import React, {Component} from 'react';
import {View, Text, StyleSheet, VirtualizedList} from 'react-native';

class ListaVirtualizada extends React.Component{
  //Lista de Clubes Cariocas
  //nomeLista = [{prop1: 'valor1', prop2: 'valor2'}, ...]
  clubes = [
    {id: 1, nome: 'Flamengo'},
    {id: 2, nome: 'Botafogo'},
    {id: 3, nome: 'Fluminense'},
    {id: 4, nome: 'Vasco'},
    {id: 5, nome: 'Bangu'},
    {id: 6, nome: 'América'},
    {id: 7, nome: 'Madureira'},
    {id: 8, nome: 'Volta Redonda'}
  ];

  Item = (item) => (
    <View style={styles.item}>
      <Text style={styles.clube}>{item.title}</Text>
    </View>
  );

  getItem = (clubes, index) => {
    return clubes[index];
  }

  render(){
    return(
      <View>
        <VirtualizedList 
          data={this.clubes}
          initialNumToRender={4}
          renderItem={({item}) => (
            <this.Item title={item.nome} key ={item.id} />
          )}
          keyExtractor={(item) => item.key}
          getItemCount={(clubes) => clubes.length}
          getItem={this.getItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'orange',
    height: 150,
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 20,
    padding: 20
  }, clube: {
    fontSize: 32,
  }
})

export default ListaVirtualizada;