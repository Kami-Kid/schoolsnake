let canvas = document.getElementById('game')
let ctx = canvas.getContext("2d")



class snakepart {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

let used = 0
let score = 0
const snakeparts = []
let length = 2
var tilecount = 20;
var tilesize = canvas.width / tilecount - 2;
var speed = 8;
let headx = 10;
let heady = 10;
let xvel = yvel = 0
stopper = 0
let applex = 3
let appley = 15
let stack = []
let hiScore = 10



document.addEventListener("keypress", addlist)
document.addEventListener("keypress", movement(Event, false))

//game
function draw() {
    clearscreen()
    checkapplecol()
    for (i = 2; i < snakeparts.length; i++) {
        let part = snakeparts[i]
        if (headx == part.x && heady == part.y) {
            headx = 10
            heady = 10
            xvel = 0
            yvel = 0
            speed = 8
            console.log("ded")
            if(hiScore > length - 2){
                hiScore = length- 2 
            }
            length = 2
        }
    }
    drawapple()
    drawsnake()
    drawscore()


    headx += xvel
    heady += yvel
    if (0 > headx || heady < 0 || headx > 19 || heady > 19) {
        headx = 10
        heady = 10
        xvel = 0
        yvel = 0
        length = 2
        speed = 8
        console.log("ded")
    }

    score = length - 2
    setTimeout(draw, 1000 / speed)
    if (stopper == 0) { stopper++ }
    movement()
}

function clearscreen() {
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, 400, 400)
}
clearscreen()
draw()

function drawscore() {
    ctx.fillStyle = "white"
    ctx.fillText("Hi-score : " + hiScore.toString()+" score : " + score.toString() + " speed : " + speed.toString(), 15 * tilecount, 1 * tilecount)
}

function drawapple() {
    ctx.fillStyle = "magenta"
    ctx.fillRect(applex * tilecount, appley * tilecount, tilesize, tilesize)
}

function checkapplecol() {
    if (applex == headx && appley == heady) {
        applex = Math.floor(Math.random() * tilecount)
        appley = Math.floor(Math.random() * tilecount)
        length++
        speed += speed < 12 ? (12 - speed) / 10 : 0
    }
}

function addlist(evt) {
    if (stack[stack.length - 1] != evt.key) {
        stack.push(evt.key)
        console.log(stack)
    }
}

setInterval(() => {
    len = stack.length
    if (len >= 4) { stack.splice(3, len - 4) }
})

window.addEventListener("keydown", addlist)
    //function checksnakecol(){
    //    if()
    //}

function drawsnake() {
    //tail
    ctx.fillStyle = "lime"
    for (i = 0; i < snakeparts.length; i++) {
        let part = snakeparts[i]
        ctx.fillRect(part.x * tilecount, part.y * tilecount, tilesize, tilesize)
    }
    ctx.fillStyle = "green"
    ctx.fillRect(headx * tilecount, heady * tilecount, tilesize, tilesize)

    snakeparts.push(new snakepart(headx, heady))
    while (snakeparts.length > length) {
        snakeparts.shift()
    }
}

function movement() {
    switch (stack.shift()) {
        case "w":
            if (yvel != 1) {
                xvel = 0;
                yvel = -1
            } else {
                movement()
            }
            break
        case "s":
            if (yvel != -1) {
                xvel = 0;
                yvel = 1
            } else {
                movement()
            }
            break
        case "a":
            if (xvel != 1) {
                xvel = -1
                yvel = 0
            } else {
                movement()
            }
            break
        case "d":
            if (xvel != -1) {
                xvel = 1
                yvel = 0
            } else {
                movement()
            }
            break
        case "\\":
            xvel = 0
            yvel = 0
            break
    }
}
