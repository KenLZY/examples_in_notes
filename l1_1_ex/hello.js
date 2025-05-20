var msg = "hello";
/* console.log(msg);
 alert(msg); */
// document.write(msg);

// function definition in JavaScript
function run() {
    var p_elem = document.getElementById("msg1");
    p_elem.innerText = msg;

}
// the function run is called when the DOM is loaded
document.addEventListener( "DOMContentLoaded", run);
