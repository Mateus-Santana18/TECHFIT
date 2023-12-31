// Página de contexto para armazenar os dados do usuário logado 
// e os dados dos usuários cadastrados em um vetor global


import React, { createContext, useContext, useState } from 'react';
import { treinoMassa, treinoPerderPeso } from './vetorTreino';
const MeuContexto = createContext();

export function MeuContextoProvider({ children }) {
  const [usuarios, setUsuarios] = useState([])
  const [usuarioLogado, setUsuarioLogado] = useState()
  return (
    <MeuContexto.Provider value={{ usuarios, setUsuarios, usuarioLogado, setUsuarioLogado }}>
      {children}
    </MeuContexto.Provider>
  );
}

export function useMeuContexto() {
  return useContext(MeuContexto);
}



