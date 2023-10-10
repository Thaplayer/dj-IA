leftwristY=0;
rightwristY=0;
leftwristX=0;
rightwristX=0;
scoreleftwrist=0;
scorerightwrist=0;
cancion="";
function preload() {
cancion=loadSound("music.mp3");
}
function setup () {    
canvas=createCanvas(600,500);
canvas.center();
 video=createCapture(VIDEO);
 video.hide();
posenet=ml5.poseNet(video, modelloaded);
posenet.on('pose',gotposes);
}
function modelloaded() {
console.log ('poseNet se esta inicializando');    
}
function gotposes (results){
if(results.length>0){
console.log(results);
leftwristY=results[0].pose.leftWrist.y;
leftwristX=results[0].pose.leftWrist.x;
scoreleftwrist=results[0].pose.keypoints[9].score;
scorerightwrist=results[0].pose.keypoints[10].score;
rightwristX=results[0].pose.rightWrist.x;
rightwristY=results[0].pose.rightWrist.y;
console.log("muñeca izquierda X= "+leftwristX+ " muñecas izquierdaY"+ leftwristY );
console.log("muñeca derecha X= "+rightwristX+ " muñecas derechaY"+ rightwristY );    
}
}
function draw(){
image(video,0,0,600,500);
fill("#FF0000");
stroke("#FF0000");
if(scoreleftwrist > 0.2){
circle(leftwristX,leftwristY,20 );
innumberleftwristy=Number(leftwristY);
new_leftwristy=floor(innumberleftwristy*2);
leftwristY_divide_1000=new_leftwristy/1000;
document.getElementById("volume").innerHTML="Volume= "+leftwristY_divide_1000;
cancion.setVolume(leftwristY_divide_1000);


} 
if(scorerightwrist>0.2){
circle(rightwristX,rightwristY,20 ); 
if(rightwristY>0 && rightwristY<=100){
document.getElementById("speed").innerHTML="Speed = 0.5X";
cancion.rate(0.5);    
}
else if(rightwristY>100 && rightwristY<=200){
    document.getElementById("speed").innerHTML="Speed = 1X";
    cancion.rate(1);    
    } 
    else if(rightwristY>200 && rightwristY<=300){
        document.getElementById("speed").innerHTML="Speed = 1.5X";
        cancion.rate(1.5);    
        }
        else if(rightwristY>300 && rightwristY<=400){
            document.getElementById("speed").innerHTML="Speed = 2X";
            cancion.rate(2);    
            }
            else if(rightwristY>400){
                document.getElementById("speed").innerHTML="Speed = 2.5X";
                cancion.rate(2.5);    
                }                                               
}   
}
function play(){
cancion.play();
cancion.setVolume(1);
cancion.rate(1);    
}