const button_move = document.getElementById("button_move");
const button_click = document.getElementById("button_move");
const click_count = document.getElementById("click_count");
const button_unhide = document.getElementById("button_move");
const button_submit = document.getElementById("button_submit");
const text = document.getElementById("count");
let count = 0;

button_move.addEventListener("click", function() 
{
    const parentWidth = button_move.parentElement.offsetWidth;
    const parentHeight = button_move.parentElement.offsetHeight;
    const buttonWidth = button_move.offsetWidth;
    const buttonHeight = button_move.offsetHeight;
    const randomLeft = Math.floor(Math.random() * (parentWidth - buttonWidth));
    const randomTop = Math.floor(Math.random() * (parentHeight - buttonHeight));
    button_move.style.left = randomLeft + "px";
    button_move.style.top = randomTop + "px";
});

button_click.addEventListener("click", function() 
{
    count++;
    click_count.textContent = count;
});

button_unhide.addEventListener("click", function() 
{
    if (count == 1) text.classList.toggle("hidden");
});

button_submit.addEventListener("click", function() 
{
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
});