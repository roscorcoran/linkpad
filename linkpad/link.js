window.onbeforeunload = function () {
  return 'Really leave?';
};
var st, ost;
var di = function (e) {
  return document.getElementById(e);
};
var s = function () {
  st[0] = di('n').value;
  st[1] = di('i').value;
  window.onbeforeunload = null;
  window.location.href = window.location.href.replace(encodeURIComponent(btoa(JSON.stringify(ost))), encodeURIComponent(btoa(JSON.stringify(st))));
};
var d = function () {
  di('d').download = di('i').value + '.txt';
  di('d').href = 'data:text/plain;base64,' + btoa(di('n').value);
};
var ol = function () {
  st = JSON.parse(atob(decodeURIComponent(window.location.href.match(/!--.*?--/g)[1].slice(3, -1).slice(0, -1))));
  ost = JSON.parse(JSON.stringify(st));
  di('n').value = st[0];
  di('i').value = st[1];
  document.title = 'Linkpad - ' + st[1];
};