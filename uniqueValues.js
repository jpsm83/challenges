/*console unique values in the products array
products array has 5 objects on it, with properties and values
the company in the object has same values but we want to show it only once*/

let products = [
    {
        title: 'Iphone 8',
        company: 'Apple'
    },
    {
        title: 'Galaxy',
        company: 'Samsung'
    },
    {
        title: 'Iphone 7',
        company: 'Apple'
    },
    {
        title: 'Iphone Xs',
        company: 'Apple'
    },
    {
        title: 'HTC Phone',
        company: 'Htc'
    }
];

function getUnique(arr) {
//one way to do it
    let tempArr = arr.map(item => item.company);
    return [...new Set(tempArr)];
}
    
//another way to do it
    /*return [
        ...arr.reduce((acc, curr) => {
            acc.add(curr.company);
            return acc;
        }, new Set())
    ];
}*/

console.log(getUnique(products));