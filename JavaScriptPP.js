var MyCanvas = document.getElementById("canvas");
var Context= MyCanvas.getContext("2d");

var width=MyCanvas.width;
var height=MyCanvas.height;

var border = 20;

var radiusBall=6;
//Game Speed
var gameSpeed = 2;
//ball speed
var xSpeedBall =1;
var ySpeedBall=1;

//ball Direction
var xDirBall=-1;
var yDirball=-1;
var xpospad=width-20;
var ypospad=height/2;
var padw=12;
var padh=60;

//direction of the pad
var padDir=0;

//bal position
var xBallPosicion=200;
var yBallPosicion=300;
var padspeed = 2;
function draw(){
    Context.clearRect(0,0,width,height);
    Context.fillStyle="green";
    Context.fillRect(0,0,width,height);
    //painting the Top Border;
    Context.fillStyle="Blue";
    Context.fillRect(0,0,width,border);
    //painting the bot border;
    Context.fillStyle="Blue";
    Context.fillRect(0,(height)-(border),width,border);
    Context.fillStyle="Blue";
    Context.fillRect(0,0,border,height);



    //Painting the ball
    Context.fillStyle="black";
    Context.beginPath();
    Context.arc(xBallPosicion,yBallPosicion,radiusBall,0,Math.PI*2,false);
    Context.fill();
    Context.closePath();

    //Change Ball position
    xBallPosicion=xBallPosicion+xSpeedBall*xDirBall;
    yBallPosicion=yBallPosicion+ySpeedBall*yDirball;

    if(xBallPosicion<= border+radiusBall){
        xDirBall=1;
    }
    if(yBallPosicion<= border+radiusBall){
        yDirball=1;
    }
    if(yBallPosicion>= height-border-radiusBall){
        yDirball=-1;
    }
    if(yBallPosicion>=ypospad&&yBallPosicion<=ypospad+padh&&xBallPosicion>=xpospad && xBallPosicion<=xpospad+padw){
        xDirBall=-1;
    }
    //drae the pad
    Context.fillStyle="Blue";
    Context.fillRect(xpospad,ypospad,padw,padh);

    ypospad = ypospad+padspeed*padDir;

}

document.onkeydown = function(e){
    if(e.keyCode == 38){
        padDir =-1;
    }
    if(e.keyCode == 40){
        padDir =1;   
    }
}
document.onkeyup=function(e){
    if(e.keyCode==38|| e.keyCode==40){
        padDir=0;
    }
}

setInterval(draw,gameSpeed);
