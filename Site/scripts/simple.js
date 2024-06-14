var windows;
fetchJSON('../assets/json/windows.json').then(json => { windows = json });

const button = "<button class='navbar-button' id={{type}} data-localize='{{type}}_name' onclick='openPage(\"{{type}}\")'></button>";
const subMenu = "<div class='navbar-submenu' id='{{type}}-submenu' structure={{structure}} style='background-color: {{background}}; margin-left: {{margin}}'>{{submenu}}</div>";

const colors = {
  0: '#442292',
  1: '#3A1F88',
  2: '#2F117C',
  3: '#200B6E'
}

async function fetchJSON(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}

function replaceVariable(match, variableName) {
  if (variables.hasOwnProperty(variableName)) {
    return variables[variableName];
  } else {
    return match;
  }
}

function openPage(page) {
  var file = windows[page];
  var content = document.querySelector('.content');

  if (file.content.includes("{{file=")) {
    var submenu = document.getElementById(page + '-submenu');
    resetSubmenus(submenu.getAttribute('structure'));
    if (submenu.style.display == 'none') {
      submenu.style.display = 'flex';
    }
    else {
      resetSubmenusFrom(submenu.getAttribute('structure'));
      submenu.style.display = 'none';
    }
  }
  else if (file.content.includes("{{link=")) {
    var link = file.content.match(/{{link=([^}]*)}}/g)[0].replace(/{{link=([^}]*)}}/g, '$1');
    window.open(link, '_blank');
  }
  else {
    content.innerHTML = '';
    var contentElement = file.content;

    contentElement = contentElement.replace(/{{var=([^}]+)}}/g, replaceVariable);
    if (file.loadFile) {
      contentElement = contentElement.replace(/{{loadFile}}/g, file.loadFile);
    }
    contentElement = contentElement.replace(/{{type}}/g, page);
    contentElement = contentElement.replace(/{{name}}/g, file.name);
    contentElement = contentElement.replace(/{{icon}}/g, file.icon);
    content.innerHTML += contentElement;

    document.querySelector(".navbar-title").innerHTML = translations[currentLanguage][page + '_name'];
    loadSources(content);

    updateContent();
  }
}

function resetSubmenus(structure) {
  var submenus = document.querySelectorAll('.navbar-submenu');
  for (var i = 0; i < submenus.length; i++) {
    if (submenus[i].getAttribute('structure')[0] != structure[0]) {
      submenus[i].style.display = 'none';
      continue;
    }
    if (submenus[i].getAttribute('structure')[2]) {
      if (submenus[i].getAttribute('structure')[2] != structure[2]) {
        submenus[i].style.display = 'none';
        continue;
      }
    }
    if (submenus[i].getAttribute('structure')[4]) {
      if (submenus[i].getAttribute('structure')[4] != structure[4]) {
        submenus[i].style.display = 'none';
        continue;
      }
    }
  }
}

function resetSubmenusFrom(structure) {
  var submenus = document.querySelectorAll('.navbar-submenu');
  for (var i = 0; i < submenus.length; i++) {
    if (submenus[i].getAttribute('structure')[structure.length-1] == structure[structure.length-1]) {
      submenus[i].style.display = 'none';
    }
  }
}

function toggleBurgerMenu() {
  var burgerMenu = document.querySelector('.navbar');
  var burgerMenuButton = document.getElementById('buger-menu');
  burgerMenu.classList.toggle('open');
  burgerMenuButton.classList.toggle('open');
}

function loadFiles() {
  var navbar = document.querySelector('.navbar');

  var inner = "";
  var parsed = {};
  let index = 0;
  for (var key in windows) {
    if (parsed[key]) {
      continue;
    }

    inner += parseFile(windows, key, parsed, index, 0)
    index++;
  };

  navbar.innerHTML = inner + navbar.innerHTML;

  updateContent();
}

function parseFile(windows, key, parsed, index, depth) {
  var file = windows[key];
  var returnValue = "";
  returnValue += button.replace(/{{type}}/g, key);
  if (file.content) {
    if (file.content.includes("{{file=")) {
      var submenu = "";
      var files = file.content.match(/{{file=([^}]*)}}/g);
      var subindex = 0;
      for (var i = 0; i < files.length; i++) {
        submenu += parseFile(windows, files[i].replace(/{{file=([^}]*)}}/g, '$1'), parsed, index + '.' + subindex, depth + 1);
        parsed[file] = file;
        subindex++;
      }
      returnValue += subMenu.replace(/{{type}}/g, key).replace(/{{submenu}}/g, submenu).replace(/{{structure}}/g, index).replace(/{{background}}/g, colors[depth]).replace(/{{margin}}/g, depth * 10 + 'px');
    }
  }
  parsed[key] = file;
  return returnValue;
}

setTimeout(() => { loadFiles(); }, 1000);