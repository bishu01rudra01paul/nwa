window.addEventListener("load", function(){
    if(document.getElementsByClassName("show")[0]){
        document.querySelector("#right_arrow img").style.transform= "rotate(90deg)";
    }
})

const cardHeader = document.getElementsByClassName("card-header");
Array.from(cardHeader).map(el =>{
    el.onclick = ()=>{
        setTimeout(()=>{
            if(el.nextElementSibling.classList.contains("show")){
                el.querySelector("#right_arrow img").style.transform= "rotate(90deg)";
            }else{
                el.querySelector("#right_arrow img").style.transform= "rotate(0)";
            }
        }, 400)
    }
})

// active steps with click
Array.from(document.querySelectorAll(".steps_pills .nav-item > a")).map(el => {
    el.onclick = ()=>{
        // el.classList.remove("active")
        Array.from(document.querySelectorAll(".steps_pills .nav-item > a")).map(el => {
           el.classList.remove("active");
        })
        el.classList.add("active");
        // highlight border of step body when click
        const startIndex = el.href.indexOf("#")+1
        const lastIndex = el.href.length
        const highliteId = el.href.slice(startIndex, lastIndex)
        
        document.getElementById(highliteId).style.border = "1px solid red";
        document.getElementById(highliteId).lastElementChild.classList.add("show");
        setTimeout(() => {
            document.getElementById(highliteId).removeAttribute("style")
        }, 2000);
    }
})

// windwo resize functions
window.onresize = ()=>{
    if(screen.width >= 2560){
        Array.from(document.querySelectorAll(".step")).map(el =>{
            el.classList.add("show")
            el.previousElementSibling.onclick = ()=>{
                Array.from(document.querySelectorAll(".step")).map(el => {
                    el.classList.add("show")
                })
                el.classList.remove("show")
            }
        })
        // scroll event action when 2560px screen
        document.querySelector(".collapsible_item").onwheel = (evt)=>{
            evt.preventDefault()
            document.querySelector(".collapsible_item").scrollLeft += (String(evt.deltaY).split("")[0] == "-") ? document.querySelector(".collapsible_item").clientWidth : -document.querySelector(".collapsible_item").clientWidth;
        }
        // document.querySelectorAll(".steps_pills")[0].classList.remove("d-none")
        // document.querySelectorAll(".steps_pills")[1].classList.add("d-none")
    }
    // else{
    //     document.querySelectorAll(".steps_pills")[0].classList.add("d-none")
    //     document.querySelectorAll(".steps_pills")[1].classList.remove("d-none")
    // }
    
}

// document.querySelectorAll(".steps_pills")[0].classList.add("d-none")
// document.querySelectorAll(".steps_pills")[1].classList.remove("d-none")

if(screen.width >= 2560){
    // document.querySelectorAll(".steps_pills")[0].classList.remove("d-none")
    // document.querySelectorAll(".steps_pills")[1].classList.add("d-none")
    
    Array.from(document.querySelectorAll(".step")).map(el =>{
        el.classList.add("show")
        el.previousElementSibling.onclick = ()=>{
            Array.from(document.querySelectorAll(".step")).map(el => {
                el.classList.add("show")
            })
            el.classList.remove("show")
        }
    })
    // scroll event action when 2560px screen
    document.querySelector(".collapsible_item").onwheel = (evt)=>{
        evt.preventDefault()
        document.querySelector(".collapsible_item").scrollLeft += (String(evt.deltaY).split("")[0] == "-") ? -document.querySelector(".collapsible_item").clientWidth : document.querySelector(".collapsible_item").clientWidth;
    }
    // youtube video play by popup
    var player;
    function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        width: '100%',
        height: '100%',
        videoId: 'r7Z08hgGfKc',
        playerVars: {
        'playsinline': 1
        },
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
    });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
    event.target.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
    }
    function stopVideo() {
    player.stopVideo();
    }
        
}

// document.querySelector(".logo").style.zIndex = "2";
let toggoleData = false;
document.querySelector(".navbar-toggler").onclick = ()=>{
    toggoleData = !toggoleData;

   if(toggoleData){
    document.querySelector(".logo").style.zIndex = "unset";
    console.log(toggoleData)
   }else{
    document.querySelector(".logo").style.zIndex = "2";
    console.log(toggoleData)
   }
}


// Array.from(document.querySelectorAll('.watch_video')).map(el => {
//     el.onclick = ()=>{
//         document.getElementById("popup_video").classList.remove("d-none");
//     }
// })

// popup video
document.getElementById("video_cross").onclick = ()=>{
    document.querySelector(".video_area").classList.add("zoomOutRight");
    // document.getElementById("popup_video").classList.add("d-none");
    setTimeout(() => {
        document.getElementById("popup_video").classList.add("d-none");
        document.querySelector(".video_button_intro_2560 img").src= "images/red_video_button.png"
        document.querySelector(".video_button_intro_2560").classList.add("pulse")
        setTimeout(()=>{
            document.querySelector(".video_button_intro_2560 img").src= "images/video_button.png"
            document.querySelector(".video_button_intro_2560").classList.remove("pulse")
        }, 5000)
    }, 400);
}

// action take on 2560 equal or upper for popup video
setTimeout(()=>{
    if(screen.width >= 2560){
        document.getElementById("popup_video").classList.remove("d-none");
    }
}, 3000)



// youtube player for intro

 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 var player;
 function onYouTubeIframeAPIReady() {
   player = new YT.Player('introPlayer', {
     width: '100%',
     videoId: 'r7Z08hgGfKc',
     playerVars: {
       'playsinline': 1,
       'controls': 1
     },
     events: {
       'onReady': onPlayerReady,
       'onStateChange': onPlayerStateChange
     }
   });
 }

 // 4. The API will call this function when the video player is ready.
 function onPlayerReady(event) {
   event.target.playVideo();
   event.target.setVolume(30);
 }

 // 5. The API calls this function when the player's state changes.
 //    The function indicates that when playing a video (state=1),
 //    the player should play for six seconds and then stop.
 var done = false;
 function onPlayerStateChange(event) {
   if (event.data == YT.PlayerState.PLAYING && !done) {
     setTimeout(stopVideo, 6000);
     done = true;
   }
 }
 function stopVideo() {
   player.stopVideo();
 }



//  youtube video play function

function youtubevideoplay(){
    // youtube video play by popup
    var player;
    function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        width: '100%',
        height: '100%',
        videoId: 'r7Z08hgGfKc',
        playerVars: {
        'playsinline': 1
        },
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
    });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
    event.target.playVideo();
    event.target.setVolume(30);
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
    }
    function stopVideo() {
    player.stopVideo();
    }
}



