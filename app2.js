var pubnub = new PubNub({
  subscribeKey: "sub-c-a1ad7926-5e0a-11e8-8ebf-f686a6d93a6b",
  publishKey: "pub-c-563cbabc-a399-4a76-830a-468a698efd4d"
});
var el = document.querySelector('#yellow');
var dynamics = false;
pubnub.addListener({
  message: function(message){
    var delivery = 0;
    var strike = 0;
    
    if(message.message.key == 'your-turn') {
       delivery = 0;
       const leftTriangle = document.querySelector('#left');
       leftTriangle.setAttribute('position','0.5 1.02  1');
       const rightTriangle = document.querySelector('#right');
       rightTriangle.setAttribute('position','-0.5 1.02 1');
       const centerTriangle = document.querySelector('#center');
       centerTriangle.setAttribute('position','0 1.02 1 ');
       const farLeftTriangle = document.querySelector('#far-left');
       farLeftTriangle.setAttribute('position','1 1.02  1');
       const farRightTriangle = document.querySelector('#far-right');
       farRightTriangle.setAttribute('position','-1 1.02 1');
       
    }
    if(message.message.key == 'center') {
          console.log("**delivery**"+delivery);
          removeDynamicBody();
          center();
    }
    else if(message.message.key == 'far-left') {
      removeDynamicBody();
      farLeft();
    }
    else if(message.message.key == 'left') {
      removeDynamicBody();
      left();
    }
    else if(message.message.key == 'far-right') {
      removeDynamicBody();
      farRight();
    }
    else if(message.message.key == 'right') {
      removeDynamicBody();
      right();
    }
    if(message.message.key == 'pins') {
      //console.log("**** PINS ****");
      if(message.message.pin == 1){
        //console.log("**** 1 ****");
          document.querySelector("#one").setAttribute('rotation', message.message.rotation);
        document.querySelector("#one").setAttribute('position', message.message.position);
      }
      if(message.message.pin == 2){
       // console.log("**** 2 ****");
          document.querySelector("#two").setAttribute('rotation', message.message.rotation);
        document.querySelector("#two").setAttribute('position', message.message.position);
      }
      if(message.message.pin == 3){
        //console.log("**** 3 ****");
          document.querySelector("#three").setAttribute('rotation', message.message.rotation);
        document.querySelector("#three").setAttribute('position', message.message.position);
      }
      if(message.message.pin == 4){
        //console.log("**** 4 ****");
          document.querySelector("#four").setAttribute('rotation', message.message.rotation);
        document.querySelector("#four").setAttribute('position', message.message.position);
      }
      if(message.message.pin == 5){
        //console.log("**** 5 ****");
          document.querySelector("#five").setAttribute('rotation', message.message.rotation);
        document.querySelector("#five").setAttribute('position', message.message.position);
      }
      if(message.message.pin == 6){
        //console.log("**** 6 ****");
          document.querySelector("#six").setAttribute('rotation', message.message.rotation);
        document.querySelector("#six").setAttribute('position', message.message.position);
      }
      if(message.message.pin == 7){
       // console.log("**** 7 ****");
          document.querySelector("#seven").setAttribute('rotation', message.message.rotation);
        document.querySelector("#seven").setAttribute('position', message.message.position);
      }
      if(message.message.pin == 8){
        //console.log("**** 8 ****");
          document.querySelector("#eight").setAttribute('rotation', message.message.rotation);
        document.querySelector("#eight").setAttribute('position', message.message.position);
      }
      if(message.message.pin == 9){
       // console.log("**** 9 ****");
          document.querySelector("#nine").setAttribute('rotation', message.message.rotation);
        document.querySelector("#nine").setAttribute('position', message.message.position);
      }
      if(message.message.pin == 10){
        //console.log("**** 10 ****");
          document.querySelector("#ten").setAttribute('rotation', message.message.rotation);
        document.querySelector("#ten").setAttribute('position', message.message.position);
      }
    }
    if(message.message.key == 'refresh')
      window.location.reload();
    }
});

pubnub.subscribe({
  channels: ['VR']
});

function center() {
  const slide = document.createElement('a-animation');
  slide.setAttribute('id', 'animate');
  slide.setAttribute('to', '0 1.325 -9.55');
  slide.setAttribute('from', 'this.object3D.position.x 1.325 3');
  slide.setAttribute('attribute', 'position');
  slide.setAttribute('dur', '3000');
  document.querySelector('#ball').appendChild(slide);
}

function farLeft() {
  const slide = document.createElement('a-animation');
  slide.setAttribute('id', 'animate');
  slide.setAttribute('to', '-0.8 1.325 -9.55');
  slide.setAttribute('from', '-0.8 1.325 3');
  slide.setAttribute('attribute', 'position');
  slide.setAttribute('dur', '3000');
  document.querySelector('#ball').appendChild(slide);
}

function right() {
  const slide = document.createElement('a-animation');
  slide.setAttribute('id', 'animate');
  slide.setAttribute('to', '0.4 1.325 -9.55');
  slide.setAttribute('from', '0.4 1.325 3');
  slide.setAttribute('attribute', 'position');
  slide.setAttribute('dur', '3000');
  document.querySelector('#ball').appendChild(slide);
}

function left() {
  const slide = document.createElement('a-animation');
  slide.setAttribute('id', 'animate');
  slide.setAttribute('to', '-0.4 1.325 -9.55');
  slide.setAttribute('from', '-0.4 1.325 3');
  slide.setAttribute('attribute', 'position');
  slide.setAttribute('dur', '3000');
  document.querySelector('#ball').appendChild(slide);
}

function farRight() {
    const slide = document.createElement('a-animation');
    slide.setAttribute('id', 'animate');
    slide.setAttribute('to', '0.8 1.325 -9.55');
    slide.setAttribute('from', '0.8 1.325 3');
    slide.setAttribute('attribute', 'position');
    slide.setAttribute('dur', '3000');
    document.querySelector('#ball').appendChild(slide);
}
function pins() {
      var down = [];
      var fall = []; var j = 0;
      down[0] = document.querySelector("#one").getAttribute('rotation').x;
      down[1] = document.querySelector("#two").getAttribute('rotation').x;
      down[2] = document.querySelector("#three").getAttribute('rotation').x;
      down[3] = document.querySelector("#four").getAttribute('rotation').x;
      down[4] = document.querySelector("#five").getAttribute('rotation').x;
      down[5] = document.querySelector("#six").getAttribute('rotation').x;
      down[6] = document.querySelector("#seven").getAttribute('rotation').x;
      down[7] = document.querySelector("#eight").getAttribute('rotation').x;
      down[8] = document.querySelector("#nine").getAttribute('rotation').x;
      down[9] = document.querySelector("#ten").getAttribute('rotation').x;
      for(var i = 0; i < 10; i++) {
         if(Math.trunc(down[i]) != 0 || -0){
            // console.log(i+'  '+down[i]);
            strike++;
            if(i == 0) {
              pubnub.publish({
                message: {
                  'key' : 'pins',
                  'pin' : 1,
                  'rotation' : document.querySelector("#one").getAttribute('rotation'),
                  'position' : document.querySelector("#one").getAttribute('position')
                },
                channel: 'VR1'
              });

            }
           if(i == 1) {
               pubnub.publish({
                message: {
                  'key' : 'pins',
                  'pin' : 2,
                  'rotation' : document.querySelector("#two").getAttribute('rotation'),
                  'position' : document.querySelector("#two").getAttribute('position')
                },
                channel: 'VR1'
              });
            }
           if(i == 2) {
               pubnub.publish({
                message: {
                  'key' : 'pins',
                  'pin' : 3,
                  'rotation' : document.querySelector("#three").getAttribute('rotation'),
                  'position' : document.querySelector("#three").getAttribute('position')
                },
                channel: 'VR1'
              });
            }
           if(i == 3) {
               pubnub.publish({
                message: {
                  'key' : 'pins',
                  'pin' : 4,
                  'rotation' : document.querySelector("#four").getAttribute('rotation'),
                  'position' : document.querySelector("#four").getAttribute('position')
                },
                channel: 'VR1'
              });
            }
           if(i == 4) {
               pubnub.publish({
                message: {
                  'key' : 'pins',
                  'pin' : 5,
                  'rotation' : document.querySelector("#five").getAttribute('rotation'),
                  'position' : document.querySelector("#five").getAttribute('position')
                },
                channel: 'VR1'
              });
            }
           if(i == 5) {
               pubnub.publish({
                message: {
                  'key' : 'pins',
                  'pin' : 6,
                  'rotation' : document.querySelector("#six").getAttribute('rotation'),
                  'position' : document.querySelector("#six").getAttribute('position')
                },
                channel: 'VR1'
              });
            }
           if(i == 6) {
               pubnub.publish({
                message: {
                  'key' : 'pins',
                  'pin' : 7,
                  'rotation' : document.querySelector("#seven").getAttribute('rotation'),
                  'position' : document.querySelector("#seven").getAttribute('position')
                },
                channel: 'VR1'
              });
            }
           if(i == 7) {
               pubnub.publish({
                message: {
                  'key' : 'pins',
                  'pin' : 8,
                  'rotation' : document.querySelector("#eight").getAttribute('rotation'),
                  'position' : document.querySelector("#eight").getAttribute('position')
                },
                channel: 'VR1'
              });
            }
           if(i == 8) {
               pubnub.publish({
                message: {
                  'key' : 'pins',
                  'pin' : 9,
                  'rotation' : document.querySelector("#nine").getAttribute('rotation'),
                  'position' : document.querySelector("#nine").getAttribute('position')
                },
                channel: 'VR1'
              });
            }
           if(i == 9) {
               pubnub.publish({
                message: {
                  'key' : 'pins',
                  'pin' : 10,
                  'rotation' : document.querySelector("#ten").getAttribute('rotation'),
                  'position' : document.querySelector("#ten").getAttribute('position')
                },
                channel: 'VR1'
              });
            }
         }
      }
}

function removeDynamicBody() {
  dynamics = false;
    document.getElementById("ball").removeAttribute('dynamic-body');
    document.getElementById("one").removeAttribute('dynamic-body');
    document.getElementById("two").removeAttribute('dynamic-body');
    document.getElementById("three").removeAttribute('dynamic-body');
    document.getElementById("four").removeAttribute('dynamic-body');
    document.getElementById("five").removeAttribute('dynamic-body');
    document.getElementById("six").removeAttribute('dynamic-body');
    document.getElementById("seven").removeAttribute('dynamic-body');
    document.getElementById("eight").removeAttribute('dynamic-body');
    document.getElementById("nine").removeAttribute('dynamic-body');
    document.getElementById("ten").removeAttribute('dynamic-body');
}

function dynamicBody() {
    dynamics = true;
    document.getElementById("ball").setAttribute('dynamic-body','mass:17.5');
    document.getElementById("one").setAttribute('dynamic-body','mass:1.25');
    document.getElementById("two").setAttribute('dynamic-body','mass:1.25');
    document.getElementById("three").setAttribute('dynamic-body','mass:1.25');
    document.getElementById("four").setAttribute('dynamic-body','mass:1.25');
    document.getElementById("five").setAttribute('dynamic-body','mass:1.25');
    document.getElementById("six").setAttribute('dynamic-body','mass:1.25');
    document.getElementById("seven").setAttribute('dynamic-body','mass:1.25');
    document.getElementById("eight").setAttribute('dynamic-body','mass:1.25');
    document.getElementById("nine").setAttribute('dynamic-body','mass:1.25');
    document.getElementById("ten").setAttribute('dynamic-body','mass:1.25');
}

AFRAME.registerComponent('track-position', {
  tick: function (time, timeDelta) {
    var currentPosition = this.el.object3D.position;
    if(dynamics == true) {
      console.log("dynamic body");
      this.el.components['dynamic-body'].syncToPhysics();  
    }
  }
});

var strike = 0;
var delivery = 0;
AFRAME.registerComponent("refresh", {
  init: function() {
    this.el.addEventListener('click', function (evt) {
      window.location.reload();
      pubnub.publish({
            message: {'key' : 'refresh'},
            channel: 'VR1'
      });
    });
  }
})

 AFRAME.registerComponent("far-left", {
  init: function() {
    this.el.addEventListener('click', function (evt) {
         dynamicBody();
         delivery++;
         checkDelivery();
         console.log("clicked far left");
         console.log(this.object3D.position);
          farLeft();
          pubnub.publish({
            message: {'key' : 'far-left'},
            channel: 'VR1'
          });
          setTimeout(pins, 2775);
    });
  }
})

AFRAME.registerComponent("left", {
  init: function() {
    this.el.addEventListener('click', function (evt) {
        dynamicBody();
         delivery++;
         checkDelivery();
         console.log("clicked far left");
         console.log(this.object3D.position);
          left();
          pubnub.publish({
            message: {'key' : 'left'},
            channel: 'VR1'
          });
         setTimeout(pins, 2775);
    });
  }
})

AFRAME.registerComponent("right", {
  init: function() {
    this.el.addEventListener('click', function (evt) {
        dynamicBody();
         delivery++;
         checkDelivery();
         console.log("clicked right");
         console.log(this.object3D.position);
          right();
          pubnub.publish({
            message: {'key' : 'right'},
            channel: 'VR1'
          });
          setTimeout(pins, 2775);
    });
  }
})

AFRAME.registerComponent("far-right", {
  init: function() {
    this.el.addEventListener('click', function (evt) {
        dynamicBody();
         delivery++;
         checkDelivery();
         console.log("clicked far right");
         console.log(this.object3D.position);
         farRight();
          pubnub.publish({
            message: {'key' : 'far-right'},
            channel: 'VR1'
          });
          setTimeout(pins, 2775);
    });
  }
})

AFRAME.registerComponent("center", {
  init: function() {
    this.el.addEventListener('click', function (evt) {
        dynamicBody();
         delivery++;
         checkDelivery();
         console.log("clicked");
         console.log(this.object3D.position);
         center();
          pubnub.publish({
            message: {'key' : 'center'},
            channel: 'VR1'
          });
          setTimeout(pins, 2775);
     });
  }
})

function checkDelivery() {
  if(delivery == 2){
    delivery = 0;
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
       pubnub.publish({
            message: {'key' : 'player1-turn'},
            channel: 'VR1'
       });
    }
}