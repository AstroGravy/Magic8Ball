//alert("Hi");

function shake() {
    var myFortune=getFortune()
    displayFortune(myFortune)
    qs()

}
function displayFortune(fortune) {
    document.getElementById("fortune-display").innerHTML=fortune
}
function getFortune(){
    var listofFortunes=getlistofFortunes()
    var randomNumber=getRandomNumberLessThan(listofFortunes.length)
    return listofFortunes[randomNumber]

}
function getlistofFortunes(){
    return["yes","no","maybe","probably","probably not","nope","yep","ask again","absolutely","absolutely not","DO IT","DON'T DO IT","YESSS","NOOO","pls yes","pls no"];
}
function getRandomNumberLessThan(max){
    var randomDecimal=(Math.random()*max)
    return Math.floor(randomDecimal)
}
function qs() {
    var p=prompt("Enter your fortune question");
    document.getElementById('f-q').innerHTML="The answer to "+p+" is:";
}