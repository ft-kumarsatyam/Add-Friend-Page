var addfriend = document.getElementById('add')
var istatus = document.getElementById('update')
var counter = 0;
addfriend.addEventListener("click", function(){
    if(counter == 0){
    istatus.innerHTML = "Friends!"
    istatus.style.color = "green"
    add.innerHTML = "Remove Friend"
    add.style.backgroundColor = "Black"
    counter = 1;
   }
    else{
    istatus.innerHTML = "Strangers"
    istatus.style.color = "red"
    add.innerHTML = "Add Friend"
    add.style.backgroundColor = "Green"
    counter = 0;
    }
})