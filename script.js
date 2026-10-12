// No ကိုနှိပ်ဖို့ကြိုးစားတိုင်း ပြောင်းမယ့် gif နဲ့ စာတွေ (အစဉ်လိုက်)
var noGifs = [1,2,3,4,5,6,7].map(function(n){ return 'assets/no-' + n + '.gif'; });
var noCaps = [
  "နာချင်နေတာ",
  "လောထုတ်ပလိုက်မယ်",
  "ကင်စားပလိုက်မယ်နော",
  "လက်သီးစားချင်နာလား",
  "ဓားမတုံးတုံးနဲ့ခုတ်ခံရတော့မှာ",
  "အထုခံချင်နာလား…ပြော",
  "ဟွန့် … ဘာမှတ်နေလဲ?"
];
// Yes နှိပ်ရင် လှည့်ပြမယ့် စာတွေနဲ့ gif တွေ
var yesCaps = [
  "အာဘွား … အာဘွား…. အာဘွား….",
  "ညားရီးချစ်",
  "ဖိတ်စာရိုက်လိုက်ရတော့မလား"
];
var yesGifs = [1,2,3,4,5].map(function(n){ return 'assets/yes-' + n + '.gif'; });

var yes = document.getElementById('yes'), no = document.getElementById('no');
var tries = 0;

function dodge(e){
  if (e) e.preventDefault();
  no.style.position = 'fixed';
  var w = window.innerWidth - no.offsetWidth - 20,
      h = window.innerHeight - no.offsetHeight - 20;
  no.style.left = Math.max(10, Math.random() * w) + 'px';
  no.style.top  = Math.max(10, Math.random() * h) + 'px';
  tries++;
  var k = (tries - 1) % noGifs.length;
  document.getElementById('main').src = noGifs[k];
  document.getElementById('cap').textContent = noCaps[k];
}
no.addEventListener('mouseenter', dodge);
no.addEventListener('touchstart', dodge, {passive:false});
no.addEventListener('click', dodge);

yes.addEventListener('click', function(){
  document.getElementById('ask').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  var yi = 0, yg = document.getElementById('yesgif');
  var yc = document.getElementById('yescap');
  yg.src = yesGifs[0]; yc.textContent = yesCaps[0];
  setInterval(function(){ yi = (yi + 1) % yesGifs.length; yg.src = yesGifs[yi]; yc.textContent = yesCaps[yi % yesCaps.length]; }, 3000);
  for (var i = 0; i < 30; i++){
    var h = document.createElement('div');
    h.className = 'heart';
    h.textContent = ['❤️','💖','💕'][i % 3];
    h.style.left = Math.random() * 100 + 'vw';
    h.style.animationDelay = (Math.random() * 1.5) + 's';
    document.body.appendChild(h);
  }
});
