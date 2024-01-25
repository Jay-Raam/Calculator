import React, { useState } from 'react';
import './style.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value) => {
    setDisplayValue((prevDisplay) => prevDisplay + value);
  };

  const handleClear = () => {
    setDisplayValue('');
  };

  const handleDelete = () => {
    setDisplayValue((prevDisplay) => prevDisplay.slice(0, -1));
  };

  const handleEquals = () => {
    try {
      const result = Function('"use strict";return (' + displayValue + ')')();
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <form>
          <div className="display">
            <input type="text" name="display" value={displayValue} readOnly autoFocus className="operator-1" />
          </div>
          <div className='flex'>
            <div>
              <input type="button" value="C" onClick={handleClear} className="operator" />
              <input type="button" value="DEL" onClick={handleDelete} className="operator" />
              <input type="button" value="." onClick={() => handleButtonClick('.')} className="operator" />
              <input type="button" value="/" onClick={() => handleButtonClick('/')} className="operator" />
            </div>
            <div>
              <input type="button" value="7" onClick={() => handleButtonClick('7')} className='number' />
              <input type="button" value="8" onClick={() => handleButtonClick('8')} className='number' />
              <input type="button" value="9" onClick={() => handleButtonClick('9')} className='number' />
              <input type="button" value="*" onClick={() => handleButtonClick('*')} className="operator" />
            </div>
            <div>
              <input type="button" value="4" onClick={() => handleButtonClick('4')} className='number' />
              <input type="button" value="5" onClick={() => handleButtonClick('5')} className='number' />
              <input type="button" value="6" onClick={() => handleButtonClick('6')} className='number' />
              <input type="button" value="-" onClick={() => handleButtonClick('-')} className="operator" />
            </div>
            <div>
              <input type="button" value="1" onClick={() => handleButtonClick('1')} className='number' />
              <input type="button" value="2" onClick={() => handleButtonClick('2')} className='number' />
              <input type="button" value="3" onClick={() => handleButtonClick('3')} className='number' />
              <input type="button" value="+" onClick={() => handleButtonClick('+')} className="operator" />
            </div>
            <div>
              <input type="button" value="000" onClick={() => handleButtonClick('000')} className='number' />
              <input type="button" value="00" onClick={() => handleButtonClick('00')} className='number' />
              <input type="button" value="0" onClick={() => handleButtonClick('0')} className='number' />
            </div>
            <div>
              <input type="button" value="=" onClick={handleEquals} className="equal operator" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
