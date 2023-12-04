// let videoIds = new Array();
// const videoId = document.querySelectorAll('.watch_video').forEach(el => {
//     if(el.getAttribute('data-video-id')){
//         videoIds.push(el.getAttribute('data-video-id'));
//     }
// })
// fetch("youtubeData.php", {
//     "method": "POST",
//     "headers": {
//         "Content-Type": "application/json"
//     },
//     "body": JSON.stringify(videoIds)
// }).then(function(response){
//     return response.json()
// }).then((data) => {
//     console.log(data)
//     document.querySelector('.videoViewCount').innerHTML = data['introVideo'];
//     document.querySelectorAll(".watch_video").forEach((el, i) => {
//         el.setAttribute('data-video-view', data['secVideo'][i]);
//     })
// }).catch(error =>{
//     console.error(error);
// })

