var MyCanvas = document.getElementById("MyCanvas");
var Context= MyCanvas.getContext("2d");

var width=MyCanvas.width;
var height=MyCanvas.height;

var border = 20;

Function draw(){
	Context.clearRect(0,0,width,height);
	Context.fillStyle="red";
	Context.fillRect(0,0,width,height);
}
