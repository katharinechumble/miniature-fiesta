function getGameInfo() {
  var gameTitle = document.getElementById("gameTitle").value;
  gameTitle = gameTitle.split(" ").join("-").toLowerCase();
  fetch(
    "https://api.rawg.io/api/games/" +
      gameTitle +
      "?key=c782d5b4b0c24f6c884c5ea8f5f3c9d1"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      getYoutube(gameTitle);
      var infoDiv = document.getElementById("gameInfo");
      var imageDiv = document.getElementById("boxArt");
      var image = document.createElement("img");
      infoDiv.innerHTML = "";
      imageDiv.innerHTML = "";
      image.src = data.background_image;
      image.width = 400;
      imageDiv.appendChild(image);
      infoDiv.innerHTML += data.description;
      for (var i = 0; i < 5; i++) {
        var span = document.getElementById([i + 1] + "star");
        if (data.ratings.length > 0) {
          for (var j = 0; j < data.ratings.length; j++) {
            if (data.ratings[j].id === i + 1) {
              span.innerHTML = data.ratings[j].count;
              j;
            }
          }
          if (span.innerHTML === "") {
            span.innerHTML = "0";
          }
        }
      }
    });
}

function getYoutube(gameTitle) {
  fetch(
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=" +
      gameTitle +
      "&key=AIzaSyAzAOJ7_jMZq-33BUaxhdDSFJBr1LJdY8U"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var section = document.getElementById("youtube");
      section.innerHTML = `<iframe width='560' height='315' src='https://www.youtube.com/embed/${data.items[0].id.videoId}' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`;
    });
}
