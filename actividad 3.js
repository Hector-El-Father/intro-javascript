// problema 1
var edad=prompt('¿Que edad tienes?');
if(edad>=18){
    var nombre=prompt('¿Cual es tu nombre?');
    if(nombre=="Mario" || nombre=="Carlos"){
        alert('entra al VIP: '+nombre);
    } else{
        alert('Entra a la discoteca: '+nombre);
    }
}
else{
    alert('no puedes entrar a la discoteca: '+nombre);
}
// problema 2
var jugador1=prompt("escoge piedra, papel o tijera");
if(jugador1=="piedra"){
    var jugador2=prompt("escoge piedra, papel o tijera");
    if(jugador2=="piedra"){
        alert("empate")
    } else(jugador2=="papel"){
        alert("gana jugador")
    }
    
}

// problema 5
var numero=prompt("escoge un numero")
if(numero==1000){
    alert("ganaste un premio")
} else if(numero<=1000){
    alert(numero+", Lo sentimos, sigue participando")
} else if(numero>=1000){
    alert(numero+", Lo sentimos, sigue participando")
}
// problema 6
var num1=prompt("escoge un numero");
var num2=prompt("escoge un numero");
if(num1>num2){
    alert("numero "+ num1 +" es mayor que numero "+num2);
} else if(num1<num2){
    alert("numero "+ num1 +" es menor que numero "+num2);
}
// problema 7
var num1=prompt("escoge un numero");
var num2=prompt("escoge un numero");
var num3=prompt("escoge un numero");
if(num1>num2 && num1>num3){
    alert("numero "+num1+" es mayor que numero "+num2+" y " + num3);
} if(num2>num1 && num2>num3){
    alert("numero "+num2+" es mayor que numero "+num1+" y " + num3);
} if(num3>num1 && num3>num1){
    alert("numero "+num3+" es mayor que numero "+num1+" y " + num2);
} if(num1==num2 && num1>num3){
    alert("numero "+num1+" es igual a "+num2+" y son mayor que " + num3);
} if(num2==num1 && num2>num3){
    alert("numero "+num2+" es igual a "+num1+" y son mayor que " + num3);
} else if(num1<num2 && num1<num3){
    alert("numero "+num1+" es menor que numero "+num2+" y " + num3);  
} else if(num2<num1 && num2<num3){
    alert("numero "+num2+" es menor que numero "+num1+" y " + num3); 
} else if(num3<num1 && num3<num1){
    alert("numero "+num3+" es menor que numero "+num1+" y " + num2); 
}



