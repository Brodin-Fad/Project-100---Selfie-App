var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content == "take my selfie")
    {
        console.log("taking selfie --- ")
        speak();
    }
    
}

function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    setTimeout(function()
    {
        img_id = "selfie1";
        take_snapshot();
        speak_data = "Taking your next selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    }, 5000);

    setTimeout(function()
    {

        img_id = "selfie2";
        take_snapshot();
        speak_data = "Taking your next selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    }, 10000);


    setTimeout(function()
    {

        img_id = "selfie1";
        take_snapshot();
        speak_data = "Taking your next selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        

    }, 15000);


}

function take_snapshot() 
{

    console.log(img_id);

    Webcam.snap(function(data_uri)
    {
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }

        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }

        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }
        
        
    });
}

function save()
{
    link = document.getElementById("link");
    image1= document.getElementById("selfie1").src;
    image2= document.getElementById("selfie2").src;
    image3= document.getElementById("selfie3").src;
    link.href = image;
    link.click();
}