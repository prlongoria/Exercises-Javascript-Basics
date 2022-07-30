export function isJane(name)
{
    /* La function debe devolver Jane, obligatorio el uso del comparador == */
    if(name == "Jane"){
        return name;
    } else{
        return "Is not Jane";
    }
    //return name == "Jane" ? name : "is not Jane";

}

export function compareNumbers(num1, num2)
{
    /* La function debe devolver 10, obligatorio el uso del comparador === */
    if (num1 === num2) {
        let number = parseInt(num1);
        return number;
    }
}

export function isGreaterThan10(quantity)
{
    
    if (quantity > 10){
        return quantity;
    }
}

export function isGreaterThan10AndEqualTo20(quantity)
{
    if (quantity > 10 && quantity == 20){
        return quantity;
    } 
}