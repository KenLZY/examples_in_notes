function handleButton1Click() {
    console.log("handleBUtton1Click() is being run!");
    var textbox1 = document.getElementById("textbox1");
    var span1 = document.getElementById("span1");
    span1.innerHTML = textbox1.value;
}

function run() {
    console.log("run() is being run!");
    var button1 = document.getElementById("button1");
    button1.addEventListener("click", handleButton1Click); 
}

document.addEventListener( "DOMContentLoaded", run);
