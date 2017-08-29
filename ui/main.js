 console.log('Loaded!');
 var submit = document.getElementById('submit');


submit.onclick-function(){
    var request=new XMLHTTPRequest();
    request.onreadystatechange=function(){
        
     if(request.ReadyState==XMLHTTPRequest.DONE){
         if(request.Status===200){
             console.log('sucess');
              alert('comment inserted successfully');

         }
     }   
        
        
    };
    
  var name=document.getElementById('name').value;  
   var comment=document.getElementById('comment').value;  
};
