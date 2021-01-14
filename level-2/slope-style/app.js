function collectAnimals(...animals) {  
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "wolf"));


function combineFruit(fruit, sweets, vegetables){
    return { fruit, sweets, vegetables}
}

console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]))


const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
function parseSentence({location, duration}){
  return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence(vacation))


function returnFirst(items){
  const {firstItem} = items;
  return firstItem
}


const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [notActivity1, firstFav, notActivity2, secondFav, thirdFav] = favoriteActivities;
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites())

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.
// function combineAnimals(...animalArrays) {  
//   const realAnimals = ["dog", "cat", "mouse"];
//   const magicalAnimals = ["jackolope"];
//   const mysteriousAnimals = ["platypus"];
//   const animalsArrays = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
// }

// console.log(combineAnimals())
// ["dog", "cat", "mouse", "jackolope", "platypus"]


function product(a, b, c, d, e) {  
  var numbers = [a,b,c,d,e];

  return numbers.reduce((acc, number) => acc * number, 1)
}


function unshift(array, ...letters) {  
  return [array, ...letters];
}

console.log(unshift("a", "b", "c"))


// Write some destructuring code to help this function out. Use object literals to simplify it:
// function populatePeople(names){
//   return names.map(name => {
//       name = name.split(" ");
//       const {firstName, lastName} = name
//       return {
//           firstName,
//           lastName
//       }
//   })
// }

// console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]