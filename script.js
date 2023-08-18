var button = document.getElementById("button");
button.setAttribute("type","button");
button.innerHTML = 'Submit';
button.addEventListener("click", foo);
document.body.append(button);

function foo (){
    confirm("developer");
}