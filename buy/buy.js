function buy() {
    var inp = document.getElementsByTagName("input")

    if (inp[0].value.length == 0 || inp[1].value.length == 0 ||inp[2].value.length == 0 ||inp[3].value.length == 0 || inp[4].value.length == 0) {
        if (inp[0].value.length == 0) {inp[0].style.border = "3px solid #ff0000"}
        if (inp[1].value.length == 0) {inp[1].style.border = "3px solid #ff0000"}
        if (inp[2].value.length == 0) {inp[2].style.border = "3px solid #ff0000"}
        if (inp[3].value.length == 0) {inp[3].style.border = "3px solid #ff0000"}
        if (inp[4].value.length == 0) {inp[4].style.border = "3px solid #ff0000"}
        alert("Du mangler at udfylde nogle felter")
    } else {
        window.location.href = "udsolgt/udsolgt.html"
    }
}

function clear_border(elem){
    elem.style.border = "none";
}