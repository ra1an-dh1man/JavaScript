//html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="script.css">
</head>
<body>
    <p class="para">Hello dosto</p>
    <script src="Demo.js"></script>
</body>
</html>


//css
.para
{
    color: aqua;
    background-color: black;
    border: 5px solid black;
}

.newPara
{
    /* color: tomato; */
    /* background-color: blueviolet; */
    border-radius: 20px;
}

//JS
let np = document.querySelector(".para");
// np.setAttribute("class", "newPara")   //setAttribute can change the attribute or set the attribute and is not limited to class.
np.classList.add("newPara")    //classList can be used in adding an attribute to an element which already have an attribute and it is limited to class.
