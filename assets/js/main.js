let banana = 15;
let frutilla = 100;
let kiwi = 2;
let pera = 6;

// ---------------- Explicación ----------------------------
//Algoritmo: "te calcula la cantidad que quedará en la logistíca del almacén"

/*
1) Elegir la fruta (tiene que ser unas de las que aparece, las condciones son aproximadas)
2) Si se cumple la condicion, ingresar la cantidad que deseas comprar
3) Calcular según la disponibilidad cuántas quedarán. 
*/

alert("Las frutas disponibles son: Banana, Pera, Frutilla, Kiwi");
let fruit = prompt('¿Cuál fruta deseas comprar? (Banana, Pera, Frutilla, Kiwi) --> Elije 1'); 

/* ----------------------- Empiezan las condiciones ----------------------- */
if(fruit === "Banana" || fruit === "Pera" || fruit === "Kiwi" || fruit === "Frutilla"){
    alert("EXCELENTE! La fruta seleccionada es la correcta");
    let quantityFruit = prompt('¿Cuántas frutas deseas retirar?');
    let quantityFruitParsed = parseInt(quantityFruit);
    if(isNaN(quantityFruitParsed)) {
        alert("Me quisiste trollear y no agregaste un número? JEJEJE 😂. Intenta con un número, rey!");
    } else {
        if(fruit==="Banana"){
            let bananaQuantity = banana - quantityFruitParsed;
            if(bananaQuantity <=0) {
                alert(`Solo hay en stock ${banana} bananas. Vuelve a intentarlo!!!`)
            } else {
                alert(`La cantidad de bananas que te quedarán en stock si retiras esta cantidad será: ${bananaQuantity} bananas`);
            }
        } else if (fruit === "Pera"){
            let peraQuantity = pera - quantityFruitParsed;
            if(peraQuantity <=0) {
                alert(`Solo hay en stock ${pera} peras. Vuelve a intentarlo!!!`)
            } else {
                alert(`La cantidad de peras que te quedarán en stock si retiras esta cantidad será: ${peraQuantity} peras`);
            }
        } else if (fruit === "Frutilla"){
            let frutillaQuantity = frutilla - quantityFruitParsed;
            if(frutillaQuantity <=0) {
                alert(`Solo hay en stock ${frutilla} frutillas. Vuelve a intentarlo!!!`)
            } else {
                alert(`La cantidad de frutillas que te quedarán  en stock si retiras esta cantidad será: ${frutillaQuantity} frutillas`);
            }
        } else if (fruit === "Kiwi"){
            let kiwiQuantity = kiwi - quantityFruitParsed;
            if(kiwiQuantity <=0) {
                alert(`Solo hay en stock ${kiwi} kiwis. Vuelve a intentarlo!!!`)
            } else {
                alert(`La cantidad de kiwis que te quedarán en stock si retiras esta cantidad será: ${kiwiQuantity} kiwis`);
            }
        } 
    }
} else {
    alert("Ingresaste una fruta incorrecta. Vuelve a intentarlo!!!");
};