let v=document.querySelector("p")
v.innerText=v.innerText+" "+localStorage.getItem("datamail")

let date=new Date()
document.getElementById("time").innerText=date
let capg=""
window.onload=function(){
  capg=""
  let captchamaybe="1NB3DX781700MCVWIZL"
  for(let a=0;a<=6;a++){
    capg=capg+captchamaybe[Math.floor(Math.random()*6)]
  }
  let cpc=document.getElementById("cap")
  cpc.innerText=cpc.innerText+capg
}

document.getElementById("bn").addEventListener("click",verify)
function verify(){
    let captcha_entered=document.getElementById("captcha").value

    if(captcha_entered==capg){
     alert("Are you sure to procees")
     localStorage.setItem("name",document.getElementById("name").value)
     localStorage.setItem("dob",document.getElementById("dob").value)
     localStorage.setItem("state",document.getElementById("state").value)
     localStorage.setItem("pincode",document.getElementById("pincode").value)
     localStorage.setItem("skills",document.getElementById("skills").value)
     localStorage.setItem("time",document.getElementById("time").innerText)
     location.href="index3.html"
    }else{
        alert("Captcha missmatched")
        window.location.reload()
    }
}
