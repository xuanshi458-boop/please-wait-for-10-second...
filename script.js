let num = 10;
let wait = document.getElementById("wait");
let finalMsg = document.getElementById("finalMsg");
let pic = document.getElementById("wakePic");

let timer = setInterval(function(){
  wait.innerHTML = num;
  num--;

  if(num < 0){
    clearInterval(timer);
    wait.innerHTML = "";
    finalMsg.innerHTML = "不要再聊天了！快點去讀書要期末了！！！";
    pic.src="https://i.imgur.com/4AiXzf8.jpeg"; 
  }
},1000);