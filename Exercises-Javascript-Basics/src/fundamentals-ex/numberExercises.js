
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

export function subtract(number1, number2)
{
    /* Completa la function utilizando el operador de sustracción - */
    return (number1 - number2);
}

export function multiply(number1, number2)
{
    /* Completa la function utilizando el operador de sustracción - */
    return (number1*number2);

}

export function divide(number1, number2)
{
    /* Completa la function utilizando el operador de división / */
    return (number1/number2);
}

export function checkIfNumbIsDivisibleByThree(number)
{
    /* Completa la function utilizando el operador modulus y utiliza el conditional if() */
    if (number%3 === 0) {
        return "Number is divisible by 3";
    }
    
}