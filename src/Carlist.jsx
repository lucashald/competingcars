// Engine options

const twoZero = {engine: "2.0L", horsepower: 150}

const twoFour = {engine: "2.4L Turbo", horsepower: 260}

const twoFive = {engine: "2.5L", horsepower: 182}


// Ascent

const ascentDimensions = {length: 196.8, width: 76, height: 71.6}

const ascentVersions = [{id: "2022NCA01", year: 2022, trim: "Base", towing: 2000, seats: 8, ...twoFour, ...ascentDimensions, MSRP: "$33,470"}, {id: "2022NCB11", year: 2022, trim: "Premium", towing: 5000, seats: 8, ...twoFour, ...ascentDimensions, MSRP: "$35,970"}, {id: "2022NCB12", year: 2022, trim: "Premium", towing: 5000, seats: 8, ...twoFour, ...ascentDimensions, description: "Power Rear Gate, Keyless Acecess, Reverse Automatic Braking", MSRP: "$37,430"}, {id: "2022NCC11", year: 2022, trim: "Premium", towing: 5000, seats: 7, ...twoFour, ...ascentDimensions, MSRP: "$35,970"}, {id: "2022NCC12", year: 2022, trim: "Premium", towing: 5000, seats: 7, ...twoFour, ...ascentDimensions, description: "Power Rear Gate, Keyless Acecess, Reverse Automatic Braking", MSRP: "$37,430"}, {id: "2022NCH21", year: 2022, trim: "Onyx", towing: 5000, seats:7, ...twoFour, ...ascentDimensions, MSRP: "$39,170"}, {id: "2022NCH23", year: 2022, trim: "Onyx", towing: 5000, seats:7, ...twoFour, ...ascentDimensions, description: "Moonroof, Navigation", MSRP: "$41,370"}, {id: "2022NCK21", year: 2022, trim: "Limited", towing: 5000, seats:8, ...twoFour, ...ascentDimensions, MSRP: "$40,770"}, {id: "2022NCK23", year: 2022, trim: "Limited", towing: 5000, seats:8, ...twoFour, ...ascentDimensions, description: "Harmon Kardon Audio, Moonroof, Navigation", MSRP: "$43,720"}, {id: "2022NCL21", year: 2022, trim: "Limited", towing: 5000, seats:7, ...twoFour, ...ascentDimensions, MSRP: "$40,770"}, {id: "2022NCL23", year: 2022, trim: "Limited", towing: 5000, seats:7, ...twoFour, ...ascentDimensions, description: "Harmon Kardon Audio, Moonroof, Navigation", MSRP: "$43,720"}, {id: "2022NCM23", year: 2022, trim: "Touring", towing: 5000, seats:7, ...twoFour, ...ascentDimensions, description: "Ventilated Front Seats, Smart Rear-View Mirror", MSRP: "$46,620", info: "Moonroof and Navigation standard. Adds chrome door handles, gloss black grill, ventilated front seats and rain sensing wipers. Includes a Smart Rear-View Mirror and a forward facing camera."}]

const ascent = { label: "Ascent", make: "Subaru", model: "Ascent", id: 1, versions: [...ascentVersions]}


// Crosstrek

const crosstrekDimensions = {length: 196.8, width: 76, height: 71.6}

const crosstrekVersions = [{id: "2022NRA01", year: 2022, trim: "Base Manual", towing: 1500, seats: 5, ...twoZero, ...crosstrekDimensions}, {id: "2022NRB03", year: 2022, trim: "Base Automatic", towing: 1500, seats: 5, ...twoZero, ...crosstrekDimensions}]

const crosstrek = { label: "Crosstrek", make: "Subaru", model: "Crosstrek", id: 2, versions: [...crosstrekVersions]}

const carList = [ {...ascent}, {...crosstrek},
{ label: "Forester", make: "Subaru", model: "Forester", id: 3, year: 2022},
{ label: "Impreza", make: "Subaru", model: "Impreza", id: 4, year: 2022},
{ label: "Legacy", make: "Subaru", model: "Legacy", id: 5, year: 2022},
{ label: "Outback", make: "Subaru", model: "Outback", id: 6, year: 2022, towing: 2700, groundClearance: 8.7, length: 191.3, height: 66.1, width: 73, cargoVolume: 32.5, horsepower: 182, engine: "2.5L NA"}]

export default carList