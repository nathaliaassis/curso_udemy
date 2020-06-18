import React from 'react';
import {products} from '../../datas/data';

export default function TabelaProdutos() {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {products.map(produto => (
          <tr key={produto.id}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>{produto.valor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
