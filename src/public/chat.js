const socket = io();

//DOM elements
let message = document.getElementById("message");
let username = document.getElementById("username");
let btn = document.getElementById("send");
let output = document.getElementById("output");
let actions = document.getElementById("actions");

btn.addEventListener( "click" , function(){
    socket.emit("chat:message",{
        message:message.value,
        username:username.value
    });
});

message.addEventListener("keypress", function (){
    actions.innerHTML="";
    socket.emit("chat:typing", username.value)
})

socket.on("chat:message", function(data) {
    output.innerHTML += `<p>
        <strong>${data.username}</strong>: ${data.message}
    </p>`;
});

socket.on("chat:typing",function(username){
    actions.innerHTML = `<p><em>${username} is typing</em></p>`
})