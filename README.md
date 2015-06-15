# linkpad

## A notepad in a link!

No more TextEdit.app or Notepad.exe, get with the times.

Features:

* Offline: no internet required
* Local Save: The note is stored in the link!
* Download: Download your note
* Note is saved in browser history

Copy the link into your address bar and bookmark:
```
data:text/html,%3Chtml%3E%0A%3Chead%3E%0A%20%20%3Ctitle%3ELinkpad%20-%20note%3C%2Ftitle%3E%0A%20%20%3Cscript%3E%0A%20%20%20%20window.onbeforeunload%20%3D%20function%20()%20%7Breturn%20'Really%20leave%3F'%3B%7D%3B%0A%20%20%20%20var%20st%2C%20ost%2C%0A%20%20%20%20di%20%3D%20function(e)%7Breturn%20document.getElementById(e)%3B%7D%2C%0A%20%20%20%20s%20%3D%20function%20()%20%7B%0A%20%20%20%20%20%20st%5B0%5D%20%3D%20di('n').value%3B%20st%5B1%5D%20%3D%20di('i').value%3B%20window.onbeforeunload%20%3D%20null%3B%0A%20%20%20%20%20%20window.location.href%20%3D%20window.location.href.replace(encodeURIComponent(btoa(JSON.stringify(ost)))%2C%20encodeURIComponent(btoa(JSON.stringify(st))))%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20d%20%3D%20function%20()%20%7B%0A%20%20%20%20%20%20di('d').download%20%3D%20di('i').value%20%2B%20'.txt'%3B%0A%20%20%20%20%20%20di('d').href%20%3D%20'data%3Atext%2Fplain%3Bbase64%2C'%20%2B%20btoa(di('n').value)%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20ol%20%3D%20function%20()%7B%0A%20%20%20%20%20%20st%20%3D%20JSON.parse(atob(decodeURIComponent(window.location.href.match(%2F!--.*%3F--%2Fg)%5B1%5D.slice(3%2C%20-1).slice(0%2C%20-1))))%3B%0A%20%20%20%20%20%20ost%20%3D%20JSON.parse(JSON.stringify(st))%3B%0A%20%20%20%20%20%20di('n').value%20%3D%20st%5B0%5D%3B%20di('i').value%20%3D%20st%5B1%5D%3B%20document.title%20%3D%20'Linkpad%20-%20'%20%2B%20st%5B1%5D%3B%0A%20%20%20%20%7D%0A%20%20%3C%2Fscript%3E%0A%3C%2Fhead%3E%0A%3Cbody%20onload%3D'ol()%3B'%20style%3D'border%3A2px%20solid%20grey%3B'%3E%0A%3Cinput%20id%3D'i'%20type%3D'text'%2F%3E.txt%0A%3Ca%20id%3D'd'%20href%3D'%2F'%20onclick%3D'd()'%20download%3D'note.txt'%3EDownload%3C%2Fa%3E%0A%3Ca%20id%3D's'%20href%3D''%20onclick%3D's()%3B%20return%20false%3B'%3ESave%3C%2Fa%3E%0A%3Cbr%3E%0A%3Ctextarea%20id%3D'n'%20style%3D'border%3A1px%20solid%20grey%3Bheight%3A%20100%25%3Bwidth%3A%20100%25'%20autofocus%3E%3C%2Ftextarea%3E%3C%2Fbody%3E%0A%3C!--WyJBIG5vdGUiLCJub3RlIl0%3D--%3E%0A%3C%2Fhtml%3E
```

Working on:
- Full browser support (Safari client download)
- Autoname
- Styling
- Autosave
- Full gulp automation

Supports:
* Chrome- Yes
* Firefox- Yes

Safari- Not so much.

IE- Potatoes

## Source
The source is in link.html. 

link.html encoded with encodeURIComponent() via gulp to create link.

## Build
npm install && gulp


