document.addEventListener("DOMContentLoaded", function () {
    Fancybox.bind("[data-fancybox]", {});
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

    if (hero) {
      function initTicker() {
          if (window.innerWidth <= 991 && !hero.classList.contains('cloned')) {

              const items = hero.innerHTML;
              hero.innerHTML += items; 

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
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const parent = this.closest('.filter-item');
        parent.classList.toggle('active'); 
    
        
        const icon = this.querySelector('.filter-icon');
    
        if (icon) {
          if (parent.classList.contains('active')) {
            
            icon.outerHTML = `
              <svg class="filter-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="white"/>
                <path d="M14.0902 9.31818C14.271 9.31818 14.4445 9.39001 14.5723 9.51788C14.7002 9.64574 14.772 9.81917 14.772 9.99999C14.772 10.1808 14.7002 10.3542 14.5723 10.4821C14.4445 10.61 14.271 10.6818 14.0902 10.6818H10.6811H5.90838C5.72755 10.6818 5.55413 10.61 5.42626 10.4821C5.2984 10.3542 5.22656 10.1808 5.22656 9.99999C5.22656 9.81917 5.2984 9.64574 5.42626 9.51788C5.55413 9.39001 5.72755 9.31818 5.90838 9.31818H9.31747H10.6811H14.0902Z" fill="#D3A77D"/>
              </svg>
            `;
          } else {
          
            icon.outerHTML = `
              <svg class="filter-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.18093 3.40912C8.36176 3.40912 8.53518 3.48095 8.66305 3.60882C8.79091 3.73668 8.86275 3.91011 8.86275 4.09094V7.50003H12.2718C12.4527 7.50003 12.6261 7.57186 12.754 7.69973C12.8818 7.82759 12.9537 8.00102 12.9537 8.18185C12.9537 8.36268 12.8818 8.5361 12.754 8.66396C12.6261 8.79183 12.4527 8.86366 12.2718 8.86366H8.86275V12.2728C8.86275 12.4536 8.79091 12.627 8.66305 12.7549C8.53518 12.8827 8.36176 12.9546 8.18093 12.9546C8.0001 12.9546 7.82668 12.8827 7.69881 12.7549C7.57095 12.627 7.49911 12.4536 7.49911 12.2728V8.86366H4.09002C3.90919 8.86366 3.73577 8.79183 3.6079 8.66396C3.48004 8.5361 3.4082 8.36268 3.4082 8.18185C3.4082 8.00102 3.48004 7.82759 3.6079 7.69973C3.73577 7.57186 3.90919 7.50003 4.09002 7.50003H7.49911V4.09094C7.49911 3.91011 7.57095 3.73668 7.69881 3.60882C7.82668 3.48095 8.0001 3.40912 8.18093 3.40912Z" fill="#D3A77D"/>
              </svg>
            `;
          }
        }
      });
    });
    document.querySelectorAll('.filter-inputs input').forEach(input => {
      input.addEventListener('input', () => {
        input.value = input.value.replace(/\D/g, ''); 
      });
    });

    
    const swiperProduct = new Swiper(".mySwiper", {
      spaceBetween: 15,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      // breakpoints: {
      //   320: {
      //     spaceBetween: 20
      //   },
      //   768: {
      //     spaceBetween: 20
      //   }
      // }
    });
    var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next.product-next",
        prevEl: ".swiper-button-prev.product-prev"
      },
      thumbs: {
        swiper: swiperProduct
      }
    });


    // --- Калькулятор ---
    const productCalc = document.querySelector('.product-calc');
    if (!productCalc) return;

    // Функция для поиска поля внутри группы
    function getField(group, selector) {
        return group.querySelector(selector);
    }

    // --- Кнопки процентов ---
    const percentGroups = Array.from(productCalc.querySelectorAll('.calc-group'))
        .filter(g => g.querySelector('.calc-btn') && g.querySelector('.calc-btn').textContent.includes('%'));

    percentGroups.forEach(group => {
        const valueField = getField(group, '.calc-value');
        const priceField = productCalc.querySelector('.calc-group:first-child .calc-value');
        const buttons = Array.from(group.querySelectorAll('.calc-btn'));

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const percent = parseInt(btn.textContent);
                const price = parseInt(priceField.textContent.replace(/\s/g, ''));

                const value = Math.round(price * percent / 100);
                valueField.textContent = value.toLocaleString('ru-RU');
            });
        });
    });

    // --- Кнопки срока ---
    const termGroups = Array.from(productCalc.querySelectorAll('.calc-group'))
        .filter(g => g.querySelector('.calc-btn') && g.querySelector('.calc-btn').textContent.includes('лет'));

    termGroups.forEach(group => {
        const valueField = getField(group, '.calc-value');
        const buttons = Array.from(group.querySelectorAll('.calc-btn'));

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const years = parseInt(btn.textContent);
                valueField.textContent = years;
            });
        });
    });

    // --- Кнопки программ ---
    const programGroup = Array.from(productCalc.querySelectorAll('.calc-group'))
        .find(g => g.querySelector('.calc-btn') && 
            Array.from(g.querySelectorAll('.calc-btn')).some(b => /Базовая|Семейная|IT/.test(b.textContent))
        );

    const programBtns = programGroup ? Array.from(programGroup.querySelectorAll('.calc-btn')) : [];
    const calcFooters = Array.from(document.querySelectorAll('.calc-footer'));

    // Скрываем все футеры при загрузке
    calcFooters.forEach(f => f.style.display = 'none');

    programBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const programName = btn.textContent.trim();

            // Снимаем active с кнопок
            programBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Скрываем все футеры
            calcFooters.forEach(f => f.style.display = 'none');

            // Показываем только нужный футер
            calcFooters.forEach(f => {
                const label = f.querySelector('.calc-bank-name span');
                if (label && label.textContent.trim() === programName) {
                    f.style.display = 'flex';
                }
            });
        });
    });
});