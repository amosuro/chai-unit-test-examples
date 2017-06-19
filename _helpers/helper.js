var appendHtml = function(html){
  // Append buyBox-specific fixture to test
  var newFixture = document.createElement('div');
  newFixture.setAttribute("id", "new_fixture");
  newFixture.innerHTML = html;
  document.getElementById('fixtures').appendChild(newFixture);
};

var removeHtml = function(elementId) {
  // Remove #fixtures from the DOM
  var oldFixture = document.getElementById(elementId);
  oldFixture.parentNode.removeChild(oldFixture);
};

var clickElement = function(el) {
  var ev = document.createEvent("MouseEvent");
  ev.initMouseEvent(
    "click",
    true /* bubble */, true /* cancelable */,
    window, null,
    0, 0, 0, 0, /* coordinates */
    false, false, false, false, /* modifier keys */
    0 /*left*/, null
  );
  el.dispatchEvent(ev);
};
