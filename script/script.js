//бургер
  const burger = document.querySelector('.nav__burger');
  const navList = document.querySelector('.nav__list--mobile');
  const overlay = document.getElementById('nav-overlay');

  function toggleNav() {
    navList.classList.toggle('active');
    overlay.style.display = navList.classList.contains('active') ? 'block' : 'none';
  }

  overlay.addEventListener('click', () => {
    navList.classList.remove('active');
    overlay.style.display = 'none';
  });
//для номера картинки
  const container = document.querySelector('.nav__title-numbers');
  const steps = [
    { order: ['03', '02', '01', '04', '05'], active: '01' },
    { order: ['03', '01', '02', '04', '05'], active: '02' },
    { order: ['01', '02', '03', '04', '05'], active: '03' },
    { order: ['01', '02', '04', '03', '05'], active: '04' },
    { order: ['01', '02', '05', '04', '03'], active: '05' }
  ];

  let stepIndex = 0;

  function updateNumbers() {
    const { order, active } = steps[stepIndex];
    container.innerHTML = '';
    order.forEach(num => {
      const el = document.createElement('a');
      el.className = 'nav__title-number';
      el.href = '#';
      el.textContent = num;
      if (num === active) {
        el.classList.add('nav__title-number--active');
      }
      container.appendChild(el);
    });

    stepIndex = (stepIndex + 1) % steps.length;
  }
  updateNumbers();
  setInterval(updateNumbers, 5000);

//для сердечек
  function toggleHeart(img) {
    const defaultSrc = "images/heard.png";
    const activeSrc = "images/heard_red.png";
    img.src = img.src.includes("heard_red.png") ? defaultSrc : activeSrc;}

//для Q&A
  function toggleAnswer(button) {
  const answer = button.nextElementSibling;
  const arrow = button.querySelector('.faq__arrow');
  button.classList.toggle('active');
  answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}