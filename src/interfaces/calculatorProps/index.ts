export interface CalculatorProps {
  firstNumber: string;
  setFirstNumber: React.Dispatch<React.SetStateAction<string>>;
  secondNumber: string;
  // React.Dispatch é um tipo que recebe um parâmetro do tipo React.SetStateAction e não retorna nada
  setSecondNumber: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: () => void;
  result: number;
  calculations: {
    firstNumber: string;
    secondNumber: string;
    result: number;
  }[];
}
