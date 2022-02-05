img = "";
status = "";

function modelLoaded()
{
    console.log("modelLoaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult( error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}

function preload()
{
    img = loadImage('ac.jpg');
}

function draw()
{
    image(img, 0, 0, 840, 520);
    fill("#FF0000");
    text("Air conditioner", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}

 function setup()
 {
    canvas = createCanvas(690,460);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects"
}