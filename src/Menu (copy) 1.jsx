import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import carList from './Carlist';

const MenuContainer = styled('div')({
  color: 'darkslategray',
  padding: 12,
  borderRadius: 4
});

function Menu(props) {
  const [car, setCar] = React.useState(carList[0]);
	return (
		<MenuContainer>
			<Autocomplete
        value={car}
        onChange={(event, newCar) => {
          setCar(newCar);
        }}
				disableClearable
				id="Car select"
				options={carList}
				sx={{ width: "auto",
        padding: 1
        }}
				renderInput={(params) => <TextField {...params} label="Model" />}
			/>

      <Button variant="contained" onClick={() => {
          props.handleAdd(car);
        }}>Add</Button>

              <Button variant="contained" onClick={() => {
          props.handleRemove(car.id);
        }}>Remove</Button>
		</MenuContainer>
	);
}

// const carList = [ { label: 'Outback', model: 'Outback', id: 1 }, { label: 'Forester', model: 'Forester', id: 3}, { label: 'Crosstrek', model: 'Crosstrek', id: 4} ];

export default Menu;