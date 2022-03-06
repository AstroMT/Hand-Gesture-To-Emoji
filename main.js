Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function photo() {
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML = '<img id="img_snapshot" src=" ' + data_uri + ' "/>';
    });
}

console.log("ml5 version: ", ml5.version);

function predict_gesture() {}

classifier = ml5.imageClassifier("teachablemachine.withgoogle.com/models/r8irsOja2/model.json", modelLoaded);

function modelLoaded() {
    console.log("Your ml5 model is loaded!")
}

var prediction1 = "";
var prediction2 = "";

function speak () {
    var synth = window.speechSynthesis;
    var speak_data1 = "The first prediction is " + prediction1;
    var speak_data2 = "The second prediction is " + prediction2;
    var UtterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(UtterThis);
}
