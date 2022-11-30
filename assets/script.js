

var requestUrl = 'https://apiv3.apifootball.com/?action=get_players&player_name=Sergio Camus&APIkey=xxxxxxxxxxxxxx';
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });