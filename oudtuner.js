
      
      ====================
        var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
// Older webkit/blink browsers require a prefix

...

var myListener = audioCtx.listener;
        ===================

      

