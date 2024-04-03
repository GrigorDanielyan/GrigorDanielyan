const splash = document.getElementById('splash');
const body = document.body;
let isOpenedPage = false;

document.addEventListener('DOMContentLoaded', () => {
  const isMobile = () => {
    const userAgent = navigator.userAgent;
    return /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  };
  const isIos = () => {
    const userAgent = navigator.userAgent;
    return /iPhone|iPad|iPod/i.test(userAgent);
  };

  if (isMobile()) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './style-android.css';
    document.head.appendChild(link);
    main();
  }
  else if (isIos()) {
    document.getElementById("splash").innerHTML = `<div class="bg-gradient"></div>
    <h1>The IOS version of the site will be ready soon!</h1>
    <p>Please log in from a computer to explore the site.</p>`;
  }
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
  genWind({
    id: 'about_me',
    preTextContent: `<p>My name is Grigor, and I have been fascinated by technology and innovation since childhood.</p>
<p>My passion for learning led me to AITC, where I completed web programming courses.</p>
<p>I am a proud graduate of TUMO, a center for creative technologies.</p>
<p>Even in my school years, I was interested in robotics and participated in the "Armath" laboratory courses.</p>
<p>My thirst for self-development never stops, and I am constantly learning new things, having completed over 40 courses (not counting online courses) in a wide range of areas:</p>
<ul>
<li><p>Programming</p></li>
<li><p>Robotics</p></li>
<li><p>3D Modeling</p></li>
<li><p>Game Development</p></li>
<li><p>Animation Graphics</p></li>
<li><p>Photography</p></li>
<li><p>Digital Literacy</p></li>
</ul>
<p>And this is not an exhaustive list!</p>
<p>I believe that the future belongs to those who are not afraid to try new things and constantly develop themselves.</p>
<p>I am always open to new knowledge, projects, and cooperation.</p>`,
    title: 'About me',
    pageIconsClass: 'page-icons-x1',
    pageIcons: [
      "./assets/custom-tumo.svg",
      "./assets/custom-aitc.svg"
    ]
  });

  genWind({
    id: 'experience',
    preTextContent: `<p>I am a skilled developer with a wide range of experience.</p>
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
    title: 'Experience',
    pageIconsClass: 'page-icons-x3',
    pageIcons: [
      "./assets/custom-audition.svg",
      "./assets/custom-canva.svg",
      "./assets/custom-msword.svg",
      "./assets/custom-msexcel.svg",
      "./assets/custom-mspp.svg",
      "./assets/custom-msaccess.svg"
    ]
  });

  genWind({
    id: 'programming',
    preTextContent: `<p>From a young age I was interested in programming: I took my first steps on the Scratch platform, where I learned the basics and tried my hand at it.</p>
<p>The Bachelor's degree in Information Technology (ShTU) consolidated my knowledge and opened the door to the world of professional development.</p>
<p>The experience of working as a freelancer and in an office allowed me to put the acquired knowledge into practice, hone my skills and become a confident developer.</p>
<p>WordPress, NodeJS, ExpressJS, VBA, CordovaJS, Arduino, RaspberryPi are just some of the tools I know how to work with.</p>
<p>In my GitHub portfolio you will find training materials and examples of work.</p>
<p>I'm always ready for new challenges and take on interesting projects with enthusiasm.</p>`,
    title: 'Programming',
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
  });

  genWind({
    id: 'art_and_beyond',
    preTextContent: `<p>Digital art is my hobby, a space of freedom and inspiration.</p>
<p>3D: I dive into the world of 3D to escape the mundane, crafting captivating worlds, characters, and objects. It's my way to relax and share my imagination with others.</p>
<p>Vector graphics: My passion for precision and aesthetics comes to life in vector illustrations. I create concepts, icons, maps, game assets, and much more, where every element is meticulously designed.</p>
<p>Art & Beyond is more than just a section of my portfolio, it's a reflection of my inner world, where I can create without limitations.</p>`,
    title: 'Art & Beyond',
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
  });

  genWind({
    id: 'constacts',
    preTextContent: `<p class='uss'>Grigor Danielyan</p>
<p class='uss'>Yerevan, Armenia</p>
<p class='uss'><!--<a href="mailto: grigor.dan.s@gmail.com"> -->grigor.dan.s@gmail.com<!-- </a> --></p>
<p class='uss'><a href="http://linkedin.com/in/grigordanielyan">linkedin.com/in/grigordanielyan</a></p>
<p class='uss'><a href="http://github.com/grigordanielyan">github.com/grigordanielyan</a></p>
<p class='uss'><a href="http://dribbble.com/GrigorDan">dribbble.com/GrigorDan</a></p>`,
    title: 'Constacts',
  });

  await wait(500)
  splash.classList.add('hidden');
  await wait(500)
  body.classList.remove('visible-hidden');
  loadEvents();
  document.getElementById("splash").style = "display: none;";
}

function genWind(obj) {
  const container = document.createElement('div');
  container.classList.add('dnone', 'menu-item', 'container');
  container.id = obj.id;

  const leftColumn = document.createElement('div');
  leftColumn.classList.add('left-column');

  leftColumn.innerHTML = obj.preTextContent;

  const rightColumn = document.createElement('div');
  rightColumn.classList.add('right-column');

  const rightColumnLink = document.createElement('a');
  rightColumnLink.classList.add('tonav', 'a-dec-none');
  rightColumnLink.setAttribute('data-id', '#home');

  const rightColumnTitle = document.createElement('h1');
  rightColumnTitle.classList.add('page-menu-iteam');

  const rightColumnTitleSpan1 = document.createElement('span');
  rightColumnTitleSpan1.textContent = obj.title;

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

function loadEvents() {

  const navLinks = document.querySelectorAll(".nav-menu a");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      if (!isOpenedPage) {
        isOpenedPage = true;
        const thref = this.getAttribute('data-href').match(/#(.*)/)[1];
        document.querySelector("#" + thref).classList.add("container");
        document.querySelector("#" + thref).classList.remove("dnone");
        document.querySelector(".nav-menu").classList.add("dnone");
      }
    });
  });

  const toNavLinks = document.querySelectorAll(".tonav");

  toNavLinks.forEach(link => {
    link.addEventListener("click", function () {
      const menuItem = document.querySelectorAll(".menu-item");
      menuItem.forEach(t => {
        t.classList.add("dnone")
      });
      document.querySelector(".nav-menu").classList.remove("dnone");
      isOpenedPage = false;
    });
  });
}