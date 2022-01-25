document.querySelectorAll(".result").forEach(function(el){
    el.addEventListener("click", function(){
        el.classList.toggle("selected");
    });
});