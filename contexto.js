import React, { createContext, useContext, useState } from 'react';

const MeuContexto = createContext();

export function MeuContextoProvider({ children }) {
  const usuarios = []

  return (
    <MeuContexto.Provider value={{ usuarios }}>
      {children}
    </MeuContexto.Provider>
  );
}

export function useMeuContexto() {
  return useContext(MeuContexto);
}



