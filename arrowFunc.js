const res = (str) => {
    let count = 0;
    
    for(let i = 0 ; i < str.length; i++)
        {
            let ch = str.charAt(i).toLowerCase();
            if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
                count++;
        }

        return count;
    }

console.log(res("aEiOu"));
