import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";

const CalculatorPage: React.FC = () => {
  const [firstNumber, setFirstNumber] = React.useState<string>("");
  const [secondNumber, setSecondNumber] = React.useState<string>("");

  const handleAdd = () => {
    const result = Number(firstNumber) + Number(secondNumber);
    alert(`O resultado da soma é ${result}`);
  };

  React.useEffect(() => {
    console.log("firstNumber", firstNumber);
  }, [firstNumber]);

  return (
    <div className="flex flex-col bg-white gap-10 p-10 dark:bg-black">
      <h1 className="text-black text-2xl dark:text-white">Calculadora</h1>
      <Input
        label="Primeiro número"
        placeholder="Digite o primeiro número, Ex: 1"
        type="number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
        maxLength={10}
      />
      <Input
        label="Segundo número"
        placeholder="Digite o segundo número, Ex: 2"
        type="number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
        maxLength={10}
      />
      <Button label="Adicionar" onClick={handleAdd} />
    </div>
  );
};
export default CalculatorPage;
