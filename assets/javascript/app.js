var marvel = ["spiderman", "ironman", "black panther", "dr. strange", "hulk", "wolverine", "cyclops"]

var key = "SsRcRExbSi0dtRlOTjRGL7zpxiCZNIPR"

var queryURL = "https://api.giphy.com/v1/gifs/search?q=corgis&api_key=SsRcRExbSi0dtRlOTjRGL7zpxiCZNIPR";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    for(var i = 0; i < response.data.length; i++){
        $("#gifs").append("<img src='" + response.data[i].images.downsized.url + "'/>");
      }
  });