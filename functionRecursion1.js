/*this is example of recursion function: that is a function
that calls itself inside the function, simillar to loops*/

/*function countDown(n){
    for (let i=n; i>0; i--){
        console.log(i);
    }
    console.log('horray');
}
countDown(5); //1  2  3  4  5  horray*/

//same function in a recursion way
function countDownRecursion(n){
    if (n<=0){
        console.log('horray');
        return
    }
    console.log(n);
    countDownRecursion(n-1);
}
countDownRecursion(5); //1  2  3  4  5  horray