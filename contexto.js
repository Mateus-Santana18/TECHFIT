import React, { createContext, useContext, useState } from 'react';
import { treinoMassa } from './vetorTreino';
const MeuContexto = createContext();

export function MeuContextoProvider({ children }) {
  let usuarios = [{
    matricula: 180,
    nome: 'mateus',
    email: 'A',
    senha: 123,
    altura: 123,
    peso: 1,
    estiloTreino: 'GM',
    treinoSelecionado: treinoMassa
  }
    
  ]
  // let usuarioLogado = {}
  const [usuarioLogado, setUsuarioLogado] = useState()
  return (
    <MeuContexto.Provider value={{ usuarios, usuarioLogado, setUsuarioLogado }}>
      {children}
    </MeuContexto.Provider>
  );
}

export function useMeuContexto() {
  return useContext(MeuContexto);
}


