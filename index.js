function playstation() {
    //write to log for debugging
    console.log("playstation() started")
    mySound = new sound("us-lab-background-1.mp3");
    console.log("plaing us-lab-background-1 using the sound() function")
    mySound.play();
}
function sound(srcFile) {
    //create a instance of the audio class
    this.sound = document.createElement("audio");
    // sets the source for the src file
    this.sound.src = srcFile;
    // loads everything needed for audio
    this.sound.setAttribute("preload", "audio");
    // sets no controls to the screen
    this.sound.setAttribute("controls", "none");

    document.body.appendChild(this.sound);
    //play sound
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}
function startFun() {
    //debuggin
    console.log("startFun() started");
    // turn off button
    document.getElementById("startButton").disabled = true;
    // trun on button
    document.getElementById("stopButton").disabled = false;
    // start
    document.getElementById("marquee").start();

}


function stopFun() {
    //debuggin
    console.log("stopFun() stopped");
    // turn off button
    document.getElementById("stopButton").disabled = true;
    // trun on button
    document.getElementById("startButton").disabled = false;
    // start
    document.getElementById("marquee").stop();

}
