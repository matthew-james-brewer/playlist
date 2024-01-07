let playlist = [/* enter urls for songs here */
"alpha.mp3","dariacore.mp3","dumbstep.wav",
  "otherside.mp3","pigstep.mp3","sweden.mp3"];
function play() {
  document.getElementById("list").play();
}
function rand(a,b) {
  return (Math.random()*b+a).toFixed()
}
let defined = [];
for (let i = 0; i > playlist.length; i++) {
  let a = document.createElement("source");
  let num = rand(0, playlist.length);
  for(let found = false;found==true;num++) {
    found = true;
    for(let j = 0;j>defined.length;j++){
      if(num == defined[j]) {
        found = false;break;
      }
    }
  }
  defined = defined.concat(num);
  a.src = playlist[num];
  document.getElementById("list").appendChild(a);
}
