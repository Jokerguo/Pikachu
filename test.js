const string = `
.skin *{box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before{box-sizing: border-box;}
.skin *::after{box-sizing: border-box;}

.skin{
    background: #ffe600;
    min-height: 50vh;
    position: relative;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
}
.nose{
    border: 10px solid red;
    border-color: black transparent  transparent;
    border-bottom: none;
    width: 10px;
    height: 10px;
    position: absolute;
    left: 50%;
    top: 140px;
    margin-left: -10px;
    z-index: 10;
}

.yuan{
    width: 20px;
    height: 6px;
    position: absolute;
    top: -16px;
    left: -10px;
    background: black;
    border-radius: 10px 10px 0 0;
}

.eye{
    width : 64px ;
    height: 64px ;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    border:3px solid black;
    background: #2E2E2E;
    border-radius: 50%;
    
}
.eye::before{
    content: '';
    display: block;
    width: 30px;
    height: 30px;
    border: 3px solid #000;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 6px;
}
.eye.left{
    transform: translateX(-120px);
}
.eye.right{
    transform: translateX(120px);
}


.mouth{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top : 170px;
}

.mouth .up{
    position: relative;
    top: -10px;
    z-index: 1;
}
.mouth .up .lip{
    width: 100px;
    height: 30px;
    border: 3px solid black;
    border-top: none;
    position: absolute;
    left: 50%;
    background: #FFE600;
}

.mouth .up .lip.left{
    border-radius: 0 0 0 50px;
    border-right:none;
    transform: rotate(-15deg) ;
    margin-left: -100px;
}
.mouth .up .lip.right{
    border-radius: 0 0 50px 0;
    border-left:none;
    transform: rotate(15deg) ;
   
}


.mouth .down{
    height: 170px;
    width: 200px;
    position: absolute;
    overflow: hidden;
}

.mouth .down .yuan1{
    width: 150px;
    height: 1000px;
    border: 3px solid black;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9B000A;
    overflow: hidden;
}

.mouth .down .yuan1 .yuan2{
    width: 150px;
    height: 300px;
    position: absolute;
    bottom: -165px;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px 75px 0 0;
    background: #FF485F;
}

.face{
    width: 88px;
    height: 88px;
    border: 3px solid black;
    position: absolute;
    left: 50%;
    top: 210px;
    margin-left:-44px ;
    border-radius: 50%;
    background: #FF0000;
}

.face.left{
    transform: translateX(-180px);
}
.face.right{
    transform: translateX(180px);
}
`

const player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: () => {
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.bindEvents()
    player.play()
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key] 
        document.querySelector(key).onclick = player[value]
      }
    }

  },
  run: () => {
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight
  },
  play: () => {
    player.id = setInterval(player.run, player.time)
    btnPlay.onclick = null
  },
  
  pause: () => {
    window.clearInterval(player.id)
    btnPlay.onclick = player.play

  },
  slow: () => {
    player.pause()
    player.time = 300
    player.play()
  },
  normal: () => {
    player.pause()
    player.time = 100
    player.play()
  },
  fast: () => {
    player.pause()
    player.time = 0
    player.play()
  }
}

player.init()