let count = 3;


let timer = setInterval(() => {

    document.getElementById("count").innerHTML = count;

    count--;


    if(count < 0){

        clearInterval(timer);

        document.getElementById("countdownScreen").style.display="none";

        showReady();

    }


},1000);





function showReady(){

    document.getElementById("readyScreen").classList.remove("hidden");


    setTimeout(()=>{

        document.getElementById("readyScreen").style.display="none";

        showWelcome();


    },3000);

}





function showWelcome(){

    document.getElementById("welcomeScreen").classList.remove("hidden");


    setTimeout(()=>{


        document.getElementById("welcomeScreen").style.display="none";


        document.getElementById("loginBox").classList.remove("hidden");


    },3000);


}





function unlock(){


    let name = document.getElementById("name").value;

    let birthday = document.getElementById("birthday").value;



    if(
        name.toLowerCase()=="ramya" &&
        birthday=="08/08/2026"
    ){


        document.getElementById("loginBox").style.display="none";


        document.getElementById("birthdayReveal").classList.remove("hidden");

        setTimeout(()=>{

    document.getElementById("birthdayReveal").style.display="none";

    document.getElementById("cakeSection").classList.remove("hidden");
    document.getElementById("birthdayReveal").classList.remove("hidden");

setTimeout(()=>{

    document.getElementById("birthdayReveal").style.display="none";

    document.getElementById("cakeSection").classList.remove("hidden");

},5000);

},5000);


    }

    else{


        document.getElementById("error").innerHTML =
        "Wrong details ❤️ Try again";


    }


}



// =========================
// PART 2 - Cake & Memories
// =========================


function cutCake(){

    alert("🎉 Happy Birthday Ramya ❤️\nYour wish is coming true ✨");


    document.getElementById("cakeSection").style.display="none";


    document.getElementById("memorySection").classList.remove("hidden");

}


// =========================
// MEMORY GALLERY LOGIC
// =========================


let memories = [

    {
        image: "hi/Untitled design (1).jpg",
        text: "A beautiful memory ❤️"
    },

    {
        image: "hi/Untitled design (2).jpg",
        text: "A moment worth remembering ✨"
    },

    {
        image: "hi/Untitled design (3).jpg",
        text: "A smile that makes everything better 🌸"
    },

    {
        image: "hi/Untitled design (4).jpg",
        text: "Some memories stay forever 💖"
    },

    {
        image: "hi/Untitled design (5).jpg",
        text: "Every picture has a story 📸"
    },

    {
        image: "hi/Untitled design (6).jpg",
        text: "Beautiful moments, beautiful memories 🌹"
    },

    {
        image: "hi/Untitled design (4).jpg",
        text: "A special memory to keep forever ✨"
    },

    {
        image: "hi/Untitled design.jpg",
        text: "The best memories are made with beautiful souls ❤️"
    }

];


let currentMemory = 0;



function nextMemory(){


    currentMemory++;

if(currentMemory >= memories.length){

    document.getElementById("memorySection").style.display="none";

    document.getElementById("letterSection").classList.remove("hidden");
    // Left Blast
setTimeout(() => {
    confetti({
        particleCount: 120,
        spread: 90,
        origin: { x: 0.1, y: 0.6 }
    });
}, 200);

// Center Blast
setTimeout(() => {
    confetti({
        particleCount: 250,
        spread: 140,
        origin: { x: 0.5, y: 0.5 }
    });
}, 800);

// Right Blast
setTimeout(() => {
    confetti({
        particleCount: 120,
        spread: 90,
        origin: { x: 0.9, y: 0.6 }
    });
}, 1400);

}


    document.getElementById("memoryImage").src =
    memories[currentMemory].image;


    document.getElementById("caption").innerHTML =
    memories[currentMemory].text;


}
// =========================
// SONG PLAY FUNCTION
// =========================

function playSong(){

    let song = document.getElementById("memorySong");

    song.play();

}

