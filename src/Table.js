import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-community/dist/styles/ag-grid.css";
export const Table = () => {
  const data = [
    { name: "Raj", age: 20 },
    { name: "Arun", age: 24 },
    { name: "Raja", age: 23 }
  ];
  const columns = [
    {
      headerName: "Name",
      field: ""
    },
    {
      headerName: "Daniel",
      field: "age"
    }
  ];
  return (
    <div className="ag-theme-alphine">
      <AgGridReact rowData={data} columnDefs={columns} />
    </div>
  );
};
