var beforeLoaded = document.querySelector("#beforeLoaded");
var postLoaded = document.querySelector("#postLoaded");
var loadingTooLong = document.querySelector("#loadingBarTooLong");
var tutorialInitial = document.querySelector("#tutorialInitial");
var tutorialSecondary = document.querySelector("#tutorialSecondary");
var monitor = document.querySelector(".monitor");

beforeLoaded.style.display = "inherit";
postLoaded.style.display = "none";
loadingTooLong.style.display = "none";

setTimeout(function() {
  if (beforeLoaded.style.display == "inherit") {
    loadingTooLong.style.display = "inherit";
  }
}, 5000);

function loaded() {
  setTimeout(function() {
    beforeLoaded.classList.add("hide");
    postLoaded.style.display = "contents";
    setTimeout(function() {
      if (beforeLoaded.style.display == "hide") {
        beforeLoaded.style.display = "none";
        postLoaded.classList.add("show");
      }
    }, 500);
  }, 1000);
}

function hideOverlay() {
  postLoaded.classList.remove("show");
  tutorialInitial.classList.add("shown");
  setTimeout(function() {
    if (postLoaded.classList.contains("show") == false) {
      postLoaded.style.display = "none";
      monitor.style.display = "flex";
      monitor.focus();
    }
  }, 500);
}

function showOverlay() {
  monitor.style.display = "none";
  postLoaded.style.display = "inherit";
  postLoaded.classList.add("show");
}

if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
  // Mobile device style: fill the whole browser client area with the game canvas:
  var meta = document.createElement('meta');
  meta.name = 'viewport';
  meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
  document.getElementsByTagName('head')[0].appendChild(meta);

  document.body.style.textAlign = "left";
}

var canvas = document.querySelector("#unity-canvas");
canvas.style.width = window.innerWidth;
canvas.style.height = window.innerHeight;

var unityInstance = createUnityInstance(document.querySelector("#unity-canvas"), {
  arguments: [],
  dataUrl: "Build/Scene View.data",
  frameworkUrl: "Build/Scene View.framework.js",
  codeUrl: "Build/Scene View.wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "Voltseon",
  productName: "Portfolio",
  productVersion: "0.1",
  doNotCaptureKeyboard: true,
  // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
  // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
});