parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"HdJB":[function(require,module,exports) {
var n="\n.skin *{box-sizing: border-box;margin: 0;padding: 0;}\n.skin *::before{box-sizing: border-box;}\n.skin *::after{box-sizing: border-box;}\n\n.skin{\n    background: #ffe600;\n    min-height: 50vh;\n    position: relative;\n}\n@keyframes wave{\n    0%{\n        transform: rotate(0deg);\n    }\n    33%{\n        transform: rotate(5deg);\n    }\n    66%{\n        transform: rotate(-5deg);\n    }\n    100%{\n        transform: rotate(0deg);\n    }\n}\n.nose:hover{\n    transform-origin: center bottom;\n    animation: wave 300ms infinite linear;\n}\n.nose{\n    border: 10px solid red;\n    border-color: black transparent  transparent;\n    border-bottom: none;\n    width: 10px;\n    height: 10px;\n    position: absolute;\n    left: 50%;\n    top: 140px;\n    margin-left: -10px;\n    z-index: 10;\n}\n\n.yuan{\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: -16px;\n    left: -10px;\n    background: black;\n    border-radius: 10px 10px 0 0;\n}\n\n.eye{\n    width : 64px ;\n    height: 64px ;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    border:3px solid black;\n    background: #2E2E2E;\n    border-radius: 50%;\n    \n}\n.eye::before{\n    content: '';\n    display: block;\n    width: 30px;\n    height: 30px;\n    border: 3px solid #000;\n    background: #fff;\n    border-radius: 50%;\n    position: relative;\n    left: 6px;\n}\n.eye.left{\n    transform: translateX(-120px);\n}\n.eye.right{\n    transform: translateX(120px);\n}\n\n\n.mouth{\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    margin-left: -100px;\n    top : 170px;\n}\n\n.mouth .up{\n    position: relative;\n    top: -10px;\n    z-index: 1;\n}\n.mouth .up .lip{\n    width: 100px;\n    height: 30px;\n    border: 3px solid black;\n    border-top: none;\n    position: absolute;\n    left: 50%;\n    background: #FFE600;\n}\n\n.mouth .up .lip.left{\n    border-radius: 0 0 0 50px;\n    border-right:none;\n    transform: rotate(-15deg) ;\n    margin-left: -100px;\n}\n.mouth .up .lip.right{\n    border-radius: 0 0 50px 0;\n    border-left:none;\n    transform: rotate(15deg) ;\n   \n}\n\n\n.mouth .down{\n    height: 170px;\n    width: 200px;\n    position: absolute;\n    overflow: hidden;\n}\n\n.mouth .down .yuan1{\n    width: 150px;\n    height: 1000px;\n    border: 3px solid black;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -75px;\n    border-radius: 75px/300px;\n    background: #9B000A;\n    overflow: hidden;\n}\n\n.mouth .down .yuan1 .yuan2{\n    width: 150px;\n    height: 300px;\n    position: absolute;\n    bottom: -165px;\n    left: 50%;\n    margin-left: -75px;\n    border-radius: 75px 75px 0 0;\n    background: #FF485F;\n}\n\n.face{\n    width: 88px;\n    height: 88px;\n    border: 3px solid black;\n    position: absolute;\n    left: 50%;\n    top: 210px;\n    margin-left:-44px ;\n    border-radius: 50%;\n    background: #FF0000;\n}\n\n.face.left{\n    transform: translateX(-180px);\n}\n.face.right{\n    transform: translateX(180px);\n}\n",e={id:void 0,time:100,ui:{demo:document.querySelector("#demo"),demo2:document.querySelector("#demo2")},events:{"#btnPause":"pause","#btnPlay":"play","#btnSlow":"slow","#btnNormal":"normal","#btnFast":"fast"},n:1,init:function(){e.ui.demo.innerText=n.substr(0,e.n),e.ui.demo2.innerHTML=n.substr(0,e.n),e.bindEvents(),e.play()},bindEvents:function(){for(var n in e.events)if(e.events.hasOwnProperty(n)){var t=e.events[n];document.querySelector(n).onclick=e[t]}},run:function(){e.n+=1,e.n>n.length?window.clearInterval(e.id):(e.ui.demo.innerText=n.substr(0,e.n),e.ui.demo2.innerHTML=n.substr(0,e.n),e.ui.demo.scrollTop=e.ui.demo.scrollHeight)},play:function(){e.id=setInterval(e.run,e.time),btnPlay.onclick=null},pause:function(){window.clearInterval(e.id),btnPlay.onclick=e.play},slow:function(){e.pause(),e.time=300,e.play()},normal:function(){e.pause(),e.time=100,e.play()},fast:function(){e.pause(),e.time=0,e.play()}};e.init();
},{}]},{},["HdJB"], null)
//# sourceMappingURL=test.06fd372d.js.map