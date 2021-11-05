var m=0;
  var n=1000;
  var speed=20;
function scrollPics() {
     document.getElementById('price-feed1').style.left=m+'px';
     document.getElementById('price-feed2').style.left=n+'px';
   m--;
   n--;
if(m==-1000) {
   m=1000;
 }
if(n==-1000) {
   n=1000;
 }
setTimeout('scrollPics()',speed);
 } 
window.onload=function() {
   scrollPics();
 }