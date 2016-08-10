var newGame = document.getElementById("new-game");
var playGround = document.getElementById("totito");
playGround.innerHTML = "<div id=\"sq1\"></div><div id=\"sq2\"></div><div id=\"sq3\"></div><div id=\"sq4\"></div><div id=\"sq5\"></div><div id=\"sq6\"></div><div id=\"sq7\"></div><div id=\"sq8\"></div><div id=\"sq9\"></div>";
//circle always starts
sign = 0;
//avaulability of spaces
sq1Av = 0
sq2Av = 0
sq3Av = 0
sq4Av = 0
sq5Av = 0
sq6Av = 0
sq7Av = 0
sq8Av = 0
sq9Av = 0
squares = [0, 0, 0, 0, 0, 0, 0, 0, 0]



var sq1 = document.getElementById("sq1");
sq1.addEventListener("click", function(){

  if(sq1Av === 0)
  {
    console.log("sq1 pressed");
    sq1Av = 1;
    
    if(sign === 0)
    {
       //sq1.innerHTML = "<div class=\"o\"></div>";
       squares[0]=1;
       sign = 1;
    }
    else if(sign === 1)
    {
       //sq1.innerHTML = "<div class=\"x\"></div>";
       squares[0]=2;
       sign = 0;
    }
    
  }
  else
  {
    console.log("already pressed, nothing happens")
  }
});

var sq2 = document.getElementById("sq2");
sq2.addEventListener("click", function(){
  if(sq2Av === 0)
  {
    console.log("sq2 pressed");
    sq2Av = 1;
    if(sign === 0)
    {
       //sq2.innerHTML = "<div class=\"o\"></div>";
       squares[1]=1;
       sign = 1;
    }
    else if(sign === 1)
    {
       //sq2.innerHTML = "<div class=\"x\"></div>";
       squares[1]=2;
       sign = 0;
    }
  }
  else
  {
    console.log("already pressed, nothing happens")
  }
});

var sq3 = document.getElementById("sq3");
sq3.addEventListener("click", function(){
  if(sq3Av === 0)
  {
    console.log("sq3 pressed");
    sq3Av = 1;
    if(sign === 0)
    {
       //sq3.innerHTML = "<div class=\"o\"></div>";
       squares[2]=1;
       sign = 1;
    }
    else if(sign === 1)
    {
       //sq3.innerHTML = "<div class=\"x\"></div>";
       squares[2]=2;
       sign = 0;
    }
  }
  else
  {
    console.log("already pressed, nothing happens")
  }
});

var sq4 = document.getElementById("sq4");
sq4.addEventListener("click", function(){
  if(sq4Av === 0)
  {
    console.log("sq4 pressed");
    sq4Av = 1;
    if(sign === 0)
    {
       //sq4.innerHTML = "<div class=\"o\"></div>";
       squares[3]=1;
       sign = 1;
    }
    else if(sign === 1)
    {
       //sq4.innerHTML = "<div class=\"x\"></div>";
       squares[3]=2;
       sign = 0;
    }
  }
  else
  {
    console.log("already pressed, nothing happens")
  }
});

var sq5 = document.getElementById("sq5");
sq5.addEventListener("click", function(){
  if(sq5Av === 0)
  {
    console.log("sq5 pressed");
    sq5Av = 1;
    if(sign === 0)
    {
       //sq5.innerHTML = "<div class=\"o\"></div>";
       squares[4]=1;
       sign = 1;
    }
    else if(sign === 1)
    {
       //sq5.innerHTML = "<div class=\"x\"></div>";
       squares[4]=2;
       sign = 0;
    }
  }
  else
  {
    console.log("already pressed, nothing happens")
  }
});

var sq6 = document.getElementById("sq6");
sq6.addEventListener("click", function(){
  if(sq6Av === 0)
  {
    console.log("sq6 pressed");
    sq6Av = 1;
    if(sign === 0)
    {
       //sq6.innerHTML = "<div class=\"o\"></div>";
       squares[5]=1;
       sign = 1;
    }
    else if(sign === 1)
    {
       //sq6.innerHTML = "<div class=\"x\"></div>";
       squares[5]=2;
       sign = 0;
    }
  }
  else
  {
    console.log("already pressed, nothing happens")
  }
});

var sq7 = document.getElementById("sq7");
sq7.addEventListener("click", function(){
  if(sq7Av === 0)
  {
    console.log("sq7 pressed");
    sq7Av = 1;
    if(sign === 0)
    {
       //sq7.innerHTML = "<div class=\"o\"></div>";
       squares[6]=1;
       sign = 1;
    }
    else if(sign === 1)
    {
       //sq7.innerHTML = "<div class=\"x\"></div>";
       squares[6]=2;
       sign = 0;
    }
  }
  else
  {
    console.log("already pressed, nothing happens")
  }
});

var sq8 = document.getElementById("sq8");
sq8.addEventListener("click", function(){
  if(sq8Av === 0)
  {
    console.log("sq8 pressed");
    sq8Av = 1;
    if(sign === 0)
    {
       //sq8.innerHTML = "<div class=\"o\"></div>";
       squares[7]=1;
       sign = 1;
    }
    else if(sign === 1)
    {
       //sq8.innerHTML = "<div class=\"x\"></div>";
       squares[7]=2;
       sign = 0;
    }
  }
  else
  {
    console.log("already pressed, nothing happens")
  }
});

var sq9 = document.getElementById("sq9");
sq9.addEventListener("click", function(){
  if(sq9Av === 0)
  {
    console.log("sq9 pressed");
    sq9Av = 1;
    if(sign === 0)
    {
       //sq9.innerHTML = "<div class=\"o\"></div>";
       squares[8]=1;
       sign = 1;
    }
    else if(sign === 1)
    {
       //sq9.innerHTML = "<div class=\"x\"></div>";
       squares[8]=2;
       sign = 0;
    }
  }
  else
  {
    console.log("already pressed, nothing happens")
  }
});



newGame.addEventListener("click", function(){
  console.log("Button Pressed")
  sign = 0;

  sq1Av = 0;
  sq1.innerHTML="";
  squares[0]=0;
  sq1.style.background="white";
  
  sq2Av = 0;
  sq2.innerHTML="";
  squares[1]=0;
  sq2.style.background="white";
  
  sq3Av = 0;
  sq3.innerHTML="";
  squares[2]=0;
  sq3.style.background="white";
  
  sq4Av = 0;
  sq4.innerHTML="";
  squares[3]=0;
  sq4.style.background="white";
  
  sq5Av = 0;
  sq5.innerHTML="";
  squares[4]=0;
  sq5.style.background="white";
  
  sq6Av = 0;
  sq6.innerHTML="";
  squares[5]=0;
  sq6.style.background="white";
  
  sq7Av = 0;
  sq7.innerHTML="";
  squares[6]=0;
  sq7.style.background="white";
  
  sq8Av = 0;
  sq8.innerHTML="";
  squares[7]=0;
  sq8.style.background="white";
  
  sq9Av = 0;
  sq9.innerHTML="";
  squares[8]=0;
  sq9.style.background="white";
});

function Render()
{
  //add html from board status
  if(squares[0] === 1)
  {
    sq1.innerHTML = "<div class=\"o\"></div>";
  }
  else if(squares[0] === 2)
  {
    sq1.innerHTML = "<div class=\"x\"></div>";
  }
  if(squares[1] === 1)
  {
    sq2.innerHTML = "<div class=\"o\"></div>";
  }
  else if(squares[1] === 2)
  {
    sq2.innerHTML = "<div class=\"x\"></div>";
  }
  if(squares[2] === 1)
  {
    sq3.innerHTML = "<div class=\"o\"></div>";
  }
  else if(squares[2] === 2)
  {
    sq3.innerHTML = "<div class=\"x\"></div>";
  }
  if(squares[3] === 1)
  {
    sq4.innerHTML = "<div class=\"o\"></div>";
  }
  else if(squares[3] === 2)
  {
    sq4.innerHTML = "<div class=\"x\"></div>";
  }
  if(squares[4] === 1)
  {
    sq5.innerHTML = "<div class=\"o\"></div>";
  }
  else if(squares[4] === 2)
  {
    sq5.innerHTML = "<div class=\"x\"></div>";
  }
  if(squares[5] === 1)
  {
    sq6.innerHTML = "<div class=\"o\"></div>";
  }
  else if(squares[5] === 2)
  {
    sq6.innerHTML = "<div class=\"x\"></div>";
  }
  if(squares[6] === 1)
  {
    sq7.innerHTML = "<div class=\"o\"></div>";
  }
  else if(squares[6] === 2)
  {
    sq7.innerHTML = "<div class=\"x\"></div>";
  }
  if(squares[7] === 1)
  {
    sq8.innerHTML = "<div class=\"o\"></div>";
  }
  else if(squares[7] === 2)
  {
    sq8.innerHTML = "<div class=\"x\"></div>";
  }
  if(squares[8] === 1)
  {
    sq9.innerHTML = "<div class=\"o\"></div>";
  }
  else if(squares[8] === 2)
  {
    sq9.innerHTML = "<div class=\"x\"></div>";
  }
  //check the 8 probabilities for victory on each side
  //1 out of 8
  if((squares[0] === 1 && squares[1] === 1 && squares[2] ===1) || (squares[0] === 2 && squares[1] === 2 && squares[2] ===2))
  {
    console.log("victoria");
    sq1.style.background = "green";
    sq2.style.background = "green";
    sq3.style.background = "green";
    sq1Av = 1;
    sq2Av = 1;
    sq3Av = 1;
    sq4Av = 1;
    sq5Av = 1;
    sq6Av = 1;
    sq7Av = 1;
    sq8Av = 1;
    sq9Av = 1;
  }
  //2 out of 8
  else if((squares[3] === 1 && squares[4] === 1 && squares[5] ===1) || (squares[3] === 2 && squares[4] === 2 && squares[5] ===2))
  {
    console.log("victoria");
    sq4.style.background = "green";
    sq5.style.background = "green";
    sq6.style.background = "green";
    sq1Av = 1;
    sq2Av = 1;
    sq3Av = 1;
    sq4Av = 1;
    sq5Av = 1;
    sq6Av = 1;
    sq7Av = 1;
    sq8Av = 1;
    sq9Av = 1;
  }
  //3 out of 8
  else if((squares[6] === 1 && squares[7] === 1 && squares[8] ===1) || (squares[6] === 2 && squares[7] === 2 && squares[8] ===2))
  {
    console.log("victoria");
    sq7.style.background = "green";
    sq8.style.background = "green";
    sq9.style.background = "green";
    sq1Av = 1;
    sq2Av = 1;
    sq3Av = 1;
    sq4Av = 1;
    sq5Av = 1;
    sq6Av = 1;
    sq7Av = 1;
    sq8Av = 1;
    sq9Av = 1;
  }
  //4 out of 8
  else if((squares[0] === 1 && squares[3] === 1 && squares[6] ===1) || (squares[0] === 2 && squares[3] === 2 && squares[6] ===2))
  {
    console.log("victoria");
    sq1.style.background = "green";
    sq4.style.background = "green";
    sq7.style.background = "green";
    sq1Av = 1;
    sq2Av = 1;
    sq3Av = 1;
    sq4Av = 1;
    sq5Av = 1;
    sq6Av = 1;
    sq7Av = 1;
    sq8Av = 1;
    sq9Av = 1;
  }
  //5 out of 8
  else if((squares[1] === 1 && squares[4] === 1 && squares[7] ===1) || (squares[1] === 2 && squares[4] === 2 && squares[7] ===2))
  {
    console.log("victoria");
    sq2.style.background = "green";
    sq5.style.background = "green";
    sq8.style.background = "green";
    sq1Av = 1;
    sq2Av = 1;
    sq3Av = 1;
    sq4Av = 1;
    sq5Av = 1;
    sq6Av = 1;
    sq7Av = 1;
    sq8Av = 1;
    sq9Av = 1;
  }
  //6 out of 8
  else if((squares[2] === 1 && squares[5] === 1 && squares[8] ===1) || (squares[2] === 2 && squares[5] === 2 && squares[8] ===2))
  {
    console.log("victoria");
    sq3.style.background = "green";
    sq6.style.background = "green";
    sq9.style.background = "green";
    sq1Av = 1;
    sq2Av = 1;
    sq3Av = 1;
    sq4Av = 1;
    sq5Av = 1;
    sq6Av = 1;
    sq7Av = 1;
    sq8Av = 1;
    sq9Av = 1;
  }
  //7 out of 8
  else if((squares[0] === 1 && squares[4] === 1 && squares[8] ===1) || (squares[0] === 2 && squares[4] === 2 && squares[8] ===2))
  {
    console.log("victoria");
    sq1.style.background = "green";
    sq5.style.background = "green";
    sq9.style.background = "green";
    sq1Av = 1;
    sq2Av = 1;
    sq3Av = 1;
    sq4Av = 1;
    sq5Av = 1;
    sq6Av = 1;
    sq7Av = 1;
    sq8Av = 1;
    sq9Av = 1;
  }
  //8 out of 8
  else if((squares[2] === 1 && squares[4] === 1 && squares[6] ===1) || (squares[2] === 2 && squares[4] === 2 && squares[6] ===2))
  {
    console.log("victoria");
    sq3.style.background = "green";
    sq5.style.background = "green";
    sq7.style.background = "green";
    sq1Av = 1;
    sq2Av = 1;
    sq3Av = 1;
    sq4Av = 1;
    sq5Av = 1;
    sq6Av = 1;
    sq7Av = 1;
    sq8Av = 1;
    sq9Av = 1;
  } 
  
}
Render();
setInterval(Render, 10)


//console.log("imalive")

/*
var AnalogClock = document.getElementById("analogClock");
var myElementSecs = document.getElementById("agujasegundos");
var myElementMins = document.getElementById("agujaminutos");
var myElementHrs = document.getElementById("agujahora");
var cantSecs = 0;
var cantMins = 0;
var cantHrs = 0;
var DigitalClock = document.getElementById("digitalClock");
var degreesSecs = 270+(cantSecs*6);
var AnalogOrDigital = 0;
var degreesMins = 270+(cantMins*6);
var degreesHrs = 270+(cantHrs*6);
var clockSelect = document.getElementById("kind-of-clock");

clockSelect.addEventListener("change", function(){
  if(clockSelect.value === "analog")
  {
    AnalogOrDigital = 0;
  }
  else if (clockSelect.value === "digital") 
  {
    AnalogOrDigital = 1;
  }
})

function myTimeoutFunction()
{
  if(AnalogOrDigital === 0)
  {
    AnalogClock.style.opacity = 1;
    DigitalClock.style.opacity = 0;
  }
  if(AnalogOrDigital === 1)
  {
    AnalogClock.style.opacity = 0;
    DigitalClock.style.opacity =  1;
  }

  myElementSecs.style.transform = 'rotate('+degreesSecs+'deg)';
  degreesSecs = degreesSecs+6;
  if(cantSecs === 60)
  {
    
    degreesMins = degreesMins+6;
    myElementMins.style.transform = 'rotate('+degreesMins+'deg)';
    cantMins=cantMins+1;
    cantSecs=0;
  }
  if(cantMins === 60)
  {
    
    degreesHrs = degreesHrs+30;
    myElementHrs.style.transform = 'rotate('+degreesHrs+'deg)';
    cantMins = 0;
    cantHrs = cantHrs + 1;
  }
  if(cantHrs === 24)
  {
    cantHrs = 0;
  }
  cantSecs = cantSecs+1;
  DigitalClock.innerHTML = cantHrs+":"+cantMins+':'+cantSecs;
}

myTimeoutFunction();
setInterval(myTimeoutFunction, 10)
*/

