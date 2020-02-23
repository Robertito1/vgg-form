 const task = document.getElementById("task");
 const time = document.getElementById("time")
 const button = document.getElementById("logData");
 var list = document.getElementById("list");

  button.onclick = function (){
      const key = task.value;
      const value = time.value;

      if(key && value){
         localStorage.setItem(key,value);
         location.reload();
      }
} ;
 for ( let i = 0 ; i < localStorage.length ; i++){
        const key = localStorage.key(i)
        const value = localStorage.getItem(key)

        
      list.innerHTML +=  `<p><span>${key}</span> at <span>${value}</span> <button type="button" onclick="deleteTask()" id="clear">delete</button></p>` ;
      
 }
 function deleteTask() {
    const parentElement = event.target.parentElement;
    const key = parentElement.querySelector("span").textContent;
    parentElement.remove();
    localStorage.removeItem(key);
 }
 

       
  
