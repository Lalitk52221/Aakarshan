import React from "react";
type Column<T> = {
  header: string;
  accessor: keyof T | string;
  className?: string;
};

type TableProps<T> = {
  columns: Column<T>[];
  renderRow: (item: T) => React.ReactNode;
  data: T[];
}
function Table<T>({ columns, renderRow, data }: TableProps<T>) {
  return (
  <table className="w-full mt-4">
    <thead>
        <tr className="text-left text-sm text-gray-500 ">
            {columns.map((col)=>(
                <th key={col.accessor as string} className={col.className}>{col.header}</th>
            ))}
        </tr>
    </thead>
    <tbody>{data.map(renderRow)}</tbody>
    </table>
  )
};

export default Table;
