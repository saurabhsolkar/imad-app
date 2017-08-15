
var button=document.getElementById("counter");
var counter1=0;
button.onclick=function(){
    counter1=counter1+1;
  var span=document.getElementById("count");
  span.innerHTML=counter1.toString();
  alert(counter1);
};