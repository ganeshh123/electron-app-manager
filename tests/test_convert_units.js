let convertUnits = require('../src/utils/convert_units')

console.log(convertUnits(500, 'b', 'b', 4))
console.log(convertUnits(2000, 'b', 'kb', 4))
console.log(convertUnits(2024000, 'b', 'mb', 4))      
console.log(convertUnits(2550024000, 'b', 'gb', 4))     
console.log(convertUnits(1292550024000, 'b', 'tb', 4)) 