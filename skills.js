// function to covert Celsius
// to Fahrenheit
function celsiusToFahrenheit(celsius) {
    // formula to convert
    // celsius to fahrenheit
    let fahrenheit = (celsius * 9 / 5) + 32;

    // return the value
    return fahrenheit;
}// Driver code
let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(celsius + "°C is equal to " + fahrenheit + "°F");