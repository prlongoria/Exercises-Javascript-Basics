/* 
## Counting Sheeps

Los "true" son ovejas, los "false" son lobos ... Cuantas ovejas hay?

*/

export function countSheeps(list)
{
    //Aunque los valores de la matriz son valores booleanos, también es importante verificar otros valores falsos como nully undefined.
    //Para esta función, usaremos el filtermétodo. Comenzamos creando una variable constante llamada present. Esta variable contendrá la matriz que contiene todos los truevalores de arrayOfSheep.
    let sheeps = list.filter(element => element == true);
    //Al devolver solo sheep, JavaScript utiliza la conversión de tipos para evaluar cada valor como booleano. Todo lo que se considere un valor falso no se incluirá en la presentmatriz.
    //Ahora que tenemos nuestra matriz de truevalores, todo lo que tenemos que hacer es devolver la longitud de la matriz. Ese número representa el número de ovejas presentes.
    //return "There are " + sheeps.length + " sheep in total";

    let wolves = list.filter(element => element == false);
    return 'UPS!!! Wolfs eaten Sheeps';
}