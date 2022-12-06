var inputEl = $("#input-box");
var searchButton = $(".submit");
var bodyDisplay = $(".body-display");
var playersEl = $("#content-2");
var imageContainer = $(".image-container");

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

fetch(standingsURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });




function displayPlayers(event) {
  event.preventDefault();
  var team = inputEl.val();
  // alert(inputEl.val());
  if (team.trim() == "") {
    alert("Please enter the name of your favorite team");
    return;
  }

  if (team.trim() !== "") {
    var teamSelected = team.trim().charAt(0).toUpperCase() + team.slice(1);

    console.log(teamSelected);
    fetchPlayerDetails(teamSelected);
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
var imageURL = playersDetails[j].player_image;
var eachPlayer = $("<div class='cell small-3'><div class='card'><div='card-section small-3'><img src="+imageURL+ " alt='player image'></div></div></div>")
         imageContainer.append(eachPlayer);
}

        }
      }
    });
}


searchButton.on("click", displayPlayers);
