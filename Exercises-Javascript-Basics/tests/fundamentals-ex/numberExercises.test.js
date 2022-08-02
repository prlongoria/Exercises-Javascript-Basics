import { checkIfIsInteger, checkIfNumberIsInfinite, checkIfNumbIsDivisibleByThree, checkVariable, divide, multiply, subtract, sum } from "../../src/fundamentals-ex/numberExercises";

describe ('Numbers', () => {
    test.skip ('should be 1', () => {
        /* Completa el test. No necesitas llamar a ninguna funcion externa*/
        let number =1;
        let result = number;
        expect(result).toBe(1);
    });

    test.skip ('should return "number"', () => {
        /* Añade las líneas necesarias al test y completa la function checkVariable */
        let result = checkVariable();
        expect(result).toBe("number");
    });

    test.skip ('should return false if is not an integer', () => {
        /* Añade las líneas necesarias al test y completa la function checkIfIsInteger */
        let num = 88.5;
        let result = checkIfIsInteger (num);
        expect(result).toBe(false);
    });

    test.skip ('should return "Number is Infinite"', () => {
        /* Añade las líneas necesarias al test y modifica la function checkIfNumberIsInfinite */
        const number = 5/0 ;
        let result = checkIfNumberIsInfinite(number);

        expect(result).toBe("Number is Infinite");
    });

});

describe('Arithmetic operators', () => {
    test.skip('should return 25', () => {
        /* Añade las líneas necesarias al test / Completa la function sum */
        const numb1 = 10;
        const num2 = 15;
        const result = sum(numb1, num2);

        expect(result).toBe(25);
    });

    test.skip('should return 30 after subtract', () => {
        /* Añade las líneas necesarias al test / Modifica la function subtract */
        const numb1 = 55;
        const numb2 = 25;
        const result = subtract(numb1, numb2);
        expect(result).toBe(30);
    });

    test.skip('should return 15 after multiply', () => {
        /* Añade las líneas necesarias al test / Completa la function multiplication */
        const numb1 = 3;
        const numb2 = 5;
        const result = multiply(numb1, numb2);
        expect(result).toBe(15);
    });

    test.skip('should return 25 after divide', () => {
        /* Añade las líneas necesarias al test / Modifica la function divide */
        const numbOne = 50;
        const numbTwo = 2;
        const result = divide(numbOne, numbTwo);
        expect(result).toBe(25);
    });

    test.skip('should return 0 after use modulus operator', () => {
        /* Añade las líneas necesarias al test / Completa la function checkIfNumbIsDivisibleByThree */
        const numb1 = 3;
        const result = checkIfNumbIsDivisibleByThree(numb1);
        expect(result).toBe('Number is divisible by 3');
    });
});