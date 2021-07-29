function saveToHistory(game) {
  var historyDiv = document.getElementById("history");

  var storageArray = JSON.parse(localStorage.getItem("searchedGames"));
  if (!storageArray) {
    storageArray = [];
  }
  var inHistory = false;
  for (i = 0; i < storageArray.length; i++) {
    if (storageArray[i].game === game) {
      inHistory = true;
    }
  }
  if (!inHistory) {
    var button = document.createElement("button");
    button.innerHTML = game.toUpperCase();
    button.id = game;
    button.setAttribute("onclick", "getGameInfo('" + game + "')");
    var gameInfo = {
      game: game,
    };
    historyDiv.appendChild(button);
    storageArray.push(gameInfo);
    localStorage.setItem("searchedGames", JSON.stringify(storageArray));
  }
}

function makeHistory() {
  var historyDiv = document.getElementById("history");
  historyDiv.innerHTML = "";

  var storageArray = JSON.parse(localStorage.getItem("searchedGames"));
  if (!storageArray) {
    storageArray = [];
  }

  for (i = 0; i < storageArray.length; i++) {
    var button = document.createElement("button");
    button.innerHTML = storageArray[i].game.toUpperCase();
    button.id = storageArray[i].game;
    button.setAttribute(
      "onclick",
      "getGameInfo('" + storageArray[i].game + "')"
    );
    historyDiv.appendChild(button);
  }
}

function getGameTitle() {
  var gameTitle = document.getElementById("gameTitle").value;
  gameTitle = gameTitle.split(" ").join("-").toLowerCase();
  getGameInfo(gameTitle);
}

function getGameInfo(gameTitle) {
  fetch(
    "https://api.rawg.io/api/games/" +
      gameTitle +
      "?key=c782d5b4b0c24f6c884c5ea8f5f3c9d1"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      getYoutube(gameTitle);
      saveToHistory(gameTitle);
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

makeHistory();
