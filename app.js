const akey= document.getElementById("akey");
akey.addEventListener("click",()=>{
   document.getElementById("boom").pause();
   document.getElementById("boom").currentTime = 0;
   document.getElementById("boom").play();
})

const skey= document.getElementById("skey");
skey.addEventListener("click",()=>{
   document.getElementById("clap").pause();
   document.getElementById("clap").currentTime = 0;
   document.getElementById("clap").play();
})
const dkey= document.getElementById("dkey");
dkey.addEventListener("click",()=>{
   document.getElementById("hihat").pause();
   document.getElementById("hihat").currentTime = 0;
   document.getElementById("hihat").play();
})
const fkey= document.getElementById("fkey");
fkey.addEventListener("click",()=>{
   document.getElementById("kick").pause();
   document.getElementById("kick").currentTime = 0;
   document.getElementById("kick").play();
})
const gkey= document.getElementById("gkey");
gkey.addEventListener("click",()=>{
   document.getElementById("openhat").pause();
   document.getElementById("openhat").currentTime = 0;
   document.getElementById("openhat").play();
})
const hkey= document.getElementById("hkey");
hkey.addEventListener("click",()=>{
   document.getElementById("ride").pause();
   document.getElementById("ride").currentTime = 0;
   document.getElementById("ride").play();
})
const jkey= document.getElementById("jkey");
jkey.addEventListener("click",()=>{
   document.getElementById("snare").pause();
   document.getElementById("snare").currentTime = 0;
   document.getElementById("snare").play();
})
const kkey= document.getElementById("kkey");
kkey.addEventListener("click",()=>{
   document.getElementById("tink").pause();
   document.getElementById("tink").currentTime = 0;
   document.getElementById("tink").play();
})

const lkey= document.getElementById("lkey");
lkey.addEventListener("click",()=>{
   document.getElementById("tom").pause();
   document.getElementById("tom").currentTime = 0;
   document.getElementById("tom").play();
});

document.addEventListener('keydown', function (e) {
   if (e.keyCode == 65) {
      document.getElementById("boom").pause();
      document.getElementById("boom").currentTime = 0;
      document.getElementById("boom").play();
   }
});
document.addEventListener('keydown', function (e) {
   if (e.keyCode == 83) {
      document.getElementById("clap").pause();
      document.getElementById("clap").currentTime = 0;
      document.getElementById("clap").play();
   }
});
document.addEventListener('keydown', function (e) {
   if (e.keyCode == 68) {
      document.getElementById("hihat").pause();
      document.getElementById("hihat").currentTime = 0;
      document.getElementById("hihat").play();
   }
});
document.addEventListener('keydown', function (e) {
   if (e.keyCode == 70) {
      document.getElementById("kick").pause();
      document.getElementById("kick").currentTime = 0;
      document.getElementById("kick").play();
   }
});
document.addEventListener('keydown', function (e) {
   if (e.keyCode == 71) {
      document.getElementById("openhat").pause();
      document.getElementById("openhat").currentTime = 0;
      document.getElementById("openhat").play();
   }
});
document.addEventListener('keydown', function (e) {
   if (e.keyCode == 72) {
      document.getElementById("ride").pause();
      document.getElementById("ride").currentTime = 0;
      document.getElementById("ride").play();
   }
});
document.addEventListener('keydown', function (e) {
   if (e.keyCode == 74) {
      document.getElementById("snare").pause();
      document.getElementById("snare").currentTime = 0;
      document.getElementById("snare").play();
   }
});
document.addEventListener('keydown', function (e) {
   if (e.keyCode == 75) {
      document.getElementById("tink").pause();
      document.getElementById("tink").currentTime = 0;
      document.getElementById("tink").play();
   }
});
document.addEventListener('keydown', function (e) {
   if (e.keyCode == 76) {
      document.getElementById("tom").pause();
      document.getElementById("tom").currentTime = 0;
      document.getElementById("tom").play();
   }
});




       
