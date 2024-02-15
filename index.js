let count = 0;
let btn = document.getElementById("btn");
let display = document.getElementById("display");
btn.addEventListener("click", function(){
    count++;
    display.innerHTML=count;
})