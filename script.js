const splash=document.getElementById("splash"),body=document.body;async function wait(time){await new Promise(resolve=>{setTimeout(()=>{resolve()},time)})}async function main(){genWind({id:"about_me",preTextContent:'<p>My name is Grigor, and I have been fascinated by technology and innovation since childhood.</p>\n<p>My passion for learning led me to AITC, where I completed web programming courses.</p>\n<p>I am a proud graduate of TUMO, a center for innovative technologies for young people.</p>\n<p>Even in my school years, I was interested in robotics and participated in the "Armath" laboratory courses.</p>\n<p>My thirst for self-development never stops, and I am constantly learning new things, having completed over 40 courses (not counting online courses) in a wide range of areas:</p>\n<ul>\n<li><p>Programming</p></li>\n<li><p>Robotics</p></li>\n<li><p>3D Modeling</p></li>\n<li><p>Game Development</p></li>\n<li><p>Animation Graphics</p></li>\n<li><p>Photography</p></li>\n<li><p>Digital Literacy</p></li>\n</ul>\n<p>And this is not an exhaustive list!</p>\n<p>I believe that the future belongs to those who are not afraid to try new things and constantly develop themselves.</p>\n<p>I am always open to new knowledge, projects, and cooperation.</p>',title:"About me",pageIconsClass:"page-icons-x1",pageIcons:["./assets/custom-tumo.svg","./assets/custom-aitc.svg"]}),genWind({id:"experience",preTextContent:"<p>I am a skilled developer with a wide range of experience.</p>\n<p>My experience includes:</p>\n<ul>\n<li><p>Designing and developing various services using JavaScript (front-end) and PHP (back-end).</p></li>\n<li><p>Creating websites on WordPress (in global and local networks).</p></li>\n<li><p>Developing add-ins for MS Word and MS Excel using VBA.</p></li>\n<li><p>Creating an application using MS Access.</p></li>\n</ul>\n<p>I am proficient in the following programs:</p>\n<ul>\n<li><p>MS Word</p></li>\n<li><p>MS Excel</p></li>\n<li><p>MS PowerPoint</p></li>\n<li><p>MS Access</p></li>\n</ul>\n<p>I have also worked with the following operating systems:</p>\n<ul>\n<li><p>MacOS</p></li>\n<li><p>Windows (regular and server)</p></li>\n<li><p>Ubuntu</p></li>\n</ul>\n<p>In addition to software development, I have:</p>\n<ul>\n<li><p>Designed and created authentic button icons for MS Office add-ins using Adobe Illustrator.</p></li>\n<li><p>Created maps and interfaces.</p></li>\n<li><p>Worked with Adobe Photoshop, Canva, Adobe Audition, Audacity, Adobe Premiere Pro, Adobe After Effects, Toon Boom Harmony, and other programs.</p></li>\n</ul>\n<p>I am always looking to develop my skills and learn new technologies.</p>",title:"Experience",pageIconsClass:"page-icons-x3",pageIcons:["./assets/custom-audition.svg","./assets/custom-canva.svg","./assets/custom-msword.svg","./assets/custom-msexcel.svg","./assets/custom-mspp.svg","./assets/custom-msaccess.svg"]}),genWind({id:"programming",preTextContent:"<p>From a young age I was interested in programming: I took my first steps on the Scratch platform, where I learned the basics and tried my hand at it.</p>\n<p>The Bachelor's degree in Information Technology (ShTU) consolidated my knowledge and opened the door to the world of professional development.</p>\n<p>The experience of working as a freelancer and in an office allowed me to put the acquired knowledge into practice, hone my skills and become a confident developer.</p>\n<p>WordPress, NodeJS, ExpressJS, VBA, CordovaJS, Arduino, RaspberryPi are just some of the tools I know how to work with.</p>\n<p>In my GitHub portfolio you will find training materials and examples of work.</p>\n<p>I'm always ready for new challenges and take on interesting projects with enthusiasm.</p>",title:"Programming",pageIconsClass:"page-icons-x3",pageIcons:["./assets/custom-nodejs.svg","./assets/custom-wp.svg","./assets/custom-py.svg","./assets/custom-vba.svg","./assets/custom-cordova.svg","./assets/custom-electron.svg"],qrLink:[{link:"./assets/qr-github.svg",url:"https://github.com/grigorDanielyan",title:"@GrigorDanielyan"},{link:"./assets/qr-scratch.svg",url:"https://scratch.mit.edu/users/grigor1610/",title:"@Grigor1610"}]}),genWind({id:"art_and_beyond",preTextContent:"<p>Digital art is my hobby, a space of freedom and inspiration.</p>\n<p>3D: I dive into the world of 3D to escape the mundane, crafting captivating worlds, characters, and objects. It's my way to relax and share my imagination with others.</p>\n<p>Vector graphics: My passion for precision and aesthetics comes to life in vector illustrations. I create concepts, icons, maps, game assets, and much more, where every element is meticulously designed.</p>\n<p>Art & Beyond is more than just a section of my portfolio, it's a reflection of my inner world, where I can create without limitations.</p>",title:"Art & Beyond",pageIconsClass:"page-icons-x4",pageIcons:["./assets/custom-photoshop.svg","./assets/custom-illustrator.svg","./assets/custom-aftereffects.svg","./assets/custom-toonboomharmony.svg","./assets/custom-zbrush.svg","./assets/custom-blender.svg","./assets/custom-sketchup.svg","./assets/custom-magicavoxel.svg"],qrLink:[{link:"./assets/qr-dribbble.svg",url:"https://dribbble.com/GrigorDan",title:"@GrigorDan"},{link:"./assets/qr-blogger.svg",url:"http://3deshn.blogspot.am/",title:"@3deshn"}]}),genWind({id:"constacts",preTextContent:"<p class='uss'>Grigor Danielyan</p>\n<p class='uss'>Yerevan, Armenia</p>\n<p class='uss'>\x3c!--<a href=\"mailto: grigor.dan.s@gmail.com\"> --\x3egrigor.dan.s@gmail.com\x3c!-- </a> --\x3e</p>\n<p class='uss'><a href=\"http://linkedin.com/in/grigordanielyan\">linkedin.com/in/grigordanielyan</a></p>\n<p class='uss'><a href=\"http://github.com/grigordanielyan\">github.com/grigordanielyan</a></p>\n<p class='uss'><a href=\"http://dribbble.com/GrigorDan\">dribbble.com/GrigorDan</a></p>",title:"Constacts"}),loadEvents(),await wait(500),splash.classList.add("hidden"),await wait(500),body.classList.remove("visible-hidden")}function genWind(obj){const container=document.createElement("div");container.classList.add("dnone","menu-item","container"),container.id=obj.id;const leftColumn=document.createElement("div");leftColumn.classList.add("left-column"),leftColumn.innerHTML=obj.preTextContent;const rightColumn=document.createElement("div");rightColumn.classList.add("right-column");const rightColumnLink=document.createElement("a");rightColumnLink.classList.add("tonav","a-dec-none"),rightColumnLink.href="#home";const rightColumnTitle=document.createElement("h1");rightColumnTitle.classList.add("page-menu-iteam");const rightColumnTitleSpan1=document.createElement("span");rightColumnTitleSpan1.textContent=obj.title;const rightColumnTitleSpan2=document.createElement("span");rightColumnTitleSpan2.classList.add("mb");const rightColumnSvg=document.createElementNS("http://www.w3.org/2000/svg","svg");rightColumnSvg.setAttribute("viewBox","0 0 62 43.17"),rightColumnSvg.setAttribute("width","30px");const svgDefs=document.createElementNS("http://www.w3.org/2000/svg","defs"),svgStyle=document.createElementNS("http://www.w3.org/2000/svg","style");svgStyle.textContent=".a { fill: #fff; }",svgDefs.appendChild(svgStyle);const svgRect1=document.createElementNS("http://www.w3.org/2000/svg","rect");svgRect1.classList.add("a"),svgRect1.setAttribute("width","62"),svgRect1.setAttribute("height","8.63");const svgRect2=document.createElementNS("http://www.w3.org/2000/svg","rect");svgRect2.classList.add("a"),svgRect2.setAttribute("y","17.27"),svgRect2.setAttribute("width","62"),svgRect2.setAttribute("height","8.63");const svgRect3=document.createElementNS("http://www.w3.org/2000/svg","rect");if(svgRect3.classList.add("a"),svgRect3.setAttribute("y","34.53"),svgRect3.setAttribute("width","62"),svgRect3.setAttribute("height","8.63"),rightColumnSvg.appendChild(svgRect1),rightColumnSvg.appendChild(svgRect2),rightColumnSvg.appendChild(svgRect3),rightColumnSvg.appendChild(svgDefs),rightColumnTitleSpan2.appendChild(rightColumnSvg),rightColumnTitle.appendChild(rightColumnTitleSpan1),rightColumnTitle.appendChild(rightColumnTitleSpan2),rightColumnLink.appendChild(rightColumnTitle),rightColumn.appendChild(rightColumnLink),obj.pageIcons){const pageIcons=document.createElement("div");pageIcons.classList.add(obj.pageIconsClass);for(let i=0;i<obj.pageIcons.length;i++){const iconObj=document.createElement("div");iconObj.classList.add("obj");const iconObject=document.createElement("object");iconObject.data=obj.pageIcons[i],iconObject.type="image/svg+xml",iconObj.appendChild(iconObject),pageIcons.appendChild(iconObj)}rightColumn.appendChild(pageIcons)}if(obj.qrLink){const pageLink=document.createElement("div");pageLink.classList.add("page-link");for(let i=0;i<obj.qrLink.length;i++){const qrLink=document.createElement("div");qrLink.classList.add("obj","qr-link");const qrObject=document.createElement("object");qrObject.data=obj.qrLink[i].link,qrObject.type="image/svg+xml",qrLink.appendChild(qrObject);const qrDesc=document.createElement("p");qrDesc.classList.add("desc"),qrDesc.innerHTML=`<a href="${obj.qrLink[i].url}">${obj.qrLink[i].title}</a>`,qrLink.appendChild(qrDesc),pageLink.appendChild(qrLink)}rightColumn.appendChild(pageLink)}container.appendChild(leftColumn),container.appendChild(rightColumn),document.body.appendChild(container)}function loadEvents(){const navLinks=document.querySelectorAll(".nav-menu a");navLinks.forEach(link=>{link.addEventListener("click",(function(){const thref=this.href.match(/#(.*)/)[1];document.querySelector("#"+thref).classList.add("container"),document.querySelector("#"+thref).classList.remove("dnone"),document.querySelector(".nav-menu").classList.add("dnone")}))});const toNavLinks=document.querySelectorAll(".tonav");toNavLinks.forEach(link=>{link.addEventListener("click",(function(){const menuItem=document.querySelectorAll(".menu-item");menuItem.forEach(t=>{t.classList.add("dnone")}),document.querySelector(".nav-menu").classList.remove("dnone")}))})}document.addEventListener("DOMContentLoaded",()=>{main()});