 const task = document.getElementById("task");
 const button = document.getElementById("logData");
 var list = document.getElementById("list");

  button.onclick = function (){
      const todo = task.value;
for (i = 0 ; i < todo.lenght ; i++){
localStorage.setItem(i, "fg")
}
        location.reload();
  }
