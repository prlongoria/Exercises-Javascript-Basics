/* 
## Array Plus Array 
Obtener la suma de dos matrices / arrays ... en realidad, la suma de todos sus elementos

PD: Cada matriz incluye solo números enteros. La salida también es un número.
*/


export function arrSum(arr1, arr2)
{
    // recorro el arr1 y voy sumando los valores del arr2
    let arrToSumElements = arr1.map((el, index)=> el + arr2[index] || el);
    let totalArray = arrToSumElements.reduce((a, b) => a + b, 0);
    return totalArray;
    
}