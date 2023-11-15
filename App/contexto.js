import React, { createContext, useContext, useState } from 'react';
import { treinoMassa, treinoPerderPeso } from './vetorTreino';
const MeuContexto = createContext();

export function MeuContextoProvider({ children }) {
  // let usuarios = [
    // {
    // matricula: 180,
    // nome: 'mateus',
    // email: 'A',
    // senha: 123,
    // altura: 123,
    // peso: 1,
    // estiloTreino: 'PP',
    // treinoSelecionado: treinoPerderPeso
    // }
    
  // ]
  // let usuarioLogado = {}
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



