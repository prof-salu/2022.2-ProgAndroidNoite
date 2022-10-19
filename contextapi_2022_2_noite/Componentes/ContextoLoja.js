import React, {createContext} from 'react';

export const AutenticaContext = createContext({});

export default function ContextoLoja({children}){
  const pedidos=[
    {codigo: '1001', descricao: 'Geladeira', valor: '2000'},
    {codigo: '1002', descricao: 'Armario de Cozinha', valor: '1200'}
  ];
  return(
    <AutenticaContext.Provider value={{nome: 'Carlos', email: 'carlos@email.com', senha: '1234', meusPedidos: pedidos}}>
      {children}
    </AutenticaContext.Provider>
  )
}