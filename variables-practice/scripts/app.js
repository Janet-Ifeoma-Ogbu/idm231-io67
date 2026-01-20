//Create your variables
const firstName = "Janet";
const age = 20 ;
const favoriteFood = "Ofada Rice";
const isStudent = true 


const message = `Hi, I'm ${firstName}, I'm ${age} years old, 
My Favourite food is ${favoriteFood} and it's ${isStudent}
that i'm a Student.`


console.log(message);

//Shopping

const itemName = 'T-Shirt';
const price = 25;
const quantity = 3;
const taxRate = 0.06;

const subtotal = price * quantity;
const tax = taxRate;
const total =  (price * quantity)/ taxRate;

console.log(`Item: ${itemName}`);
console.log(`Subtotal: $${subtotal}`);
console.log(`Tax: $${tax}`);
console.log(`Total: $${total}`);




// Favourite movies

const favoriteMovies = ['Chroniclles of Narnia', 'Avengers', 'Sing'];
console.log(`My favorite movie is: ${favoriteMovies[2]}`);


favoriteMovies.push('To kill a Monkey');
console.log(`I have ${favoriteMovies.length} favorite movies`);
console.log(favoriteMovies);



// Graduation 


const gradYear= 2029;
const currentYear= 2026;

const yearsToGraduate= gradYear-currentYear;
const message1= `I graduate Drexel in ${yearsToGraduate} years time.`
console.log(yearsToGraduate)
console.log(message1)


//Courses

const myClasses =['UXID121', 'IDM231','IDM222','IDM214','ENGL103', 'COM230']

myClasses.pop('VSST110')
myClasses.push('COM230')
console.log(myClasses)