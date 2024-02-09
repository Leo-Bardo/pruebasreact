import React, { useState } from 'react';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondValue) {
      setDisplayValue(String(digit));
      setWaitingForSecondValue(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  };

  const inputDecimal = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const clearDisplay = () => {
    setDisplayValue('0');
    setFirstValue(null);
    setWaitingForSecondValue(false);
    setOperator(null);
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstValue === null) {
      setFirstValue(inputValue);
    } else if (operator) {
      const result = evaluate(firstValue, inputValue, operator);
      setDisplayValue(String(result));
      setFirstValue(result);
    }

    setWaitingForSecondValue(true);
    setOperator(nextOperator);
  };

  const evaluate = (firstValue, secondValue, operator) => {
    switch (operator) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  return (
    <div className="calculator">
      <input className="display" type="text" value={displayValue} disabled />
      <div className="buttons">
        <button onClick={() => inputDigit(7)}>7</button>
        <button onClick={() => inputDigit(8)}>8</button>
        <button onClick={() => inputDigit(9)}>9</button>
        <button onClick={() => inputDigit(4)}>4</button>
        <button onClick={() => inputDigit(5)}>5</button>
        <button onClick={() => inputDigit(6)}>6</button>
        <button onClick={() => inputDigit(1)}>1</button>
        <button onClick={() => inputDigit(2)}>2</button>
        <button onClick={() => inputDigit(3)}>3</button>
        <button onClick={() => inputDigit(0)}>0</button>
        <button onClick={() => inputDecimal()}>.</button>
        <button onClick={() => clearDisplay()}>C</button>
        <button onClick={() => performOperation('+')}>+</button>
        <button onClick={() => performOperation('-')}>-</button>
        <button onClick={() => performOperation('*')}>*</button>
        <button onClick={() => performOperation('/')}>/</button>
        <button onClick={() => performOperation('=')}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
