document.addEventListener("dblclick", begin)

let pname = null
let curroomx = 0
let curroomy = 0

function newtxt(inner, type, N, E, S, W) {
    var a = document.createElement(type)
    a.innerHTML = inner
    document.body.appendChild(a)
    if (N) {
        var z = document.createElement("button")
        z.innerHTML = "go north"
        z.setAttribute(onclick, "curroomy++")
        document.body.appendChild(z)
    }
    if (E) {
        var z = document.createElement("button")
        z.innerHTML = "go east"
        z.setAttribute(onclick, "curroomx++")
        document.body.appendChild(z)
    }
    if (S) {
        var z = document.createElement("button")
        z.innerHTML = "go south"
        z.setAttribute(onclick, "curroomy--")
        document.body.appendChild(z)
    }
    if (W) {
        var z = document.createElement("button")
        z.innerHTML = "go west"
        z.setAttribute(onclick, "curroomx--")
        document.body.appendChild(z)
    }
}

function begin() {
    newtxt("what is your name young warrior", "p", null, null, null, null)
    var a = document.createElement("input")
    document.body.appendChild(a)
    pname = a.value
    var b = document.createElement("button")
    b.innerHTML = "begin"
    b.setAttribute(onclick, "newtxt(\"hello\"+pname, \"p\")")
    document.body.appendChild(b)
}