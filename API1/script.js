const factPara = document.querySelector(".fact");

const btn = document.querySelector(".btn");

const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts =async () => {

    btn.innerText = "fetching the fact"
    btn.disabled = true;

    console.log("fetching data...");

    let response = await fetch(URL);

    console.log(response);

    let res = await response.json();

    factPara.innerText = res[0].text;

    console.log(res[0].text);

    btn.innerHTML = "done";
    btn.disabled = false;
};


btn.addEventListener("click", getFacts);
