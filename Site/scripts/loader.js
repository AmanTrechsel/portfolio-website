var windows;
fetchJSON('../assets/json/windows.json').then(json => { windows = json });

const content = document.querySelector('.content');
const navTasks = document.querySelector('.nav-tasks');

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

var base_file_cached;

function loadFiles() {
  fetch('../assets/html/base_file.html').then(response => response.text()).then(base_file => {
    base_file_cached = base_file;
    for (var key in windows) {
      var file = windows[key];
      if (file.desktop) {
        content.innerHTML += loadFile(key, base_file);
      }
    };
  });
}

function loadFile(key, base_file) {
  var file = windows[key];
  var fileElement = base_file;
  fileElement = fileElement.replace(/{{type}}/g, key);
  fileElement = fileElement.replace(/{{name}}/g, file.name);
  fileElement = fileElement.replace(/{{icon}}/g, file.icon);
  fileElement = fileElement.replace(/{{window}}/g, key);
  if (!file.desktop) {
    fileElement = fileElement.replace(/class="file"/g, 'class="file folder"');
  }
  return fileElement;
}

function replaceVariable(match, variableName) {
  if (variables.hasOwnProperty(variableName)) {
    return variables[variableName];
  } else {
    return match;
  }
}

function replaceFile(match, file) {
  if (base_file_cached == undefined || base_file_cached == null) {
    fetch('../assets/html/base_file.html').then(response => response.text()).then(base_file => {
      base_file_cached = base_file;
      return loadFile(file, base_file);
    });
  }
  return loadFile(file, base_file_cached);
}

function loadWindows() {
  fetch('../assets/html/base_window.html').then(response => response.text()).then(base_window => {
    fetch('../assets/html/base_nav_task.html').then(response => response.text()).then(base_nav_task => {
      const navTasksInner = navTasks.innerHTML;
      navTasks.innerHTML = '';
      for (var key in windows) {
        var window = windows[key];
        var windowElement = base_window;
        var navTaskElement = base_nav_task;
        windowElement = windowElement.replace(/{{content}}/g, window.content);
        windowElement = windowElement.replace(/{{var:([^}]+)}}/g, replaceVariable);
        windowElement = windowElement.replace(/{{file:([^}]+)}}/g, replaceFile);
        if (window.loadFile) {
          windowElement = windowElement.replace(/{{loadFile}}/g, window.loadFile);
        }
        windowElement = windowElement.replace(/{{type}}/g, key);
        windowElement = windowElement.replace(/{{name}}/g, window.name);
        windowElement = windowElement.replace(/{{icon}}/g, window.icon);
        navTaskElement = navTaskElement.replace(/{{type}}/g, key);
        navTaskElement = navTaskElement.replace(/{{name}}/g, window.name);
        navTaskElement = navTaskElement.replace(/{{icon}}/g, window.icon);
        content.innerHTML += windowElement;
        navTasks.innerHTML += navTaskElement;
      };
      navTasks.innerHTML += navTasksInner;
    });
  });
}

setTimeout(() => {
  loadFiles();
  loadWindows();
}, 1000);