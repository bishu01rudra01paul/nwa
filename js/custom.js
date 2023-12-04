var youtubePlayer;
var youtubeVideoId;

let watchVideoIcon; // watch video button and icon

function onYouTubeIframeAPIReady(){
    
    youtubePlayer = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'r7Z08hgGfKc',
        playerVars: {
        'playsinline': 1
        },
        events: {
            'onError': onError
        }
    });
    
    function onError(event) {
        youtubePlayer.personalPlayer.errors.push(event.data);
    }
}

// action take on 2560 equal or upper for popup video
setTimeout(()=>{
    // if(screen.width >= 992){
        document.getElementById("popup_video").classList.remove("d-none");
        document.querySelector(".videoPlayItems").parentElement.classList.add("d-none")
        document.querySelector(".videoContent").parentElement.classList.add("col-lg-12")
        
    // }
}, 3000)



// popup video
document.getElementById("video_cross").onclick = ()=>{
    youtubePlayer.stopVideo();
    document.querySelector('.video_area').style= 'top: -50%;';
    
    document.querySelectorAll('.watch_video').forEach(el =>{
        el.firstElementChild.classList.remove('pulse')
        el.firstElementChild.src= "images/video_button.png"
        document.querySelector(".video_button_intro_2560").classList.remove("pulse")
        document.querySelector(".video_button_intro_2560 img").src= "images/video_button.png"
    })
    document.querySelector(".videoPlayItems").parentElement.classList.add("d-none")
    document.querySelector(".videoContent").parentElement.classList.add("col-lg-12")
    // document.querySelector(".video_area").classList.add("zoomOutRight");
    // document.querySelector(".zoomOutRight").style.setProperty('--introVideoLeft', watchVideoIcon ? watchVideoIcon.offsetLeft+watchVideoIcon.offsetParent.offsetLeft+'px' : document.querySelector(".introwatch_video").offsetLeft+'px')
    // document.querySelector(".zoomOutRight").style.setProperty('--introVideoTop', watchVideoIcon ? watchVideoIcon.offsetParent.offsetTop+'px' : document.querySelector(".introwatch_video").offsetTop+'px')
    // console.log(watchVideoIcon.img`);

    setTimeout(() => {
        document.querySelector('#MIv div').classList.add('pulseMintro');
        document.getElementById("popup_video").classList.add("d-none");
        watchVideoIcon ? watchVideoIcon.firstElementChild.src= "images/red_video_button.png" : document.querySelector(".video_button_intro_2560 img").src= "images/red_video_button.png"
        watchVideoIcon ? watchVideoIcon.firstElementChild.classList.add("pulse") : document.querySelector(".video_button_intro_2560").classList.add("pulse")
        setTimeout(()=>{
            watchVideoIcon ? watchVideoIcon.firstElementChild.src= "images/video_button.png" : document.querySelector(".video_button_intro_2560 img").src= "images/video_button.png"
            watchVideoIcon ? watchVideoIcon.firstElementChild.classList.remove("pulse") : document.querySelector(".video_button_intro_2560").classList.remove("pulse")
            document.querySelector('#MIv div').classList.remove('pulseMintro');
            watchVideoIcon=null;
        }, 2000)
    }, 400);
}


function stepWatchVideo(el, videos){
    document.getElementById("popup_video").classList.remove("d-none");
    document.querySelector('.video_area').style= 'top: 50%;';
    watchVideoIcon = el;

    const ytVideoId = document.getElementById('ytVideoId').value;
    youtubePlayer.cueVideoById(ytVideoId);

    document.getElementById("popup_video").classList.remove("d-none");
    if(screen.width <= 2559){
        el.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.add("show")
    }
    if(el.classList.contains('introwatch_video')){
        document.querySelector(".videoPlayItems").parentElement.classList.add("d-none")
        document.querySelector(".videoContent").parentElement.classList.add("col-lg-12")
    }
    if(videos){
        document.querySelector(".videoPlayItems").parentElement.classList.remove("d-none")
        document.querySelector(".videoContent").parentElement.classList.remove("col-lg-12")

        const listPlayItem = document.querySelector('.videoPlayItemsArea');
        while(listPlayItem.hasChildNodes()){
            listPlayItem.removeChild(listPlayItem.firstChild)
        }

        videos.map(video => {
            document.querySelector('.videoPlayItemsArea').innerHTML += `
                <div class="ytPlayVideo" onclick="document.getElementById('ytVideoId').value='${video}'; stepWatchVideo(this)"></div>
            `
        })
        
    }
}

document.querySelector('body').onscroll = ()=>{
        if(window.scrollY > 0){
            document.querySelector('.mobilePdfDownloader').classList.add('mpdbsc');
        }else{
            document.querySelector('.mobilePdfDownloader').classList.remove('mpdbsc');
            
        }
}

// if(screen.width <= 991){
//     // 2. This code loads the IFrame Player API code asynchronously.
//     var tag = document.createElement('script');

//     tag.src = "https://www.youtube.com/iframe_api";
//     var firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//     // 3. This function creates an <iframe> (and YouTube player)
//     //    after the API code downloads.
//     var player;
//     function onYouTubeIframeAPIReady() {
//     player = new YT.Player('introPlayer', {
//         height: '360px',
//         width: '100%',
//         videoId: 'r7Z08hgGfKc',
//         playerVars: {
//         'playsinline': 1
//         },
//         events: {
//         'onReady': onPlayerReady,
//         }
//     });
//     }

//     // 4. The API will call this function when the video player is ready.
//     function onPlayerReady(event) {
//     event.target.playVideo();
//     }
// }
if(screen.width >= 992){
    //  // 2. This code loads the IFrame Player API code asynchronously.
    //  var tag = document.createElement('script');

    //  tag.src = "https://www.youtube.com/iframe_api";
    //  var firstScriptTag = document.getElementsByTagName('script')[0];
    //  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
    // // 3. This function creates an <iframe> (and YouTube player)
    // //    after the API code downloads.
    // var player;
    // function onYouTubeIframeAPIReady() {
    // player = new YT.Player('player', {
    //     height: '100%',
    //     width: '100%',
    //     videoId: 'r7Z08hgGfKc',
    //     playerVars: {
    //     'playsinline': 1
    //     },
    //     events: {
    //     'onReady': onPlayerReady,
    //     }
    // });
    // }

    // // 4. The API will call this function when the video player is ready.
    // function onPlayerReady(event) {
    //     event.target.playVideo();
    // }

    //  // popup video
    //  document.getElementById("video_cross").onclick = ()=>{
    //     youtubePlayer.stopVideo();
    //     document.querySelector(".video_area").classList.add("zoomOutRight");
    //     document.querySelector(".zoomOutRight").style.setProperty('--introVideoLeft', document.querySelector(".introwatch_video").offsetLeft+'px')
    //     // document.getElementById("popup_video").classList.add("d-none");
    //     setTimeout(() => {
    //         document.getElementById("popup_video").classList.add("d-none");
    //         document.querySelector(".video_button_intro_2560 img").src= "images/red_video_button.png"
    //         document.querySelector(".video_button_intro_2560").classList.add("pulse")
    //         setTimeout(()=>{
    //             document.querySelector(".video_button_intro_2560 img").src= "images/video_button.png"
    //             document.querySelector(".video_button_intro_2560").classList.remove("pulse")
    //         }, 5000)
    //     }, 400);
    // }
}
// ===================================================================================
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




}

// windwo resize functions
window.onresize = ()=>{
    // if(screen.width >= 2560){

    //     Array.from(document.querySelectorAll(".step_header")).map(el => {
    //         el.parentElement.removeAttribute("data-bs-toggle");
    //     })
        
    //     document.querySelectorAll(".steps_pills")[0].classList.remove("d-none")
    //     document.querySelectorAll(".steps_pills")[1].classList.add("d-none")
    // }
    // else{
    //     document.querySelectorAll(".steps_pills")[0].classList.add("d-none")
    //     document.querySelectorAll(".steps_pills")[1].classList.remove("d-none")

    //     Array.from(document.querySelectorAll(".step_header")).map(el => {
    //         el.parentElement.setAttribute("data-bs-toggle","collapse");
    //     })
    // }
    
    
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






// horizontal scroll function

let clwidth = document.querySelector(".collapsible_item").clientWidth
let scrollWidthEl = document.querySelector(".collapsible_item").scrollWidth;

function slideHorizontal(value){
    if(value == 'rightArrow'){
        document.querySelector(".collapsible_item").scrollLeft= clwidth
    }
    if(value == 'leftArrow'){
        document.querySelector(".collapsible_item").scrollLeft= -clwidth
    }
}



// =================================================================================

// Array.from(document.querySelectorAll(".watch_video")).map(el => {
//     el.onclick = ()=>{
//         watchVideoIcon = el;
//         document.querySelector(".video_area").classList.remove("zoomOutRight")
//         document.getElementById("popup_video").classList.remove("d-none");
//         if(screen.width <= 2559){
//             el.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.add("show")
//         }


//         // // 2. This code loads the IFrame Player API code asynchronously.
//         // var tag = document.createElement('script');

//         // tag.src = "https://www.youtube.com/iframe_api";
//         // var firstScriptTag = document.getElementsByTagName('script')[0];
//         // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//         // // 3. This function creates an <iframe> (and YouTube player)
//         // //    after the API code downloads.
//         // var player;
//         // function onYouTubeIframeAPIReady() {
//         //     player = new YT.Player('youtubeVideoPlayer', {
//         //     height: '100%',
//         //     width: '100%',
//         //     videoId: el.getAttribute('data-video-id'),
//         //     playerVars: {
//         //         'playsinline': 1
//         //     },
//         //     events: {
//         //         'onReady': onPlayerReady,
//         //     }
//         // });
//         // }

//         // // 4. The API will call this function when the video player is ready.
//         // function onPlayerReady(event) {
//         // event.target.playVideo();
//         // }

//         // onYouTubeIframeAPIReady();

//         // document.querySelector(".WatchVideoByPopupCross").onclick = ()=>{
//         //     player.stopVideo()
//         //     document.querySelector(".WatchVideoByPopupPlayer").style= "top:0; opacity: 0";
//         //     document.querySelector(".shadwo").style= "opacity:0";
//         //     setTimeout(() => {
//         //         document.querySelector(".WatchVideoByPopup").classList.add('d-none')
//         //     }, 500);
//         // }

//         // document.querySelector(".WatchVideoByPopup").classList.remove('d-none')
//         // document.querySelector(".shadwo").style= "opacity:1";
//         // document.querySelector(".WatchVideoByPopupPlayer").style= "top:50%; opacity: 1";
//     }
// })



// document.querySelector(".introwatch_video").onclick = ()=>{
//     document.querySelector('.video_area').style= 'top: 50%;'
//     document.getElementById("popup_video").classList.remove("d-none");
// }



// lower 2560
function stepBtnToMoveCon(el, id){
    
    Array.from(document.querySelectorAll(".steps_pills .nav-item > a")).map(el => {
        if(el.classList.contains("active")){
            el.classList.remove("active")
        }
    })

    document.documentElement.scrollTop = document.getElementById(id).offsetTop-60


    el.classList.add("active")
    document.querySelectorAll(".collapsible_item > .card").forEach(el => {
        el.style.border = "1px solid #CCCCCC";
    })
    document.getElementById(id).style.border = "1px solid #BB0F31";
    document.getElementById(id).lastElementChild.classList.add("show")
    setTimeout(() => {
            document.getElementById(id).removeAttribute("style")
    }, 2000);
    
}
//upper 2560 when click step then its scroll right position
function stepBtnToMoveConUpScreen(el, id){
    Array.from(document.querySelectorAll(".steps_pills .nav-item > a")).map(el => {
        if(el.classList.contains("active")){
            el.classList.remove("active")
        }
    })

    document.getElementById(id).scrollIntoView(true)
    if(screen.width >= 2560){
        document.documentElement.style.setProperty('--scroll-padding', document.querySelector(".collapsible_item").offsetTop+"px")
    }
    if(screen.width < 2560){
        document.documentElement.style.setProperty('--scroll-padding', document.querySelector(".navbarfixed").offsetHeight+"px")
    }

    el.classList.add("active")
    document.querySelectorAll(".collapsible_item > .card").forEach(el => {
        el.style.border = "1px solid #CCCCCC"
    })
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

    // window.onscroll= ()=>{
    //     step.forEach(sec => {
    //         let top = window.scrollY;
    //         let offset = sec.offsetTop;
    //         let height = sec.offsetHeight;
    //         let id = sec.getAttribute('id');
    //         if(top > offset && top < offset+height){
    //             navLink.forEach(link => {
    //                 link.classList.remove("active")
    //                 document.querySelector('[data-step-id*= '+id+']').classList.add('active')
    //                 document.querySelector('[data-step-wdId*= '+id+']').classList.add('active')
    //             })
    //         }
    //     })
    // }
    
    step.forEach(sec => {
        sec.onclick = ()=>{
            let secId = sec.getAttribute('id');
            let stepLink = document.querySelector(`[data-step-id=${secId}]`);
            let stepLinkTopNav = document.querySelector(`[data-step-wdId=${secId}]`);
            navLink.forEach(link => {
                link.classList.remove('active');
            })
            stepLink.classList.add("active");
            stepLinkTopNav.classList.add("active");
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




    //  var tag = document.createElement('script');

        
    //     tag.src = "https://www.youtube.com/iframe_api";
    //     var firstScriptTag = document.getElementsByTagName('script')[0];
    //     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    //     // 3. This function creates an <iframe> (and YouTube player)
    //     //    after the API code downloads.
    //     var player;
    //     function onYouTubeIframeAPIReady() {
    //     player = new YT.Player('youtubeVideoPlayer', {
    //         height: '100%',
    //         width: '100%',
    //         videoId: 'M7lc1UVf-VE',
    //         playerVars: {
    //         'playsinline': 1
    //         },
    //         events: {
    //         'onReady': onPlayerReady
    //         }
    //     });
    //     }

    // // 4. The API will call this function when the video player is ready.
    // function onPlayerReady(event) {
    //   event.target.playVideo();
    // }


    // function youtubeVideo(){
    //     function onYouTubeIframeAPIReady() {
    //         console.log('api is loading')
    //     }
    //     onYouTubeIframeAPIReady()
    // }

/**
 * Main
 */
(function () {
    'use strict';

    function init() {
        // Load YouTube library
        var tag = document.createElement('script');

        tag.src = 'https://www.youtube.com/iframe_api';

        var first_script_tag = document.getElementsByTagName('script')[0];

        first_script_tag.parentNode.insertBefore(tag, first_script_tag);


        // Set timer to display infos
        setInterval(youTubePlayerDisplayInfos, 1000);
    }


    if (window.addEventListener) {
        window.addEventListener('load', init);
    } else if (window.attachEvent) {
        window.attachEvent('onload', init);
    }
}());