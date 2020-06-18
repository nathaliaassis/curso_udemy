import React from 'react';
import { alunos, } from '../../datas/data';

export default function Lista() {

  return (
    <ul>
      {alunos.map(aluno => (
        <li key={aluno.id}>{aluno.id}) {aluno.nome} =  {aluno.nota}</li>
      ))}
    </ul>
  )
}
