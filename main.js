let mylead = []
let oldlead =[]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl =document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("mylead"))
console.log(leadsFromLocalStorage)


if(leadsFromLocalStorage){
    mylead = leadsFromLocalStorage
    render(mylead)
}

function render(leads){

    let listitems = ""
    for (let i = 0 ; i < leads.length ; i++){
    //    listitems += "<li><a target='_blank' href='" + mylead[i] + "'>" + mylead[i] + "</a></li>"
    
    listitems += `
    <li>
        <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
        </a>
    </li>
    `
    }
    ulEl.innerHTML = listitems  
    }
    
    

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    mylead = []
    render(mylead)
})

inputBtn.addEventListener("click",function(){
    mylead.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("mylead", JSON.stringify(mylead))
    render(mylead)
})

