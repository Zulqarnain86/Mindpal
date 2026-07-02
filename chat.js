const sendBtn=document.getElementById("sendBtn");
const message=document.getElementById("message");
const body=document.querySelector(".chat-body");

sendBtn.onclick=function(){
    if(message.value==="") return;

    let div=document.createElement("div");
    div.className="send";
    div.innerHTML=message.value;
    body.appendChild(div);
    message.value="";
    body.scrollTop=body.scrollHeight;

    setTimeout(reply,1000);
}

function reply(){
    let reply=document.createElement("div");
    reply.className="receive";
    reply.innerHTML="Thank you for sharing. I'm here to listen and support you. ❤️";
    body.appendChild(reply);
    body.scrollTop=body.scrollHeight;
}