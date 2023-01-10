/*every:Devuelve verdadero si todos los elementos del vector cumplen  con la condicion .
Si un elemento no  la cumple , devuelve falso
*/

console.log("Ejemplo every")
const numeros=[11,2,33,45,1,110,12,55,17]
const numero=[5,22,15,20,25,30]

//verificar si el array tiene elementos positivos 
const positivos= numeros.every(elemento=>{
    return elemento>0;
})

console.log("El array tiene solo elementos positivos ?",positivos)

//Diseñe la funcion que determine si los elementos de un vector son multiplos de 5


/*const multiplo5= function(vector)
{
return vector.every(elemento=> elemento%5==0)
}
*/
const mult5=(num)=>{
    return num.every(elemento=>{
        return elemento%5==0;
    } )
}

console.log("Multiplo de 5:",mult5(numero))
console.log(numero)

