// Collect all animated elements
const animatedElements = [
  '.o1',
  '.o2',
  '.o3',
  '.o4',
  '.o5',
  '.o6',
  '.o7',
  '.a1',
  '.a2',
  '.c1',
  '.c2',
  '.c3',
  '.c4',
  '.c5',
  '.c6',
  '.d1',
  '.d2',
  '.b1',
  '.b2',
].map((selector) => document.querySelector(selector));

// Check if element is in viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight - 100; // يظهر العنصر قبل ما يدخل الشاشة بشوية
}

// Apply animation
function handleScroll() {
  animatedElements.forEach((el) => {
    if (el && isInViewport(el)) {
      el.style.transform = 'translate3d(0, -5px, 0)';
      el.style.opacity = '1';
    }
  });
}

window.addEventListener('scroll', handleScroll);

// Trigger once on load
handleScroll();

let one = document.querySelector('.my');
let two = document.querySelector('.ey');
let three = document.querySelector('.prop');
let four = document.querySelector('.byout');

let d = document.querySelector('.d');
let e = document.querySelector('.e');
let s = document.querySelector('.s');
let i = document.querySelector('.i');
let g = document.querySelector('.g');
let n = document.querySelector('.n');

//

let T = document.querySelector('.T');
let h = document.querySelector('.H');
let E = document.querySelector('.E');

//

let f = document.querySelector('.f');
let u = document.querySelector('.u');
let t = document.querySelector('.t');
let u2 = document.querySelector('.u2');
let r = document.querySelector('.r');
let e2 = document.querySelector('.e2');

//

let header = document.querySelector('header');

let theOne = 0;

window.addEventListener('scroll', function () {
  let theTwo = window.scrollY;

  if (theTwo > theOne) {
    header.style.top = '-120px';
  } else {
    header.style.top = '0px';
  }
  theOne = theTwo <= 0 ? 0 : theTwo;
});
function applyTransforms() {
  if (window.innerWidth <= 575.98) {
    d.style.transform = 'translate(0px, 0px)';
    e.style.transform = 'translate(28px, 0px)';
    s.style.transform = 'translate(55px, 0px)';
    i.style.transform = 'translate(78px, 0px)';
    g.style.transform = 'translate(91px, 0px)';
    n.style.transform = 'translate(123px, 0px)';

    d.style.opacity = '1';
    e.style.opacity = '1';
    s.style.opacity = '1';
    i.style.opacity = '1';
    g.style.opacity = '1';
    n.style.opacity = '1';

    T.style.transform = 'translate(0px, 74px)';
    h.style.transform = 'translate(21px, 74px)';
    E.style.transform = 'translate(48px, 74px)';

    T.style.opacity = '1';
    h.style.opacity = '1';
    E.style.opacity = '1';

    f.style.transform = 'translate(50px, 138px)';
    u.style.transform = 'translate(75px, 138px)';
    t.style.transform = 'translate(100px, 138px)';
    u2.style.transform = 'translate(143px, 138px)';
    r.style.transform = 'translate(120px, 138px)';
    e2.style.transform = 'translate(170px, 138px)';

    f.style.opacity = '1';
    u.style.opacity = '1';
    t.style.opacity = '1';
    u2.style.opacity = '1';
    r.style.opacity = '1';
    e2.style.opacity = '1';
  } else if (window.innerWidth > 575.98 && window.innerWidth <= 1230) {
    d.style.transform = 'translate(0px, 0px)';
    e.style.transform = 'translate(39px, 0px)';
    s.style.transform = 'translate(76px, 0px)';
    i.style.transform = 'translate(113px, 0px)';
    g.style.transform = 'translate(127px, 0px)';
    n.style.transform = 'translate(170px, 0px)';

    d.style.opacity = '1';
    e.style.opacity = '1';
    s.style.opacity = '1';
    i.style.opacity = '1';
    g.style.opacity = '1';
    n.style.opacity = '1';

    T.style.transform = 'translate(0px, 88px)';
    h.style.transform = 'translate(33px, 88px)';
    E.style.transform = 'translate(73px, 88px)';

    T.style.opacity = '1';
    h.style.opacity = '1';
    E.style.opacity = '1';

    f.style.transform = 'translate(0px, 174px)';
    u.style.transform = 'translate(35px, 174px)';
    t.style.transform = 'translate(77px, 174px)';
    u2.style.transform = 'translate(112px, 174px)';
    r.style.transform = 'translate(151px, 174px)';
    e2.style.transform = 'translate(187px, 174px)';

    f.style.opacity = '1';
    u.style.opacity = '1';
    t.style.opacity = '1';
    u2.style.opacity = '1';
    r.style.opacity = '1';
    e2.style.opacity = '1';
  } else {
    d.style.transform = 'translate(0px, 0px)';
    e.style.transform = 'translate(75px, 0px)';
    s.style.transform = 'translate(147px, 0px)';
    i.style.transform = 'translate(215px, 0px)';
    g.style.transform = 'translate(243px, 0px)';
    n.style.transform = 'translate(324px, 0px)';

    d.style.opacity = '1';
    e.style.opacity = '1';
    s.style.opacity = '1';
    i.style.opacity = '1';
    g.style.opacity = '1';
    n.style.opacity = '1';

    T.style.transform = 'translate(0px, 110px)';
    h.style.transform = 'translate(70px, 110px)';
    E.style.transform = 'translate(152px, 110px)';

    T.style.opacity = '1';
    h.style.opacity = '1';
    E.style.opacity = '1';

    f.style.transform = 'translate(0px, 220px)';
    u.style.transform = 'translate(70px, 220px)';
    t.style.transform = 'translate(157px, 220px)';
    u2.style.transform = 'translate(230px, 220px)';
    r.style.transform = 'translate(315px, 220px)';
    e2.style.transform = 'translate(390px, 220px)';

    f.style.opacity = '1';
    u.style.opacity = '1';
    t.style.opacity = '1';
    u2.style.opacity = '1';
    r.style.opacity = '1';
    e2.style.opacity = '1';
  }
}

window.addEventListener('scroll', () => {
  handleScroll();
  applyTransforms();
});

applyTransforms(); // أول ما الصفحة تفتح

window.onresize = applyTransforms;

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const images = [
  'images/pexels-shtefutsa-17568713.webp',
  'images/pexels-wolfram-k-226511-745243.webp',
  'images/pexels-sriharsha-chekuri-249318-755405.webp',
  'images/pexels-_littlemoon_-29725600-6902201.webp',
];

let heroSection = document.querySelector('.heroSection').style;
let index = 0;

function changeBackground() {
  // الحصول على الصورة الحالية من الخلفية
  let currentBg = heroSection.getPropertyValue('--hero-bg');

  // البحث عن الصورة الحالية في المصفوفة
  let currentIndex = images.findIndex((img) => currentBg.includes(img));

  // إذا تم العثور على الصورة الحالية، انتقل إلى الصورة التالية
  if (currentIndex !== -1) {
    index = (currentIndex + 1) % images.length;
  }

  // تعيين الصورة الجديدة
  heroSection.setProperty('--hero-bg', `url("${images[index]}")`);
}

// تشغيل الدالة أول مرة لتعيين الصورة الأولى
changeBackground();

// تكرار تغيير الصورة كل 5 ثوانٍ
setInterval(changeBackground, 5000);

let cir = [one, two, three, four];

let ind = 0;

function changeCir() {
  if (heroSection.getPropertyValue('--hero-bg') === `url("${images[ind]}")`) {
    cir[ind].style.padding = '5px';
    cir[ind].style.backgroundColor = 'white';
  } else {
    cir[ind].style.padding = '0px';
    cir[ind].style.backgroundColor = '#ffffff94';
  }
  ind = (ind + 1) % images.length; // إعادة التدوير بعد آخر صورة
}
changeCir(); // تشغيل أول مرة مباشرة
setInterval(changeCir, 100); // تغيير الصورة كل 5 ثواني

one.onclick = function () {
  document
    .querySelector('.heroSection')
    .style.setProperty('--hero-bg', `url("${images[0]}")`);
};

two.onclick = function () {
  document
    .querySelector('.heroSection')
    .style.setProperty('--hero-bg', `url("${images[1]}")`);
};

three.onclick = function () {
  document
    .querySelector('.heroSection')
    .style.setProperty('--hero-bg', `url("${images[2]}")`);
};

four.onclick = function () {
  document
    .querySelector('.heroSection')
    .style.setProperty('--hero-bg', `url("${images[3]}")`);
};

// لسا مش فاهمها كويس يامعلم هفهمها بعدين واجي اشيل الهبل دا انا اسف بس انا حاليا في مرحله اخلص الموقع يارب يخلص قبل ما يخلص عليا يارب

images.forEach((imageUrl) => {
  const img = new Image();
  img.src = imageUrl;
});

let images2 = [
  'pexels-divinetechygirl-1181304.webp',
  'pexels-olly-927022.webp',
  'pexels-djordje-petrovic-590080-2102416.webp',
  'pexels-energepic-com-27411-313691.webp',
  'pexels-fauxels-3184291.webp',
  'v.webp',
  'pexels-jame_9bkk-128711811-13919146.webp',
  'pexels-binyaminmellish-106399.webp',
  'pexels-kateryna-babaieva-1423213-2760241.webp',
  'pexels-vivek-tedla-2076460171-29276458.webp',
  'pexels-dropshado-2251247.webp',
  'pexels-tara-winstead-8386363.webp',
  'pexels-i-rem-dinc-2148069427-30475979.webp',
  'pexels-pixabay-417273.webp',
];

images2.forEach((src) => {
  const img = new Image();
  img.src = src;
});

document.querySelectorAll('#sidebarMenu .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const offcanvas = bootstrap.Offcanvas.getInstance(
      document.getElementById('sidebarMenu')
    );
    if (offcanvas) {
      offcanvas.hide();
    }
  });
});
