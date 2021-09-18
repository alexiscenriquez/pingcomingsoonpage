let email=document.querySelector("#email")
let err=document.querySelector("label")
let notify=document.querySelector("#notify")
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
notify.addEventListener("click",()=>{
    if(email.value.match(mailformat)){
        err.innerHTML=""
email.style="none"
        return true
    }
    else{
    err.innerHTML="Please provide a valid email address"
    email.style.borderColor="var(--lRed)"
    return false
    }
})
