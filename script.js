var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); //the tool we need to paint on to the canvas

var x=0, y=0;

ctx.beginPath();
ctx.arc(50,50,30,0,Math.PI*2,false); // takes the following values respectively:
// x coordinate of the center, y coordinate of the center, radius, start angle, end angle, direction (false for negative, true for positive)
ctx.fillStyle = "yellow"; // stores the color for the circle
ctx.fill();
ctx.endPath();
