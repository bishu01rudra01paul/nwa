var youtubePlayer;
var youtubeVideoId;
let switchType = null;
let switchTypeHorizontal = 1;
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
    document.querySelector('.video_area').style= 'top: -50%;';
    
    document.querySelectorAll('.watch_video').forEach(el =>{
        el.firstElementChild.classList.remove('pulse')
        el.firstElementChild.src= "images/video_button.png"
        document.querySelector(".video_button_intro_2560").classList.remove("pulse")
        document.querySelector(".video_button_intro_2560 img").src= "images/video_button.png"
    })
    document.querySelector(".videoPlayItems").parentElement.classList.add("d-none")
    document.querySelector(".videoContent").parentElement.classList.add("col-lg-12")

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
    youtubePlayer.stopVideo();
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
            // if(screen.width <= 991){
            //     document.querySelector('.VoiceYourIdeas').style = "width: 50px";
            //     document.querySelector('.VoiceYourIdeas img').style = "margin-right: 0";
            // }else{
            //     document.querySelector('.VoiceYourIdeas img').style = "margin-right: 5px";
            // }
           
        }else{
            document.querySelector('.mobilePdfDownloader').classList.remove('mpdbsc');
            // document.querySelector('.VoiceYourIdeas').style = "width: 157px";
        }
        if(window.scrollY > 50){
            document.querySelector('#switchModle').style.opacity = '0';
        }else{
            document.querySelector('#switchModle').style.opacity = '1';
        }
}


// ===================================================================================
if(screen.width <= 2559){
stepManuActive();
}

const cardHeader = document.querySelectorAll('.collapsible_item > .card > .card-header');
cardHeader.forEach(el => {
    el.onclick = ()=>{
        resizeClickEleStep = el;
        setTimeout(()=>{
            if(el.nextElementSibling.classList.contains("show")){
                el.querySelector(".step_header #right_arrow img").style.transform= "rotate(90deg)";
            }else{
                el.querySelector(".step_header #right_arrow img").style.transform= "rotate(0deg)";
            }
        }, 400)
        arrowMove()
    }
})
function arrowMove(){
    const step = document.querySelectorAll('.step');
    step.forEach(el => {
        if(el.classList.contains('show')){
            el.previousElementSibling.querySelector('.step_header #right_arrow img').style.transform = "rotate(90deg)"
        }else{
            el.previousElementSibling.querySelectorAll('.step_header').forEach(el => {
                el.querySelector('#right_arrow img').style.transform = "rotate(0deg)"
            })
        }
    }) 
}

function mwactiveNavButton(){
    document.querySelectorAll('#wide_screen_nab_steps .steps_pills .nav-link').forEach(el => {
        if(el.classList.contains('active')){
            const id = el.getAttribute('data-step-wdId');
            document.querySelectorAll('#normal_screen_nab .steps_pills .nav-link').forEach(el => {
                if(el.getAttribute('data-step-id') == id){
                    el.classList.add('active');
                }
            })
        }
    })
    document.querySelectorAll('#normal_screen_nab .steps_pills .nav-link').forEach(el => {
        if(el.classList.contains('active')){
            const id = el.getAttribute('data-step-id');
            document.querySelectorAll('#wide_screen_nab_steps .steps_pills .nav-link').forEach(el => {
                if(el.getAttribute('data-step-wdId') == id){
                    el.classList.add('active');
                }
            })
        }
    })
}
// windwo resize functions
window.onresize = ()=>{
    arrowMove()
    mwactiveNavButton()

    if(screen.width < 2560){
    
        Array.from(document.querySelectorAll(".step_header")).map(el => {
            el.parentElement.setAttribute("data-bs-toggle","collapse");
        })
       
        disqualified()

        if(switchType == 'horizontal' && switchTypeHorizontal==1){
            switchTypeHorizontal = 0;
            document.querySelectorAll('.step').forEach(ele => {
                ele.classList.remove("show");
            })
            document.querySelector('.step').classList.add('show');
        }

        if(document.querySelector('.step').classList.contains('show')){
                document.querySelector('.card-header > .step_header #right_arrow img').style.transform= 'rotate(90deg)'
        }else{
            document.querySelector('.card-header > .step_header #right_arrow img').style.transform= 'rotate(0deg)'
        }

    }else{
        switchTypeHorizontal = 1;
        if(switchType == 'vertical'){
            switchToggole(true)
            if(document.querySelector('.step').classList.contains('show')){
                document.querySelector('.card-header > .step_header #right_arrow img').style.transform= 'rotate(90deg)'
            }else{
                document.querySelector('.card-header > .step_header #right_arrow img').style.transform= 'rotate(0deg)'
            }
        }else{
            switchToggole(false)
        }
        
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
    switchType = 'horizontal'

    wideStepManuActive()

    loadHorizontalContant()

    Array.from(document.querySelectorAll(".step_header")).map(el => {
        el.parentElement.removeAttribute("data-bs-toggle");
    })

        
}else{
    Array.from(document.querySelectorAll(".step_header")).map(el => {
        el.parentElement.setAttribute("data-bs-toggle","collapse");
    })
}

function loadHorizontalContant(){
    document.querySelectorAll('.collapsible_item > .card > .collapse').forEach(el => {
        el.classList.add('show');
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
    showSteps(id)
    Array.from(document.querySelectorAll(".steps_pills .nav-item > a")).map(el => {
        if(el.classList.contains("active")){
            el.classList.remove("active")
        }
    })

    document.documentElement.scrollTop = document.getElementById(id).offsetTop-70


    el.classList.add("active")
    document.querySelectorAll(".collapsible_item > .card").forEach(el => {
        el.style.border = "1px solid #CCCCCC";
    })
    document.getElementById(id).style.border = "1px solid #BB0F31";
    document.getElementById(id).lastElementChild.classList.add("show")
    setTimeout(() => {
            document.getElementById(id).removeAttribute("style")
    }, 2000);

    arrowMove()
}
//upper 2560 when click step then its scroll right position
function stepBtnToMoveConUpScreen(el, id){
    showSteps(id)
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

    arrowMove()
}

function showSteps(id){
   if(screen.width < 2560 || switchType == 'vertical'){
        document.querySelectorAll('.step').forEach(ele => {
            ele.classList.remove("show");
        })
        document.getElementById(id).lastElementChild.classList.add("show")
    }
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
            
            // if(stepLink.parentElement.parentElement.parentElement.clientWidth < stepLink.offsetWidth*(navLink.length/2)){
            //     console.log(stepLink.offsetLeft)
            //     stepLink.parentElement.parentElement.parentElement.scrollLeft = -10
                
            // }
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

let resizeClickEleStep = null;
function switchToggole(el){

    if(el.checked || el==true){

        switchType = 'vertical';
        // el.nextElementSibling.style.setProperty('--switchModleLeft', el.nextElementSibling.clientWidth-23+'px');
        el == document.querySelector('.switchCheckbox') ? el.nextElementSibling.style.setProperty('--switchModleLeft', el.nextElementSibling.clientWidth-23+'px') : document.querySelector('.switchCheckbox').nextElementSibling.style.setProperty('--switchModleLeft', document.querySelector('.switchCheckbox').nextElementSibling.clientWidth-23+'px');
        document.querySelector('#switchModle > span:nth-child(1)').style.color= 'unset';
        document.querySelector('#switchModle > span:nth-child(3)').style.color= '#BB0F31';
        document.querySelector('.full_body .container .collapsible_item').style.display= 'block';

        document.querySelectorAll('.container').forEach(el =>{
            el.classList.add('widWidth2560up');
        })
        document.querySelectorAll('.videoTitle').forEach(el => {
            el.parentElement.style.width= '50%';
        })
        document.querySelectorAll('.videoTitle')[1].style.marginTop= '0';
        document.querySelectorAll('.slideArrow').forEach(el => {
            el.style.opacity= '0';
        })
        document.querySelectorAll('.full_body .container .collapsible_item > .card').forEach(el => {
            el.style.marginRight= '0px'
        })

        if(resizeClickEleStep){
            document.querySelectorAll('.collapsible_item > .card > .collapse').forEach(el => {
                el.classList.remove('show');
            })
            resizeClickEleStep.nextElementSibling.classList.add('show');
        }else{
            document.querySelectorAll('.collapsible_item > .card > .collapse').forEach(el => {
                el.classList.remove('show');
            })
            document.querySelector('.collapsible_item > .card > .collapse').classList.add('show');
        }

        Array.from(document.querySelectorAll(".step_header")).map(el => {
            el.parentElement.setAttribute("data-bs-toggle","collapse");
        })

        arrowMove()

    }else{
        
        switchType = 'horizontal';
        el == document.querySelector('.switchCheckbox') ? el.nextElementSibling.style.setProperty('--switchModleLeft', 5+'px') : document.querySelector('.switchCheckbox').nextElementSibling.style.setProperty('--switchModleLeft', 5+'px');
        document.querySelector('#switchModle > span:nth-child(3)').style.color= 'unset';
        document.querySelector('#switchModle > span:nth-child(1)').style.color= '#BB0F31';
        document.querySelector('.full_body .container .collapsible_item').style.display= 'flex';
        document.querySelectorAll('.videoTitle')[1].style.marginTop= '30px';

        document.querySelectorAll('.container').forEach(el =>{
            el.classList.remove('widWidth2560up');
        })
        document.querySelectorAll('.videoTitle').forEach(el => {
            el.parentElement.style.width= '100%';
        })
        document.querySelectorAll('.slideArrow').forEach(el => {
            el.style.opacity= '1';
        })
        document.querySelectorAll('.full_body .container .collapsible_item > .card').forEach(el => {
            el.style.marginRight= '30px'
        })
        document.querySelectorAll('.collapsible_item > .card > .collapse').forEach(el => {
            el.classList.add('show');
        })
        Array.from(document.querySelectorAll(".step_header")).map(el => {
            el.parentElement.removeAttribute("data-bs-toggle");
        })
        arrowMove()
    }
}

function disqualified(){
    // horizontal to less 2560
    document.querySelector('.full_body .container .collapsible_item').style= '';

    document.querySelectorAll('.container').forEach(el =>{
        el.classList.remove('widWidth2560up');
    })
    document.querySelectorAll('.videoTitle').forEach(el => {
        el.parentElement.style= '';
    })
    document.querySelectorAll('.videoTitle')[1].style= '';

    document.querySelectorAll('.full_body .container .collapsible_item > .card').forEach(el => {
        el.style= ''
    })
    // document.querySelectorAll('.collapsible_item > .card > .collapse').forEach(el => {
    //     el.classList.remove('show');
    // })
    // document.querySelector('.collapsible_item > .card > .collapse').classList.add('show');
    Array.from(document.querySelectorAll(".step_header")).map(el => {
        el.parentElement.setAttribute("data-bs-toggle","collapse");
    })
}

document.querySelectorAll(".sub_item").forEach(el => {
    el.querySelector('.card-header').onclick = ()=>{
        if(el.querySelector('.card-header').getAttribute('aria-expanded') == 'true'){
            el.querySelector('.card-header img').src = "images/remove.svg"
        }else{
            el.querySelector('.card-header img').src = "images/plus.png"
        }
    }
})
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
        // setInterval(youTubePlayerDisplayInfos, 1000);
        arrowMove()

    }


    if (window.addEventListener) {
        window.addEventListener('load', init);
    } else if (window.attachEvent) {
        window.attachEvent('onload', init);
    }
}());