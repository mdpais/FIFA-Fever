

var playersUrl = 'https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=11c5aab5efe97256e5343fe4bb3dbb3cf1dff45f2c409325ed773837fcdd51d1';
var apiURL = 'https://apiv3.apifootball.com/?action=get_statistics&match_id=86392&APIkey=11c5aab5efe97256e5343fe4bb3dbb3cf1dff45f2c409325ed773837fcdd51d1';
//var apiKey = '11c5aab5efe97256e5343fe4bb3dbb3cf1dff45f2c409325ed773837fcdd51d1';

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

  var statisticURL = 'https://apiv3.apifootball.com/?action=get_statistics&match_id=86392&APIkey=11c5aab5efe97256e5343fe4bb3dbb3cf1dff45f2c409325ed773837fcdd51d1';

  fetch(statisticURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  var newURL = 'https://apiv3.apifootball.com/?action=get_teams&league_id=19&APIkey=APIkey=11c5aab5efe97256e5343fe4bb3dbb3cf1dff45f2c409325ed773837fcdd51d1';

  fetch(newURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });