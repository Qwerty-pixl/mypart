(function () {

  let counter = document.querySelectorAll('.counter');
  let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится.
  window.addEventListener('scroll', function () {
    if (limit == counter.length) { return; }

    for (let i = 0; i < counter.length; i++) {
      let pos = counter[i].getBoundingClientRect().top; //Позиция блока, считая сверху окна
      let win = window.innerHeight - 40; // На 40 пикселей меньше, чем высота окна
      if (pos < win && counter[i].dataset.stop === "0") {
        counter[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
        let x = 0;
        limit++; // Счетчик будет запущен, увеличиваем переменную на 1
        let int = setInterval(function () {
          // Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
          x = x + Math.ceil(counter[i].dataset.to / 50);
          counter[i].innerText = x;
          if (x > counter[i].dataset.to) {
            //Как только досчитали - стираем интервал.
            counter[i].innerText = counter[i].dataset.to;
            clearInterval(int);
          }
        }, 60);
      }
    }
  });

})();



(function () {

  let counter = document.querySelectorAll('.counter_look');
  let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится.
  window.addEventListener('scroll', function () {
    if (limit == counter.length) { return; }

    for (let i = 0; i < counter.length; i++) {
      let pos = counter[i].getBoundingClientRect().top; //Позиция блока, считая сверху окна
      let win = window.innerHeight - 40; // На 40 пикселей меньше, чем высота окна
      if (pos < win && counter[i].dataset.stop === "0") {
        counter[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
        let x = 0;
        limit++; // Счетчик будет запущен, увеличиваем переменную на 1
        let int = setInterval(function () {
          // Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
          x = x + Math.ceil(counter[i].dataset.to / 50);
          counter[i].innerText = x;
          if (x > counter[i].dataset.to) {
            //Как только досчитали - стираем интервал.
            counter[i].innerText = counter[i].dataset.to;
            clearInterval(int);
          }
        }, 60);
      }
    }
  });

})();




const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

setTimeout(function () {
  loader.remove();
  section.style.display = 'flex';
  header.style.display = 'flex';
  footer.style.display = ' ';
  order.style.display = 'flex';
  about.style.display = 'flex';
  start.style.display = 'flex';
  advantages.style.display = 'flex';
  partners.style.display = 'flex';
  program.style.display = 'flex';
  mentors.style.display = 'flex';
  form.style.display = 'flex';
}, 2000)



console.log($('.btn'))

// Выбираем кнопку
const btn = document.querySelector(".btn-toggle");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function () {
  // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
  document.body.classList.toggle("dark-theme");
});





