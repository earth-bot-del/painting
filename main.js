canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

var mouse_event="empty";
var last_position_x,last_position_y;
color= "blue";
width_of_line=2;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouse_event="mousedown";

}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouse_event="mouseup";

}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouse_event="mouseleave";
    
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last position of x and y coordinates = ");
        console.log("x = " + last_position_x + "y = " + last_position_y);
        ctx.moveTo(last_position_x, last_position_y);
        console.log("current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_x=current_position_of_mouse_x;
    last_position_y=current_position_of_mouse_y;

}
function cleararea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}