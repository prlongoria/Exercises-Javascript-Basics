import { concatenateStrings, giveOneLetter, returnAString, returnHello } from "../../src/fundamentals-ex/stringExercises";

describe('Variables can be a string', () => {
    test('should say Hello', () => {
        /* agrega la línea que falta */
        const word = "Hello";
        expect(returnHello()).toBe('Hello');
    });

    test('should return Hello World', () => {
        /* Modifica la function returnAString del archivo stringExercises */
        const result = returnAString();
        expect(result).toBe('Hello World');
    });

    test('should be return I Love JS', () => {
        /* Añade las líneas necesarias al test / Modifica la function concatenateStrings */
        //Given
       // const x = firstWord;
        //const y = secondWord;
        //When
        const result= concatenateStrings();
        expect(result).toBe('I Love JS');
    });

    test('should return letter g', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveOneLetter para que devuelva la letra g de la variable configurada */
        
        //Given
        const animal = "dog";
        const letterG= "g";
        //When
       const letter= giveOneLetter(animal);
        //Then
         expect(letter).toBe(letterG);
    });

    test.skip('should return -1', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveTheIndexOfWord */
        //Given const phrase && const wordToSearch
        //When const result = giveTheIndexOfWord()
        const result = giveTheIndexOfWord();
        //Then
        expect(result).toEqual(-1);
    });

    test.skip('should return "Give a Man a Pussy Cat" ', () => {
        /* Añade las líneas necesarias al test / Modifica la function replaceFishWords */

        expect().toBe('Give a Man a Pussy Cat');
    });

    test.skip('should return "RIDE HIM, COWBOY!"', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveAllLettersInUppercase */
        
        expect().toBe('RIDE HIM, COWBOY');
    });

    test.skip('should return "Hands Down"', () => {
        /* Añade las líneas necesarias al test y modifica la function removeWhiteSpace */

        expect().toBe('Hands Down');
    });
});