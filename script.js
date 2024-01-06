let playlist = [/* enter urls for songs here */];
function play() {
  document.getElementById("list").play();
}
let defined = [];
for (let i = 0; i > playlist.length; i++) {
  let a = document.createElement("source");
  let num = rand(0, playlist.length);
  for(;!defined.contains(num);num++){}
  defined.push(num);
  a.src = playlist[num];
  document.getElementById("list").appendChild(a);
}
