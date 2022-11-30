

var requestUrl = 'https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=11c5aab5efe97256e5343fe4bb3dbb3cf1dff45f2c409325ed773837fcdd51d1';
//var apiKey = '11c5aab5efe97256e5343fe4bb3dbb3cf1dff45f2c409325ed773837fcdd51d1';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].url);
      //console.log(data[i].user.login);
    }
  });

  