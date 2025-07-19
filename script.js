let button = document.querySelector("#button")
let file = document.querySelector("#fileinp")

button.addEventListener("click", function (){
    file.click()
})

file.addEventListener("change",function(det){
    const filename = det.target.files[0]
    if (filename){
        button.textContent = filename.name
    }
    else{
        button.textContent = "Upload File"
    }
})