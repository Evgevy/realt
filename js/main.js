document.addEventListener("DOMContentLoaded", function () {

    // Маска телефона
    document.querySelectorAll('input[name="phone"]').forEach(input => {
      input.addEventListener('input', function () {
        let x = this.value.replace(/\D/g, '').substring(0, 11);
        let formatted = '';
    
        if (x.length > 0) formatted = '+7 (' + x.substring(1, 4);
        if (x.length >= 4) formatted += ') ' + x.substring(4, 7);
        if (x.length >= 7) formatted += '-' + x.substring(7, 9);
        if (x.length >= 9) formatted += '-' + x.substring(9, 11);
    
        this.value = formatted;
      });
    });
  
    // Swiper
    const marketSwiper = new Swiper(".market-slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
  
      navigation: {
        nextEl: ".market-next",
        prevEl: ".market-prev",
      },
    });

    const agentSwiper = new Swiper(".agent-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        breakpoints: {
          550: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
          }
        },
        navigation: {
          nextEl: ".agent-next",
          prevEl: ".agent-prev",
        },
    });


    const burger = document.getElementById('burgerBtn');
    const menu = document.getElementById('mobileMenu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });


    const hero = document.getElementById('heroBottom');

    function initTicker() {
        if (window.innerWidth <= 991 && !hero.classList.contains('cloned')) {

            const items = hero.innerHTML;
            hero.innerHTML += items; // дублируем

            hero.classList.add('cloned');
        }
    }

    initTicker();

    window.addEventListener('resize', () => {
        if (window.innerWidth > 991) {
            hero.innerHTML = `
                <div class="col-3 hero-item"><p>Бесплатно <br>сопроводим при покупке <br>в новостройке</p></div>
                <div class="col-3 hero-item"><p>Проверим объект за <br>свой счет, гарантируем 100% <br>юридическую чистоту</p></div>
                <div class="col-3 hero-item"><p>Снизим комиссию <br>вдвое, если сделка <br>затянется</p></div>
                <div class="col-3 hero-item"><p>Найдем решение, <br>а не просто отправим <br>готовую подборку</p></div>
            `;
            hero.classList.remove('cloned');
        } else {
            initTicker();
        }
    });

  
});