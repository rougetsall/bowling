function farLeft() {
    const slide = document.createElement('a-animation');
    slide.setAttribute('id', 'animate');
    slide.setAttribute('to', '-0.8 1.325 -9.55');
    slide.setAttribute('from', '-0.8 1.325 3');
    slide.setAttribute('attribute', 'position');
    slide.setAttribute('dur', '3000');
    document.querySelector('#green').appendChild(slide);
  }
  function center() {
    const slide = document.createElement('a-animation');
    slide.setAttribute('id', 'animate');
    slide.setAttribute('to', '0 1.325 -9.55');
    slide.setAttribute('from', '0 1.325 3');
    slide.setAttribute('attribute', 'position');
    slide.setAttribute('dur', '3000');
    document.querySelector('#green').appendChild(slide);
  }
  function left() {
    const slide = document.createElement('a-animation');
    slide.setAttribute('id', 'animate');
    slide.setAttribute('to', '-0.4 1.325 -9.55');
    slide.setAttribute('from', '-0.4 1.325 3');
    slide.setAttribute('attribute', 'position');
    slide.setAttribute('dur', '3000');
    document.querySelector('#green').appendChild(slide);
  }
  function right() {
    const slide = document.createElement('a-animation');
    slide.setAttribute('id', 'animate');
    slide.setAttribute('to', '0.4 1.325 -9.55');
    slide.setAttribute('from', '0.4 1.325 3');
    slide.setAttribute('attribute', 'position');
    slide.setAttribute('dur', '3000');
    document.querySelector('#green').appendChild(slide);
  }
  function farRight(){
    const slide = document.createElement('a-animation');
    slide.setAttribute('id', 'animate');
    slide.setAttribute('to', '0.8 1.325 -9.55');
    slide.setAttribute('from', '0.8 1.325 3');
    slide.setAttribute('attribute', 'position');
    slide.setAttribute('dur', '3000');
    document.querySelector('#green').appendChild(slide);
  }
  AFRAME.registerComponent("far-right", {
    init: function() {
    this.el.addEventListener('click', function (evt) { 
    farRight();
    });
    }
  })
  AFRAME.registerComponent("right", {
    init: function() {
    this.el.addEventListener('click', function (evt) { 
    right();
    });
    }
  })
  AFRAME.registerComponent("center", {
    init: function() {
    this.el.addEventListener('click', function (evt) { 
    center();
    });
    }
  })
  AFRAME.registerComponent("left", {
    init: function() {
    this.el.addEventListener('click', function (evt) { 
    left();
    });
    }
  })
  AFRAME.registerComponent("far-left", {
    init: function() {
    this.el.addEventListener('click', function (evt) { 
    farLeft();
    });
    }
  })
  document.querySelector("#pinID").getAttribute('rotation').x;
  for(var i = 0; i < 10; i++) {
    if(Math.trunc(down[i]) != 0 || -0){
    strike++;
    }
  }
  AFRAME.registerComponent("refresh", {
    init: function() {
    this.el.addEventListener('click', function (evt) {
    window.location.reload();
    });
    }
  });
  AFRAME.registerComponent('move-rig', {
    init: function () {
    document.querySelector("#center").addEventListener('click', this.moveRig.bind(this));
    document.querySelector("#left").addEventListener('click', this.moveRig.bind(this));
    document.querySelector("#far-left").addEventListener('click', this.moveRig.bind(this));
    document.querySelector("#right").addEventListener('click', this.moveRig.bind(this));
    document.querySelector("#far-right").addEventListener('click', this.moveRig.bind(this));
    },
    moveRig: function () {
    var camPos = document.querySelector("#wrapper");
    var position = camPos.getAttribute("position");
    camPos.setAttribute("position",'0 2 6'); 
    }
  });
  var pubnub = new PubNub({
    subscribeKey: "sub-c-a1ad7926-5e0a-11e8-8ebf-f686a6d93a6b",
    publishKey: "pub-c-563cbabc-a399-4a76-830a-468a698efd4d"
  });
  pubnub.publish({
    message: {'key' : 'refresh'},
    channel: 'VR'
   });
const leftTriangle = document.querySelector('#left');
leftTriangle.setAttribute('position','0 0 0');
const rightTriangle = document.querySelector('#right');
rightTriangle.setAttribute('position','0 0 0');
const centerTriangle = document.querySelector('#center');
centerTriangle.setAttribute('position','0 0 0');
const farLeftTriangle = document.querySelector('#far-left');
farLeftTriangle.setAttribute('position','0 0 0');
const farRightTriangle = document.querySelector('#far-right');
farRightTriangle.setAttribute('position','0 0 0');
const leftTriangle = document.querySelector('#left');
leftTriangle.setAttribute('position','0.5 1.02 1');
const rightTriangle = document.querySelector('#right');
rightTriangle.setAttribute('position','-0.5 1.02 1');
const centerTriangle = document.querySelector('#center');
centerTriangle.setAttribute('position','0 1.02 1');
const farLeftTriangle = document.querySelector('#far-left');
farLeftTriangle.setAttribute('position','1 1.02 1');
const farRightTriangle = document.querySelector('#far-right');
farRightTriangle.setAttribute('position','-1 1.02 1');
for(var i = 0; i < 10; i++) {
    if(Math.trunc(down[i]) != 0 || -0){
    strike++;
    if(i == 0) {
    pubnub.publish({
    message: {
    'key' : 'pins',
    'pin' : 1,
    'rotation' : document.querySelector("#one").getAttribute('rotation'),
    'position' : document.querySelector("#one").getAttribute('position')
    },
    channel: 'VR'
    });
    }
    }
  }
  AFRAME.registerComponent('track-position', {
    tick: function (time, timeDelta) {
    var currentPosition = this.el.object3D.position;
    if(dynamics == true) {
    this.el.components['dynamic-body'].syncToPhysics(); 
    }
    }
  });
  function dynamicBody() {
    dynamics = true;
    document.getElementById("green").setAttribute('dynamic-body','mass:17.5');
    document.getElementById("one").setAttribute('dynamic-body','mass:1.25');
  }
  function removeDynamicBody() {
    dynamics = false;
    document.getElementById("green").removeAttribute('dynamic-body');
    document.getElementById("one").removeAttribute('dynamic-body');
  }
  pubnub.addListener({
    message: function(message){
      if(message.message.key == 'center') {
         center();
      } else if(message.message.key == 'far-left') {
         farLeft();
      } else if(message.message.key == 'far-right') {
         farRight();
      } else if(message.message.key == 'left') {
         left();
      } else if(message.message.key == 'right') {
         right();
      }
      if(message.message.key == 'pins') {
         // logic for replicating falling of pins
      }
      if(message.message.key == 'refresh') { 
         // code to refresh the page at the same time when the other player refreshes their screen
      }
    }
  });
  pubnub.subscribe({
    channels: ['VR']
  });
  if(message.message.key == 'pins') {
    if(message.message.pin == 1){
      document.querySelector("#one").setAttribute('rotation', message.message.rotation);
      document.querySelector("#one").setAttribute('position', message.message.position);
    }
  }