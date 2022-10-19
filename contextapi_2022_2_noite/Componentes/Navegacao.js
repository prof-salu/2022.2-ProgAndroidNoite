import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './Login';
import Home from './Home';
import Pedido from './Pedido';

const Stack = createNativeStackNavigator();

function Navegacao(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Pedido' component={Pedido} />
    </Stack.Navigator>
  )
}

export default Navegacao;