var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};
var {name, age, job, hobbies}=student;
console.log(name);
console.log(age);
student.name="Steve Jobs"
console.log(student)

var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};
student.name="Steve Jobs"
console.log(student)
/*
1. Muestra en pantalla el valor de la propiedad name mediante dot notation
2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
*/

//problema 2
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
Object.keys(student);
console.log(student);

//Verifica si la propiedad name se encuentra dentro del siguiente objeto:

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
let nombre='name' in student
console.log(nombre);

//Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. 
//* Imprima también el objeto antes o después de eliminar la propiedad. 
//* Objeto para usar:
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log("objeto original; ", student);
delete student.rollno
console.log("objeto cambiado: ", student);

//
var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};
student.age=35
console.log(student)
//
var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};
student['peter'] ="dog";
console.log(student);
// La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.

//Crea un código para llenar un objecto vacio:
 
const objeto ={};
Object.assign(objeto, {color:'Negro', tamaño:'grande', peso:80, cantidad:'mucho'});
console.log(objeto);

/*una función que reciba un objeto y un string…
El string va a ser el nombre de una propiedad, y
esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes
la función debe retornar true o false*/

function agregarpropiedad(objeto,palabra){
    if (objeto.hasOwnProperty(palabra)){
        return true
    } else{
        objeto[palabra]="";
        return false;
    }
}
const objeto={};
agregarpropiedad(objeto, "hola");
console.log(objeto);