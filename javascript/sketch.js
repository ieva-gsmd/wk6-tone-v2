
//define the variables
let synth, playing, now, cnv, note;


function setup() {
  //put canvas into a variable
  cnv = createCanvas(windowWidth, windowHeight);

  //trigger sound once mouse is pressed. SOUND WILL NOT WORK IF IT IS NOT TRIGGERED!
  cnv.mousePressed(playSynth);

  //initialise a new synth
  synth = new Tone.Synth({
    type: "square",
    
  }).toDestination();

  //initialise time right now
  now = Tone.now();

}

function draw() {
//this bit is only for stuff that has to be updated constantly. that is pitch.

  background(220);
  
  //map note frequency to mouse height
  note = map(mouseY, 0, height, 20, 1000);

  let cSize = map(mouseY, 0, height, 10, 100);
  

  //if playing, then set the note frequency to above
  if (playing) {
    synth.setNote(note, 0.1);
    circle(mouseX, mouseY, cSize);
  }
}

function playSynth() {
  // synth.triggerAttack(round(random(30, 1000)), now+0.5, 0.2);

  //start synth attack envelope
  synth.triggerAttack(note, now+0.5, 0.2);
  playing = true;

}

function mouseReleased() {
  //start synth release envelope
  synth.triggerRelease("+0.2")
  play = false;
}

