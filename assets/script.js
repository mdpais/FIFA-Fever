var inputEl = $("#input-box");
var searchButton = $(".submit");
var bodyDisplay = $(".body-display");
var playersEl = $("#content-2");
var imageContainer = $(".image-container");
var videosEl = $("#videos");
var standingsEl = $("#standings");
var flagEl = $("#flag");
var statsEl = $("#stats");
var teams = [];
var teamsList = document.querySelector(".past-searches");
var buttonsSection = document.querySelector(".team-buttons");

function replaceImg(source){
  source.src = "./assets/images/default-player-image.png";
  source.onerror = "";
  return true;
}
var playersUrl = 'https://apiv3.apifootball.com/?action=get_teams&league_id=28&APIkey=11c5aab5efe97256e5343fe4bb3dbb3cf1dff45f2c409325ed773837fcdd51d1';

var apiURL = 'https://apiv3.apifootball.com/?action=get_statistics&match_id=86392&APIkey=11c5aab5efe97256e5343fe4bb3dbb3cf1dff45f2c409325ed773837fcdd51d1';
//var apiKey = '11c5aab5efe97256e5343fe4bb3dbb3cf1dff45f2c409325ed773837fcdd51d1';
// https://apiv3.apifootball.com/?action=get_events&from=2022-11-20&to=2022-12-31&APIkey=11c5aab5efe97256e5343fe4bb3dbb3cf1dff45f2c409325ed773837fcdd51d1
https://apiv3.apifootball.com/?action=get_leagues&APIkey=11c5aab5efe97256e5343fe4bb3dbb3cf1dff45f2c409325ed773837fcdd51d1
fetch(playersUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    //for (var i = 0; i < data.length; i++) {
    //console.log(data[i].url);
    //console.log(data[i].user.login);
  });
//});
var standingsURL = "https://apiv3.apifootball.com/?action=get_standings&league_id=28&APIkey=11c5aab5efe97256e5343fe4bb3dbb3cf1dff45f2c409325ed773837fcdd51d1";
var statisticURL = 'https://apiv3.apifootball.com/?action=get_statistics&match_id=86392&APIkey=11c5aab5efe97256e5343fe4bb3dbb3cf1dff45f2c409325ed773837fcdd51d1';

function displayStandings(teamSelected) {
  fetch(standingsURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      if (teamSelected == data[i].team_name) {
        standingsEl.attr("class", "work-feature-block row");
        var badge = $("<img>");
        badge.attr("src", data[i].team_badge);
        badge.attr("class", "work-feature-block-image");
        flagEl.append(badge);
        var countryName = $("<h2>");
        countryName.text(data[i].team_name);
        countryName.attr("class", "work-feature-block-header");
        statsEl.append(countryName);
        var groupName = $("<p>");
        groupName.text(data[i].league_round);
        statsEl.append(groupName);
        var groupPosition = $("<p>");
        groupPosition.text("Group Position: "+data[i].overall_league_position);
        statsEl.append(groupPosition);
        var overallPosition = $("<p>");
        overallPosition.text("Overall Position: "+data[i].away_league_position);
        statsEl.append(overallPosition);
      }}
  });
}

function displayPlayers(event) {
  var team = inputEl.val();
  // alert(inputEl.val());
  if (team.trim() == "") {
    alert("Please enter the name of your favorite team");
    return;
  }

  if (team.trim() !== "") {
    var teamSelected = team.trim().charAt(0).toUpperCase() + team.slice(1).toLowerCase();

    console.log(teamSelected);
    imageContainer.text("");
    fetchPlayerDetails(teamSelected);
    videosEl.text("");
    showVideos(teamSelected);
    flagEl.text("");
    statsEl.text("");
    displayStandings(teamSelected);
    inputEl.val("");
    // alert("working");
  }

}

function fetchPlayerDetails(teamSelected) {
  bodyDisplay.hide();
  playersEl.show();
  var playersUrl = 'https://apiv3.apifootball.com/?action=get_teams&league_id=28&APIkey=11c5aab5efe97256e5343fe4bb3dbb3cf1dff45f2c409325ed773837fcdd51d1';
  fetch(playersUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        if (teamSelected == data[i].team_name) {
          // alert("yes");
          var playersDetails = data[i].players;
          for (var j = 0; j < playersDetails.length; j++) {
            // console.log(playersDetails[j].player_name);
// var imageURL = playersDetails[j].player_image;
var imageURL = playersDetails[j].player_image;

var playerName = playersDetails[j].player_name;
var playerType = playersDetails[j].player_type;
  var eachPlayer = $("<div class='cell small-6'><div class='card'><div='card-section small-6'><img src="+imageURL+ " alt='player image' onerror='replaceImg(this)'><div class='card-section small-6 teams-text'><h3>"+ playerName+"</h3><h4>"+ playerType+"</h4></div></div></div></div>");
 imageContainer.append(eachPlayer);
}

        }
      }
    });
}

function showVideos(teamSelected) {
  var youtubeURL = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAkAFBRWHBPFD-SrUl3zqmdtQqSYrTSB_k&type=video&part=snippet&maxResults=10&q=fifa "+teamSelected;
  
  fetch(youtubeURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < 10; i++) {
    var iframeEl = $("<iframe>");
    iframeEl.attr("id", "ytplayer");
    iframeEl.attr("type", "text/html");
    iframeEl.attr("width", "100%");
    iframeEl.attr("height", "450");
    iframeEl.attr("src", "https://www.youtube.com/embed/"+data.items[i].id.videoId);
    iframeEl.attr("frameborder", "0");
    // iframeEl.attr("allowfullscreen");
    videosEl.append(iframeEl);
    }
  });
}

searchButton.on("click", function(event) {
  event.preventDefault();
  addTeam();
  displayPlayers();
});

function renderTeams() {
  buttonsSection.setAttribute("style", "display: block;");
  teamsList.innerHTML = "";
  for (var i = 0; i < teams.length; i++) {
    var team = teams[i];
    var button = document.createElement("button");
    button.textContent = team;
    button.setAttribute("class", "submit button");
    teamsList.appendChild(button);
  }
}

function init() {
  var storedTeams = JSON.parse(localStorage.getItem("teams"));
  if (storedTeams !== null) {
      teams = storedTeams;
  }
  renderTeams();
}

function storeTeams() {
  localStorage.setItem("teams", JSON.stringify(teams));
}

function addTeam() {
  var teamText = inputEl.val();
  if (teamText === "") {
  return;
  }
  teams.push(teamText);
  storeTeams();
  renderTeams();
};

teamsList.addEventListener("click", function(event) {
  var element = event.target;
  if (element.matches("button") === true) {
      inputEl.val(element.textContent);
      displayPlayers();
  }
});

init()