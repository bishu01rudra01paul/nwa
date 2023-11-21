
if(screen.width <= 2559){

stepManuActive();

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
    height: '360px',
    width: '100%',
    videoId: 'M7lc1UVf-VE',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

}

// windwo resize functions
window.onresize = ()=>{
    if(screen.width >= 2560){

        Array.from(document.querySelectorAll(".step_header")).map(el => {
            el.parentElement.removeAttribute("data-bs-toggle");
        })
        
        document.querySelectorAll(".steps_pills")[0].classList.remove("d-none")
        document.querySelectorAll(".steps_pills")[1].classList.add("d-none")
    }
    else{
        document.querySelectorAll(".steps_pills")[0].classList.add("d-none")
        document.querySelectorAll(".steps_pills")[1].classList.remove("d-none")

        Array.from(document.querySelectorAll(".step_header")).map(el => {
            el.parentElement.setAttribute("data-bs-toggle","collapse");
        })
    }
    
    
}


if(screen.width >= 2560){

    // for(let i=1; i <= 6; i++){
    //     console.log(i)
    //     const subItem = Array.from(document.querySelectorAll(`#item${i} .sub_item .collapse`)).slice(0, 5);
    //     subItem.map(el =>{
    //         console.log(el)
    //     })
    // }


    wideStepManuActive()

    Array.from(document.querySelectorAll(".step_header")).map(el => {
        el.parentElement.removeAttribute("data-bs-toggle");
    })



    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'M7lc1UVf-VE',
        playerVars: {
        'playsinline': 1
        },
        events: {
        'onReady': onPlayerReady,
        }
    });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
        event.target.playVideo();
    }


    // popup video
    document.getElementById("video_cross").onclick = ()=>{
        player.stopVideo();
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
        
}else{
    Array.from(document.querySelectorAll(".step_header")).map(el => {
        el.parentElement.setAttribute("data-bs-toggle","collapse");
    })
}

// document.querySelector(".logo").style.zIndex = "2";
let toggoleData = false;
document.querySelector(".navbar-toggler").onclick = ()=>{
    toggoleData = !toggoleData;

   if(toggoleData){
    document.querySelector(".logo").style.zIndex = "unset";
   }else{
    setTimeout(()=>{
        document.querySelector(".logo").style.zIndex = "3000";
    }, 300)
   }
}




// action take on 2560 equal or upper for popup video
setTimeout(()=>{
    if(screen.width >= 2560){
        document.getElementById("popup_video").classList.remove("d-none");
    }
}, 3000)



// horizontal scroll function

let clwidth = document.querySelector(".collapsible_item").clientWidth
let scrollWidthEl = document.querySelector(".collapsible_item").scrollWidth;

function slideHorizontal(value){
    if(value == 'rightArrow'){
        document.querySelector(".collapsible_item").scrollLeft= clwidth
    }
    if(value == 'leftArrow'){
        console.log("click")
        document.querySelector(".collapsible_item").scrollLeft= -clwidth
    }
}



// =================================================================================

Array.from(document.querySelectorAll(".watch_video")).map(el => {
    el.onclick = ()=>{
        // console.log(Math.round(el.getBoundingClientRect().left)+ " "+el.getBoundingClientRect().top)
        document.querySelector(".WatchVideoByPopup").classList.remove('d-none')
        document.querySelector(".shadwo").style= "opacity:1";
        document.querySelector(".WatchVideoByPopupPlayer").style= "top:50%; opacity: 1";

        if(screen.width <= 2559){
            el.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.add("show")
        }
    }
})

document.querySelector(".WatchVideoByPopupCross").onclick = ()=>{
    document.querySelector(".WatchVideoByPopupPlayer").style= "top:0; opacity: 0";
    document.querySelector(".shadwo").style= "opacity:0";
    setTimeout(() => {
        document.querySelector(".WatchVideoByPopup").classList.add('d-none')
    }, 500);
}


document.querySelector(".introwatch_video").onclick = ()=>{
    document.querySelector(".video_area").classList.remove("zoomOutRight")
    document.getElementById("popup_video").classList.remove("d-none");
}



// lower 2560
function stepBtnToMoveCon(el, id){
    
    Array.from(document.querySelectorAll(".steps_pills .nav-item > a")).map(el => {
        if(el.classList.contains("active")){
            el.classList.remove("active")
        }
    })

    document.documentElement.scrollTop = document.getElementById(id).offsetTop-60


    el.classList.add("active")
    document.getElementById(id).style.border = "1px solid #BB0F31";
    document.getElementById(id).lastElementChild.classList.add("show")
    setTimeout(() => {
            document.getElementById(id).removeAttribute("style")
    }, 2000);
    
}
//upper 2560
function stepBtnToMoveConUpScreen(el, id){
    Array.from(document.querySelectorAll(".steps_pills .nav-item > a")).map(el => {
        if(el.classList.contains("active")){
            el.classList.remove("active")
        }
    })

    document.getElementById(id).scrollIntoView(true)
    document.documentElement.style.setProperty('--scroll-padding', document.querySelector(".navbarfixed").offsetHeight+"px")

    el.classList.add("active")
    document.getElementById(id).style.border = "1px solid #BB0F31";
    document.getElementById(id).lastElementChild.classList.add("show")
    setTimeout(() => {
            document.getElementById(id).removeAttribute("style")
    }, 2000);
}


// step menu active 

function stepManuActive(){
    const step = document.querySelectorAll(".collapsible_item > .card");
    const navLink = document.querySelectorAll(".steps_pills .nav-item > .nav-link");

    window.onscroll= ()=>{
        step.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop-70;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if(top > offset && top < offset+height){
                navLink.forEach(link => {
                    link.classList.remove("active")
                    document.querySelector('[data-step-id*= '+id+']').classList.add('active')
                })
            }
        })
    }
    
    step.forEach(sec => {
        sec.onclick = ()=>{
            let secId = sec.getAttribute('id');
            let stepLink = document.querySelector(`[data-step-id=${secId}]`);
            navLink.forEach(link => {
                link.classList.remove('active');
            })
            stepLink.classList.add("active");
        }
        
    })
}


function wideStepManuActive(){
    const step = document.querySelectorAll(".collapsible_item > .card");
    const navLink = document.querySelectorAll(".steps_pills .nav-item > .nav-link");
    step.forEach(sec => {
        sec.onclick = ()=>{
            let secId = sec.getAttribute('id');
            let stepLink = document.querySelector(`[data-step-wdId=${secId}]`)
            navLink.forEach(link => {
                link.classList.remove('active');
            })
            stepLink.classList.add("active");
        }
        
    })
}