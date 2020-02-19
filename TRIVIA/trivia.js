localStorage.setItem("what is the name of the CEO at venture garden group ?" , "Bunmi Akinyemiju");
localStorage.setItem("who is the man to walk on the moon ?", "Neil Armstrong");
localStorage.setItem("When was venture garden group established", "2011");
localStorage.setItem("what is a female eagle called ?" ,"Falcon")
localStorage.setItem("what year did Nigeria gain independence ?", "1960")
localStorage.setItem("what is a five sided shape called ?", "pentagon")
localStorage.setItem("what tag is used for a thematic break in HTML", "hr")
localStorage.setItem("what does vgg stand for ?", "venture garden group")
let count = 1;
function nextQuestion() {
   var current = document.getElementById(`ques${count}`);
   current.style.display = "inline" ;
   count++;
   if (count >= questions.length ) {
      count = 1;
   }
}
function prevQuestion() {
    var current = document.getElementById(`ques${count}`);
    current.style.display = "inline" ;
    count--;
    if (count >= 9 ) {
       count = 1
    }
 }