import { countdown, createNumberList } from "../../src/fundamentals-ex/loopsExercises";

describe('Loops', () => {
    test('while loop, should return GO when count arrive to 0', () => {
        /* Utilizando el bucle while y modifica la function de cuenta atrás. Caution: ten cuidado de no generar un bucle infinito */
        
        const result = countdown();
        expect(result).toEqual('GO');
    });

    test('do ... while', () => {
        /* Con el bucle do..while crea un array de 10 números. Modifica la function createNumberList */
        const result = createNumberList();
        expect(result).toEqual('1'); // comprueba que el primer número sea el uno
        expect(result).toContain('10'); // comprueba que el array contiene el número 10
        expect(result).toHaveLength(10); // comprueba que la longitud del array es de 10
    });

    test.skip('for loop', () => {
        /* Con el bucle for crea una pizza de 4 quesos, creando un objeto. Ingredientes: masa, tomate, mozzarella, cheddar, gorgonzola, parmesano. Modifica la function makePizza */
        let pizza = {
            ingredient1: 'masa',
            ingredient2: 'tomate',
            ingredient3: 'mozzarella',
            ingredient4: 'cheddar',
            ingredient5: 'gorgonzola',
            ingredient6: 'parmesano'
        }

        expect().toEqual(pizza);
    });

    test.skip('foreach loop', () => {
        /* Completa el test y modifica la function addSpanishInternationalPrefixes */
        let phoneNumberList = ['+34-054060719','+34-029830776','+34-159949736','+34-663170151','+34-513407584'];

        expect().toContain('+34-159949736');
        expect().toEqual(expect.arrayContaining(phoneNumberList));;
        
    });
});