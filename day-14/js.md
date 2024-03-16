# Object and Arrays - Reference VS Copy

In this example below, when we assign a value to a var with a value of another var, we pass for the new var a reference to the first. This means that if we change the second, the first will be changed as well.

```javascript
const first = 'foo';
const second = first;

console.log(first, second);
// the same value.

second = 'bar';
console.log(first, second);
//The value of the two will be 'bar'
```

The same occur on the arrays and objects on JavaScript. <br>
To avoid this on arrays we can make this:

```javascript
const players = ['Sarah', 'Victor', 'Ryan', 'Poppy'];
const players2 = players.slice();
//or
const players3 = [].concat(players);
//or
const players4 = [...players];
//or
const player5 = Array.from(players);
//This way we can make a copy of the array and modify the players2 without messing with the players

```

With Objects:

```javascript
const person = {
    name: 'Victor',
    age: 24
};

const p2 = person;
//In this way we just pass the reference, in this scenario if we edit the p2 the person will be edited too.

const person2 = Object.assign({}, person, { number: 99 });
//This scenario we can edit and pass another atribute to the person2 object without messong with 'person'
```

## 

BUT, this is only 1 level deep, both for Arrays and Objects. <br>
In this case we can create a function to clone the first object, but have to think twice before.

We can do with JSON methods like this:

```javascript
const person = {
    name: 'Victor',
    age: 24,
    social: {
        twitter: '@user',
        facebook: 'url.link',
    }
};

const p2 = Object.assign({}, person);
p2.social.twitter = '@user2';
//If we console.log on person, we will see that twitter is also changed to '@user2'.

const person2 = JSON.parse(JSON.stringify(person));
//This scenario we can edit and pass another atribute to the person2 object without messong with 'person'
```
