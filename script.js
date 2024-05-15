const spin = document.getElementById('spin')
const moneyDisplay = document.getElementById('moneyDisplay')
const bet = document.getElementById('bet')
let spinning = false
let money = 1000

spin.onclick = function () {
    if (!spinning && bet.value <= money){
        money -= bet.value
        moneyUpdate()
        spinReels()
        spinning = true
        setTimeout(function () {
            spinning = false
        },1200)
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
            alert('You win! on sevens')
            money += bet.value*200
            moneyUpdate()
        }, 1100)
    }
    if (reel1Image === 'seven' && reel2Image === 'seven' && reel3Image === 'seven') {
        setTimeout(function () {
            alert('You win! on bananas')
            money += bet.value*20
            moneyUpdate()
        }, 1100)
    }
    if (reel1Image === 'banana' && reel2Image === 'banana' && reel3Image === 'banana') {
        setTimeout(function () {
            alert('You win! on watermelon')
            money += bet.value*50
            moneyUpdate()
        }, 1100)
    }
    if (reel1Image === 'watermelon' && reel2Image === 'watermelon' && reel3Image === 'watermelon') {
        setTimeout(function () {
            alert('You win! on lemon')
            money += bet.value*20
            moneyUpdate()
        }, 1100)
    }
    if (reel1Image === 'lemon' && reel2Image === 'lemon' && reel3Image === 'lemon') {
        setTimeout(function () {
            alert('You win! on bar')
            money += bet.value*100
            moneyUpdate()
        }, 1100)
    }
    if (reel1Image === 'bar' && reel2Image === 'bar' && reel3Image === 'bar') {
        setTimeout(function () {
            alert('You win! on bell')
            money += bet.value*50
            moneyUpdate()
        }, 1100)
    }
    if (reel1Image === 'bell' && reel2Image === 'bell' && reel3Image === 'bell') {
        setTimeout(function () {
            alert('You win! on orange')
            money += bet.value*50
            moneyUpdate()
        }, 1100)
    }
    if (reel1Image === 'orange' && reel2Image === 'orange' && reel3Image === 'orange') {
        setTimeout(function () {
            alert('You win! on plum')
            money += bet.value*20
            moneyUpdate()
        }, 1100)
    }
    if (reel1Image === 'plum' && reel2Image === 'plum' && reel3Image === 'plum') {
        setTimeout(function () {
            alert('You win! on cherry')
            money += bet.value*20
            moneyUpdate()
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
