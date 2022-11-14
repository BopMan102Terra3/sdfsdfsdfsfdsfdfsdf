function bedroom()
{
    window.location = "bed.html";
}

function back()
{
    window.location = "index.html";
}

function preload()
{
    img = loadImage("bed.JPG")
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    noFill();
    stroke("#FF0000");
    text("Bed", 45, 75);
    rect(30, 60, 600, 350);
    text("Headphones", 230, 200);
    rect(230, 200, 100, 100);
}