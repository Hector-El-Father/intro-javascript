
//problema 2 `
var contador=0;
for(var index=1; index<=100; index++){
    if(index % 5==0){
        contador=contador+1;
        console.log(`${index} es multiplo de 5`);
    }
}
console.log(`de 0 a 100 existen ${contador} multiplos de 5`);
//problema 2
let numero=prompt("ingrese un numero");
let i=1;
while(i<=numero){
    if (i%5==0){
        console.log("el numero "+i+" es multiplo de 5.");
    }
    i++;
}

//problema 3
let numero=prompt("ingrese un numero");
let i=1;
do{
    if (i%5==0){
        console.log("el numero "+i+" es multiplo de 5.");
    }
    i++;
} while(i<=numero);

//problema 4
let acumulador=1;
for (let i=1; i<25; i++){
    acumulador=acumulador+2
    console.log(acumulador);
}
//problema 5
