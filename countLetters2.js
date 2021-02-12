/*count the number of each letter in a str and console like an
histogran: a graphical representation that organizes a group of data*/

function countLetters(str) {
    //one way to do it
    /*let histogram =  {};
    for (let i in str){
        let character = str[i];
        if (!histogram[character]){
            histogram[character] = 0;
        }
        histogram[character]++
    }
    return histogram;
}*/

    //another way to do it
    let histogram =  {};
    for (let i in str)
        histogram[str[i]] = (histogram[str[i]] || 0) +1;
    return histogram;
}

    
console.log(countLetters('Javascript'));
// { J: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }