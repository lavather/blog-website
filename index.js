import { arrayOfEntries } from '/data.js'

let entrycollection=""
let n=0
let counter=3
const length=arrayOfEntries.length
let idCount=[]
renderEntries()

window.addEventListener("click", function(e) {
    count()
    let postID=e.target.parentElement.id
    
    if (idCount.includes(Number(postID))&& postID!="") {
        focusPost()
    }

    if (e.target.id==="view-more"){
        counter+=3
        renderEntries()
    }
})

function count(){
    idCount=[]
    for (let i=0; i<=length;i++){

        idCount.push(Number(i))
    }
}

function grabObjects(){

    if(n<length){
    
        for (n; n<counter; n++){
            let ID=arrayOfEntries[n].id
            let image=arrayOfEntries[n].image
            let title=arrayOfEntries[n].title
            let date=arrayOfEntries[n].date
            let text=arrayOfEntries[n].text
            entrycollection+=
                `<div class="blog-card" id="${ID}">
                    <img src="${image}"  class="thumbnail">
                    <p class="date">${date}</p>
                    <h3 class="leftist">${title}</h3>
                    <p class="faded-text">${text}</p>
                </div>`
        }
    }
}

function renderEntries(){
    const entriesBlog=document.getElementById("blogentries")
    grabObjects()
    if(counter===length){
        entriesBlog.innerHTML=entrycollection 
    }
    else  {
        entriesBlog.innerHTML=entrycollection+`<button class="view-more" id="view-more">View More</button>`
    }
}

function focusPost(x){
    window.location.href = "/main-post.html"
}



