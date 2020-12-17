let TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  let i = this.loopNum % this.toRotate.length;
  let fullTxt = this.toRotate[i];

  if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
  }

  setTimeout(function () {
      that.tick();
  }, delta);
};


function pageLoad () {
  
  function rotate() {
    let elements = document.getElementsByClassName('txt-rotate');
    console.log(elements);
    console.log(elements.length);
    for (let i = 0; i < elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-rotate');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }

    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 2px solid #fff }";
    document.body.appendChild(css);
  }
  
  const root = document.getElementById('root');

  const content = root.innerHTML;
  root.innerHTML = '';

  root.insertAdjacentHTML('beforeend', `
    <div id="preloader">
      <img src="../img/preloader.png" alt="">
    </div>
  `);

  setTimeout(() => {
    document.getElementById('preloader').remove();
    root.innerHTML = content;
    rotate();
  }, 3000);
  
}

window.addEventListener('load', pageLoad);
