import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navegacao from './Componentes/Navegacao';
import ContextoLoja from './Componentes/ContextoLoja';

export default function App() {
  return (
    <NavigationContainer>
      <ContextoLoja>
        <Navegacao />
      </ContextoLoja>
    </NavigationContainer>
  );
}