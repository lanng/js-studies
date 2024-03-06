const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Max', last: 'Plank', year: 1858, passed: 1947},
]

const people = [
    'Black, Glenn',
    'Smith, Emily',
    'Johnson, Michael',
    'Davis, Jennifer',
    'Williams, Christopher',
    'Brown, Sarah',
    'Jones, Kevin',
    'Miller, Jessica',
    'Wilson, Brian',
    'Moore, Ashley',
    'Taylor, Matthew',
    'Clark, Amanda',
    'Anderson, Nicholas',
    'White, Rachel',
    'Harris, Brandon',
    'Martin, Lauren',
    'Lee, Jonathan',
    'Perez, Megan',
    'Thompson, Justin',
    'Walker, Kayla',
    'Turner, Jordan',
    'Roberts, Olivia',
    'Scott, Ethan',
    'Evans, Haley',
    'Baker, Tyler',
    'Hill, Allison',
    'Cooper, Andrew',
    'Wright, Madison',
    'Murphy, David'
]

//Array.prototype.filter()
//1. Filter the list of inventors for those who were born in the 1500's
const inventor = inventors.filter(function(inventor){
    if (inventor.year < 1600 && inventor.year >= 1500) return true;
});

//arrow function
const inventor2 = inventors.filter(inventor => inventor.year < 1600 && inventor.year >= 1500);
console.log(inventor, inventor2);

//Array.prototype.map()
//2. Give us an array of the inventory first and last names
const names = inventors.map(inventor => inventor.first + ' ' + inventor.last);
console.log(names);

//Array.prototype.sort()
//3. Sort the inventors "by the birthdate, oldest to youngest

// const invOrdered = inventors.sort(function(a,b){
//     if(a.year > b.year){
//         return 1;
//     } else {
//         return -1;
//     }
// });
//arrow function
const invOrdered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.log(invOrdered);

//Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYear = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0); // 0 is the initial value for the var "total". Undefined if nothing is passed

console.log(totalYear);

//5. Sort the inventors by years lived
const oldest = inventors.sort((a,b) => {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
});

console.log(oldest);

//6. Sort people alphabetiically by last name
const alphabetiically = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
})
console.log(alphabetiically);

//8. reduce exmaple
//Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const dataSum = data.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(dataSum);