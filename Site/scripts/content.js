const basicSchoolProjectContent = `
<div class='full-fill'>
  <div class='school-project-content'>
    <div class='school-project-header' style='background-image: url(../assets/img/banner/{{type}}.jpg);'>
      <h1 data-localize="{{type}}_name"></h1>
    </div>
    <p data-localize="{{type}}_duration"></p>
    <p data-localize="{{type}}_members"></p>
    <br>
    <p data-localize="{{type}}_description"></p>
    <p data-localize="{{type}}_made_using"></p>
    <br>
    {{uniqueContent}}
  </div>
</div>
`;

const basicPersonalProjectContent = `
<div class='full-fill'>
  <div class='personal-project-content'>
    <div class='personal-project-header' style='background-image: url(../assets/img/banner/{{type}}.jpg);'>
      <h1 data-localize="{{type}}_name"></h1>
    </div>
    <p data-localize="{{type}}_description"></p>
    <br>
    {{uniqueContent}}
  </div>
</div>
`;

const contactFormContent = `
<div class='full-fill'>
  <div class='other-content'>
    <h1 data-localize="contact"></h1>
    <p data-localize="contact_subtitle"></p>
    <p data-localize="contact_alternative"></p>
    <form id='contactForm' action='#'>
      <label for='name'><span class='required'>*</span> <span data-localize="name"></span>:</label>
      <input type='text' id='name' name='name' autocomplete='name' title='' required>
      <label for='email'><span class='required'>*</span> <span data-localize="email"></span>:</label>
      <input type='email' id='email' name='email' autocomplete='email' title='' required>
      <label for='subject' name='subject'><span class='required'>*</span> <span data-localize="subject"></span>:</label>
      <input type='text' id='subject' name='subject' autocomplete='subject' title='' required>
      <label for='message'><span class='required'>*</span> <span data-localize="message"></span>:</label>
      <textarea name='message' id='message' autocomplete='off' title='' required></textarea>
      <button onclick='submitContactForm(event)' data-localize="send"></button>
      <p id='error' data-localize="mail_error"></p>
    </form>
  </div>
</div>
`;

const iframeFile = `
<div class='full-fill'>
  <div class='other-content'>
    <button onclick='openURL("./assets/{{loadFile}}")' data-localize="open_seperate"></button>
    <iframe targetSource="./assets/{{loadFile}}"></iframe>
  </div>
</div>
`;

const videoFile = `
<div class='full-fill'>
  <div class='other-content'>
    <button onclick='openURL("./assets/video/{{loadFile}}")' data-localize="open_seperate"></button>
    <video controls preload="none">
      <source src="./assets/video/{{loadFile}}" type="video/mp4">
      <p data-localize="video_not_supported"></p>
    </video>
  </div>
</div>
`;

const audioFile = `
<div class='full-fill'>
  <div class='other-content'>
    <button onclick='openURL("./assets/audio/{{loadFile}}")' data-localize="open_seperate"></button>
    <audio controls preload="none">
      <source src="./assets/audio/{{loadFile}}" type="audio/mp3">
      <p data-localize="audio_not_supported"></p>
    </audio>
  </div>
</div>
`;

const sunnyContent = basicSchoolProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://github.com/Raeven69/Sunny')">Github</button>
  <button class="project-button" onclick="openURL('https://raeven69.github.io/Sunny/')">Website</button>
`);

const morgisterContent = basicSchoolProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://github.com/AmanTrechsel/Team-Bravo')">Github</button>
  <p class="note" data-localize="morgister_note"></p>
`);

const battlebotsContent = basicSchoolProjectContent.replace(/{{uniqueContent}}/g, `
  <button onclick='openURL("./assets/video/battlebots.mp4")' data-localize="open_seperate"></button>
  <video controls preload="none">
    <source src="./assets/video/battlebots.mp4" type="video/mp4">
    <p data-localize="video_not_supported"></p>
  </video>
  <button class="project-button" onclick="openURL('https://github.com/AmanTrechsel/Jasir-en-de-rest')">Github</button>
`);

const timeWiseContent = basicSchoolProjectContent.replace(/{{uniqueContent}}/g, `
  <button onclick='openURL("./assets/video/PS_Y1S2_Digitale_Presentatie.mp4")' data-localize="open_seperate"></button>
  <video controls preload="none">
    <source src="./assets/video/PS_Y1S2_Digitale_Presentatie.mp4" type="video/mp4">
    <p data-localize="video_not_supported"></p>
  </video>
  <button class="project-button" onclick="openURL('https://github.com/AmanTrechsel/WildInnovators')">Github</button>
  <button class="project-button" onclick="openURL('https://aman.gg/timewise')">Website</button>
  <button class="project-button" onclick="openURL('https://play.google.com/store/apps/details?id=com.WildInnovators.TimeWise')">Google Play</button>
  <button class="project-button" onclick="openURL('https://aman.gg/timewise/TimeWise.apk')">Download App (APK)</button>
  <button class="project-button" onclick="openURL('https://aman.gg/timewise/WebEditor_Windows.zip')">Download WebEditor (Win)</button>
  <p class="note" data-localize="timewise_note"></p>
  <p class="note" data-localize="timewise_note_2"></p>
`);

const duoContent = basicSchoolProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://www.rijksorganisatieodi.nl/actueel/nieuws/2023/11/16/studenten-ontwikkelen-applicatie-voor-toegankelijkheid-websites')" data-localize="article"></button>
  <button class="project-button" onclick="openURL('https://gitlab.com/nhlstendenIT/inf2023/duo/duo')">Gitlab</button>
  <button class="project-button" onclick="openURL('http://www.werkenbijduotest.nl/')">Website</button>
  <p class="note" data-localize="only_for_authorized"></p>
`);

const trainingssiteContent = basicSchoolProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://gitlab.com/nhlstendenIT/inf2023/duowebsite/duo')">Gitlab</button>
  <button class="project-button" onclick="openURL('http://digitoeshop.nl/')">Website</button>
  <p class="note" data-localize="only_for_authorized"></p>
`);

const hboMinContent = basicSchoolProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://gitlab.com/kspalink/data-processing')">Gitlab</button>
  <button class="project-button" onclick="openURL('https://github.com/HuubHamstra/data-processing-api')">API</button>
  <p class="note" data-localize="only_for_authorized"></p>
`);

const racesimDashboardContent = basicSchoolProjectContent.replace(/{{uniqueContent}}/g, `
  <img src="../assets/img/dashboard.webp" alt="RaceSim Dashboard" class="project-image">
  <button class="project-button" onclick="openURL('https://github.com/AmanTrechsel/SimRacing-Dashboard')">Dashboard Github</button>
`);

const jabberpointContent = basicSchoolProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://github.com/AmanTrechsel/JabberPoint')">Github</button>
`);

const pivotContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://eeveeexpo.com/pivot/')">Forum</button>
`);

const shatteredLightContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://eeveeexpo.com/shattered-light/')">Forum</button>
`);

const lastWishContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://eeveeexpo.com/last-wish/')">Forum</button>
`);

const lastWish2Content = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://eeveeexpo.com/last-wish-2/')">Forum</button>
`);

const ethosContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://eeveeexpo.com/ethos/')">Forum</button>
`);

const spliceContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://eeveeexpo.com/splice/')">Forum</button>
`);

const spaceTrainersContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://eeveeexpo.com/threads/7057/')">Forum</button>
`);

const beekeeperContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://eeveeexpo.com/beekeeper/')">Forum</button>
`);

const quantumContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://eeveeexpo.com/quantum/')">Forum</button>
`);

const pokeClickerContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://eeveeexpo.com/threads/3568/')">Forum</button>
`);

const pokeScape3DContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://eeveeexpo.com/threads/3468/')">Forum</button>
`);

const dwContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://eeveeexpo.com/threads/2664/')">Forum</button>
`);

const zoruaContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://eeveeexpo.com/threads/2513/')">Forum</button>
`);

const watermelonsWithGarchompContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://eeveeexpo.com/threads/4451/')">Forum</button>
`);

const politoaderContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
	<button class="project-button" onclick="openURL('https://eeveeexpo.com/threads/4450/')">Forum</button>
`);

const theCakeIsRealContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
	<button class="project-button" onclick="openURL('https://eeveeexpo.com/threads/4453/')">Forum</button>
`);

const pokemonTrashIslandContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
	<button class="project-button" onclick="openURL('https://eeveeexpo.com/threads/4449/')">Forum</button>
`);

const topsyTurvyContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
	<button class="project-button" onclick="openURL('https://eeveeexpo.com/threads/4452/')">Forum</button>
`);

const myFriendRioluContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
	<button class="project-button" onclick="openURL('https://sites.google.com/view/thundagas-games/pog-jam?authuser=0')">Forum</button>
  <p class="note" data-localize="my_friend_riolu_note"></p>
`);

const wogTogContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
	<button class="project-button" onclick="openURL('https://eeveeexpo.com/threads/5185/')">Forum</button>
`);

const poggersLegendsContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
	<button class="project-button" onclick="openURL('https://eeveeexpo.com/threads/7072/')">Forum</button>
`);

const gameOfSleepContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
	<button class="project-button" onclick="openURL('https://eeveeexpo.com/threads/5057/')">Forum</button>
`);

const ompContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
	<button class="project-button" onclick="openURL('https://eeveeexpo.com/threads/6008/')">Forum</button>
`);

const vmsContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
	<button class="project-button" onclick="openURL('https://eeveeexpo.com/resources/1453/')">Forum</button>
`);

const voeContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
	<button class="project-button" onclick="openURL('https://eeveeexpo.com/resources/1087/')">Forum</button>
`);

const vhtContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
	<button class="project-button" onclick="openURL('https://eeveeexpo.com/resources/400/')">Forum</button>
`);

const vaspContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
	<button class="project-button" onclick="openURL('https://eeveeexpo.com/resources/804/')">Forum</button>
`);

const vpmContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
	<button class="project-button" onclick="openURL('https://eeveeexpo.com/resources/692/')">Forum</button>
`);

const vtgContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
	<button class="project-button" onclick="openURL('https://eeveeexpo.com/resources/914/')">Forum</button>
`);

const pokesearchContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
	<button class="project-button" onclick="openURL('https://eeveeexpo.com/resources/849/')">Forum</button>
`);

const emeraldUIPackContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
	<button class="project-button" onclick="openURL('https://eeveeexpo.com/resources/965/')">Forum</button>
`);

const onepxCharacterCreatorContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
	<button class="project-button" onclick="openURL('https://eeveeexpo.com/resources/724/')">Forum</button>
`);

const planetStrandedContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://voltseon.itch.io/planet-stranded')">Forum</button>
`);

const busCatchingContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
  <button class="project-button" onclick="openURL('https://play.google.com/store/apps/details?id=com.voltseon.com')">Download</button>
`);

const portfolioWebsiteContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
  <h3 data-localize="portfolio-website_localization_header"></h3>
  <p data-localize="portfolio-website_localization"></p>
  <h3 data-localize="portfolio-website_dynamic_header"></h3>
  <p data-localize="portfolio-website_dynamic"></p>
  <br>
  <button class="project-button" onclick="openURL('https://github.com/AmanTrechsel/portfolio-website')">Github</button>
`);

const dndContent = basicPersonalProjectContent.replace(/{{uniqueContent}}/g, `
  <h3 data-localize="dnd_players_heading"></h3>
  <p data-localize="dnd_players"></p>
  <h3 data-localize="dnd_website_heading"></h3>
  <p data-localize="dnd_website"></p>
  <img src="../assets/img/dnd_website.webp" alt="Dungeons & Dragons Website" class="project-image">
  <h3 data-localize="dnd_planning_heading"></h3>
  <p data-localize="dnd_planning"></p>
  <img src="../assets/img/dnd_planning.webp" alt="Dungeons & Dragons Planning" class="project-image">
`);

const aboutContent = `
<div class='full-fill'>
  <div class='other-content'>
    <h1 data-localize="about"></h1>
    <p data-localize="about_intro"></p>
    <h2 data-localize="skills"></h2>
    <h3 data-localize="programming_languages"></h3>
    <ul>
      <li>Java</li>
      <li>Ruby</li>
      <li>C#</li>
      <li>Python</li>
      <li>JavaScript</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>PHP</li>
      <li>MySQL</li>
    </ul>
    <h3 data-localize="languages"></h3>
    <ul>
      <li data-localize="dutch"></li>
      <li data-localize="english"></li>
      <li data-localize="german"></li>
    </ul>
    <h3 data-localize="frameworks_and_tools"></h3>
    <ul>
      <li>Unity</li>
      <li>RPG Maker XP</li>
      <li>GitHub</li>
      <li>Visual Studio Code</li>
      <li>IntelliJ IDEA</li>
      <li>Android Studio</li>
      <li>Paint.NET</li>
      <li>Figma</li>
      <li>Audacity</li>
      <li>Blender</li>
      <li>Microsoft Office</li>
    </ul>
    <h2 data-localize="education"></h2>
    <h3>NHL Stenden Emmen</h3>
    <p>Software Engineering</p>
    <p>Bachelor</p>
    <p>2022 - <span data-localize="present"></span></p>
    <h3>NHL Stenden Leeuwarden</h3>
    <p>Communication & Multimedia Design</p>
    <p data-localize="unfinished"></p>
    <p>2020 - 2022</p>
    <h3>Esdal College Oosterstraat</h3>
    <p>HAVO (N&T)</p>
    <p>2015 - 2020</p>
    <h2 data-localize="interests"></h2>
    <ul>
      <li>Software Development</li>
      <li>Game Development</li>
      <li>Web Development</li>
      <li>Graphics Programming</li>
      <li>Machine Learning</li>
      <li data-localize="music_bass"></li>
    </ul>
    <h2 data-localize="qualities"></h2>
    <ul>
      <li data-localize="creative"></li>
      <li data-localize="independent"></li>
      <li data-localize="modest"></li>
      <li data-localize="product_driven"></li>
    </ul>
  </div>
</div>
`;

const variables = {
  contactFormContent: contactFormContent,
  iframeFile: iframeFile,
  videoFile: videoFile,
  audioFile: audioFile,
  sunnyContent: sunnyContent,
  morgisterContent: morgisterContent,
  battlebotsContent: battlebotsContent,
  timeWiseContent: timeWiseContent,
  duoContent: duoContent,
  trainingssiteContent: trainingssiteContent,
  hboMinContent: hboMinContent,
  racesimDashboardContent: racesimDashboardContent,
  jabberpointContent: jabberpointContent,
  pivotContent: pivotContent,
  shatteredLightContent: shatteredLightContent,
  lastWishContent: lastWishContent,
  lastWish2Content: lastWish2Content,
  ethosContent: ethosContent,
  spliceContent: spliceContent,
  spaceTrainersContent: spaceTrainersContent,
  beekeeperContent: beekeeperContent,
  quantumContent: quantumContent,
  pokeClickerContent: pokeClickerContent,
  pokeScape3DContent: pokeScape3DContent,
  dwContent: dwContent,
  zoruaContent: zoruaContent,
  watermelonsWithGarchompContent: watermelonsWithGarchompContent,
  politoaderContent: politoaderContent,
  theCakeIsRealContent: theCakeIsRealContent,
  pokemonTrashIslandContent: pokemonTrashIslandContent,
  topsyTurvyContent: topsyTurvyContent,
  myFriendRioluContent: myFriendRioluContent,
  wogTogContent: wogTogContent,
  poggersLegendsContent: poggersLegendsContent,
  gameOfSleepContent: gameOfSleepContent,
  ompContent: ompContent,
  vmsContent: vmsContent,
  voeContent: voeContent,
  vhtContent: vhtContent,
  vaspContent: vaspContent,
  vpmContent: vpmContent,
  vtgContent: vtgContent,
  pokesearchContent: pokesearchContent,
  emeraldUIPackContent: emeraldUIPackContent,
  onepxCharacterCreatorContent: onepxCharacterCreatorContent,
  planetStrandedContent: planetStrandedContent,
  busCatchingContent: busCatchingContent,
  portfolioWebsiteContent: portfolioWebsiteContent,
  dndContent: dndContent,
  aboutContent: aboutContent
}

function openURL(url) {
  window.open(url, '_blank');
}

function loadSources(currentWindow) {
  var iframe = currentWindow.querySelector('iframe');
  if (iframe) {
    iframe.src = iframe.getAttribute('targetSource');
  }
}

function complexView() {
  window.open("https://aman.gg/", "_self")
}

function simpleView() {
  window.open("https://aman.gg/simple", "_self")
}

var contactForm;
var error;

function submitContactForm(event) {
  event.preventDefault();
  error = document.getElementById("error");
  contactForm = event.target.parentNode.parentNode;

  emailjs.init("8yDK2uuXF7uTdgcnJ");
  emailjs.sendForm('service_ck5zl4n', 'template_iuqgfec', document.getElementById("contactForm"))
    .then(function () {
      contactForm.innerHTML = '<p id="thank-you" data-localize="message_thanks">' + translations[currentLanguage]["message_thanks"] + '</p>';
    }, function (error) {
      console.error(error);
      error.style.display = "unset";
    });
}

function resetContactForm() {
  if (error != undefined && error != null && contactForm != undefined && contactForm != null) {
    contactForm.parentNode.innerHTML = contactFormContent;
    error = document.getElementById("error");
    error.style.display = "none";
    updateContent();
  }
}