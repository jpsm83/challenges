// There is a queue for the self-checkout tills at the supermarket.
// Your task is write a function to calculate the total time required for all the customers to check out!

// customers: an array of positive integers representing the queue. Each integer represents a customer,
// and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.

// The function should return an integer, the total time required for everyone to be served.

// Examples
// queueTime([5,3,4], 1) - should return 12 because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2) - should return 10 because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

// queueTime([2,3,10], 2) - should return 12

// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// You should assume that all the test input will be valid, as specified above.

function queueTime(customers, n) {
    let tillWaitingTime = customers.slice(0,n)
    if(n === 1){
        return customers.reduce((acc, crr) => acc + crr, 0)
    } else {
        for(let i=n; i<customers.length; i++){
            tillWaitingTime.sort((a, b) => a - b)[0] += customers[i]
        }
    }
    return tillWaitingTime.sort((a, b) => a - b)[tillWaitingTime.length -1]
}

console.log(queueTime([5,3,4], 1)) // 12
console.log(queueTime([10,2,3,3], 2)) // 10
console.log(queueTime([2,3,10], 2)) // 12
console.log(queueTime([10,2,5,11,3,3], 3)) // 13