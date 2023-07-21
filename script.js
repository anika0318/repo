console.log("Welcome to Spotify");
//initializing variables
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitem= Array.from(document.getElementsByClassName('songitem'));

let songs=[
    {songName:"Punjabi Wedding" ,filePath:"1.mp3",coverPath:"https://images.hungama.com/c/1/055/9c8/4740898/4740898_700x394.jpg"},
    {songName:"Dandilions-Ruth B" ,filePath:"2.mp3",coverPath:"https://upload.wikimedia.org/wikipedia/en/e/ef/Ruth_B._-_Dandelions.png"},
    {songName:"Enchanted-Taylor" ,filePath:".mp3",coverPath:"https://pbs.twimg.com/media/FtE1xH0aIAEMEdT?format=jpg&name=large"},
    {songName:"Steal My Girls" ,filePath:"4.mp3",coverPath:"https://media.gq-magazine.co.uk/photos/5d139b6c2881cc72ff0a8700/1:1/w_1170,h_1170,c_limit/image.jpg"},
    {songName:"Blank Space-Taylor" ,filePath:"5.mp3",coverPath:"https://i1.sndcdn.com/artworks-000131714331-p1sy5c-t500x500.jpg"},
    {songName:"One thing" ,filePath:"7.mp3",coverPath:"https://i1.sndcdn.com/artworks-000131714331-p1sy5c-t500x500.jpg"},
]


//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    //udate seekeer
    progress=parseInt((audioElement.currentTime /audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

songitem.forEach((Element,i)=>{
    Element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName;

})

const MakeAllPlay =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
        Element.classList.remove('fa-pause-circle');
        Element.classList.add('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
    })
}
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
        MakeAllPlay();
        
        songIndex =parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
 })

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


