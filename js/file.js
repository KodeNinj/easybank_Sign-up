//variable declarations for our targets
const Form = document.querySelector('.form');
const Email = document.querySelector('.email');
const Username = document.querySelector('#username');
const DOB = document.querySelector('#DOB');
const Password1 = document.querySelector('#password1');
const Password2 = document.querySelector('#password2');
const checkedTerms = document.querySelector("input[name=confirmTerms]");
const Terms = document.querySelector('.terms');
const P_Terms = document.querySelector('.label-terms');

var exprUsername = /^[a-zA-Z0-9_]{6,25}$/;
let exprEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
//we need to pick this Btn so as to add eventListener to it.
const Submit_Btn = document.querySelector('#submit');


//now let's add eventListener to the button as planned
Submit_Btn.addEventListener('click',(e)=>{
    if (Email.value == ''){
        Email.className = "wrongInput";
       
    }
    else if (!exprEmail.test(Email.value)) {
        Email.className = "wrongInput";
     
    }
    else if(exprEmail.test(Email.value)) {
        Email.className = "CorrectInput";
      
    }
  
    
    //FOR USERNAME
    if(Username.value == ''){
        Username.className = "wrongInput";
        alert('Dude! username cannot be empty')
       
    
    }else if (!exprUsername.test(Username.value)) {
        Username.className = "wrongInput";
        alert("Only Alphabets, Numbers and Underscore and between 6 to 25 characters.");
       
    }
    else if (exprUsername.test(Username.value)== true ){
        Username.className = "CorrectInput";
        
        }
    //FOR DOB
    if(DOB.value == ''){
        DOB.className = "wrongInput";
      
    
    }  else if(DOB.value != ''){
        DOB.className = "CorrectInput";
       
    }
    //PASSWORD
    if(Password1.value == '' || Password2.value == ''){
        Password1.className = "wrongInput";
        Password2.className = "wrongInput";
        alert('password cannot be empty')
     
    }
    else if(Password2.value !== Password1.value){
        Password1.className = "wrongInput";
        Password2.className = "wrongInput";
        alert('password not matched')
        
    }
    else if(Password1.value.length <= 6 || Password1.value.length < 6  ){
        Password1.className = "wrongInput";
        Password2.className = "wrongInput";
        alert('password must be greater than 6 characters')
        
    }
    else{
        Password1.className = "CorrectInput";;
        Password2.className = "CorrectInput";;
        
    }
    if (!checkedTerms.checked){
        P_Terms.className = "wrongInput2"
        
    }
    else{
        P_Terms.className = "CorrectInput2"
        
    }
    e.preventDefault();
   
    
})
