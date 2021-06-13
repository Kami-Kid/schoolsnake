window.addEventListener('scroll', pluslength)

function pluslength() {
    var a = document.createElement("pre")
    a.innerHTML = "           |||        |||"
    a.className = "pre"
    document.body.appendChild(a)
    console.log("done")
}