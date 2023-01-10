/*
map:
El metodo map() crea una matriz con los resultados de llamar a una funcion 
proporcionada en cada elemento de la matriz de llamada
*/


//Se pide duplicar cada elemento de array numeros.
//Este resultado debe almacenarse en un nuevo array

const numeros=[2,3,10,22,5,7,11,1]
const numero=[5,6,9,8,7,2,5,6,4,7]

const numerosDuplicados=numeros.map(elemento=>{
    return elemento*2;
})
console.log("Vector original: ",numeros)
console.log("Nuevo vector : ",numerosDuplicados)

//Diseñe la funcion que devuelve cada elemento del vector elevado al cuadrado
//Haga 2 llamadas a la funcion

const cuadrado=(vector=>{
    return vector.map(item=>item*item)
})

console.log(cuadrado([2,6,8]))
console.log(cuadrado(numero))