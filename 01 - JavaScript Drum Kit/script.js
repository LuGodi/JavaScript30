const keys = document.querySelectorAll(".key")
window.addEventListener('keydown',function(event){
    const audio = document.querySelector(`audio[data-key="${event.code}"]`)
    if (!audio) return;
    audio.currentTime = 0
    audio.play()
    console.log(audio)
    const playedKey = document.querySelector(`.key[data-key="${event.code}"]`)
    playedKey.classList.add("playing")
    // audio.onended = ()=>playedKey.classList.remove("playing")

}
)
//data- allows u to create ur own attributes
//transition end event 
keys.forEach(key=>key.addEventListener('transitionend',function(e)
{if(e.propertyName !== "transform") return;
    this.classList.remove("playing")}
))