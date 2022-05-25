function sign(element){
    if(element.innerText == "Sign Out"){
        element.innerText = "Sign In";
    }
    else{
        element.innerText = "Sign Out";
    }
}

function changeuser(name){
    document.querySelector(".mainbody > h1").innerText = name;
}

function removeConnection(name){
    document.querySelector(".conreqnum > p").innerText--;
    name.remove();
}

function addConnection(name){
    document.querySelector(".conreqnum > p").innerText--;
    document.querySelector(".conreqnum2 > p").innerText++
    name.remove();
}