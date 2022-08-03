parent component 
(state, updatestate)


Childcomponent ({ updateStae} ) = when we define the child component as a function, we pass the function is as an argument and it has to be destructered. If you do (props) then you have to call it as props.updateState

<Childcomponent updateState={updateState} /> - pass the update state function to the child component

<Button onClick={() => updateState(args)} /> - we have to use an arrow function so that it isn't called on render, but instead the return value, which is the function itself, is set as the onClick.


if cars does not include (car), then we add it.
 const handleAdd = (car) => {
    if (!cars.includes(car)) {
        updateCar( arr => [...arr, car])
        }
    }