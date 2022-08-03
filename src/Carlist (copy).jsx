const ascentDimensions = {length: 196.8, width: 76, height: 71.6}

const crosstrekDimensions = {length: 196.8, width: 76, height: 71.6}

const carList = [ { label: "Ascent", make: "Subaru", model: "Ascent", id: 1, 
versions: [{id: "2022NCA01", year: 2022, trim: "Base", towing: 2000, seats: 8, engine: "2.4L Turbo", ...ascentDimensions}, {id: "2022NCB11", year: 2022, trim: "Limited", towing: 5000, seats:8, engine: "2.4L Turbo", ...ascentDimensions}]},
{ label: "Crosstrek", make: "Subaru", model: "Crosstrek", id: 2, versions: [{id: "202201", year: 2022, ...crosstrekDimensions}]},
{ label: "Forester", make: "Subaru", model: "Forester", id: 3, year: 2022},
{ label: "Impreza", make: "Subaru", model: "Impreza", id: 4, year: 2022},
{ label: "Legacy", make: "Subaru", model: "Legacy", id: 5, year: 2022},
{ label: "Outback", make: "Subaru", model: "Outback", id: 6, year: 2022, towing: 2700, groundClearance: 8.7, length: 191.3, height: 66.1, width: 73, cargoVolume: 32.5, horsepower: 182, engine: "2.5L NA"}]

export default carList