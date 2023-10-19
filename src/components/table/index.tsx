import React from "react";
import { TableProps, CalculationsArray } from "../../interfaces/tableProps";

const Table: React.FC<CalculationsArray> = ({ calculations }) => {
  return (
    <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Tabela de Cálculos
      </h2>
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="w-1/4">1° Número</th>
            <th className="w-1/4">2° Número</th>
            <th className="w-1/4">Soma</th>
          </tr>
        </thead>
        <tbody>
          {calculations.map((calculation: TableProps) => (
            <tr>
              <td>{calculation.firstNumber}</td>
              <td>{calculation.secondNumber}</td>
              <td>{calculation.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;