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

        
      list.innerHTML +=  `${key} at ${value} <button type="button" id="clear">delete</button><br />` ;
      
 }
 

       
  
