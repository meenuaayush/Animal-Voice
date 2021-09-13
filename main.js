function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XSipLvQmK/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_R= Math.floor(Math.random()*255) ;
        random_B= Math.floor(Math.random()*255) ;
        random_G= Math.floor(Math.random()*255) ;

        document.getElementById("result_label").innerHTML="I can Hear -" + results[0].label;

document.getElementById("result_label").style.color="rgb("+ random_R + "," + random_G + "," + random_B +")" ;


    }
}