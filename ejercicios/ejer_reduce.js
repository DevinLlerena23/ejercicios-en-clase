/*
Reduce:
El metodo reduce() ejecuta una funcion de devolucion de llamada "reductor" proporcionada
por el usuario en cada elemnto de la matriz , en orden , pasando el valor de retorno del calculo en el elemento
anterior .El resultado final de ejecutar el reductor en  todos los elementos de la matriz es un valor unico
*/

const vector=[1,4,10,20,33,45,4,2,15]
const valInicial=0
const sumatoria=vector.reduce((ac,va)=>{
    return ac+va
},valInicial)

console.log("La sumatoria del vector es: ",sumatoria)
//Diseñe la funcion que devuel el producto de los elementos de un vector

/*const producto = function(vector){
    return vector.reduce( (ac, va) => {
        return ac*va;
    })
}

console.log(producto([1,2,3]));
console.log(producto([4,5,6]));
*/
/*
foreach:recorre todos los elementos del vector
*/

vector.forEach((num,index)=>{
    console.log("elemento: ",num,index)
})
//Se tiene una cadena de carateres. se pide diseñar la funcion que 
//devuelva la cadena sin consonantes(devuelve solo vocales)
//Ejemplo:"Hola Esmeraldas"
//resultado esperado: "oa Eeaa"
//Utilice filter

const cadena=function(ca)
{
    return ca.split("")
    
}

console.log(cadena("Hola Esmeraldas"))

//Determine si todos los elemtos de la siguiente matriz son positivos

const matrizNumeros=[[1,2,3,4],[4,5,6,7],[7,8,9,10]]
console.log(matrizNumeros)
matrizNumeros.map(matriz=>{
    return matriz
})