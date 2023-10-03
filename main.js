leftwristY=0;
leftwristX=0;
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
rightwristX=results[0].pose.rightWrist.x;
rightwristY=results[0].pose.rightWrist.y;
console.log("muñeca izquierda X= "+leftwristX+ " muñecas izquierdaY"+ leftwristY );
console.log("muñeca derecha X= "+rightwristX+ " muñecas derechaY"+ rightwristY );    
}
}
function draw(){
image(video,0,0,600,500);    
}