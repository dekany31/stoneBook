
function _load() {

  // Az interneten rákeresek a problémára!
  // Betartom a "clean-coding" szabályait (tagolás, pontosvesszők, elnevezések stb.)
  // A feladatot lépésekre bontva kitartóan oldom!

  //HTML
  //1. minél speciálisabb tag-eket használjak: <section>, <main>, <article>, <nav>, <footer>, <aside>
  //2. burger 
  //3. hasznos segéd-bordereket használni

  //CSS
  //1. középre rendezés módjai, segéd-borderek
  //2. flex-box használata
  //3. animáció lehetőségek ismerete

  //JS
  //1. events-ek ismerete
  //2. egyszerű függvények használata, minden funkcióra másik
  //3. Dom manipulállása: class-ok rárakása, levétele, HTML létrehozása Js-sel 
  //4. objektumok használata, adatok tárolása, kinyerése

  let rootE = document.getElementById("root");

  //a tömbbe objektumokat rakok
  let notes = [];

  notes.push({
    tag: "div",
    content: `
        I. Az interneten rákeresek a problémára!
    `
  });
  notes.push({
    tag: "p",
    content: `
                Saját kódot írok, egyszerűen!
    `
  });
  notes.push({
    tag: "div",
    content: `
        II. Betartom a "clean-coding" szabályait (tagolás, pontosvesszők, elnevezések stb.)!
    `
  });
  notes.push({
    tag: "p",
    content: `
              Használom a konzolt, debugg-olok!
    `
  });
  notes.push({
    tag: "div",
    content: `
        III. A feladatot lépésekre bontva kitartóan, próbálkozva oldom!
    `
  });
  notes.push({
    tag: "p",
    content: `
            Megtanulok programozni!!!
    `
  });


  notes.push({
    tag: "div",
    content: `
        HTML Sokféle tag-et használok!
    `
  });
  notes.push({
    tag: "code",
    content: `
       inline: <a>, <button>, <script>, <select>, <code>, <input> 
       block: <form>, <main>, <article>, <nav>, <footer>, <aside>, <section>, <pre>
    `
  });
  notes.push({
    tag: "div",
    content: `
        HTML Parent - child tabolás
    `
  });
  notes.push({
    tag: "code",
    content: `
  <body>
    <div id="open">
      <svg viewBox="0 0 40 40">
        <rect class="a" x="0" y="0" width="20" height="2" />
        <rect class="b" x="0" y="0" width="20" height="2" />
        <rect class="c" x="0" y="0" width="20" height="2" />
      </svg>
    </div>
    <nav id="nav">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <main id="main">
      <section id="about"></section>
      <section id="products"></section>
      <section id="services"></section>
      <section id="contact"></section>
    </main>
  </body>
    `
  });
  notes.push({
    tag: "div",
    content: `
        HTML Input types
    `
  });
  notes.push({
    tag: "code",
    content: `
    button, checkbox, time, email, text, radio, file, url, password, range stb.

        <form action="/action_page.php" class="rgb">
            <label for="red">Red</label>
            <input type="number" id="red" name="red" min="0" max="255" value="153">
        </form>
    `
  });


  notes.push({
    tag: "div",
    content: `
        CSS Középre rendezés / Segéd-borderek
    `
  });
  notes.push({
    tag: "code",
    content: `
      { position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%); }


        *  {border: 1px dotted red;
            margin: 2px;}
      div  {border: 1px solid black;}
      html {border:0px solid blue; margin:0;}
      body {border:2px solid green; margin:0;}

      
    `
  });
  notes.push({
    tag: "div",
    content: `
        CSS  Flexbox
    `
  });
  notes.push({
    tag: "code",
    content: `
    { position: relative;
      display: flex;
      justify-content: space-around;
      align-items: center;
      align-content: stretch;
      flex-direction: column;
      flex-wrap: wrap;
      flex-flow: column wrap;
      flex: 1 1 50%; }
    `
  });
  notes.push({
    tag: "div",
    content: `
        CSS Animációk 
    `
  });
  notes.push({
    tag: "code",
    content: `
    &.clicked {
        h1 {animation: name1 4s reverse;}
         p {animation: name1 4s linear infinite;}
   
      @keyframes name1 {
          0% { transform:translate(-50%, -50%) rotate(0deg);}
        100% {transform:translate(-50%, -50%) rotate(-360deg);}
      }
   } 
    html{scroll-behavior: smooth;}

    transition: background 2s, transform 2s;
    transition: width 2s ease-in-out 0.5s;

    transform: scale(0.5,2);
    transform: rotateX(150deg);
    `
  });


  notes.push({
    tag: "div",
    content: `
        JS Events
    `
  });
  notes.push({
    tag: "code",
    content: `
        object.addEventListener("load", myScript);

    events: click, change, drop, input, keyup, submit stb.
    `
  });
  notes.push({
    tag: "div",
    content: `
        JS Dom manipulállás
    `
  });
  notes.push({
    tag: "code",
    content: `
    document.getElementById("root");
    
    rootE.querySelectorAll(".fruit");
  
    rootE.insertAdjacentHTML("beforeend",
       <&dollar;{myObject.tag}>&dollar;{myObject.content}</&dollar;{myObject.tag}>);

    rootE.classList.toggle("clicked");

    flipFlop.innerHTML = "Go Right!";
    `
  });
  notes.push({
    tag: "div",
    content: `
        JS Objektumok 
    `
  });
  notes.push({
    tag: "code",
    content: `
    
    `
  });
  //console.log(notes);

  //végigmegyek a tömb objektumain
  for (note of notes) {

    if (note.tag === "div")
    root.insertAdjacentHTML("beforeend", `<${note.tag} >${note.content}</${note.tag}>` );
                               
else
 //highlight.js-el megjelenitett kód
    root.insertAdjacentHTML("beforeend", `<pre><${note.tag} style="background-color: bisque">${note.content.replaceAll("<","&lt;").replaceAll(">","&gt;")}</${note.tag}></pre>` );
                                        
}

hljs.initHighlightingOnLoad();

    document.querySelectorAll('pre code').forEach((block) => {
    
      hljs.highlightBlock(block);
    });

  } 
window.addEventListener("load", _load);