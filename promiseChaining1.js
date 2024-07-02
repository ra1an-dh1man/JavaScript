function asyncFunc1()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success")
        }, 5000)
    })
}

function asyncFunc2()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success")
        }, 1000)
    })
}

function asyncFunc3()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data3");
            resolve("success")
        }, 5000)
    })
}

console.log("fethich data 1....");
asyncFunc1().then(() => {
    console.log("fetching data 2....");
    asyncFunc2().then(() => {
        console.log("fetching data 3....");
        asyncFunc3().then(() => {});
    })
})
