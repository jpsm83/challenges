//count and console the number and letters in sequency

function countSeqLetters(str) {
    let sepLetters = str.split('');
    let letters = [];
    let count = 1;

    for (let i=0; i<sepLetters.length; i++){
        if (sepLetters[i]===sepLetters[i+1]){
            count++
        } else {
            letters.push(count+sepLetters[i]);
            //letters = [...letters, value];
            count = 1;
        }
    }
    return letters.join('');
}

console.log(countSeqLetters('ffffeerttttooo'));
//4f2e1r4t3o