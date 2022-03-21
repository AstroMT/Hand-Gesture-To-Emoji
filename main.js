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

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/r8irsOja2/model.json", modelLoaded);

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

function check() {
    taken_image = document.getElementById("img_snapshot");
    classifier.classify(taken_image, gotResult);
}


function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name1").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
        if (results[0].label == 'Thumbs-up') {
            document.getElementById("update_emoji1").innerHTML = "&#128077";
        }
        if (results[0].label == 'Perfect') {
            document.getElementById("update_emoji1").innerHTML = "&#128076";
        }
        if (results[0].label == 'Thumbs-down') {
            document.getElementById("update_emoji1").innerHTML = "&#128078";
        }
        if (results[0].label == 'High-five') {
            document.getElementById("update_emoji1").innerHTML = "&#128400";
        }
        if (results[0].label == 'Point up') {
            document.getElementById("update_emoji1").innerHTML = "&#128070";
        }
        if (results[0].label == 'Point down') {
            document.getElementById("update_emoji1").innerHTML = "&#128071";
        }
        if (results[0].label == 'Point sideways') {
            document.getElementById("update_emoji1").innerHTML = "&#128072" + "&#128073";
        }

        if (results[1].label == 'Thumbs-up') {
            document.getElementById("update_emoji2").innerHTML = "&#128077";
        }
        if (results[1].label == 'Perfect') {
            document.getElementById("update_emoji2").innerHTML = "&#128076";
        }
        if (results[1].label == 'Thumbs-down') {
            document.getElementById("update_emoji2").innerHTML = "&#128078";
        }
        if (results[1].label == 'High-five') {
            document.getElementById("update_emoji2").innerHTML = "&#128400";
        }
        if (results[1].label == 'Point up') {
            document.getElementById("update_emoji2").innerHTML = "&#128070";
        }
        if (results[1].label == 'Point down') {
            document.getElementById("update_emoji2").innerHTML = "&#128071";
        }
        if (results[1].label == 'Point sideways') {
            document.getElementById("update_emoji2").innerHTML = "&#128072" + "&#128073";
        }
    }
}