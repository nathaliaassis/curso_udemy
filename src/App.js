import React from 'react';
import Global from './styles/global';
import Card from './Components/Card';
import Lista from './activities/lists/Alunos';
import TabelaProdutos from './activities/lists/Produtos';
import Calculadora from './activities/calculadora';

function App() {
  return (
    <div className='app'>
     <Global />
      <Card titulo='calculadora' color='#fd746c'>
        <Calculadora />
      </Card>
      <Card titulo='Table Map' color='#FDC830'>
        <TabelaProdutos />
      </Card>
      <Card titulo='Map' color='#ff5e62'>
        <Lista />
      </Card>
    </div>
  );
}

export default App;
