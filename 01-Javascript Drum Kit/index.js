window.addEventListener("keydown",function(e){
  console.log(e.keyCode);
  const audio =document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const activeKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  audio.play();
  audio.currentTime=0; //rewind to start when press key again
  activeKey.classList.add('playing');
});
let removeTransition = function(e){
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
// transition end event
const transition = document.querySelectorAll('.key');
transition.forEach(key => key.addEventListener('transitionend',removeTransition))
