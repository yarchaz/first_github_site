var t = parseFloat(document.getElementById("cTemp").innerHTML);
var windS = parseFloat(document.getElementById("cWindS").innerHTML);
if(t<=50 && windS>3){
var s = Math.pow(windS,0.16);
var f = 35.74 + (0.6215*t)-(35.75*s)+(0.4275*t*s);
var windC= Math.round(f*10)/10;
document.getElementById("cWindC").innerHTML=windC;
}
else{
    document.getElementById("cWindC").innerHTML= "N/A"; 
}
