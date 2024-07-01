function getData(dataId, getNextData)
{
    setTimeout(() => {
        console.log(`Data: ${dataId}`);
        if(getNextData)
            {
                getNextData();
            }
    },2000);
};


getData(1, () => {
    console.log(`fetching data 2......`);

    getData(2, () => {
        console.log(`fectching data 3......`);

        getData(3, () => {
            console.log(`fetching data 3......`);

            getData(4, () => {
                console.log(`fetching data 4......`);

                getData(4);
            })
        })
    })
})
