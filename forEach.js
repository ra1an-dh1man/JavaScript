const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

users.forEach((user, users) => {
    console.log(`name is ${user.name} at index ${users}`);
});




const arr = [1, 6, 98, 45, 69];

arr.forEach((elem, index, arr) => {
    console.log(`Element ${elem} at index ${index} in array ${arr}`);
});


/*
name is Alice at index 0
name is Bob at index 1
name is Charlie at index 2
Element 1 at index 0 in array 1,6,98,45,69
Element 6 at index 1 in array 1,6,98,45,69
Element 98 at index 2 in array 1,6,98,45,69
Element 45 at index 3 in array 1,6,98,45,69
Element 69 at index 4 in array 1,6,98,45,69
*/
