var audio = document.getElementById("audio")
var links = document.links;


for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", function(e) {
        audio.play()
    })
}
