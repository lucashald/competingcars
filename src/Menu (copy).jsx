import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Menu(props) {
  const [car, setCar] = React.useState(carList[0]);
	return (
		<div>
			<Autocomplete
        value={car}
        onChange={(event, newCar) => {
          setCar(newCar);
        }}
				disableClearable
				id="Car select"
				options={carList}
				sx={{ width: 300 }}
				renderInput={(params) => <TextField {...params} label="Model" />}
			/>

      <Button variant="contained" onClick={() => {
          props.updateCar( arr => [...arr, car]);
        }}>Add</Button>

              <Button variant="contained" onClick={() => {
          props.handleRemove(car.id);
        }}>Remove</Button>
		</div>
	);
}

const carList = [ { label: 'Outback', model: 'Outback', id: 1 }, { label: 'Forester', model: 'Forester', id: 3} ];

export default Menu;