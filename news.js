

function getNews() {
    var apiKey = "5b8eb55b32374c289ceb8faf14f34f89"
    var keyWord = "tesla"

    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=5b8eb55b32374c289ceb8faf14f34f89').then(data => console.log(data));
   
}

