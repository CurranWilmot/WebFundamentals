function logout(element){
    if(element.innerText == "Login"){
    element.innerText = "Logout";
    }
    else{
        element.innerText = "Login";
    }
}


function disappear(element){
    element.remove();
}

