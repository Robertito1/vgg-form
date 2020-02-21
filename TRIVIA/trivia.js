localStorage.setItem("what is the name of the CEO at venture garden group ?" , "Bunmi Akinyemiju");
localStorage.setItem("who is the man to walk on the moon ?", "Neil Armstrong");
localStorage.setItem("When was venture garden group established", "2011");
localStorage.setItem("what is a female eagle called ?" ,"Falcon")
localStorage.setItem("what year did Nigeria gain independence ?", "1960")
localStorage.setItem("what is a five sided shape called ?", "pentagon")
localStorage.setItem("what tag is used for a thematic break in HTML", "hr")
localStorage.setItem("what does vgg stand for ?", "venture garden group")
let count = 0;
function nextQuestion() {
  
   if (count <= 9 ) {
      count++;
      if(count > 1){
         let lastCount = count -1 ;
         var current = document.getElementById(`ques${lastCount}`);
         current.style.display = "none" ;
      }
      var newCurrent = document.getElementById(`ques${count}`);
      newCurrent.style.display = "block" ;
   }
}
function prevQuestion() {
    if (count >= 9 ) {
       count--
       if(count <= 9){
         let lastCount = count +1 ;
         var current = document.getElementById(`ques${lastCount}`);
         current.style.display = "none" ;
      }
      var newCurrent = document.getElementById(`ques${count}`);
      newCurrent.style.display = "block" ;
    }
 }
function displayResult() {
   localStorage.getItem
}