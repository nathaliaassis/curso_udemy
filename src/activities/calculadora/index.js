import React, { useState } from 'react'
import { Container } from './styles'
import Button from '../../Components/Button'
import Display from '../../Components/Display'

export default function Calculadora() {

  const [display, setDisplay] = useState('0');
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperation] = useState(null);
  const [values, setValues] = useState([0,0]);
  const [current, setCurrent] = useState(0);

  function addDigit(n){

    //regra para não permir a entrada de dois pontos('.')
    if(n === '.' && display.includes('.')){
      return;
    }
    const clear = display === '0' || clearDisplay;
    const currentValue = clear ? '' : display;
    const displayValue = currentValue + n;

    setDisplay(displayValue);
    setClearDisplay(false);

    if(n !== '.'){
      const i = current;
      const newValue = parseFloat(displayValue);
      const getValues = [...values];
      getValues[i] = newValue;
      setValues(getValues);
    }
  }

  function calc(op){
    if(current === '0'){
      setOperation(op);
      setCurrent(1);
      setClearDisplay(true);
    }else{
      const equals = op === '=';
      const currentOperation = operation;

      const newValues = [...values];

      try{
        newValues[0] = eval(`${newValues[0]} ${currentOperation} ${newValues[1]}`);
      }catch(e){
        newValues[0] = values[0];
      }
      
      newValues[1] = 0;

      setDisplay(newValues[0]);
      setOperation(equals ? null : op);
      setCurrent(equals ? 0 : 1);
      setClearDisplay(!equals);
      setValues(newValues);
    }
  }
  function clear(){
    setDisplay('0');
    setClearDisplay(false);
    setOperation(null);
    setValues([0, 0]);
    setCurrent(0);
  }
  return (
    <Container>
      <Display value={display}/>
      <Button className='ac' label='AC' click={clear}/>
      <Button action label='/' click={calc}/>
      <Button label='7' click={addDigit}/>
      <Button label='8' click={addDigit}/>
      <Button label='9' click={addDigit}/>
      <Button action label='*' click={calc}/>
      <Button label='4' click={addDigit}/>
      <Button label='5' click={addDigit}/>
      <Button label='6' click={addDigit}/>
      <Button action label='-' click={calc}/>
      <Button label='1' click={addDigit}/>
      <Button label='2' click={addDigit}/>
      <Button label='3' click={addDigit}/>
      <Button action label='+' click={calc}/>
      <Button className='zero' label='0' click={addDigit}/>
      <Button label='.' click={addDigit}/>
      <Button action label='=' click={calc}/>
    </Container>
  )
}
