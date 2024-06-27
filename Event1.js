let btn = document.createElement("button");
btn.innerHTML = "<p>click me</p>"
btn.style.color = "purple";
btn.style.backgroundColor = "tomato"
btn.style.borderColor = "pink"
btn.style.borderRadius = "5px"
btn.style.width = "100px"

// btn.onclick = () => {
//     document.write("you clicked me");
// }

// btn.ondblclick = () => {
//     document.write("you clicked me twice")
// }

btn.onmouseover = () => {
    document.write("you touched me")
}

document.querySelector("body").prepend(btn);
