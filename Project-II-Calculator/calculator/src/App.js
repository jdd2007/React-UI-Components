import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import DisplayDiv from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calcContainer">
      <DisplayDiv result="0"/>
      <ActionButton id="clear-id" action="clear"/>
      <ActionButton action="/"/>
      <NumberButton num="7"/>
      <NumberButton num="8"/>
      <NumberButton num="9"/>
      <ActionButton action="x"/>
      <NumberButton num="4"/>
      <NumberButton num="5"/>
      <NumberButton num="6"/>
      <ActionButton action="-"/>
      <NumberButton num="1"/>
      <NumberButton num="2"/>
      <NumberButton num="3"/>
      <ActionButton action="+"/>
      <NumberButton id="zero-id" num="0"/>
      <ActionButton action="="/>
    </div>
  );
};

export default App;
