"use strict";

let categoria = parseInt(prompt("ingrese categoría (1, 2 o 3)"));
let subcategoria = prompt("ingrese subcategoría (a, b, c)");
let sueldo = 0;

//si categoria es 1, 2 o 3 y la subcategoria es un string
if((categoria === 1 || categoria === 2 || categoria === 3) && typeof subcategoria == "string"){
    switch(categoria){
        case 1:
            sueldo = 1000;
            break;
        case 2:
            sueldo = 1500;
            break;
        case 3:
            sueldo = 2000;
            break;
    }

    subcategoria = subcategoria.toLowerCase()
    switch(subcategoria){
        case "a":
            sueldo *= 1.5;
            break;
        case "b":
            sueldo *= 2;
            break;
        case "c":
            sueldo *= 2.5; 
            break;
        default:
            alert("no se ha introducido una categoría válida");
            //si la subcategoría es errónea no habrá multiplicador, por ende se reinicia sueldo
            sueldo = 0;
    }
    
    //solo si la subcategoría es válida
    if(sueldo){
        if(sueldo >= 1500 && sueldo <= 3000){
            alert(`el sueldo es ${sueldo} y su rango es inicial`);
        }else if(sueldo >= 3001 && sueldo <= 4000){
            alert(`el sueldo es ${sueldo} y su rango es intermedio`);
        }else if(sueldo > 4000){
            alert(`el sueldo es ${sueldo} y su rango es avanzado`);
        }
    }
}else{
    alert("la categoría introducida es inválida");
}