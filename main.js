bones = "Bones(PagleSongs).mp3";
natural = "Imagine-Dragons-Natural-Official-Music-Video.mp3";

function preload() {
    loadSound("Bones(PaglaSongs).mp3");
    loadSound("Imagine-Dragons-Natural-Official-Music-Video.mp3");
}

function setup() {
    canvas = createCanvas(450, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 450, 350);
}