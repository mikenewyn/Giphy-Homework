var topics = ["Spiderman", "Ironman", "Black Panther", "Dr. Strange", "Hulk", "Wolverine", "Cyclops"];

function newButton() {
  $("#button-area").empty();
  for (var i = 0; i < topics.length; i++ ){
    $("#button-area").append("<button id='char-button' char='" + topics[i] + "'>" + topics[i]);
  }
}

$(document).on("click", "#char-button", function() {
  var charInfo = $(this).attr("char");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + charInfo + "&api_key=SsRcRExbSi0dtRlOTjRGL7zpxiCZNIPR";
  gifPull();
  function gifPull(){
    $("image-area").empty();
    event.preventDefault();
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      for(var i = 0; i < response.data.length; i++){
        $("#gifs").append("<img src='" + response.data[i].images.downsized.url + "'/>");
      }
      })
  }
});

newButton();



