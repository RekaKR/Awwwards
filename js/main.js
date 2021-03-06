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


function pageLoad() {
  
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
  
  function change() {
    const solarLogo = document.getElementById("solar-logo");
    const changeText = document.getElementById("change-text");
  
    function lineIn() {
      changeText.classList.add('toggle');
    }

    function lineOut() {
      changeText.classList.remove('toggle');
    }

    solarLogo.addEventListener('mouseover', lineIn);
    solarLogo.addEventListener('mouseout', lineOut);
  }  

  const root = document.getElementById('root');

  root.insertAdjacentHTML('beforeend', `
    <div id="preloader">
      <img src="../img/preloader.png" alt="">
    </div>
  `);

  setTimeout(() => {
    document.getElementById('preloader').remove();
    root.insertAdjacentHTML('beforeend', `
      <div class="navbar">
        <div class="container">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 330 460" enable-background="new 0 0 330 460" xml:space="preserve">
            <path
              d="M0,0v347.556c0.026,23.5,13.761,45.929,36.819,56.062L165,460l128.182-56.382c23.058-10.133,36.793-32.562,36.818-56.062V0
        H0z M325,345c-0.024,22.989-13.343,44.932-35.703,54.844L165,455L40.703,399.844C18.344,389.932,5.025,367.989,5,345V5h320V345z">
            </path>
            <path
              d="M175,349.672h22.734c-3.686,16.095-11.701,30.581-22.734,42.118V349.672L175,349.672z M132.266,349.672H155v42.118
        C143.967,380.253,135.952,365.767,132.266,349.672L132.266,349.672z M196.484,304.976c2.246,7.854,3.516,16.117,3.516,24.692h-25
        C175,317.063,184.353,306.691,196.484,304.976L196.484,304.976z M133.516,304.976C145.648,306.691,155,317.063,155,329.668h-25
        C130,321.093,131.271,312.83,133.516,304.976L133.516,304.976z M253.672,269.656H265v60.012h-45c0-10.144-1.411-19.973-3.984-29.303
        l9.609-2.187C239.324,294.369,250.101,283.462,253.672,269.656L253.672,269.656L253.672,269.656z M65,269.656h11.328
        c3.572,13.806,14.348,24.713,28.047,28.522l9.609,2.187c-2.573,9.33-3.984,19.159-3.984,29.303H65V269.656L65,269.656z M165,236.916
        c5.373,17.575,12.764,34.264,21.953,49.775c-8.74,2.656-16.348,7.822-21.953,14.768c-5.605-6.946-13.212-12.112-21.953-14.768
        C152.236,271.18,159.628,254.491,165,236.916L165,236.916z M265,101.655v147.997h-11.328c-2.923-11.324-10.691-20.683-20.938-25.786
        l8.047-67.278C243.371,135.78,252.058,116.848,265,101.655L265,101.655z M65,101.655c12.943,15.193,21.629,34.125,24.219,54.933
        l8.047,67.278c-10.246,5.103-18.014,14.462-20.938,25.786H65V101.655L65,101.655z M165,30c-9.32,10.577-15,24.422-15,39.617
        c0.553,33.366,4.645,66.664,5,100.02c0.74,31.087-8.584,60.285-19.922,88.767c-3.777,7.871-7.864,15.575-11.953,23.286
        l-12.031-2.422c-10.825-2.165-17.867-12.693-15.703-23.521c1.894-9.474,10.231-16.053,19.531-16.097l4.375,0.469l-9.766-81.578
        C106.34,122.214,87.602,90.349,60,69.617c-4.743-3.562-9.769-6.819-15-9.689v289.744h66.875
        c5.001,27.15,19.939,50.803,40.938,67.045c4.995,3.442,9.178,7.984,12.187,13.283c3.01-5.299,7.193-9.841,12.188-13.283
        c20.998-16.242,35.937-39.895,40.937-67.045H285V59.928c-5.231,2.87-10.257,6.127-15,9.689
        c-27.601,20.732-46.339,52.597-49.531,88.924l-9.766,81.578l4.375-0.469c9.3,0.044,17.638,6.623,19.531,16.097
        c2.165,10.828-4.877,21.356-15.703,23.521l-12.031,2.422c-4.089-7.711-8.175-15.415-11.953-23.286
        c-11.337-28.482-20.661-57.68-19.922-88.767c0.355-33.356,4.448-66.654,5-100.02C180,54.422,174.32,40.577,165,30L165,30z">
            </path>
          </svg>
          <p>Sign the petition to the President of Ukraine for the construction of the metro in Odessa</p>
          <img class="hand" src="../img/hand.svg" alt="yellow hand sign">
        </div>
      </div>

      <header>
        <img id="logo" src="../img/metro_logo_header.svg" alt="metro logo">
        <div class="links">
          <p>History</p>
          <p>Branding</p>
          <p>Communication</p>
          <p>Globalization</p>
        </div>

        <div class="social">
          <div class="container">
            <a href="www.facebook.com">
              <svg id="facebook" width="8" height="17" viewBox="0 0 8 17" enable-background="new 0 0 8 17">
                <path d="M5.3,5.6V4.1c0-0.2,0-0.3,0-0.5c0-0.1,0.1-0.2,0.1-0.4
      C5.6,3.1,5.7,3,5.8,3c0.2-0.1,0.4-0.1,0.7-0.1H8V0H5.6C4.5-0.1,3.5,0.2,2.7,1C2,1.8,1.7,2.8,1.8,3.8v1.8H0v2.9h1.8V17h3.6V8.5h2.4
      L8,5.6L5.3,5.6L5.3,5.6z"></path>
              </svg>
            </a>

            <a href="www.twitter.com">
              <svg id="twitter" width="18" height="15" viewBox="0 0 18 15" enable-background="new 0 0 18 15">
                <path d="M18,1.8c-0.7,0.3-1.4,0.5-2.1,0.6c0.8-0.5,1.4-1.2,1.6-2.1
  C16.8,0.7,16,1,15.2,1.2C14.5,0.4,13.5,0,12.5,0c-2.1,0-3.7,1.7-3.7,3.8c0,0.3,0,0.6,0.1,0.9c-3-0.2-5.8-1.6-7.6-4
  C0.9,1.3,0.8,1.9,0.8,2.6c0,1.3,0.6,2.4,1.7,3.2c-0.6,0-1.2-0.2-1.7-0.5v0c0,1.8,1.2,3.3,3,3.7C3.4,9.1,3,9.2,2.7,9.2
  c-0.2,0-0.5,0-0.7-0.1c0.5,1.5,1.9,2.6,3.4,2.6c-1.3,1-2.9,1.6-4.6,1.6c-0.3,0-0.6,0-0.9-0.1C1.7,14.4,3.6,15,5.7,15
  c6.8,0,10.5-5.8,10.5-10.8l0-0.5C16.9,3.2,17.5,2.5,18,1.8z"></path>
              </svg>
            </a>

            <a href="www.telegram.com">
              <svg id="telegram" width="20" height="17" viewBox="0 0 272.2 229.3" enable-background="new 0 0 272.2 229.3">
                <path d="M102,214.6c0.8-11,1.4-21.5,2.2-31.9c0.7-8.6,1.6-17.2,2.1-25.9c0.2-4.5,1.9-7.6,5.3-10.6
  c30.7-27.8,61.3-55.9,91.9-83.8c6.1-5.6,12.3-11.2,18.4-16.9c1.2-1.1,2.2-2.4,3.4-3.7c-3.3-4-6.2-1.9-8.9-0.2
  c-7.7,4.7-15.2,9.5-22.8,14.3c-39.6,24.9-79.1,49.8-118.7,74.6c-1.7,1-4.4,1.5-6.3,1c-20.4-6-40.7-12.1-60.9-18.6
  c-2.9-0.9-6.4-3.6-7.4-6.3c-1.4-4.1,2.1-7.3,5.6-8.9c11.3-4.9,22.7-9.5,34.1-13.9c70.8-27.4,141.5-54.7,212.3-81.9
  c13.1-5,20.4,0.3,19.8,14.3c-0.1,2.8-0.7,5.6-1.3,8.3c-12.9,60.4-25.8,120.7-38.7,181.1c-1.1,5.3-2.2,10.8-4.1,15.9
  c-2.6,7-7.7,9.3-14.8,6.9c-2.9-1-5.8-2.5-8.3-4.3c-18.9-13.9-37.8-27.8-56.5-41.9c-2.4-1.8-3.8-2.2-6.2,0.2
  c-8.2,8.3-16.7,16.3-25.1,24.3C113,210.6,108.8,214.4,102,214.6z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="built-by">
          <span>Built by</span>
          <span id="change-text">SOLAR Digital</span>
          <img id="solar-logo" src="../img/solar_logo.svg" alt="Solar logo">
        </div>
      </header>

      <main>
        <div class="sidebar">
          <div class="top">
            <p>Eng</p>
            <p>Ua</p>
            <p>Rus</p>
          </div>
          <div class="bottom">
            <p>Scroll</p>
            <div class="container">
              <div class="line1"></div>
              <div class="line2"></div>
              <div class="line3"></div>
            </div>
          </div>
        </div>

        <div class="left">
          <div class="blue-circle"></div>
          <div class="red-circle"></div>
          <h1><span class="thick">Real Branding</span> <span class="thin">of Unreal Subway</span></h1>
          <div class="text-changing-text">
            <p>There is no subway in Odesa</p>
            <span class="txt-rotate" data-period="500" data-rotate='[ "AGAIN", "ANYWHERE", "AND NEVER WAS ANY", "BY THE WAY", "YET", "FOR A LONG TIME", "FOR SOME REASON", "AT ALL", "AND IT???S SAD", "END OF STORY" ]'><span class="wrap"></span></span>
          </div>
          <div class="explain">
            <p>We???ve gone crazy and decided to build it ourselves pretend like it already exists.</p>
          </div>
        </div>

        <div class="right">
          <div class="train"><img src="../img/train.svg" alt=""></div>
          <div class="blue-circle"></div>
          <div class="red-circle"></div>
          <img class="hero" src="../img/duke.png" alt="Duke statue">
        </div>
      </main>
    `);
    rotate();
    change();
  }, 3000);
}

window.addEventListener('load', pageLoad);
