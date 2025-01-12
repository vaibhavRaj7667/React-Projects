import { useState } from 'react';
import './cal.css'

function App() {
  const [value, setValue] = useState('');

  const handleButtonClick = (buttonValue) => {
    
    if (/[*+/.-]$/.test(value) && /[*+/.-]/.test(buttonValue)) {
      return;
    }
    setValue((prevValue) => prevValue + buttonValue);
  };

  const handleEqual = () => {
    try {
      if (/^[0-9+*/.-]+$/.test(value) && !/[*+/.-]$/.test(value)) {
        setValue(eval(value).toString());
      } else {
        setValue('Error');
      }
    } catch {
      setValue('Error');
    }
  };

  const handelAC=()=>{
    setValue('')
  }

  return (
    <>
      <div className="calculator-container">
        <div className="calculator">
          <input
            type="text"
            className="calculator-display"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="calculator-buttons">
            <button className="button" onClick={() => handleButtonClick('7')}>7</button>
            <button className="button" onClick={() => handleButtonClick('8')}>8</button>
            <button className="button" onClick={() => handleButtonClick('9')}>9</button>
            <button className="button operator" onClick={() => handleButtonClick('+')}>+</button>
            <button className="button operator" onClick={() => handleButtonClick('-')}>-</button>
            <button className="button operator" onClick={() => handleButtonClick('*')}>*</button>
            <button className="button operator" onClick={() => handleButtonClick('/')}>/</button>
            <button className="button operator" onClick={handelAC}>AC</button>

            <button className="button" onClick={() => handleButtonClick('4')}>4</button>
            <button className="button" onClick={() => handleButtonClick('5')}>5</button>
            <button className="button" onClick={() => handleButtonClick('6')}>6</button>

            <button className="button" onClick={() => handleButtonClick('1')}>1</button>
            <button className="button" onClick={() => handleButtonClick('2')}>2</button>
            <button className="button" onClick={() => handleButtonClick('3')}>3</button>
            <button className="button operator" onClick={handleEqual}>=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
