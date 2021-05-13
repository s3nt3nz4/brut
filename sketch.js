var song;
var amp;

function preload() {
	song = loadSound("data/Brut192.mp3");
}

function setup() {
	var canva = createCanvas(414, 736);

	canva.mousePressed(playPause);

	amp = new p5.Amplitude();
}

function draw() {
	background(0);

	var vol = amp.getLevel();
	var side1 = map(vol, 0, 0.5, 10, 414);
	var side2 = map(vol, 0, 0.5, 10, 736);

	textAlign(LEFT, TOP);
	textFont('Helvetica');
	stroke(255);
	textSize(10);

	if (song.isPlaying()) {
		text('Pause BRUT', 10, 10);
	} else {
		text('Play BRUT', 10, 10);
	}

	fill(255);
	rectMode(RADIUS);
	rect(width / 2, height / 2, side1, side2);

	if (vol > 0.3) {
		fill(0);
		rect(width / 2, height / 2, side1 / 2, side2 / 2);
	}
}

function playPause() {
	if (song.isPlaying()) {
		song.pause();
	} else {
		song.play();
	}
}