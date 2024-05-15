const spin = document.getElementById('spin')
const moneyDisplay = document.getElementById('moneyDisplay')
const bet = document.getElementById('bet')
const win = document.getElementById('win')
const jackpotSound  = document.getElementById('jackpotSound')
const winSound = document.getElementById('winSound')
const spinSound = document.getElementById('spinSound')
let spinning = false
let money = 1000

spin.onclick = function () {
    if (!spinning && bet.value <= money && bet.value >= 1){
        spinSound.currentTime = 1
        spinSound.play()
        money -= bet.value
        moneyUpdate()
        spinReels()
        spinning = true
        setTimeout(function () {
            spinning = false
        },1500)
    }
}

function spinReels() {
    const images = {
        0: "seven",
        79: "banana",
        158: "watermelon",
        237: "lemon",
        316: "bar",
        395: "bell",
        474: "orange",
        553: "plum",
        632: "cherry",
        711: "seven",
        790: "banana",
        869: "watermelon",
        948: "lemon",
        1027: "bar",
        1106: "bell",
        1185: "orange",
        1264: "plum",
        1343: "cherry",
        1422: "seven",
        1501: "banana",
        1580: "watermelon",
        1659: "lemon",
        1738: "bar",
        1817: "bell",
        1896: "orange",
        1975: "plum",
        2054: "cherry"
    };

    const reel1Stop = Math.floor(Math.random() * 27) * 79
    const reel2Stop = Math.floor(Math.random() * 27) * 79
    const reel3Stop = Math.floor(Math.random() * 27) * 79

    setStopPosition('firstReel', reel1Stop)
    setStopPosition('secondReel', reel2Stop)
    setStopPosition('thirdReel', reel3Stop)

    const reel1Image = images[reel1Stop]
    const reel2Image = images[reel2Stop]
    const reel3Image = images[reel3Stop]

    console.log(reel1Image)
    console.log(reel2Image)
    console.log(reel3Image)
    // Add your win conditions based on the images
    if (reel1Image === 'cherry' && reel2Image === 'cherry' && reel3Image === 'cherry') {
        setTimeout(function () {
            winDisplay('Mega Win', `${bet.value*200}`)
            money += bet.value*200
            moneyUpdate()
            playJackpotSound()
        }, 1100)
    }
    if (reel1Image === 'seven' && reel2Image === 'seven' && reel3Image === 'seven') {
        setTimeout(function () {
            winDisplay('Big Win', `${bet.value*20}`)
            money += bet.value*20
            moneyUpdate()
            playWinSound()
        }, 1100)
    }
    if (reel1Image === 'banana' && reel2Image === 'banana' && reel3Image === 'banana') {
        setTimeout(function () {
            winDisplay('Huge Win', `${bet.value*50}`)
            money += bet.value*50
            moneyUpdate()
            playJackpotSound()
        }, 1100)
    }
    if (reel1Image === 'watermelon' && reel2Image === 'watermelon' && reel3Image === 'watermelon') {
        setTimeout(function () {
            winDisplay('Big Win', `${bet.value*20}`)
            money += bet.value*20
            moneyUpdate()
            playWinSound()
        }, 1100)
    }
    if (reel1Image === 'lemon' && reel2Image === 'lemon' && reel3Image === 'lemon') {
        setTimeout(function () {
            winDisplay('Epic Win', `${bet.value*100}`)
            money += bet.value*100
            moneyUpdate()
            playJackpotSound()
        }, 1100)
    }
    if (reel1Image === 'bar' && reel2Image === 'bar' && reel3Image === 'bar') {
        setTimeout(function () {
            winDisplay('Huge Win', `${bet.value*50}`)
            money += bet.value*50
            moneyUpdate()
            playJackpotSound()
        }, 1100)
    }
    if (reel1Image === 'bell' && reel2Image === 'bell' && reel3Image === 'bell') {
        setTimeout(function () {
            winDisplay('Huge Win', `${bet.value*50}`)
            money += bet.value*50
            moneyUpdate()
            playJackpotSound()
        }, 1100)
    }
    if (reel1Image === 'orange' && reel2Image === 'orange' && reel3Image === 'orange') {
        setTimeout(function () {
            winDisplay('Big Win', `${bet.value*20}`)
            money += bet.value*20
            moneyUpdate()
            playWinSound()
        }, 1100)
    }
    if (reel1Image === 'plum' && reel2Image === 'plum' && reel3Image === 'plum') {
        setTimeout(function () {
            winDisplay('Big Win', `${bet.value*20}`)
            money += bet.value*20
            moneyUpdate()
            playWinSound()
        }, 1100)
    }
    if ((reel1Image === reel2Image || reel2Image === reel3Image) && reel1Stop !== reel3Stop) {
        setTimeout(function () {
            money += bet.value*2
            winDisplay('You Win', `${bet.value*2}`)
            moneyUpdate()
            playWinSound()
        }, 1100)
    }
}



function setStopPosition(reelId, stopPosition) {
    const reel = document.getElementById(reelId)
    reel.style.backgroundPosition = `0px -${stopPosition}px`
}
function moneyUpdate () {
    moneyDisplay.innerHTML = `Your Money: ${money}$`
}

function winDisplay (winCon, amount) {
    win.style.display = 'block'
    win.style.animation = 'win 1s linear'
    win.innerHTML = `<p>${winCon}</p>
                        <p>${amount}$</p>`
    setTimeout(function () {
        win.style.display = 'none'
        win.style.animation = ''
    },1000)
}

function playWinSound () {
    winSound.play()
}
function playJackpotSound () {
    jackpotSound.play()
}
