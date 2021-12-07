function preload()
{

}

function setup()
{
canvas = createCanvas(600,400);
canvas.center();
video = createCapture(VIDEO);
video.size(450,250);
video.hide();
}

function draw()
{

stroke("purple");
strokeWeight(10);
rect(5,5,590,390);

stroke("blue");
strokeWeight(10);
rect(15,15,570,370);

stroke("skyblue");
strokeWeight(10);
rect(25,25,550,350);

stroke("green");
strokeWeight(10);
rect(35,35,530,330);

stroke("yellow");
strokeWeight(10);
rect(45,45,510,310);

stroke("orange");
strokeWeight(10);
rect(55,55,490,290);

stroke("red");
strokeWeight(10);
rect(65,65,470,270);

image(video,70,70,459,259);
}

function take_snapshot()
{
    save("Frame.png");
}