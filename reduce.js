const arr = [11, 112, 33, 4]


const reslt = arr.reduce((res, curr) => {
    if(res > curr)
        return res;
    else
        return curr;
})

console.log(reslt);
