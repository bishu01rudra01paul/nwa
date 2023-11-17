fetch("http://localhost/lab/youtubeAudio/", {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json; charset=utf-8"
    }
    // "body": JSON.stringify(sendJsonData)
}).then(function(response){
    return response.json()
}).then((data) => {
    console.log(data)
    document.querySelector('.videoViewCount').innerHTML = data['YTViewData'];
})