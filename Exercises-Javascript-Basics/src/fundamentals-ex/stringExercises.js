export function returnHello()
{
    return"Hello";
}

export function returnAString()
{
   return ("Hello World");
    /* Completa la function */
    
    
}

export function concatenateStrings()
{
    /* Completa la function */
    const firstWord = 'I';
    const secondWord = 'Love';
    return firstWord + " " + secondWord + " " + 'JS';
    
}

export function giveOneLetter(animal)
{
    /* Completa la function */
    //const dog = 'dog';
    return animal.slice(-1);
    //return animal.search ('g');
}

export function giveTheIndexOfWord()
{
    const wordToSearch = 'Butterfly';
    const phrase = "Once upon a time!!!";
    return phrase.indexOf(wordToSearch);
}

export function replaceFishWords()
{
    let words = 'Pussy Cat';
    let phrase = 'Give a Man a Fish';
    return phrase.replace('Fish', words);
}

export function giveAllLettersInUppercase()
{
    let phrase = 'Ride Him, Cowboy!';
    let phrase2 = phrase.substring(0, phrase.length-1);
    return phrase2.toUpperCase();
}

export function removeWhiteSpaces()
{
    let phrase = '    Hands Down    ';
    return phrase.trim();
}