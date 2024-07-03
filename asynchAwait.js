function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data is:", dataId);
            resolve("success");

        }, 2000)
    })
}

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
}

//IIFE function 
(async function () {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
})();
