
window.addEventListener('DOMContentLoaded', function () {
    var navContainer = document.getElementById('nav');
    var navRequest = new XMLHttpRequest();
  
    navRequest.open('GET', 'nav.html', true);
  
    navRequest.onload = function () {
      if (navRequest.status >= 200 && navRequest.status < 400) {
        navContainer.innerHTML = navRequest.responseText;
      }
    };
  
    navRequest.send();
  });

window.addEventListener('DOMContentLoaded', function () {
    var headRequest = new XMLHttpRequest();
  
    headRequest.open('GET', 'header.html', true);
  
    headRequest.onload = function () {
      if (headRequest.status >= 200 && headRequest.status < 400) {
        var headContent = headRequest.responseText;
        document.head.innerHTML = headContent;
      }
    };
  
    headRequest.send();
  });

  window.addEventListener('DOMContentLoaded', function () {
    var menuContainer = document.getElementById('menu');
    var menuRequest = new XMLHttpRequest();
  
    menuRequest.open('GET', 'menu.html', true);
  
    menuRequest.onload = function () {
      if (menuRequest.status >= 200 && menuRequest.status < 400) {
        menuContainer.innerHTML = menuRequest.responseText;
      }
    };
  
    menuRequest.send();
  });

  window.addEventListener('DOMContentLoaded', function () {
    var footerContainer = document.getElementById('footer');
    var footerRequest = new XMLHttpRequest();
  
    footerRequest.open('GET', 'footer.html', true);
  
    footerRequest.onload = function () {
      if (footerRequest.status >= 200 && footerRequest.status < 400) {
        footerContainer.innerHTML = footerRequest.responseText;
      }
    };
  
    footerRequest.send();
  });