import React, { createContext, useContext, useState } from 'react';

const MeuContexto = createContext();

export function MeuContextoProvider({ children }) {
  let usuarios = [{
    
  }]
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



