let mylead = []
const inputEl = document.getElementById("input-el")
const Savebtn = document.getElementById("input-btn")
const ulEl =document.getElementById("ul-el")

Savebtn.addEventListener("click",function(){
    mylead.push(inputEl.value)
    console.log(mylead)
})

for (let i = 0 ; i < mylead.length ; i++){
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}