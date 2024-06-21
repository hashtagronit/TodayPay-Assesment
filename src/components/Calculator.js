import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import Confetti from 'react-confetti-explosion';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [memory, setMemory] = useState(0);
  const [isRadian, setIsRadian] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPosition, setConfettiPosition] = useState({ x: 0, y: 0 });

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setDisplay('0');
      setExpression('');
    } else if (value === '=') {
      try {
        const result = eval(expression);
        setDisplay(result.toString());
        setExpression(result.toString());
        if (expression.includes('5') && expression.includes('6')) {
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 2000);
        }
      } catch (error) {
        setDisplay('Error');
        setExpression('');
      }
    } else if (value === 'MC') {
      setMemory(0);
    } else if (value === 'M+') {
      setMemory(memory + parseFloat(display));
      setDisplay('0');
    } else if (value === 'M-') {
      setMemory(memory - parseFloat(display));
      setDisplay('0');
    } else if (value === 'MR') {
      setDisplay(memory.toString());
    } else if (value === 'qrt') {
      setDisplay(Math.sqrt(parseFloat(display)).toString());
    } else if (value === 'x²') {
      setDisplay(Math.pow(parseFloat(display), 2).toString());
    } else if (value === 'x³') {
      setDisplay(Math.pow(parseFloat(display), 3).toString());
    } else if (value === 'sin') {
      const angle = isRadian ? parseFloat(display) : parseFloat(display) * Math.PI / 180;
      setDisplay(Math.sin(angle).toString());
      setExpression(`sin(${display})`);
    } else if (value === 'cos') {
      const angle = isRadian ? parseFloat(display) : parseFloat(display) * Math.PI / 180;
      setDisplay(Math.cos(angle).toString());
      setExpression(`cos(${display})`);
    } else if (value === 'tan') {
      const angle = isRadian ? parseFloat(display) : parseFloat(display) * Math.PI / 180;
      setDisplay(Math.tan(angle).toString());
      setExpression(`tan(${display})`);
    } else if (value === 'log') {
      setDisplay(Math.log10(parseFloat(display)).toString());
      setExpression(`log(${display})`);
    } else if (value === 'e') {
      setDisplay(Math.E.toString());
    } else if (value === 'π') {
      setDisplay(Math.PI.toString());
    } else if (value === 'Rand') {
      setDisplay(Math.random().toString());
    } else if (value === '+/-') {
      setDisplay((parseFloat(display) * -1).toString());
    } else if (value === '%') {
      setDisplay((parseFloat(display) / 100).toString());
    } else if (value === '1/x') {
      setDisplay((1 / parseFloat(display)).toString());
    } else if (value === 'xʸ') {
      setDisplay(Math.pow(parseFloat(display), parseFloat(prompt('Enter exponent'))).toString());
    } else if (value === 'eʷ') {
      setDisplay(Math.exp(parseFloat(display)).toString());
    } else if (value === '10ʷ') {
      setDisplay(Math.pow(10, parseFloat(display)).toString());
    } else {
      if (display === '0') {
        setDisplay(value);
      } else {
        setDisplay(display + value);
      }
      setExpression(expression + value);
    }
  };

  const handleFunctionClick = (func) => {
    if (func === 'sinh') {
      const angle = isRadian ? parseFloat(display) : parseFloat(display) * Math.PI / 180;
      setDisplay(Math.sinh(angle).toString());
      setExpression(`sinh(${display})`);
    } else if (func === 'cosh') {
      const angle = isRadian ? parseFloat(display) : parseFloat(display) * Math.PI / 180;
      setDisplay(Math.cosh(angle).toString());
      setExpression(`cosh(${display})`);
    } else if (func === 'tanh') {
      const angle = isRadian ? parseFloat(display) : parseFloat(display) * Math.PI / 180;
      setDisplay(Math.tanh(angle).toString());
      setExpression(`tanh(${display})`);
    } else if (func === 'Rad') {
      setIsRadian(!isRadian);
    }
  };

  return (
    <div className="bg-neutral-700 rounded-lg p-4 shadow-lg">
      <Display value={display} />
      {showConfetti && (
        <Confetti
          duration={2000}
          colors={['#FF69B4', '#33CC33', '#66CCCC']}
          confettiNumber={50}
          recycle={false}
          className="absolute top-0 left-0 w-full h-full z-50"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
          }}
        />
      )}
      <div className="grid grid-cols-10 gap-0.5 mt-4">
        <Button value="(" onClick={() => handleButtonClick('(')} />
        <Button value=")" onClick={() => handleButtonClick(')')} />
        <Button value="mc" onClick={() => handleButtonClick('MC')} />
        <Button value="m+" onClick={() => handleButtonClick('M+')} />
        <Button value="m-" onClick={() => handleButtonClick('M-')} />
        <Button value="mr" onClick={() => handleButtonClick('MR')} />
        <Button value="C" onClick={() => handleButtonClick('C')} />
        <Button value="+/-" onClick={() => handleButtonClick('+/-')} />
        <Button value="%" onClick={() => handleButtonClick('%')} />
        <Button value="÷" onClick={() => handleButtonClick('/')} className="bg-orange-400 hover:bg-orange-500" />
        <Button value="2nd" onClick={() => handleButtonClick('2nd')} />
        <Button value="x²" onClick={() => handleButtonClick('x²')} />
        <Button value="x³" onClick={() => handleButtonClick('x³')} />
        <Button value="xʸ" onClick={() => handleButtonClick('xʸ')} />
        <Button value="eˣ" onClick={() => handleButtonClick('eʷ')} />
        <Button value="10ˣ" onClick={() => handleButtonClick('10ʷ')} />
        <Button value="7" onClick={() => handleButtonClick('7')} className="bg-neutral-500 hover:bg-neutral-400 " />
        <Button value="8" onClick={() => handleButtonClick('8')} className="bg-neutral-500 hover:bg-neutral-400 " />
        <Button value="9" onClick={() => handleButtonClick('9')} className="bg-neutral-500 hover:bg-neutral-400 " />
        <Button value="×" onClick={() => handleButtonClick('*')} className="bg-orange-400 hover:bg-orange-500" />
        <Button value="1/x" onClick={() => handleButtonClick('1/x')} />
        <Button value="√x" onClick={() => handleButtonClick('qrt')} />
        <Button value="³√x" onClick={() => handleButtonClick('³qrt')} />
        <Button value="y√x" onClick={() => handleButtonClick('yqrt')} />
        <Button value="ln" onClick={() => handleButtonClick('ln')} />
        <Button value="log10" onClick={() => handleButtonClick('log')} />
        <Button value="4" onClick={() => handleButtonClick('4')} className="bg-neutral-500 hover:bg-neutral-400 " />
        <Button value="5" onClick={() => handleButtonClick('5')} className="bg-neutral-500 hover:bg-neutral-400 " />
        <Button value="6" onClick={() => handleButtonClick('6')} className="bg-neutral-500 hover:bg-neutral-400 " />
        <Button value="-" onClick={() => handleButtonClick('-')} className="bg-orange-400 hover:bg-orange-500" />
        <Button value="x!" onClick={() => handleButtonClick('x!')} />
        <Button value="sin" onClick={() => handleButtonClick('sin')} />
        <Button value="cos" onClick={() => handleButtonClick('cos')} />
        <Button value="tan" onClick={() => handleButtonClick('tan')} />
        <Button value="e" onClick={() => handleButtonClick('e')} />
        <Button value="EE" onClick={() => handleButtonClick('EE')} />
        <Button value="1" onClick={() => handleButtonClick('1')} className="bg-neutral-500 hover:bg-neutral-400 " />
        <Button value="2" onClick={() => handleButtonClick('2')} className="bg-neutral-500 hover:bg-neutral-400 " />
        <Button value="3" onClick={() => handleButtonClick('3')} className="bg-neutral-500 hover:bg-neutral-400 " />
        <Button value="+" onClick={() => handleButtonClick('+')} className="bg-orange-400 hover:bg-orange-500" />
        <Button value="Rad" onClick={() => handleFunctionClick('Rad')} />
        <Button value="sinh" onClick={() => handleFunctionClick('sinh')} />
        <Button value="cosh" onClick={() => handleFunctionClick('cosh')} />
        <Button value="tanh" onClick={() => handleFunctionClick('tanh')} />
        <Button value="π" onClick={() => handleButtonClick('π')} />
        <Button value="Rand" onClick={() => handleButtonClick('Rand')} />
        <Button value="0" onClick={() => handleButtonClick('0')} className="col-span-2 bg-neutral-500 hover:bg-neutral-400 " />
        <Button value="." onClick={() => handleButtonClick('.')} className="bg-neutral-500 hover:bg-neutral-400 "/>
        <Button value="=" onClick={() => handleButtonClick('=')} className="bg-orange-400 hover:bg-orange-500" />
      </div>
    </div>
  );
};

export default Calculator;
