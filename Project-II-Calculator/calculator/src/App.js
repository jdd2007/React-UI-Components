import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import DisplayDiv from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calcContainer">
      <DisplayDiv result="0"/>
      <NumberButton num="0"/>
      <NumberButton num="1"/>
      <NumberButton num="2"/>
      <NumberButton num="3"/>
      <NumberButton num="4"/>
      <NumberButton num="5"/>
      <NumberButton num="6"/>
      <NumberButton num="7"/>
      <NumberButton num="8"/>
      <NumberButton num="9"/>
      <ActionButton action="multiply"/>
      <ActionButton action="add"/>
      <ActionButton action="subtract"/>
      <ActionButton action="divide"/>
      <ActionButton action="clear"/>
    </div>
  );
};

export default App;
