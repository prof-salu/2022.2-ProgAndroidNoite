import React from 'react';
import HomeScreen from '../Telas/HomeScreen';
import AtividadesScreen from '../Telas/AtividadesScreen';
import SobreScreen from '../Telas/SobreScreen';
import ContatoScreen from '../Telas/ContatoScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

class MenuAbas extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='Atividades' component={AtividadesScreen} />
          <Tab.Screen name='Contato' component={ContatoScreen} />
          <Tab.Screen name='Sobre' component={SobreScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}export default MenuAbas;