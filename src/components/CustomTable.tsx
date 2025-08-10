import React from 'react';

interface CustomTableProps {
  headers: string[];
  rows: string[][];
  className?: string;
}

const CustomTable: React.FC<CustomTableProps> = ({ headers, rows, className = '' }) => {
  return (
    <div className={`overflow-x-auto my-5 rounded-lg border border-accent2/30 shadow-lg ${className}`}>
      <table className="min-w-full divide-y divide-accent2/30">
        <thead className="bg-accent2/20 border-b border-accent2/30">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-3 text-left text-sm font-heading text-accent3 uppercase font-bold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-accent2/20">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-accent2/10">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 text-sm font-body text-gray-100">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;