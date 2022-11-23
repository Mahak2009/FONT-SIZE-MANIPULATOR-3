rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(480, 480);
    canvas.position(560, 85);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model is Loaded Correctly");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Difference: " + difference);
        console.log("Right Wrist X : " + rightWristX + ", Left Wrist X : " + leftWristX);
    }
}

function draw()
{
    background("#b5e9bf");
    textSize(difference);
    text('Mahak', 75, 250);
    document.getElementById("answer").innerHTML = "Font Size of the Text is : " + difference;
}