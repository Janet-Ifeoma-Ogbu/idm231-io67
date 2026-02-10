
//1
let  age = 17;

if (age >=18){
  console.log('You can vote!');
}
else {
  console.log('Sorry, youre too young to vote.');
}

//2
let  score = 85;

if (score >=90){
  console.log('Grade: A');
}
else if (score >=80){
  console.log('Grade: B');
}
else if (score >=70){
  console.log('Grade: C');
}
else if (score >=60){
  console.log('Grade: D');
}
else if (score <60){
  console.log('Your grade: F');
}


//3
for (let i =5; i>0;i--){
  console.log(i);
}
console.log('Blast Off!');

//4

const classmates =['Tolu', 'Fumi','Tayo','Duncan']
for (let i = 0; i < classmates.length; i++)
console.log("Hello, " + classmates[i] + "!");