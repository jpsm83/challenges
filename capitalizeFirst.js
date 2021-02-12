 //capitalize the first letter of each word
 
 function capitalizeWord(str) {
    //one way to do it
    let words = str.split(' ').map(word => {
        return word.charAt(0).toUpperCase()+word.slice(1);
    })
    return words.join(' ');
 }

    //another way to do it
    /*let words = str.split(' ').map(word => {
    let firstLetter = word.slice(0,1);
    let restLetters = word.slice(1);
    firstLetter = firstLetter.toUpperCase();
    return `${firstLetter}${restLetters}`;
    })
    return words.join(' ');
}*/
 console.log(capitalizeWord('hello word i am here now'));
 //Hello Word I Am Here Now