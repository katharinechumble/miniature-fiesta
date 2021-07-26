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
      var infoDiv = document.getElementById("gameInfo");
      var imageDiv = document.getElementById("boxArt");
      var image = document.createElement("img");
      infoDiv.innerHTML = "";
      imageDiv.innerHTML = "";
      image.src = data.background_image;
      image.width = 400;
      imageDiv.appendChild(image);
      infoDiv.innerHTML += data.description;
    });
}
