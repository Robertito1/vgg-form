function formQualities(){
   event.preventDefault()
 var namen=   document.forms["form"]["Firstname"].value;
 var familliennamen=   document.forms["form"]["Surname"].value;
 var mail=   document.forms["form"]["email"].value;
 var datum=   document.forms["form"]["Date_of_birth"].value;
 var course= document.forms["form"]["tracks"].value
 var sesame=   document.forms["form"]["password"].value;
 var pWordlength= sesame.length;
 var sesame2=   document.forms["form"]["password2"].value;
 if (namen==""){
    window.alert("name must be filled");
    return false ;
  } 
 if (familliennamen==""){
    window.alert("Surname must be filled");
    return false ;
  }
 if (mail==""){
    window.alert("please fill an email so we can contact you");
    return false ;
  }
 if (datum==""){
    window.alert("Dont be shy, when were you born");
    return false ;
  } 
 if (course=="") {
    window.alert("what are interested in?");
    return false;
 }
 if (sesame==""){
    window.alert("please input a safe password");
    return false;
  }
 if (pWordlength < 8 ) {
    window.alert ("Almost there! just make your password stronger") ;
    return false;
}     
 if (pWordlength > 16 ) {
    window.alert ("Almost there! password too long");  
    return false;        
        }
 if (sesame2!=sesame){
    window.alert("passwords dont match");
    return false;
  }   
console.log(namen);
console.log(familliennamen)
console.log(mail)
console.log(datum)
console.log(course)
console.log(sesame)
console.log(sesame2)
}
