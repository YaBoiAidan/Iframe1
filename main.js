nose_x = 0;
nose_y = 0;

function preload()
{
clown_nose = loadImage("https://i.postimg.cc/3RV0QYcR/pngtree-clown-glasses-decorative-vector-transparent-png-png-image-4542776-removebg-preview.png");
}

function setup()
{
canvas = createCanvas(400,400);
canvas.center();
video = createCapture(VIDEO);
video.size(400,400);
video.hide();

posenet = ml5.poseNet(video,modelloaded);
posenet.on('pose',gotposes);
}

function modelloaded()
{
    console.log("Posenet is initialized");
}

function draw()
{
image(video,0,0,400,400);
fill("red");
stroke("red");
circle(nose_x,nose_y,30);
image(clown_nose,nose_x - 100,nose_y - 100,200,200)
}

function take_snapshot()
{
save("myfilterimage.png")
}

function gotposes(results)
{
    if (results.length>0)
    {
    console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
    console.log("nose_x ="+ nose_x);
    console.log("nose_y ="+ nose_y);
    }
}
