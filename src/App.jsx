import React, { useState } from 'react';
import Car from './Car';
import Menu from './Menu';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
//import Drop from './Drop'
// import RecipeReviewCard from "./RecipeReviewCard";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  margin: 'auto',
  display: 'block'
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const App = () => {
  const [cars, updateCar] = useState([])
  const [open, setOpen] = React.useState(false);

  const handleAdd = (car) => {
    if (!cars.includes(car)) {
      updateCar(arr => [...arr, car]);
      setOpen(true);
    }
  }

  const handleRemove = (id) => {
    updateCar(cars.filter(car => car.id !== id))
  }

  const handleClose = (event) => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Item>
            <Menu handleAdd={handleAdd} />
          </Item>
        </Grid>
        {cars.map(car =>
          <Grid item xs={12} sm={6} key={car.id}>
            <Item>
              <Car car={car} id={car.id} key={car.id} handleClick={() => handleRemove(car.id)} />
            </Item>
          </Grid>)}

      </Grid>

      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Added
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default App;