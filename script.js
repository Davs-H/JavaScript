const calculate = (ObjectPrice, Percentage) =>{
return Math.floor(ObjectPrice / 100 * Percentage + ObjectPrice);

}
console.log(`The OriginalPrice of the reduced 69$ shirt with 42% offer is ${calculate(69, 42)} €`);

const missedValue = (ObjectPrice, Percentage) =>{
return Math.floor(ObjectPrice / 100 * Percentage)

}
console.log(`The reduced cost are ${Math.ceil(missedValue(69, 42))} €`);

const timeReduction = (time, people) => {

return Math.floor(time / people);
}
console.log(`If 1 Person need 1 hour and 9 minutes to finish this task then 5 people only need ${timeReduction(69, 5)} minutes`);


const timeAddition = (time, km) => {

return Math.floor(time * km) 
}
console.log(`If my car need 10 minutes to reach 5km then i need ${timeAddition(10, 5)} minutes to reach 25km`)





