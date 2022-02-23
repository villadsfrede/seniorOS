document.addEventListener("keydown", function(e) {
    if(e.keyCode ==37) {
        alert("left was pressed")
    }
    if(e.keyCode ==39) {
        window.location.href = "info/info.html"
    }
})