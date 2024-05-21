class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

var lastX, lastY, isMouseDown = false;
var cachedWindows = {};
var cachedTasks = {};
const minimumSize = new Rectangle(0, 0, 320, 320);

document.addEventListener('mouseup', function (event) {
  if (event.button === 0) {
    isMouseDown = false;
    lastX = null;
    lastY = null;
  }
});

function getWindow(type='') {
  if (cachedWindows[type]) {
    return cachedWindows[type];
  }
  const currentWindow = document.getElementById(type);
  cachedWindows[type] = currentWindow;
  return currentWindow;
}

function getTask(type='') {
  if (cachedTasks[type]) {
    return cachedTasks[type];
  }
  const currentTask = document.getElementById('nav-task-' + type);
  cachedTasks[type] = currentTask;
  return currentTask;
}

function closeWindow(type='') {
  const navTask = getTask(type);
  navTask.style.display = 'none';
  const currentWindow = getWindow(type);
  currentWindow.eventListeners = {};
  currentWindow.style.display = 'none';
  const video = currentWindow.querySelector('video');
  if (video) {
    video.pause();
  }
  const audio = currentWindow.querySelector('audio');
  if (audio) {
    audio.pause();
  }
}

function minimizeWindow(type='') {
  const currentWindow = getWindow(type);
  currentWindow.style.display = 'none';
  currentWindow.style.zIndex = 0;
  const video = currentWindow.querySelector('video');
  if (video) {
    video.pause();
  }
  const audio = currentWindow.querySelector('audio');
  if (audio) {
    audio.pause();
  }
  resetAllNavTasks();
}

function maximizeWindow(type='') {
  const currentWindow = getWindow(type);
  currentWindow.style.width = 'calc(100% - 0.25dvh)';
  currentWindow.style.height = '81.25dvh';
  currentWindow.style.left = null;
  currentWindow.style.top = null;
  const navTask = getTask(type);
  navTask.style.display = 'flex';
  resetAllNavTasks();
}

function toggleWindow(type='') {
  const currentWindow = getWindow(type);
  if (currentWindow.style.zIndex == 2) {
    minimizeWindow(type);
  } else {
    openWindow(type);
  }
}

function resetAllWindowZIndex() {
  for (var key in cachedWindows) {
    cachedWindows[key].style.zIndex = 0;
  }
}

function resetAllNavTasks() {
  resetAllWindowZIndex()
  for (var key in cachedTasks) {
    cachedTasks[key].classList.remove('active');
  }
}

function openWindow(type='') {
  if (type == 'contact') {
    resetContactForm();
  }
  const navTask = getTask(type);
  navTask.style.display = 'flex';
  resetAllNavTasks();
  navTask.classList.add('active');
  const currentWindow = getWindow(type);
  currentWindow.style.zIndex = 2;
  currentWindow.style.display = 'flex';
  var content = document.querySelector('.content');
  currentWindow.addEventListener('mousemove', (event) => {
    moveWindow(currentWindow, content, navTask, event, true)
  });
  currentWindow.addEventListener('resize', (event) => {
    moveWindow(currentWindow, content, navTask, event, false)
  });
  loadSources(currentWindow);
  const navBarMovable = currentWindow.querySelector('.navbar-movable');
  navBarMovable.addEventListener('mousedown', function (event) {
    if (event.button === 0) {
      isMouseDown = true;
      currentWindow.style.width = '70dvh';
      currentWindow.style.height = '60dvh';
    }
    if (currentWindow.style.zIndex != 2) {
      resetAllWindowZIndex();
      currentWindow.style.zIndex = 2;
    }
  });
  navBarMovable.addEventListener('mouseup', function (event) {
    if (currentWindow.style.zIndex == 2) {
      currentWindow.style.zIndex = 1;
    }
  });
}

function moveWindow(currentWindow, content, navTask, event, shouldMove) {
  if (isMouseDown) {
    if (lastX && lastY && shouldMove) {
      currentWindow.style.left = currentWindow.offsetLeft + event.clientX - lastX + 'px';
      currentWindow.style.top = currentWindow.offsetTop + event.clientY - lastY + 'px';
    }
    if (false) {
      if (currentWindow.offsetLeft < bounds.x) {
        currentWindow.style.left = bounds.x + 'px';
      }
      if (currentWindow.offsetTop < bounds.y) {
        currentWindow.style.top = bounds.y + 'px';
      }
      if (currentWindow.offsetLeft + currentWindow.offsetWidth > bounds.right) {
        currentWindow.style.width = bounds.right - currentWindow.offsetLeft + 'px';
        currentWindow.style.left = bounds.right - currentWindow.style.left + 'px';
      }
      if (currentWindow.offsetTop + currentWindow.offsetHeight > bounds.bottom) {
        currentWindow.style.height = bounds.bottom - currentWindow.offsetHeight + 'px';
        currentWindow.style.top = bounds.bottom - currentWindow.style.top + 'px';
      }
      if (currentWindow.offsetWidth < minimumSize.width) {
        currentWindow.style.width = minimumSize.width + 'px';
      }
      if (currentWindow.offsetHeight < minimumSize.height) {
        currentWindow.style.height = minimumSize.height + 'px';
      }
    }
    if (!navTask.classList.contains('active') && shouldMove) {
      resetAllNavTasks();
      navTask.classList.add('active');
    }
    var bounds = content.getBoundingClientRect();
    var maxX = bounds.width - currentWindow.offsetWidth + 1;
    var maxY = bounds.height - currentWindow.offsetHeight;
    let posX = Math.max(0, Math.min(currentWindow.offsetLeft, maxX));
    let posY = Math.max(0, Math.min(currentWindow.offsetTop, maxY));
    currentWindow.style.left = posX + 'px';
    currentWindow.style.top = posY + 'px';
    if (shouldMove) {
      lastX = event.clientX;
      lastY = event.clientY;
    }
  }
}

var lastTime;

function updateLocalTime() {
  var now = new Date();
  var options = { hour: 'numeric', minute: 'numeric' };
  var localTime = now.toLocaleTimeString([], options);
  if (lastTime != localTime) {
    var currentTime = document.querySelector('#current-time');
    currentTime.textContent = localTime;
    lastTime = localTime;
  }
}

function resetContactForm() {
  if (error != undefined && error != null && contactForm != undefined && contactForm != null) {
    contactForm.parentNode.innerHTML = contactFormContent;
    error = document.getElementById("error");
    error.style.display = "none";
    updateContent();
  }
}

setInterval(updateLocalTime, 2000);
updateLocalTime();