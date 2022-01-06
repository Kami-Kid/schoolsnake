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
var speed = 7;
let headx = 10;
let heady = 10;
let xvel = yvel = 0
stopper = 0
let applex = 3
let appley = 15
const moves = []



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
            length = 2
            speed = 7
            console.log("ded")
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
        speed = 5
        console.log("ded")
    }

    score = length - 2
    setTimeout(draw, 1000 / speed)
    if (stopper == 0) { stopper++ }
    movement(moves[0], true)
    moves.shift()
}

function clearscreen() {
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, 400, 400)
}

function drawscore() {
    ctx.fillStyle = "white"
    ctx.fillText("score : " + score.toString(), 16 * tilecount, 1 * tilecount)
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
        speed += 0.2
    }
}

function addlist(evt) {
    moves.push(evt)
    console.log(moves)
}
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

function movement(evt, useded) {
    if (useded == false) {
        switch (evt.key) {
            case "w":
                if (yvel != 1 && used != 1) {
                    xvel = 0;
                    yvel = -1
                    used++
                }
                break
            case "s":
                if (yvel != -1 && used != 1) {
                    xvel = 0;
                    yvel = 1
                    used++
                }
                break
            case "a":
                if (xvel != 1 && used != 1) {
                    xvel = -1
                    yvel = 0
                    used++
                }
                break
            case "d":
                if (xvel != -1 && used != 1) {
                    xvel = 1
                    yvel = 0
                    used++
                }
                break
            case "\\":
                xvel = 0
                yvel = 0
                break
            case "=":
                score++
                speed += 0.2
                break
        }
    } else {

        switch (evt.key) {
            case "w":
                if (yvel != 1) {
                    xvel = 0;
                    yvel = -1
                    used++
                }
                break
            case "s":
                if (yvel != -1) {
                    xvel = 0;
                    yvel = 1
                    used++
                }
                break
            case "a":
                if (xvel != 1) {
                    xvel = -1
                    yvel = 0
                    used++
                }
                break
            case "d":
                if (xvel != -1) {
                    xvel = 1
                    yvel = 0
                    used++
                }
                break
            case "\\":
                xvel = 0
                yvel = 0
                break
            case "=":
                score++
                speed += 0.2
                break
        }
    }
}
draw()
