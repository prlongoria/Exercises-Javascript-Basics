export function countdown()
{
    /* Completa */
    let count = 10;
    while (count > 0) {
        count --;   
    }
    if (count === 0) {
    return 'GO';
    }
}

export function createNumberList()
{
    let arrNumbers = [];
    let element = 0;
    do {
        element = element + 1;
        let stringElement = element.toString();
        arrNumbers.push(stringElement);
        
    }
    while (element < 10);
    
    return arrNumbers;
}


export function makePizza()
 {
    /* Completa la function utilizando el bucle for*/
    let pizza = {};
    let ingredients = ['masa','tomate', 'mozzarella','cheddar','gorgonzola','parmesano'];
    for (let index=0 ; index<ingredients.length; index++){
        // let ingredient = "ingredient" + (index+1);
        // pizza.ingredient = ingredients[index];
         const ingredient = {
           ingredient  : ingredients[index]
        }
        pizza = Object.assign(ingredient);
           
    }
    
    return pizza;
 }

export function addSpanishInternationalPrefixes()
{
    /* Añade el prefijo internacional de españa a los números de teléfonos del array (+34-). Utiliza el bucle foreach */
    let phoneNumberList = ['054060719','029830776','159949736','663170151','513407584'];
    
    phoneNumberList.forEach (element => {return ('+34-' + element) })
}