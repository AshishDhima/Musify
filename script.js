console.log("Welcome to Musify....");

let songIndex=0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myprogressbar = document.getElementById("myprogressbar");
let songItems= Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songName:"O-mere Dil", filepath:"songs/1.mp3", coverpath:"Cover Page/O mere dil ke Chain.jfif"},
    {songName:"Aaja Ve Mahiya", filepath:"songs/2.mp3", coverpath:"Cover Page/Aaja ve mahiya.jpg"},
    {songName:"Chann Sitare", filepath:"songs/3.mp3", coverpath:"Cover Page/Chann Sitare.jpg"},
    {songName:"Dheere Dheere", filepath:"songs/4.mp3", coverpath:"Cover Page/Dheere dheere.jpg"},
    {songName:"Jiya Re", filepath:"songs/5.mp3", coverpath:"Cover Page/Jiya re.jpg"},
    {songName:"Pata Chalega", filepath:"songs/6.mp3", coverpath:"Cover Page/Pata chalega.jfif"},
    {songName:"Pyar", filepath:"songs/7.mp3", coverpath:"Cover Page/Pyar.jpg"},
    {songName:"One love", filepath:"songs/8.mp3", coverpath:"Cover Page/One love.jpg"},
    {songName:"Elevated", filepath:"songs/9.mp3", coverpath:"Cover Page/Elevated.jfif"},
    {songName:"King Shit", filepath:"songs/10.mp3", coverpath:"Cover Page/King shit.webp"},
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByTagName("span")[0].innerText = songs[i].songName;
})
//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
 })

//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
})


myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value *audioElement.duration/100;
})
const makeallPlays=()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add("fa-pause-circle");
        })
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=9;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add("fa-pause-circle");
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=1;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add("fa-pause-circle");
})

