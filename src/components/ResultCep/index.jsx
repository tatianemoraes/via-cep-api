import React from 'react';

export function ResultCep({ data }) {
  return (
    <>
      <div className="design">
        <label>Rua:</label>
        <input 
          type="text"
          value={data.logradouro}
        />
      </div>
      <div className="design">
        <label>Bairro:</label>
        <input 
          type="text"
          value={data.bairro}
        />
      </div>
      <div className="design">
        <label>Cidade:</label>
        <input 
          type="text"
          value={data.localidade}
        />
      </div>
      <div className="design">
        <label>Estado:</label>
        <input 
          type="text"
          value={data.uf}
        />
      </div>
    </>
  )
}