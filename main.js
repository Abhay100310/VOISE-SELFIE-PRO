var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();

}
Recognition.onresult = function(event){
    console.log(event);
var Content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = Content;
console.log(Content);
speak();
}

function speak()
{
    var Synth = window.speechSynthesis; 
    speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    Synth.speak(utterThis);
    Webcam.attach(camera);
}

camera = document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});



