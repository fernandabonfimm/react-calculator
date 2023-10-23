import React from "react";
import { CalculatorProps } from "../interfaces/calculatorProps";
import { TableProps } from "../interfaces/tableProps";

const CalculatorContext = React.createContext<CalculatorProps | undefined>(
  undefined
);

export const useCalculatorContext = () => {
  const context = React.useContext(CalculatorContext);
  if (!CalculatorContext) {
    console.log(
      "O uso do useCalculatorContext deve ser feito dentro de um CalculatorProvider"
    );
  }
  return context;
};

export const CalculatorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [firstNumber, setFirstNumber] = React.useState<number>(0);
  const [secondNumber, setSecondNumber] = React.useState<number>(0);
  const [result, setResult] = React.useState<number>(0);
  const [calculations, setCalculations] = React.useState<TableProps[]>([]);

  const handleAdd = () => {
    const result = firstNumber + secondNumber;
    alert(`O resultado da soma é ${result}`);
    setResult(result);
    localStorage.setItem("Soma", String(result));
    localStorage.setItem("1Numero", String(firstNumber));
    localStorage.setItem("2Numero", String(secondNumber));
    // setCalculations calcula o resultado e adiciona na tabela
    setCalculations([...calculations, { firstNumber, secondNumber, result }]);
  };

  React.useEffect(() => {
    const savedResult = localStorage.getItem("1Numero");
    const convert1 = Number(savedResult);
    if (savedResult) {
      setFirstNumber(convert1);
    }
    const savedResultSecondNumber = localStorage.getItem("2Numero");
    const convert2 = Number(savedResultSecondNumber);
    if (savedResultSecondNumber) {
      setSecondNumber(convert2);
    }

    const savedResultResult = localStorage.getItem("Soma");
    if (savedResultResult) {
      setResult(Number(savedResultResult));
    }
  }, []);

  return (
    <CalculatorContext.Provider
      value={{
        firstNumber,
        secondNumber,
        setFirstNumber,
        setSecondNumber,
        handleAdd,
        result,
        calculations,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
