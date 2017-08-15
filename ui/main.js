
var button=document.getElementById("counter");
var counter1=0;
button.onclick=function(){
    counter1=counter1+1;
  var span=document.getElementById("c");
  span.innerHTML=counter1.toString();
};