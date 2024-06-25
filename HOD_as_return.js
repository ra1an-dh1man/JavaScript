//function that returns a funciton
function greeter(greeting)
{
    return function(name)
    {
        console.log(`${greeting}, ${name}`);
    }
}

const sayHello = greeter('Hello');
sayHello('Alice');


//currying technique
function add(x) {
    return function(y)
    {
        return x + y;
    }
}


const add5 = add(5);

console.log(add5(6));
