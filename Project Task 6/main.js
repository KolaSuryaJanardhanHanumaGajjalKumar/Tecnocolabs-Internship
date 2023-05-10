//kelvin temp
let kelvin=298;
//converting kelvin to celsius
let celsius=kelvin-273;
//converting celsius to fahrenheit
let fahrenheit=(celsius*9/5+32);
//rounding off
fahrenheit=Math.floor(fahrenheit);
fahrenheit="The temperature is "+fahrenheit+" degrees Fahrenheit."
console.log(fahrenheit);

let newton=Math.floor(celsius*33/100);
newton="The temperature is "+newton+" degrees Newton."
console.log(newton);