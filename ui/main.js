 console.log('Loaded!');
 var submit = document.getElementById('submit_btn');


submit.onclick-function(){
    var request=new XMLHTTPRequest();
    request.onreadystatechange=function(){
        
     if(request.ReadyState==XMLHTTPRequest.DONE){
         if(request.Status===200){
             console.log('sucess');
              alert('comment inserted successfully');

         }else if(request.statu===500){
             alert('error! not entred successfully ');
         }
     }   
        
        
    };
    
  var name=document.getElementById('name').value;  
   var comment=document.getElementById('comment').value; 
   console.log(name);
   console.log(comment);
   request.open('POST','http://saurabhsolkar4.imad.hasura-app.io/comment',true);
   request.send(JSON.stringify({name:name, comment:comment})); 
};
