/*
let API_KEY = 'AIzaSyBS_k8f4vXceZ7GkOOLdVCO3eZy3KKgPH0';
let url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=${encodeURIComponent(query)}&maxResults=5`;

fetch(url)
  .then((response) => {
    console.log(response.status); // 200 if OK
    console.log(response.ok);     // true if successful
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.items.forEach((item) => {
      console.log("Title:", item.snippet.title);
      console.log("Video ID:", item.id.videoId);
      console.log("URL: https://www.youtube.com/watch?v=" + item.id.videoId);
      console.log("-------------");
    });
  })
  .catch((err) => {
    console.error("Error fetching YouTube data:", err);
  });
*/


function main_fxn(){
    let API_KEY = 'AIzaSyBS_k8f4vXceZ7GkOOLdVCO3eZy3KKgPH0';
    let query = document.getElementById('skill_selector').value + 'One Shot';
    let url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=${encodeURIComponent(query)}&videoDuration=long&maxResults=5`;

    fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();  // Convert response to JSON
    })
    .then((data) => {
        let resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = "";  // Clear old results

        data.items.forEach((item) => {
        let title = item.snippet.title;
        let videoId = item.id.videoId;
        let videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        let thumbnailUrl = item.snippet.thumbnails.high.url; 

        // Create a paragraph with clickable link
        let videoDiv = document.createElement("div");
        videoDiv.innerHTML = `<a href="${videoUrl}" target="_blank"><img class ='thumbnailImg' src="${thumbnailUrl}" alt="${title}"><br><p>${title}</p></a>`; 

        resultsDiv.appendChild(videoDiv) ;
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
