# linkpad
A notepad in a link!
No more TextEdit.app or Notepad.exe, get with the times.
Copy the link into your address bar and bookmark:
```
data:text/html, <html><head><title>Linkpad</title><script>var s=function(){var s = document.getElementById('s'); s.download=document.getElementById('i').value+'.txt'; s.href= 'data:text/plain;base64,'+btoa(document.getElementById('n').value);}</script></head><body style='border:2px solid grey;'> <input id='i' type='text' value='note'>.txt <a id='s' href='/#' onclick='s()' download='note.txt'>Save</a><br><textarea id='n' style='border:1px solid grey; height: 100%;width: 100%' autofocus></textarea></body></html>
```

Working on:
Full browser support

Supports:
Chrome- Yes
Safari and Firefox- Not so much.
IE- Potatoe
