var song;
var amp;
var w = window.innerWidth;
var h = window.innerHeight;


function preload() {
	song = loadSound("data/Brut192.mp3");
}

function setup() {
	canva = createCanvas(w, h);

	canva.mousePressed(playPause);

	amp = new p5.Amplitude();
}

function draw() {
	background(0);

	var vol = amp.getLevel();
	var side1 = map(vol, 0, 0.5, 10, w);
	var side2 = map(vol, 0, 0.5, 10, h);

	textAlign(LEFT, TOP);
	textFont('Helvetica');
	stroke(255);
	textSize(10);

	/* 	if (song.isPlaying()) {
			text('Pause BRUT', 10, 10);
		} else {
			text('Play BRUT', 10, 10);
		} */

	fill(255);
	rectMode(RADIUS);
	rect(w / 2, h / 2, side1, side2);

	if (vol > 0.3) {
		fill(0);
		rect(w / 2, h / 2, side1 / 2, side2 / 2);
	}
}

function playPause() {
	if (song.isPlaying()) {
		song.pause();
	} else {
		song.play();
	}
}

window.onresize = function () {
	// assigns new values for width and height variables
	w = window.innerWidth;
	h = window.innerHeight;
	canvas.size(w, h);
<<<<<<< HEAD
}
=======
}
>>>>>>> 91f33e8a4724bd48ca9f1bac6666b1c6da8217a3
