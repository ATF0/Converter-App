//alert("Hello, World!");

var FtoC=function(f){
  //Fahrenheit to Celsius
  //(32°F − 32) × 5/9 = 0°C;
  var f= document.getElementById("FarToCel1").value
  c=(f-32)*(5/9);
  console.log(f+" Farenheit = "+ c+ " Celsius");
  document.getElementById("FarToCel2").value=c;
};




var CtoF=function(c){
  //celsius to Farenheit
  //(0°C × 9/5) + 32 = 32°F
  var c= document.getElementById("CelToFar1").value;

  f= (c*(9/5))+ 32;
  console.log(c + " Celsius = " + f +" Farenheit");
  document.getElementById("CelToFar2").value=f;
};
