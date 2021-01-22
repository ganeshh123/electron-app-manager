let valueInBytes = -1
let convertedValue = -1

/* Converts sizes between units */

// value = value or size to be converted
// inputUnit = unit of the input
// UNITS -> b = bytes, kb = kilobytes, mb = megabytes, gb=gigabytes, tb = terabytes
// outputUnit = desired unit of the output
// precision = number of decimal places for output
let convertUnits = (value, inputUnit, outputUnit, precision) => {

    if(precision < 0 || precision === undefined){
        precision = 2
    }

    /* Convert Input Value into Bytes */
    if(inputUnit === 'b'){
        valueInBytes = value
    } else if(inputUnit === 'kb'){
        valueInBytes = value * 1024
    } else if(inputUnit === 'mb'){
        valueInBytes = value * 1048576
    } else if(inputUnit === 'gb'){
        valueInBytes = value * 1073741824
    } else if(inputUnit === 'tb'){
        valueInBytes = value * 1099511627776
    }

    /* Convert Bytes into Output Unit */
    if(outputUnit === 'b'){
        convertedValue = valueInBytes
    }else if(outputUnit === 'kb'){
        convertedValue = parseFloat((valueInBytes / 1024).toFixed(precision))
    }else if(outputUnit === 'mb'){
        convertedValue = parseFloat((valueInBytes / 1048576).toFixed(precision))
    }else if(outputUnit === 'gb'){
        convertedValue = parseFloat((valueInBytes / 1073741824).toFixed(precision))
    }else if(outputUnit === 'tb'){
        convertedValue = parseFloat((valueInBytes / 1099511627776).toFixed(precision)) 
    }

    //Convert the result according to desired precision
    return parseFloat(convertedValue.toFixed(precision))
}

module.exports = convertUnits