import React, { useState } from 'react';
import Car from './Car';



const App = (props) => {
	const [myArray, updateMyArray] = useState([]);

let model = "Forester";

const handleAdd = (e) => {
        updateMyArray( arr => [...arr, model])
    }
const handleRemove = () => {
  console.log("Clicked")
    }

    return (
      <div>
        <input type="button" onClick={ handleAdd } value="Update" />

        <div>{myArray.map( car =>
          <Car model={car} handleClick={() => console.log("Clicked")} />
        )}
        </div>
      </div>
    )
}

export default App;