function evaluarEdad(nombre,edad){
    if(edad>=18){
        console.log('si puede entrar '+nombre)
    } else {
        return false
    }

}
evaluarEdad('Hector',18)



let arr=['juan', 'Marcos'];
let result=arr.map((item, index)=>{
    return item;
});
console.log(result);
