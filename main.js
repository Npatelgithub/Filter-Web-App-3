noseX=0;
noseY=0;

function preload(){
Clown_Nose = loadImage('https://th.bing.com/th/id/OIP.GcF3cxvPiXViMg6FIhduUQHaEc?w=300&h=180&c=7&o=5&pid=1.7');
}

function setup(){
    canvas =  createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0,0 ,300,300);
    image(Clown_Nose, noseX, noseY, 30,30);
    
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log('Pose Net Is Loaded!' );
}

function gotPoses(results){
if(results.length >0){
    console.log(results);
noseX = results[0].pose.nose.x+2;
noseY = results[0].pose.nose.y+2;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
}


}