console.log("Welcome to Saregema")

//Initialize the variables
let songIndex= 0;
let audioElement=new Audio('song/10.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Shape of You",filepath:"song/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"Rang Lageya",filepath:"song/2.mp3",coverPath:"cover/2.jpg"},
    {songName:"Samajavaragamana",filepath:"song/3.mp3",coverPath:"cover/3.jpg"},
    {songName:"Srivalli",filepath:"song/4.mp3",coverPath:"cover/4.jpg"},
    {songName:"Apna bane le piya",filepath:"song/5.mp3",coverPath:"cover/5.jpg"},
    {songName:"Nagumo Revival",filepath:"song/6.mp3",coverPath:"cover/6.jpg"},
    {songName:"Levitating",filepath:"song/7.mp3",coverPath:"cover/7.jpg"},
    {songName:"Laal Ishq",filepath:"song/8.mp3",coverPath:"cover/8.jpg"},
    {songName:"Jinthak",filepath:"song/9.mp3",coverPath:"cover/9.jpg"},
    {songName:"Subhanallah",filepath:"song/10.mp3",coverPath:"cover/10.jpg"}
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    
})

//audioElement.play();

//Handle Play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
     audioElement.play();
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
     gif.style.opacity=1;
    }
    else{
        audioElement.pause();
     masterPlay.classList.remove('fa-circle-pause');
     masterPlay.classList.add('fa-circle-play');
     gif.style.opacity=0;
    }
})


//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
}
)
const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src=`song/${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`song/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=10){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
        audioElement.src=`song/${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

})
