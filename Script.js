console.log("Welcome to my music Player");

// initializing  the evaraible
let songindex=0;
let audioElement=new Audio('1.mp3');
let masterplay=document.getElementById("masterplay");
let myprogressbar=document.getElementById("myProgressbar");
let gif=document.getElementById("gif");
let masterSongName=document.getElementById("masterSongname")
let songitems=Array.from(document.getElementsByClassName("songItem"));

let songs=[
    {songName:"brawn munde", filepath:"",coverpath:""},
    {songName:"firse", filepath:"",coverpath:""},
    {songName:"khayriyat", filepath:"",coverpath:""},
    {songName:"raid", filepath:"",coverpath:""},
    {songName:"let me down slowly", filepath:"",coverpath:""},
    {songName:"first class", filepath:"",coverpath:""},
    {songName:"Imraan khan", filepath:"",coverpath:""}
]

songitems.forEach((element,i)=>{
   // console.log(element,i);
    //element.getElementByTagName("img").src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
})

//audioElement.play();

// handle play/pause click
masterplay.addEventListener("click",()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    gif.style.opacity=1;
    //audioElement.classList.remove("fa-circle-play");
    //audioElement.classList.add("fa-circle-pause");

    }
    else{
        audioElement.pause();
        masterplay.classList.remove("fa-circle-pause");
        masterplay.classList.add("fa-circle-play");
        gif.style.opacity=0;
        makeAllPlays();
    }

})

//listen ot events
audioElement.addEventListener("timeupdate",()=>{
    //console.log("timeupdate");

// update seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
//console.log(progress);
myProgressbar.value=progress;

})

// when there is a change in seek baar  
myProgressbar.addEventListener("change",()=>{
         
         audioElement.currentTime=(myProgressbar.value*audioElement.duration)/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("SongItemPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}


Array.from(document.getElementsByClassName("SongItemPlay")).forEach((element)=>{
       element.addEventListener("click",(e)=>{ 
       //console.log(e.target);     //from e.target we get the element  on which  we clicked
       makeAllPlays();             // defining function
       songindex=parseInt(e.target.id);  // getting index in int form
       e.target.classList.remove("fa-circle-play");
       e.target.classList.add("fa-circle-pause");
       audioElement.src=`${songindex+1}.mp3`;
       masterSongName.innerText=songs[songindex].songName;
       audioElement.currentTime=0;
       audioElement.play();
       gif.style.opacity=1;
       masterplay.classList.remove("fa-circle-play");
       masterplay.classList.add("fa-circle-pause");
})
})

document.getElementById("next").addEventListener("click",()=>{
    if(songindex>=7)
    {
         songindex=0;
    }
    else{
    songindex+=1;
    }

    audioElement.src=`${songindex+1}.mp3`;
    masterSongName.innerText=songs[songindex].songName;
       audioElement.currentTime=0;
       audioElement.play();
       gif.style.opacity=1;
       masterplay.classList.remove("fa-circle-play");
       masterplay.classList.add("fa-circle-pause");
})

document.getElementById("previous").addEventListener("click",()=>{
    if(songindex<=0)
    {
         songindex=7;
    }
    else{
    songindex-=1;
    }

    audioElement.src=`${songindex+1}.mp3`;
    masterSongName.innerText=songs[songindex].songName;
       audioElement.currentTime=0;
       audioElement.play();
       gif.style.opacity=1;
       masterplay.classList.remove("fa-circle-play");
       masterplay.classList.add("fa-circle-pause");
})