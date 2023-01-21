let mylead = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl =document.getElementById("ul-el")

inputBtn.addEventListener("click",function(){
    mylead.push(inputEl.value)
    inputEl.value = ""
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

