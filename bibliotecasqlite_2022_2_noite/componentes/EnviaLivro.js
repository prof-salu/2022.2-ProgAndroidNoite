import React, {useState, createContext} from 'react';

export const LivroContext = createContext({});

export default function EnviaLivro({children}){
    const[livro, setLivro] = useState('');

    function alteraLivro(inputCodigo, inputTitulo, inputAssunto, inputEditora, inputAutor){
      setLivro({
      codigo: inputCodigo,
      titulo: inputTitulo,
      assunto: inputAssunto,
      editora: inputEditora,
      autor: inputAutor
    })

    console.log('Codigo: ' + inputCodigo + " - Titulo: " + inputTitulo);
    }
  
   return(
    <LivroContext.Provider value={{livro, alteraLivro}} >
      {children}
    </LivroContext.Provider>
  )
}