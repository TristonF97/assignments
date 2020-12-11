var firstName = "triston";
function name(triston) {
    var upperCase = firstName.toUpperCase();
    var lowerCase = firstName.toLowerCase();
    var capLow = upperCase.concat(lowerCase);
    console.log(capLow);
    return triston;
}
name();

var hero = "batman";
function middleIndex(batman) {
    console.log(Math.floor(hero.length/2));
    return batman;
}
middleIndex()

function halfString(triston, batman) {
    var halfName = firstName.slice(0, 3);
    var halfHero = hero.slice(0, 3);
    console.log(halfName);
    console.log(halfHero);
    return triston, batman;
}
halfString();

function capAndLowercase(superman) {
    var heroTwo = "superman";
    var firstHalf = heroTwo.slice(0, 4);
    var upper = firstHalf.toUpperCase();
    var lastHalf = heroTwo.slice(4);
    var final = upper.concat(lastHalf);
    console.log(final);
    return superman;
}
capAndLowercase()

function Car(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
}

var myCar = new Car("Corvette", "Chevrolette", 2020)

console.log(myCar)