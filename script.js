document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        var el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
        var nav = document.getElementById('main-nav');
        if(window.getComputedStyle(nav).display === 'block' && document.getElementById('menu-toggle').getAttribute('aria-expanded') === 'true'){
          toggleMenu();
        }
      }
    });
  });


  var btn = document.getElementById('menu-toggle');
  btn.addEventListener('click', toggleMenu);
  function toggleMenu(){
    var nav = document.getElementById('main-nav');
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    if(!expanded){
      nav.style.display = 'block';
    } else {
      nav.style.display = '';
    }
  }

  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    status.textContent = '';
    var email = document.getElementById('email').value.trim();
    if(email.indexOf('@') === -1){
      status.textContent = 'Пожалуйста, введите корректный email (без @ не получится).';
      status.style.color = 'crimson';
      return;
    }
    status.textContent = 'Форма успешно отправлена (имитация). Спасибо!';
    status.style.color = 'green';
    form.reset();
  });
});
