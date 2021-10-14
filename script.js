function circleAnim() {
  var circle = document.querySelector('#circle');
  window.addEventListener('mousemove', function (details) {
    var xValue = details.pageX;
    var yValue = details.pageY;

    setTimeout(function () {
      circle.style.top = yValue + 'px';
      circle.style.left = xValue + 'px';
    }, 50);
  });
}

function mainAnim() {
  var tl = gsap.timeline();

  tl
    .from('nav img', {
      scale: 0.2,
      duration: 1,
      opacity: 0,
      ease: Power2.easeInOut
    })
    .from('nav a', {
      x: 30,
      opacity: 0,
      duration: 1,
      ease: Power2.easeInOut,
      stagger: 0.3
    })
    .to('h1', {
      opacity: 1,
      duration: 1,
      onStart: function () {
        $('h1').textillate({
          selector: '.texts',
          initialDelay: 0,
          autoStart: true,
          in: {
            effect: 'fadeInUp',
            delayScale: 1.5,
            delay: 17,
            sync: false,
            shuffle: false,
            reverse: false,
          },
          type: 'char'
        });
      }
    })
    .from('.fader', {
      opacity: 0,
      duration: 2,
      ease: Power2.easeInOut,
    });
}

function finalTextAnim() {
  let tlForText = gsap.timeline({
    scrollTrigger: {
      trigger: "#text",
      start: "top 70%",
    }
  });

  tlForText
    .to('#text h3', {
      opacity: 1,
      duration: 1,
      onStart: function () {
        $('h3').textillate({
          selector: '.texts',
          initialDelay: 0,
          autoStart: true,
          in: {
            effect: 'fadeInUp',
            delayScale: .9,
            delay: 19,
            sync: false,
            shuffle: false,
            reverse: false,
          },
          type: 'char'
        });
      }
    })
    .to('#text img', {
      opacity: 1,
      delay: 2.5,
      duration: 1,
      ease: Power2.easeInOut,
    });
}

circleAnim();
mainAnim();
finalTextAnim();