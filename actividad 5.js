//problema 1
let arreglo=[1,4,6,10,22,55,45,2,5,0];
for(let i=1; i<arreglo.length; i++){
    if(arreglo[i]>3){
        console.log(arreglo[i]);
    }
}
//problema 2
let array=[];
let i=1;
while(i<=5){
    array.push(i+1);
    i++;
}
console.log([array]);
//problema 3
[1,4,6,10,22,55,45,2,5,0].sort(function(a,b){return a-b});