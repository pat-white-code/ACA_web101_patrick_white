console.log('app.js reporting!');

const person = {
  name: {
    first: 'Bob',
    last: 'Smith'
  },
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(`${this.name.first} ${this.name.last} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}.`)},
  greeting: function(){
    alert(`Hi, I'm ${this.name.first}.`);
  }
};

let myDataName = 'height';
let myDataValue = '1.75m';

person[myDataName] = myDataValue;