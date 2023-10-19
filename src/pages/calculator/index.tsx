import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import { useCalculatorContext } from "../../contexts/calculatorContext";
import { CalculatorProps } from "../../interfaces/calculatorProps";
import Table from "../../components/table";

const CalculatorPage: React.FC = () => {
  const {
    firstNumber,
    setFirstNumber,
    secondNumber,
    setSecondNumber,
    handleAdd,
    calculations
  } = useCalculatorContext() as CalculatorProps;

  return (
    <div className="flex flex-col bg-white gap-10 p-10 dark:bg-black">
      <h1 className="text-black text-2xl dark:text-white">Calculadora</h1>
      <Input
        label="Primeiro número"
        placeholder="Digite o primeiro número, Ex: 1"
        type="number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(parseFloat(e.target.value))}
        maxLength={10}
      />
      <Input
        label="Segundo número"
        placeholder="Digite o segundo número, Ex: 2"
        type="number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(parseFloat(e.target.value))}
        maxLength={10}
      />
      <Button label="Adicionar" onClick={handleAdd} />
      <div>
        <Table calculations={calculations} />
      </div>
    </div>
  );
};
export default CalculatorPage;
