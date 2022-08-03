import React, { useState } from 'react';
import Car from './Car';
import Menu from './Menu';

const forest = {model: "Forester", id: 2}

const outb = {model: "Outback", id: 1}

const App = () => {
  const [cars, updateCar] = useState([])

  const handleAdd = () => {
        updateCar( arr => [...arr, outb])
    }

  const handleRemove = (id) => {
    updateCar(cars.filter(car => car.id !== id))
}

  const setToValue = newValue => {
    setValue(newValue)
  }

  return (
    <div>


      {cars.map( car =>
          <Car model={car.model} id={car.id} key={car.id} handleClick={() => handleRemove(car.id)} />
      )
      }

      <Menu updateCar={updateCar} handleRemove={handleRemove} />
    </div>
  )
}

export default App;





