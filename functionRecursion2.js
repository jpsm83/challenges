/*usefull example whem recursion functions
cames in hand insted of loops*/

const tree = {
    name: 'Jhon',
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                { name: 'Kyle', children: [] },
                { name: 'Sophia', children: [] }
            ]
        }
    ]
}

function printChildrenRecursion(t){
    if (t.children.length === 0){
        return
    }
    t.children.forEach(child => {
        console.log(child.name)
        printChildrenRecursion(child)
    })
}

printChildrenRecursion(tree); //Jim  Zoe  Kyle  Sophia