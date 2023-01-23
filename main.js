let mylead = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl =document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("mylead"))
console.log(leadsFromLocalStorage)


deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    mylead = []
    renderleads()
})


if(leadsFromLocalStorage){
    mylead = leadsFromLocalStorage
    renderleads()
}



inputBtn.addEventListener("click",function(){
    mylead.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("mylead", JSON.stringify(mylead))
    renderleads()
})

function renderleads(){

let listitems = ""
for (let i = 0 ; i < mylead.length ; i++){
//    listitems += "<li><a target='_blank' href='" + mylead[i] + "'>" + mylead[i] + "</a></li>"

listitems += `
<li>
    <a target='_blank' href='${mylead[i]}'>
        ${mylead[i]}
    </a>
</li>
`
}
ulEl.innerHTML = listitems  
}

