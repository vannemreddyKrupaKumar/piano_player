const WHITE_KEYS = ['z','x','c','v','b','n','m']
const BLACK_KEYS = ['s','d','g','h','j']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown',  e => {
    if(e.repeat) return
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    if(whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if(blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
    
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    setTimeout(noteAudio.play(),2000);
    key.classList.add('active')
    /*noteAudio.addEventListener( 'playing', () => {
       while (noteAudio.currentTime>=1) {
           console.log(noteAudio.currentTime)
       }
    })*/
    noteAudio.addEventListener('pause', () => {
        key.classList.remove('active')
        console.log('removed')
    })

}