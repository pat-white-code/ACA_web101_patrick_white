function Person(first, last, age, gender, interests) 
{
  if(gender === 'male'){
    this.pronoun = 'He'
  } else if (gender === 'female'){
    this.pronoun = 'She'
  } else {
    this.pronoun = 'They'
  };
  this.name = {
    first: first,
    last: last
  };
  this.age = age,
  this.gender = gender,
  this.interests = interests,
  this.bio = function(){
    let string = `${this.name.first} ${this.name.last} is ${this.age} years old.`
    let pronoun;
    if (this.gender === 'male' || this.gender === 'Male') {
      pronoun = ' He likes ';
    } else if (this.gender === 'female' || this.gender === 'Female') {
      pronoun = ' She likes ';
    } else {
      pronoun = ' They like ';
    };
    string += pronoun;
    
    if(this.interests.length === 1) {
      string += this.interests[0] + '.';
    } else if (this.interests.length === 2) {
      string += this.interests[0] + ' and ' + this.interests[1] + '.';
    } else {
      for(let i = 0 ; i < this.interests.length ; i++) {
        if(i === this.interests.length - 1) {
          string += 'and ' + this.interests[i] + '.'
        } else {
          string += this.interests[i] + ', '
        }
      }
    }
    alert(string);
  },
  this.greeting = function() {
    alert(`Hi, my name is ${this.name.first} ${this.name.last}.`);
  };
}


const person1 = new Person ('Bob', 'Smith', 32, 'male', ['drawing', 'improv comedy', 'music', 'skiing']);

const person2 = new Person ('Sarah', 'Collier', 41, 'female', ['jogging', 'coding']);

const person3 = new Person ('Sarah', 'Collier', 41, null, ['jogging', 'coding']);



// this.bio = function(){
//   let interestsText = '';
//   for(let i = 0 ; i < interests.length ; i++) {
//     if(i + 1 == interests.length) {
//       interestsText += 'and ' + interests[i];
//     };
//     interestsText += interests[i] + ', '
//   }
//   alert(`${this.name.first} ${this.name.last} is ${this.age} years old. ${this.pronoun} likes ` + interestsText + '.');
// },