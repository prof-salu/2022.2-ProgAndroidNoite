import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import EnviaLivro from './EnviaLivro';

import Home from './Home';
import Form from './Form';

const Stack = createNativeStackNavigator();

export default function Navegacao() {
  return (
    <EnviaLivro>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Formulario' component={Form} />
      </Stack.Navigator>
    </EnviaLivro>
  );
}