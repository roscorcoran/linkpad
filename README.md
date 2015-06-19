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
data:text/html,%3Chtml%3E%3Chead%3E%3Ctitle%3ELinkpad%20-%20note%3C%2Ftitle%3E%3Cscript%20type%3Dtext%2Fjavascript%3E%0Awindow.onbeforeunload%3Dfunction()%7Breturn%22Really%20leave%3F%22%7D%3Bvar%20st%2Cost%2Cdi%3Dfunction(n)%7Breturn%20document.getElementById(n)%7D%2Cs%3Dfunction()%7Bst%5B0%5D%3Ddi(%22n%22).value%2Cst%5B1%5D%3Ddi(%22i%22).value%2Cwindow.onbeforeunload%3Dnull%2Cwindow.location.href%3Dwindow.location.href.replace(encodeURIComponent(btoa(JSON.stringify(ost)))%2CencodeURIComponent(btoa(JSON.stringify(st))))%7D%2Cd%3Dfunction()%7Bdi(%22d%22).download%3Ddi(%22i%22).value%2B%22.txt%22%2Cdi(%22d%22).href%3D%22data%3Atext%2Fplain%3Bbase64%2C%22%2Bbtoa(di(%22n%22).value)%7D%2Col%3Dfunction()%7Bst%3DJSON.parse(atob(decodeURIComponent(window.location.href.match(%2F!--.*%3F--%2Fg)%5B1%5D.slice(3%2C-1).slice(0%2C-1))))%2Cost%3DJSON.parse(JSON.stringify(st))%2Cdi(%22n%22).value%3Dst%5B0%5D%2Cdi(%22i%22).value%3Dst%5B1%5D%2Cdocument.title%3D%22Linkpad%20-%20%22%2Bst%5B1%5D%7D%3B%0A%3C%2Fscript%3E%3Cstyle%3E%0Abody%7Bborder%3A2px%20solid%20grey%7D%23n%7Bborder%3A1px%20solid%20grey%3Bheight%3A100%25%3Bwidth%3A100%25%7D%0A%3C%2Fstyle%3E%3C%2Fhead%3E%3Cbody%20onload%3Dol()%3B%3E%3Cinput%20id%3Di%20type%3Dtext%3E.txt%20%3Ca%20id%3Dd%20href%3D%22%2F%22%20onclick%3Dd()%20download%3Dnote.txt%3EDownload%3C%2Fa%3E%20%3Ca%20id%3Ds%20href%3D%22%2F%22%20onclick%3D%22s()%3B%20return%20false%3B%22%3ESave%3C%2Fa%3E%3Cbr%3E%3Ctextarea%20id%3Dn%20autofocus%3E%3C%2Ftextarea%3E%3C%2Fbody%3E%3C!--WyJBIG5vdGUiLCJub3RlIl0%3D--%3E%3C%2Fhtml%3E
```

Working on:
- Full browser support (Safari client download)
- Autoname
- Styling
- Autosave
- minify js and HTML before generating link

Supports:
* Chrome- Yes
* Firefox- Yes
* Safari- Not so much.

IE- Potatoes

## Source
The source is in link/**.

## Build
npm install && gulp

1. link.js is minified
2. link.css is minified
3. link.html is built using inline CSS/Scripts
4. link.html is minified
5. link.html is URL Encoded and has the data URI appended


