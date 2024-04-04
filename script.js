"use strict";

let isOpenedPage = false;
let reload = false;
const pages = [{
  id: 'about_me',
  preTextContent: {
    "en": `<p>My name is Grigor, and I have been fascinated by technology and innovation since childhood.</p>
<p>My passion for learning led me to AITC, where I completed web programming courses.</p>
<p>I am a proud graduate of TUMO, a center for creative technologies.</p>
<p>Even in my school years, I was interested in robotics and participated in the "Armath" laboratory courses.</p>
<p>My thirst for self-development never stops, and I am constantly learning new things, having completed over 40 courses (not counting online courses) in a wide range of areas:</p>
<ul>
<li><p>Programming</p></li>
<li><p>Robotics</p></li>
<li><p>3D Modeling</p></li>
<li><p>Game Development</p></li>
<li><p>Motion Graphics</p></li>
<li><p>Photography</p></li>
<li><p>Digital Literacy</p></li>
</ul>
<p>And this is not an exhaustive list!</p>
<p>I believe that the future belongs to those who are not afraid to try new things and constantly develop themselves.</p>
<p>I am always open to new knowledge, projects, and cooperation.</p>`,
    "hy": `<p>Ես Գրիգորն եմ, դեռ մանկուց ինձ հետաքրքիր են տեխնոլոգիաներն ու նորարարությունները։</p>
<p>Սովորելու իմ ձգտումը տարավ դեպի AITC, որտեղ ավարտեցի վեբ ծրագրավորման դասընթացներ:</p>
<p>Ես հպարտ եմ, որ հանդիսանում եմ ԹՈՒՄՈ ստեղծարար տեխնոլոգիաների կենտրոնի շրջանավարտ։</p>
<p>Դպրոցական տարիներից հետաքրքրվել եմ ռոբոտաշինությամբ, այդ իսկ պատճառով հաճախել եմ «Արմատ» լաբորատորիայի դասընթացների։</p>
<p>Ես միշտ ձգտում եմ զարգանալ և զբաղվել ինքնուսուցմամբ, մասնակցել եմ ավելին քան 40 դասընթացների (եթե հաշվի չառնենք օնլայն դասընթացները), այդ թվում՝</p>
<ul>
<li><p>Ծրագրավորում</p></li>
<li><p>Ռոբոտաշինություն</p></li>
<li><p>Եռաչափ մոդելավորում</p></li>
<li><p>Խաղի մշակում</p></li>
<li><p>Շարժական գրաֆիկա</p></li>
<li><p>Լուսանկարչություն</p></li>
<li><p>Առցանց գրագիտություն</p></li>
</ul>
<p>Եվ սա դեռ ամենը չէ:</p>
<p>Ես հավատում եմ, որ ապագան պատկանում է նրանց, ովքեր չեն վախենում կերտել նորարարություն և անընդհատ ինքնազարգանալ։</p>
<p>Ես միշտ բաց եմ նոր գիտելիքների, նախագծերի և համագործակցության համար:</p>`,
    "ru": `<p>Меня зовут Григор, и меня с детства увлекают технологии и инновации.</p>
<p>Моя страсть к обучению привела меня в AITC, где я прошел курсы веб-программирования.</p>
<p>Я горжусь тем, что являюсь выпускником Центра креативных технологий ТУМО.</p>
<p>Еще в школьные годы я интересовался робототехникой и посещал лабораторные курсы «Армат».</p>
<p>Моя тяга к саморазвитию никогда не угасает, и я постоянно учусь новому, пройдя более 40 курсов (не считая онлайн-курсов) по широкому спектру направлений:</p>
<ul>
<li><p>Программирование</p></li>
<li><p>Робототехника</p></li>
<li><p>3D Моделирование</p></li>
<li><p>Разработка игр</p></li>
<li><p>Моушн-дизайн</p></li>
<li><p>Фотосъемка</p></li>
<li><p>Цифровая грамотность</p></li>
</ul>
<p>И это далеко не полный список!</p>
<p>Я считаю, что будущее за теми, кто не боится пробовать новое и постоянно развивается.</p>
<p>Я всегда открыт к новым знаниям, проектам и сотрудничеству.</p>`
  },
  title: { "en": 'About me', "hy": 'Իմ մասին', "ru": 'Коротко обо мне' },
  pageIconsClass: 'page-icons-x1',
  pageIcons: [
    "./assets/custom-tumo.svg",
    "./assets/custom-aitc.svg"
  ]
},
{
  id: 'experience',
  preTextContent: {
    "en": `<p>I am a skilled developer with a wide range of experience.</p>
<p>My experience includes:</p>
<ul>
<li><p>Designing and developing various services using JavaScript (front-end) and PHP (back-end).</p></li>
<li><p>Creating websites on WordPress (in global and local networks).</p></li>
<li><p>Developing add-ins for MS Word and MS Excel using VBA.</p></li>
<li><p>Creating an application using MS Access.</p></li>
</ul>
<p>I am proficient in the following programs:</p>
<ul>
<li><p>MS Word</p></li>
<li><p>MS Excel</p></li>
<li><p>MS PowerPoint</p></li>
<li><p>MS Access</p></li>
</ul>
<p>I have also worked with the following operating systems:</p>
<ul>
<li><p>MacOS</p></li>
<li><p>Windows (regular and server)</p></li>
<li><p>Ubuntu</p></li>
</ul>
<p>In addition to software development, I have:</p>
<ul>
<li><p>Designed and created authentic button icons for MS Office add-ins using Adobe Illustrator.</p></li>
<li><p>Created maps and interfaces.</p></li>
<li><p>Worked with Adobe Photoshop, Canva, Adobe Audition, Audacity, Adobe Premiere Pro, Adobe After Effects, Toon Boom Harmony, and other programs.</p></li>
</ul>
<p>I am always looking to develop my skills and learn new technologies.</p>`,
    "hy": `<p>Իմ գիտելիքները ծրագրավորման ոլորտում բազմազան են։</p>
<p>Գործնական իմ փորձը ներառում է.</p>
<ul>
<li><p>Տարբեր ծառայությունների նախագծում և ստեղծում՝ օգտագործելով JavaScript (front-end) և PHP (back-end):</p></li>
<li><p>WordPress-ով կայքերի ստեղծում (գլոբալ և լոկալ ցանցերում):</p></li>
<li><p>MS Word-ի և MS Excel-ի համար հավելումների մշակում VBA-ի միջոցով:</p></li>
<li><p>MS Access-ի միջոցով հավելվածի ստեղծում:</p></li>
</ul>
<p>Ես տիրապետում եմ հետևյալ ծրագրերին.</p>
<ul>
<li><p>MS Word</p></li>
<li><p>MS Excel</p></li>
<li><p>MS PowerPoint</p></li>
<li><p>MS Access</p></li>
</ul>
<p>Ես աշխատել եմ հետևյալ օպերացիոն համակարգերով․</p>
<ul>
<li><p>MacOS</p></li>
<li><p>Windows (սովորական և սերվերային)</p></li>
<li><p>Ubuntu</p></li>
</ul>
<p>Բացի ծրագրային ապահովման մշակումից, ես.</p>
<ul>
<li><p>Նախագծել և ստեղծել եմ աուտենտիկ կոճակներ MS Office հավելումների համար Adobe Illustrator-ի միջոցով:</p></li>
<li><p>Ստեղծվել եմ քարտեզներ և ինտերֆեյսներ:</p></li>
<li><p>Աշխանքներ եմ կատարել Adobe Photoshop, Canva, Adobe Audition, Audacity, Adobe Premiere Pro, Adobe After Effects, Toon Boom Harmony և այլ ծրագրեր կիրառելով:</p></li>
</ul>
<p>Միշտ ձգտում եմ զարգացնել իմ հմտությունները և սովորել նոր տեխնոլոգիաներ:</p>`,
    "ru": `<p>Я разработчик с большим опытом работы.</p>
<p>Мой опыт включает в себя:</p>
<ul>
<li><p>Проектирование и разработка различных сервисов с использованием JavaScript (front-end) и PHP (back-end ).</p></li>
<li><p>Создание сайтов на WordPress (в глобальной и локальной сети).</p></li>
<li><p>Разработка надстроек для MS Word и MS Excel с использованием VBA.</p></li>
<li><p>Создание приложения с помощью MS Access.</p></li>
</ul>
<p>У меня хорошие навыки в программах:</p>
<ul>
<li><p>MS Word</p></li>
<li><p>MS Excel</p></li>
<li><p>MS PowerPoint</p></li>
<li><p>MS Access</p></li>
</ul>
<p>Я также работал на следующих операционных системах:</p>
<ul>
<li><p>MacOS</p></li>
<li><p>Windows (обычная и серверная)</p></li>
<li><p>Ubuntu</p></li>
</ul>
<p>Помимо разработки программного обеспечения, я:</p>
<ul>
<li><p>Создал аутентичные значки кнопок для надстроек MS Office с помощью Adobe Illustrator.</p></li>
<li><p>Создал карты и интерфейсы.</p></li>
<li><p>Работал с Adobe Photoshop, Canva, Adobe Audition, Audacity, Adobe Premiere Pro, Adobe After Effects, Toon Boom Harmony и другими программами.</p></li>
</ul>
<p>Я всегда стремлюсь развивать свои навыки и изучать новые технологии.</p>`
  },
  title: { "en": 'Experience', "hy": 'Փորձ', "ru": 'Опыт' },
  pageIconsClass: 'page-icons-x3',
  pageIcons: [
    "./assets/custom-audition.svg",
    "./assets/custom-canva.svg",
    "./assets/custom-msword.svg",
    "./assets/custom-msexcel.svg",
    "./assets/custom-mspp.svg",
    "./assets/custom-msaccess.svg"
  ]
},
{
  id: 'programming',
  preTextContent: {
    "en": `<p>From a young age I was interested in programming: I took my first steps on the Scratch platform, where I learned the basics and tried my hand at it.</p>
<p>The Bachelor's degree in Information Technology (ShTU) consolidated my knowledge and opened the door to the world of professional development.</p>
<p>The experience of working as a freelancer and in an office allowed me to put the acquired knowledge into practice, hone my skills and become a confident developer.</p>
<p>WordPress, NodeJS, ExpressJS, VBA, CordovaJS, Arduino, RaspberryPi are just some of the tools I know how to work with.</p>
<p>In my GitHub portfolio you will find training materials and examples of work.</p>
<p>I'm always ready for new challenges and take on interesting projects with enthusiasm.</p>`,
    "hy": `<p>Մանկուց ինձ հետաքրքրում էր ծրագրավորումը։</p>
<p>Առաջին քայլերս կատարեցի Scratch հարթակում, որտեղ սովորեցի հիմունքները և փորձեցի ուժերս:</p>
<p>Տեղեկատվական տեխնոլոգիաների բակալավրի աստիճանը (ՇՏՀ) ամրապնդեց իմ գիտելիքները և բացեց մասնագիտական ​​զարգացման ճանապարհը:</p>
<p>Հեռավար և գրասենյակում աշխատելու փորձը ինձ թույլ տվեց ձեռք բերված գիտելիքները կիրառել տրված նախագծերում, կատարելագործել իմ հմտությունները և դառնալ վստահ ծրագրավորող:</p>
<p>WordPress, NodeJS, ExpressJS, VBA, CordovaJS, Arduino, RaspberryPi ընդամենը գործիքներից մի քանիսն են, որոնց ես տիրապետում եմ:</p>
<p>GitHub-ի իմ պորտֆոլիոյում դուք կգտնեք ուսումնական նյութեր և աշխատանքի օրինակներ:</p>
<p>Միշտ պատրաստ եմ նոր մարտահրավերների և հետաքրքիր նախագծերի:</p>`,
    "ru": `<p>С юных лет я интересовался программированием: мои первые шаги я сделал на платформе Scratch, где изучил основы и попробовал свои силы.</p>
<p>Степень бакалавра информационных технологий (ШТУ) закрепила мои знания и открыла дверь в мир профессионального развития.</p>
<p>Опыт работы фрилансером и в офисе позволил мне применить полученные знания на реальных практиках, отточить навыки и стать уверенным разработчиком.</p>
<p>WordPress, NodeJS, ExpressJS, VBA, CordovaJS, Arduino, RaspberryPi — это лишь некоторые из инструментов, с которыми я знаю как работать.</p>
<p>В моем портфолио на GitHub вы найдете обучающие материалы и примеры работ.</p>
<p>Я всегда готов к новым задачам и с энтузиазмом берусь за интересные проекты.</p>` },
  title: { "en": 'Programming', "hy": 'Ծրագրավորում', "ru": 'Программирование' },
  pageIconsClass: 'page-icons-x3',
  pageIcons: [
    "./assets/custom-nodejs.svg",
    "./assets/custom-wp.svg",
    "./assets/custom-py.svg",
    "./assets/custom-vba.svg",
    "./assets/custom-cordova.svg",
    "./assets/custom-electron.svg"
  ],
  qrLink: [
    { link: "./assets/qr-github.svg", url: "https://github.com/grigorDanielyan", title: "@GrigorDanielyan" },
    { link: "./assets/qr-scratch.svg", url: "https://scratch.mit.edu/users/grigor1610/", title: "@Grigor1610" }
  ]
},
{
  id: 'art_and_beyond',
  preTextContent: {
    "en": `<p>Digital art is my hobby, a space of freedom and inspiration.</p>
<p>3D: I dive into the world of 3D to escape the mundane, crafting captivating worlds, characters, and objects. It's my way to relax and share my imagination with others.</p>
<p>Vector graphics: My passion for precision and aesthetics comes to life in vector illustrations. I create concepts, icons, maps, game assets, and much more, where every element is meticulously designed.</p>
<p>Art & Beyond is more than just a section of my portfolio, it's a reflection of my inner world, where I can create without limitations.</p>`,
    "hy": `<p>Արվեստն իմ հոբբին է, ազատության և ոգեշնչման տարածություն։</p>
<h2>Եռաչափ գրաֆիկա</h2>
<p>Եռաչափ գրաֆիկայի միջոցով ես ստեղծում եմ խորհրդավոր աշխարհներ, կերպարներ և առարկաներ: Դա հանգստանալու և իմ ստեղծագործական մտածելակերպով կիսելու իմ եղանակն է:</p>
<h2>Վեկտորային գրաֆիկա</h2>
<p>Ես ստեղծում եմ կոնցեպտներ, պատկերակներ, քարտեզներ, խաղային գրաֆիկա և շատ ավելին, որտեղ յուրաքանչյուր տարր մանրակրկիտ ձևավորված է:</p>
<p>Արվեստն ավելին է, քան իմ պորտֆելի մի էջ, այն իմ ներաշխարհի արտացոլումն է, որտեղ ես կարող եմ ստեղծագործել առանց սահմանափակումների:</p>`,
    "ru": `<p>Искусство — мое хобби, пространство свободы и вдохновения.</p>
<h2>Трёхмерная графика</h2>
<p>Погрузившись в мир 3D, я создаю захватывающие миры, персонажей и объекты. Это мой способ отдохнуть и поделиться своим воображением с другими.</p>
<h2>Векторная графика</h2>
<p>Моя страсть к точности и эстетике воплощается в жизнь в векторных иллюстрациях. Я создаю концепты, значки, карты, игровые ассеты и многое другое, где каждый элемент тщательно проработан.</p>
<p>Искусство — это больше, чем просто раздел моего портфолио, это отражение моего внутреннего мира, в котором я могу творить без ограничений.</p>`
  },
  title: { "en": 'Art & Beyond', "hy": 'Արվեստ և առավել', "ru": 'Искусство' },
  pageIconsClass: 'page-icons-x4',
  pageIcons: [
    "./assets/custom-photoshop.svg",
    "./assets/custom-illustrator.svg",
    "./assets/custom-aftereffects.svg",
    "./assets/custom-toonboomharmony.svg",
    "./assets/custom-zbrush.svg",
    "./assets/custom-blender.svg",
    "./assets/custom-sketchup.svg",
    "./assets/custom-magicavoxel.svg"
  ],
  qrLink: [
    { link: "./assets/qr-dribbble.svg", url: "https://dribbble.com/GrigorDan", title: "@GrigorDan" },
    { link: "./assets/qr-blogger.svg", url: "http://3deshn.blogspot.am/", title: "@3deshn" }
  ]
},
{
  id: 'constacts',
  preTextContent: {
    "en": `<p class='uss'>Grigor Danielyan</p>
<p class='uss'>Yerevan, Armenia</p>
<p class='uss'><!--<a href="mailto: grigor.dan.s@gmail.com"> -->grigor.dan.s@gmail.com<!-- </a> --></p>
<p class='uss'><a href="http://linkedin.com/in/grigordanielyan">linkedin.com/in/grigordanielyan</a></p>
<p class='uss'><a href="http://github.com/grigordanielyan">github.com/grigordanielyan</a></p>
<p class='uss'><a href="http://dribbble.com/GrigorDan">dribbble.com/GrigorDan</a></p>`,
    "hy": `<p class='uss'>Գրիգոր Դանիելյան</p>
<p class='uss'>Հայաստան, Երևան</p>
<p class='uss'><!--<a href="mailto: grigor.dan.s@gmail.com"> -->grigor.dan.s@gmail.com<!-- </a> --></p>
<p class='uss'><a href="http://linkedin.com/in/grigordanielyan">linkedin.com/in/grigordanielyan</a></p>
<p class='uss'><a href="http://github.com/grigordanielyan">github.com/grigordanielyan</a></p>
<p class='uss'><a href="http://dribbble.com/GrigorDan">dribbble.com/GrigorDan</a></p>`,
    "ru": `<p class='uss'>Григор Даниелян</p>
<p class='uss'>Армения, Ереван</p>
<p class='uss'><!--<a href="mailto: grigor.dan.s@gmail.com"> -->grigor.dan.s@gmail.com<!-- </a> --></p>
<p class='uss'><a href="http://linkedin.com/in/grigordanielyan">linkedin.com/in/grigordanielyan</a></p>
<p class='uss'><a href="http://github.com/grigordanielyan">github.com/grigordanielyan</a></p>
<p class='uss'><a href="http://dribbble.com/GrigorDan">dribbble.com/GrigorDan</a></p>`
  },
  title: { "en": 'Constacts', "hy": 'Կոնտակտներ', "ru": 'Контакты' },
}];

document.addEventListener('DOMContentLoaded', () => {
  const sLang = [...document.querySelectorAll('.language-menu p')].map(pTag => pTag.dataset.lang).indexOf(navigator.language) < 0 ? "en" : navigator.language;
  document.documentElement.lang = sLang;
  document.querySelector(`.language-menu p[data-lang=${sLang}]`).classList.add("active");

  const isMobile = () => {
    const userAgent = navigator.userAgent;
    return /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  };
  const isIos = () => {
    const userAgent = navigator.userAgent;
    return /iPhone|iPad|iPod/i.test(userAgent);
  };

  if (isMobile() || isIos()) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './style-android.css';
    document.head.appendChild(link);
    main();
  }
  //   else if (isIos()) {
  //     document.getElementById("splash").innerHTML = {
  //       ru: `<div class="bg-gradient"></div>
  // <h1>IOS-версия сайта будет готова в ближайшее время!</h1>
  // <p>Чтобы изучить сайт, можете зайти с компьютера.</p>`,
  //       en: `<div class="bg-gradient"></div>
  // <h1>The IOS version of the site will be ready soon!</h1>
  // <p>Please log in from a computer to explore the site.</p>`,
  //       hy: `<div class="bg-gradient"></div>
  // <h1>Կայքի iOS տարբերակն այժմ հասանելի չէ</h1>
  // <p>Բայց կարո՞ղ եք մուտք գործել համակարգչից</p>`}[sLang];
  //   }
  else {
    main();
  }
});

async function wait(time) {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function main() {
  pages.forEach(async page => {
    await genWind(page);
  });

  const splash = document.getElementById('splash');
  await wait(500)
  splash.classList.add('hidden');
  await wait(500)
  document.body.classList.remove('visible-hidden');
  await loadEvents();
  splash.style = "display: none;";
}

async function genWind(obj) {
  const activeLang = document.documentElement.lang;
  const pageTitleContainer = document.createElement('li');
  const pageTitle = document.createElement('a');
  pageTitle.setAttribute('data-href', obj.id);
  pageTitle.textContent = (typeof obj.title == "string") ? obj.title : obj.title[activeLang];
  pageTitleContainer.appendChild(pageTitle);
  document.querySelector('.nav-menu .menu').appendChild(pageTitleContainer);

  const container = document.createElement('div');
  container.classList.add('dnone', 'menu-item', 'container', 'hz');
  container.id = obj.id;

  const leftColumn = document.createElement('div');
  leftColumn.classList.add('left-column');
  leftColumn.innerHTML = (typeof obj.preTextContent == "string") ? obj.preTextContent : obj.preTextContent[activeLang];

  const rightColumn = document.createElement('div');
  rightColumn.classList.add('right-column');

  const rightColumnLink = document.createElement('a');
  rightColumnLink.classList.add('tonav', 'a-dec-none');
  rightColumnLink.setAttribute('data-id', 'home');

  const rightColumnTitle = document.createElement('h1');
  rightColumnTitle.classList.add('page-menu-iteam');

  const rightColumnTitleSpan1 = document.createElement('span');
  rightColumnTitleSpan1.textContent = (typeof obj.title == "string") ? obj.title : obj.title[activeLang];

  const rightColumnTitleSpan2 = document.createElement('span');
  rightColumnTitleSpan2.classList.add('mb');

  const rightColumnSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  rightColumnSvg.setAttribute('viewBox', '0 0 62 43.17');
  rightColumnSvg.setAttribute('width', '30px');
  const svgDefs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  const svgStyle = document.createElementNS('http://www.w3.org/2000/svg', 'style');
  svgStyle.textContent = '.a { fill: #fff; }';
  svgDefs.appendChild(svgStyle);
  const svgRect1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  svgRect1.classList.add('a');
  svgRect1.setAttribute('width', '62');
  svgRect1.setAttribute('height', '8.63');
  const svgRect2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  svgRect2.classList.add('a');
  svgRect2.setAttribute('y', '17.27');
  svgRect2.setAttribute('width', '62');
  svgRect2.setAttribute('height', '8.63');
  const svgRect3 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  svgRect3.classList.add('a');
  svgRect3.setAttribute('y', '34.53');
  svgRect3.setAttribute('width', '62');
  svgRect3.setAttribute('height', '8.63');
  rightColumnSvg.appendChild(svgRect1);
  rightColumnSvg.appendChild(svgRect2);
  rightColumnSvg.appendChild(svgRect3);

  rightColumnSvg.appendChild(svgDefs);

  rightColumnTitleSpan2.appendChild(rightColumnSvg);

  rightColumnTitle.appendChild(rightColumnTitleSpan1);
  rightColumnTitle.appendChild(rightColumnTitleSpan2);

  rightColumnLink.appendChild(rightColumnTitle);

  rightColumn.appendChild(rightColumnLink);

  if (!!obj.pageIcons) {
    const pageIcons = document.createElement('div');
    pageIcons.classList.add(obj.pageIconsClass);

    for (let i = 0; i < obj.pageIcons.length; i++) {
      const iconObj = document.createElement('div');
      iconObj.classList.add('obj');
      const iconObject = document.createElement('object');
      iconObject.data = obj.pageIcons[i];
      iconObject.type = 'image/svg+xml';
      iconObj.appendChild(iconObject);
      pageIcons.appendChild(iconObj);
    }

    rightColumn.appendChild(pageIcons);
  }


  if (!!obj.qrLink) {
    const pageLink = document.createElement('div');
    pageLink.classList.add('page-link');

    for (let i = 0; i < obj.qrLink.length; i++) {
      const qrLink = document.createElement('div');
      qrLink.classList.add('obj', 'qr-link');
      const qrObject = document.createElement('object');
      qrObject.data = obj.qrLink[i].link;
      qrObject.type = 'image/svg+xml';
      qrLink.appendChild(qrObject);

      const qrDesc = document.createElement('p');
      qrDesc.classList.add('desc');
      qrDesc.innerHTML = `<a href="${obj.qrLink[i].url}">${obj.qrLink[i].title}</a>`;
      qrLink.appendChild(qrDesc);

      pageLink.appendChild(qrLink);
    }

    rightColumn.appendChild(pageLink);
  }

  container.appendChild(leftColumn);
  container.appendChild(rightColumn);

  document.body.appendChild(container);

}

async function remWind() {
  document.querySelector('.nav-menu .menu').innerHTML = "";
  if (document.querySelector('.nav-menu.dnone') != null) document.querySelector('.nav-menu.dnone').classList.remove('hz', 'dnone');
  document.querySelectorAll(".menu-item").forEach(mi => { mi.outerHTML = ""; });
}

async function loadEvents() {

  const navLinks = document.querySelectorAll(".nav-menu a");

  navLinks.forEach(async link => {
    link.addEventListener("click", async function () {
      if (!isOpenedPage) {
        isOpenedPage = true;
        const thref = this.dataset.href;
        document.querySelector("#" + thref).classList.remove("dnone", "hz");
        document.querySelector(".nav-menu").classList.add("dnone");
        await wait(1000);
        document.querySelector(".nav-menu").classList.add("hz");
      }
    });
  });

  const toNavLinks = document.querySelectorAll(".tonav");

  toNavLinks.forEach(async link => {
    link.addEventListener("click", function () {
      const menuItem = document.querySelectorAll(".menu-item");
      menuItem.forEach(async t => {
        t.classList.add("dnone");
        await wait(1000);
        t.classList.add("hz");
      });
      document.querySelector(".nav-menu").classList.remove("hz", "dnone");
      isOpenedPage = false;
    });
  });

  // so as not to announce duplicates
  if (reload) return;

  // language switch
  const languageMenu = document.querySelectorAll(".language-menu p[data-lang]");

  languageMenu.forEach(function (lang) {
    lang.addEventListener("click", async function () {
      reload = true;
      if (this.classList.contains("active")) return;
      isOpenedPage = false;

      document.getElementById("splash").innerHTML = {
        ru: `<div class="bg-gradient"></div>
<h1>Пожалуйста, подождите</h1>
<p>Сайт скоро откроется на русском языке.</p>`,
        en: `<div class="bg-gradient"></div>
<h1>Please wait a moment</h1>
<p>The English version of the website is loading.</p>`,
        hy: `<div class="bg-gradient"></div>
<h1>Խնդրում եմ մի փոքր սպասեք</h1>
<p>Կայքի հայերեն տարբերակը բեռնվում է</p>`}[this.dataset.lang];

      const splash = document.getElementById('splash');
      splash.style = "";
      splash.classList.remove('hidden');
      document.body.classList.add('visible-hidden');
      await wait(1000);
      languageMenu.forEach(t => {
        t.classList.remove("active");
      });
      this.classList.add("active");
      document.documentElement.lang = this.dataset.lang;
      await remWind();
      await main();
    });
  });
}