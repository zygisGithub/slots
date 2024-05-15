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
        '0': 'seven',
        '79': 'banana',
        '158': 'watermelon',
        '237': 'lemon',
        '316': 'bar',
        '395': 'bell',
        '474': 'orange',
        '553': 'plum',
        '632': 'cherry',
        '711': 'seven',
        '790': 'banana',
        '869': 'watermelon',
        '948': 'lemon',
        '1027': 'bar',
        '1106': 'bell',
        '1185': 'orange',
        '1264': 'plum',
        '1343': 'cherry',
        '1422': 'seven',
        '1501': 'banana',
        '1580': 'watermelon',
        '1659': 'lemon',
        '1738': 'bar',
        '1817': 'bell',
        '1896': 'orange',
        '1975': 'plum',
        '2054': 'cherry',
        '2133': 'seven',
        '2212': 'banana',
        '2291': 'watermelon',
        '2370': 'lemon',
        '2449': 'bar',
        '2528': 'bell',
        '2607': 'orange',
        '2686': 'plum',
        '2765': 'cherry',
        '2844': 'seven',
        '2923': 'banana',
        '3002': 'watermelon',
        '3081': 'lemon',
        '3160': 'bar',
        '3239': 'bell',
        '3318': 'orange',
        '3397': 'plum',
        '3476': 'cherry',
        '3555': 'seven',
        '3634': 'banana',
        '3713': 'watermelon',
        '3792': 'lemon',
        '3871': 'bar',
        '3950': 'bell',
        '4029': 'orange',
        '4108': 'plum',
        '4187': 'cherry',
        '4266': 'seven',
        '4345': 'banana',
        '4424': 'watermelon',
        '4503': 'lemon',
        '4582': 'bar',
        '4661': 'bell',
        '4740': 'orange',
        '4819': 'plum',
        '4898': 'cherry',
        '4977': 'seven',
        '5056': 'banana',
        '5135': 'watermelon',
        '5214': 'lemon',
        '5293': 'bar',
        '5372': 'bell',
        '5451': 'orange',
        '5530': 'plum',
        '5609': 'cherry',
        '5688': 'seven',
        '5767': 'banana',
        '5846': 'watermelon',
        '5925': 'lemon',
        '6004': 'bar',
        '6083': 'bell',
        '6162': 'orange',
        '6241': 'plum',
        '6320': 'cherry',
        '6399': 'seven',
        '6478': 'banana',
        '6557': 'watermelon',
        '6636': 'lemon',
        '6715': 'bar',
        '6794': 'bell',
        '6873': 'orange',
        '6952': 'plum',
        '7031': 'cherry',
        '7110': 'seven',
        '7189': 'banana',
        '7268': 'watermelon',
        '7347': 'lemon',
        '7426': 'bar',
        '7505': 'bell',
        '7584': 'orange',
        '7663': 'plum',
        '7742': 'cherry',
        '7821': 'seven',
        '7900': 'banana',
        '7979': 'watermelon',
        '8058': 'lemon',
        '8137': 'bar',
        '8216': 'bell',
        '8295': 'orange',
        '8374': 'plum',
        '8453': 'cherry',
        '8532': 'seven',
        '8611': 'banana',
        '8690': 'watermelon',
        '8769': 'lemon',
        '8848': 'bar',
        '8927': 'bell',
        '9006': 'orange',
        '9085': 'plum',
        '9164': 'cherry',
        '9243': 'seven',
        '9322': 'banana',
        '9401': 'watermelon',
        '9480': 'lemon',
        '9559': 'bar',
        '9638': 'bell',
        '9717': 'orange',
        '9796': 'plum',
        '9875': 'cherry',
        '9954': 'seven',
        '10033': 'banana',
        '10112': 'watermelon',
        '10191': 'lemon',
        '10270': 'bar',
        '10349': 'bell',
        '10428': 'orange',
        '10507': 'plum',
        '10586': 'cherry',
        '10665': 'seven',
        '10744': 'banana',
        '10823': 'watermelon',
        '10902': 'lemon',
        '10981': 'bar',
        '11060': 'bell',
        '11139': 'orange',
        '11218': 'plum',
        '11297': 'cherry',
        '11376': 'seven',
        '11455': 'banana',
        '11534': 'watermelon',
        '11613': 'lemon',
        '11692': 'bar',
        '11771': 'bell',
        '11850': 'orange',
        '11929': 'plum',
        '12008': 'cherry',
        '12087': 'seven',
        '12166': 'banana',
        '12245': 'watermelon',
        '12324': 'lemon',
        '12403': 'bar',
        '12482': 'bell',
        '12561': 'orange',
        '12640': 'plum',
        '12719': 'cherry',
        '12798': 'seven',
        '12877': 'banana',
        '12956': 'watermelon',
        '13035': 'lemon',
        '13114': 'bar',
        '13193': 'bell',
        '13272': 'orange',
        '13351': 'plum',
        '13430': 'cherry',
        '13509': 'seven',
        '13588': 'banana',
        '13667': 'watermelon',
        '13746': 'lemon',
        '13825': 'bar',
        '13904': 'bell',
        '13983': 'orange',
        '14062': 'plum',
        '14141': 'cherry',
        '14220': 'seven',
        '14299': 'banana',
        '14378': 'watermelon',
        '14457': 'lemon',
        '14536': 'bar',
        '14615': 'bell',
        '14694': 'orange',
        '14773': 'plum',
        '14852': 'cherry',
        '14931': 'seven',
        '15010': 'banana',
        '15089': 'watermelon',
        '15168': 'lemon',
        '15247': 'bar',
        '15326': 'bell',
        '15405': 'orange',
        '15484': 'plum',
        '15563': 'cherry',
        '15642': 'seven',
        '15721': 'banana',
        '15800': 'watermelon',
        '15879': 'lemon',
        '15958': 'bar',
        '16037': 'bell',
        '16116': 'orange',
        '16195': 'plum',
        '16274': 'cherry',
        '16353': 'seven',
        '16432': 'banana',
        '16511': 'watermelon',
        '16590': 'lemon',
        '16669': 'bar',
        '16748': 'bell',
        '16827': 'orange',
        '16906': 'plum',
        '16985': 'cherry',
        '17064': 'seven',
        '17143': 'banana',
        '17222': 'watermelon',
        '17301': 'lemon',
        '17380': 'bar',
        '17459': 'bell',
        '17538': 'orange',
        '17617': 'plum',
        '17696': 'cherry',
        '17775': 'seven',
        '17854': 'banana',
        '17933': 'watermelon',
        '18012': 'lemon',
        '18091': 'bar',
        '18170': 'bell',
        '18249': 'orange',
        '18328': 'plum',
        '18407': 'cherry',
        '18486': 'seven',
        '18565': 'banana',
        '18644': 'watermelon',
        '18723': 'lemon',
        '18802': 'bar',
        '18881': 'bell',
        '18960': 'orange',
        '19039': 'plum',
        '19118': 'cherry',
        '19197': 'seven',
        '19276': 'banana',
        '19355': 'watermelon',
        '19434': 'lemon',
        '19513': 'bar',
        '19592': 'bell',
        '19671': 'orange',
        '19750': 'plum',
        '19829': 'cherry',
        '19908': 'seven',
        '19987': 'banana',
        '20066': 'watermelon',
        '20145': 'lemon',
        '20224': 'bar',
        '20303': 'bell',
        '20382': 'orange',
        '20461': 'plum',
        '20540': 'cherry',
        '20619': 'seven',
        '20698': 'banana',
        '20777': 'watermelon',
        '20856': 'lemon',
        '20935': 'bar',
        '21014': 'bell',
        '21093': 'orange',
        '21172': 'plum',
        '21251': 'cherry',
        '21330': 'seven',
        '21409': 'banana',
        '21488': 'watermelon',
        '21567': 'lemon',
        '21646': 'bar',
        '21725': 'bell',
        '21804': 'orange',
        '21883': 'plum',
        '21962': 'cherry',
        '22041': 'seven',
        '22120': 'banana',
        '22199': 'watermelon',
        '22278': 'lemon',
        '22357': 'bar',
        '22436': 'bell',
        '22515': 'orange',
        '22594': 'plum',
        '22673': 'cherry',
        '22752': 'seven',
        '22831': 'banana',
        '22910': 'watermelon',
        '22989': 'lemon',
        '23068': 'bar',
        '23147': 'bell',
        '23226': 'orange',
        '23305': 'plum',
        '23384': 'cherry',
        '23463': 'seven',
        '23542': 'banana',
        '23621': 'watermelon',
        '23700': 'lemon',
        '23779': 'bar',
        '23858': 'bell',
        '23937': 'orange',
        '24016': 'plum',
        '24095': 'cherry',
        '24174': 'seven',
        '24253': 'banana',
        '24332': 'watermelon',
        '24411': 'lemon',
        '24490': 'bar',
        '24569': 'bell',
        '24648': 'orange',
        '24727': 'plum',
        '24806': 'cherry',
        '24885': 'seven',
        '24964': 'banana',
        '25043': 'watermelon',
        '25122': 'lemon',
        '25201': 'bar',
        '25280': 'bell',
        '25359': 'orange',
        '25438': 'plum',
        '25517': 'cherry',
        '25596': 'seven',
        '25675': 'banana',
        '25754': 'watermelon',
        '25833': 'lemon',
        '25912': 'bar',
        '25991': 'bell',
        '26070': 'orange',
        '26149': 'plum',
        '26228': 'cherry',
        '26307': 'seven',
        '26386': 'banana',
        '26465': 'watermelon',
        '26544': 'lemon',
        '26623': 'bar',
        '26702': 'bell',
        '26781': 'orange',
        '26860': 'plum',
        '26939': 'cherry',
        '27018': 'seven',
        '27097': 'banana',
        '27176': 'watermelon',
        '27255': 'lemon',
        '27334': 'bar',
        '27413': 'bell',
        '27492': 'orange',
        '27571': 'plum',
        '27650': 'cherry',
        '27729': 'seven',
        '27808': 'banana',
        '27887': 'watermelon',
        '27966': 'lemon',
        '28045': 'bar',
        '28124': 'bell',
        '28203': 'orange',
        '28282': 'plum',
        '28361': 'cherry'

    };

    const reel1Stop = Math.floor(Math.random() * 360) * 79
    const reel2Stop = Math.floor(Math.random() * 360) * 79
    const reel3Stop = Math.floor(Math.random() * 360) * 79

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
    if ((reel1Image === reel2Image || reel2Image === reel3Image) && reel1Image !== reel3Image) {
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
