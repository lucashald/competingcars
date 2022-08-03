import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';

const carList = [ { label: "Ascent", make: "Subaru", model: "Ascent", id: 1, year: 2022},
{ label: "Crosstrek", make: "Subaru", model: "Crosstrek", id: 2, year: 2022},
{ label: "Forester", make: "Subaru", model: "Forester", id: 3, year: 2022},
{ label: "Impreza", make: "Subaru", model: "Impreza", id: 4, year: 2022},
{ label: "Legacy", make: "Subaru", model: "Legacy", id: 5, year: 2022},
{ label: "Outback", make: "Subaru", model: "Outback", id: 6, year: 2022, towing: 2700, groundClearance: 8.7, length: 191.3, height: 66.1, width: 73, cargoVolume: 32.5, horsepower: 182, engine: "2.5L NA"}]

const Car = (props) => {
const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'make', headerName: 'Make', width: 100 },
  { field: 'model', headerName: 'Model', width: 100 }];
	return (
		<div>
      <h1>
        {props.car.year} {props.car.make} {props.car.model}
      </h1>
      <div style={{ height: 400, width: '100%' }}>
<DataGrid
        rows={carList}
        columns={columns}
      />
      </div>
  <Button variant="contained" onClick={props.handleClick}>
    Remove
  </Button>
		</div>
	);
};

export default Car;