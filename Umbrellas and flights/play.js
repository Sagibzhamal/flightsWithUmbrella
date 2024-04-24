function changeArrowh(){
    document.getElementById("home").innerHTML = "Home ^"
}
function changeBackh(){
    document.getElementById("home").innerHTML = "Home ∨"
}
function changeArrowa(){
    document.getElementById("about").innerHTML = "About ^"
}
function changeBacka(){
    document.getElementById("about").innerHTML = "About ∨"
}
function changeArrowp(){
    document.getElementById("playground").innerHTML = "Playground ^"
}
function changeBackp(){
    document.getElementById("playground").innerHTML = "Playground ∨"
}
function changeArrowc(){
    document.getElementById("contact").innerHTML = "Contact ^"
}
function changeBackc(){
    document.getElementById("contact").innerHTML = "Contact ∨"
}
let windspeed;
let weight;
let area;
let LiftForce;
let DragForce;
let mg;
let NetForce;
document.getElementById("submit").onclick = function(){
    windspeed = document.getElementById("windspeed").value;
    console.log(windspeed);
    weight = document.getElementById("weight").value;
    console.log(weight);
    area = document.getElementById("area").value;
    console.log(area);
    LiftForce = 0.5 * 1.225 * windspeed * windspeed * 0.5 * area;
    console.log(LiftForce);
    DragForce = 0.38 * 1.225 * windspeed * windspeed * 0.5 * area;
    console.log(DragForce);
    mg = weight * 9.81;
    console.log(mg);
    NetForce = LiftForce - DragForce - mg;
    console.log(NetForce);
    if(NetForce > 0){
        window.location.href = "flying.html";
    }
    else{
        window.location.href = "not.html";
    }
}