 console.log('Loaded!');

var button=document.getElementById("counter");
button.onclick=function(){
var request=XMLHttpRequest()

request.onreadystatechange=function(){
    if(request.readyState==XMLHttpRequest.DONE){
        if(request.state==200){
          var counter=  request.responseText;
           counter=counter+1;
  var span=document.getElementById("count");
  span.innerHTML=counter.toString();
        }
    }
};
  request.open('GET',"http://saurabhsolkar4.imad.hasura-app.io/counter",true);
  request.send(null);
};