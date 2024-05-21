var glSupported = document.querySelector("#glSupported");
var glNotSupported = document.querySelector("#glNotSupported");

var glTest = document.createElement('canvas').getContext('webgl2');
if (!glTest) {
  glSupported.style.display = "none";
  glNotSupported.style.display = "flex";
  if (typeof WebGL2RenderingContext !== 'undefined') {
    console.warn('Your browser appears to support WebGL2 but it might be disabled. Try updating your OS and/or video card drivers');
  } else {
    console.war('Your browser has no WebGL2 support at all'); 
  }
} else {
  glSupported.style.display = "inherit";
  glNotSupported.style.display = "none";
}