# linkpad
A notepad in a link!
No more TextEdit.app or Notepad.exe, get with the times.
Copy the link into your address bar and bookmark:
```
data:text/html, <html> <head> <title>Linkpad</title> <script> window.onbeforeunload=function(){return 'Really leave?';};var on = window.location.href.split('tdsh')[2]; var o = (on.length>0?window.location.href.slice(0,-(on.length)):window.location.href); var s = function () { window.onbeforeunload=null; window.location.href = o + encodeURIComponent(document.getElementById('n').value); }; var d = function () { var d = document.getElementById('d'); d.download = document.getElementById('i').value + '.txt'; d.href = 'data:text/plain;base64,' + btoa(document.getElementById('n').value); } </script> </head> <body onload="document.getElementById('n').value = decodeURIComponent(on);" style='border:2px solid grey;'> <input id='i' type='text' value='note'/>.txt <a id='d' href='/' onclick='d()' download='note.txt'>Download</a> <a id='s' href='' onclick='s(); return false;'>Save</a> <br> <textarea id='n' style='border:1px solid grey;height: 100%;width: 100%' autofocus></textarea> </body> </html>tdshA%20Note
```

Working on:
- Full browser support (Safari)
- Autosave
- Local Save & Reload
- Autoname
- Styling

Supports:
Chrome- Yes
Firefox- Yes

Safari- Not so much.

IE- Potatoe
