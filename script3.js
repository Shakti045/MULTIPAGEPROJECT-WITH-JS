let v=document.getElementById("n")
v.innerText=v.innerText+" "+localStorage.getItem("name")

let v1=document.getElementById("d")
v1.innerText=v1.innerText+" "+localStorage.getItem("dob")
let v2=document.getElementById("s")
v2.innerText=v2.innerText+" "+localStorage.getItem("state")

let v3=document.getElementById("p")
v3.innerText=v3.innerText+" "+localStorage.getItem("pincode")

let v4=document.getElementById("sk")

v4.innerText=v4.innerText+" "+localStorage.getItem("skills")

let v5=document.getElementById("t")
v5.innerText=v5.innerText+" "+localStorage.getItem("time")

function wp(){
    window.print()
}
