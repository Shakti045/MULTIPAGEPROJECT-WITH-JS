let b=document.getElementById("newpassword")
let display=document.getElementById("dis")
b.onkeyup=function(){
    let a=b.value.split('').length
    function ssdefine(){
        if(a<4){
            return "weak"
        }
        if(a>=4 && a<8){
            return "medium"
        }
        return "Strong"
    }
    let k=ssdefine()

   display.textContent="Atleast 8 character long with counter:"+ a + "::Strength:" +k
   display.style.color="green"
}


b.onblur=function(){
    display.textContent=""
}


function validate(){
    let arr=document.getElementById("usermail").value
    if(arr.split('').includes('@')==false){
     alert("user id must contain @ symbol")
    }else{
    let v=document.getElementById("newpassword").value
    
    localStorage.setItem("datamail",arr);
    let v1=document.getElementById("confirmpassword").value
    if(v==v1 && v.split('').length>=8){
        document.getElementById("display").textContent="Password verified successfully"
        document.getElementById("display").style.color="green"
        setTimeout(function(){
            location.href="link.html"
        },1500)
    }else{
        document.getElementById("display").textContent="Password verification failed"
        document.getElementById("display").style.color="red"
        setTimeout(function(){
            alert("both password and confirmpassword should be same and atleast 8 charcacter long password required")
        },1000);
    }
}
}
