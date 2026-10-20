let outputs = document.querySelector('.outputs');
const myLove = 'بحبك يا ففتي 🤍'
let stoped = document.getElementById('stop');

let myLoop = setInterval(() => {
    const colorRandom1 = Math.floor(Math.random()*255)
    const colorRandom2 = Math.floor(Math.random()*255)
    const colorRandom3 = Math.floor(Math.random()*255)

    outputs.innerHTML += `<span style="color: rgb(${colorRandom1} ${colorRandom2} ${colorRandom3})">${myLove}</span>`
}, 400);





