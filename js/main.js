function pageLoad () {
  const root = document.getElementById('root');
  const content = root.innerHTML;
  root.innerHTML = '';

  root.insertAdjacentHTML('beforeend', `
    <div id="preloader">
      <img src="../img/preloader.png" alt="">
    </div>
  `);
  setTimeout(() => {
    root.innerHTML = content;
  }, 3000);
}

window.addEventListener('load', pageLoad);
