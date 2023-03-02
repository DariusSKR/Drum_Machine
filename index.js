$(document).ready(function () {
  $(document).keypress(function (e) {
    // console.log(e)
    let a = e.key.toUpperCase()
    var p = $(`.${a}`)
    if (e.key == 'q') {
      qPressed()
      // var p = $('.Q')
      p.hide(150).show(150)
      // p.css('background-color', 'yellow'),
      // p.queue(function () {
      //   p.css('background-color', 'red')
      // })

      // $('.Q').animate({ height: '50px' }, 1000)
    }
    if (e.key == 'w') {
      wPressed()
      // var z = $('.W')
      p.hide(150).show(150)
    }
    if (e.key == 'e') {
      ePressed()
      p.hide(150).show(150)
    }

    if (e.key == 'a') {
      aPressed()
      p.hide(150).show(150)
    }

    if (e.key == 's') {
      sPressed()
      p.hide(150).show(150)
    }
    if (e.key == 'd') {
      dPressed()
      p.hide(150).show(150)
    }

    if (e.key == 'z') {
      zPressed()
      p.hide(150).show(150)
    }

    if (e.key == 'x') {
      xPressed()
      p.hide(150).show(150)
    }
    if (e.key == 'c') {
      cPressed()
      p.hide(150).show(150)
    }
  })

  $('.Q').click(function () {
    qPressed()
  })
  $('.W').click(function () {
    wPressed()
  })
  $('.E').click(function () {
    ePressed()
  })
  $('.Aa').click(function () {
    aPressed()
  })
  $('.S').click(function () {
    sPressed()
  })
  $('.D').click(function () {
    dPressed()
  })
  $('.Z').click(function () {
    zPressed()
  })
  $('.X').click(function () {
    xPressed()
  })
  $('.C').click(function () {
    cPressed()
  })
})

// const newspaperSpinning = [{ transform: 'background-color:yellow' }]

// const newspaperTiming = {
//   duration: 2000,
//   iterations: 1,
// }

// let qDiv = document.querySelector('#Q')
let audioHeater1 = document.querySelector('#Heater-1')
let audioHeater2 = document.querySelector('#Heater-2')
let audioHeater3 = document.querySelector('#Heater-3')

let audioHeater4 = document.querySelector('#Heater-4')
let clap = document.querySelector('#Clapp')
let openHH = document.querySelector('#Open-HH')

let kickAndHat = document.querySelector('#Kick-and-hat')
let kick = document.querySelector('#Kick')
let closedHH = document.querySelector('#Closed-HH')

let display = document.querySelector('.display')

const qPressed = () => {
  audioHeater1.play()
  // qDiv.animate(newspaperSpinning, newspaperTiming)
  display.innerHTML = 'Q'
}

const wPressed = () => {
  audioHeater2.play()
  display.innerHTML = 'W'
}
const ePressed = () => {
  audioHeater3.play()
  display.innerHTML = 'E'
}

const aPressed = () => {
  audioHeater4.play()
  display.innerHTML = 'A'
}

const sPressed = () => {
  clap.play()
  display.innerHTML = 'S'
}

const dPressed = () => {
  openHH.play()
  display.innerHTML = 'D'
}

const zPressed = () => {
  kickAndHat.play()
  display.innerHTML = 'Z'
}

const xPressed = () => {
  kick.play()
  display.innerHTML = 'X'
}

const cPressed = () => {
  closedHH.play()
  display.innerHTML = 'C'
}
