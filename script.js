let abc = document.querySelector("#abc")

abc.addEventListener("mouseover", function(dets){
    abc.style.backgroundColor = "yellow";
})

abc.addEventListener("mouseout", function(dets){
    abc.style.backgroundColor = "red";
})