document.getElementById('submit-button').addEventListener('click',function(){
    
   const email = document.getElementById('email-input').value ;
   const password = document.getElementById('password-input').value ;
   console.log(email,password);
   if(email==='akjilan@gmail.com'&& password==='1234'){
    window.location.href='dashboard.html';

   }
   else{
    alert('wrong email or password');
   }

})
