
export function checkVariable(number)
{
  
    let num = 5;
  let numString= num.toString();
  let phrase = numString.replace(num, "number");
  return phrase;

    
}

export function checkIfIsInteger(num)
{
    //return Number.isInteger (num);
    if (Number.isInteger(num)) {
        return true;
    }
        return false;
    
}

export function checkIfNumberIsInfinite(number)
{
    /* Tendrás que utilizar un condicional / if ... */
   
    if (Number.isFinite(number)){
        return "Number is finite";
    }
         return "Number is Infinite";
    
    
}

export function sum(number1, number2)
{
    /* Completa la function utilizando el operador de suma + */
    return (number1 + number2);
}

export function subtract()
{
    /* Completa la function utilizando el operador de sustracción - */
    
}

export function multiply()
{
    /* Completa la function utilizando el operador de sustracción - */
    

}

export function divide()
{
    /* Completa la function utilizando el operador de división / */

}

export function checkIfNumbIsDivisibleByThree()
{
    /* Completa la function utilizando el operador modulus y utiliza el conditional if() */
    
    
}