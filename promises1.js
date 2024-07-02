function getPromice()
{
    return new Promise((resolve, reject) => {
        console.log("I am a Promise");
        reject("ooops ");
    })
}


const promise = getPromice();

promise.then(() => {
    console.log("promise fulfilled");
})

promise.catch((res) => {
    console.log("promice rejected", res);
})
