function acceptCookie(){
    document.querySelector(".cookie").remove();
}

function convertDegrees(value){
    if(value == 0){
        document.querySelector(".temphigh > span").innerText = document.querySelector(".temphigh > span").innerText * 1.8 + 32;
    }
    else{
        document.querySelector(".temphigh > span").innerText = (document.querySelector(".temphigh > span").innerText - 32) / 1.8;
    }
}