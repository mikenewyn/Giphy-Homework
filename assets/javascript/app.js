var topics = ["Spiderman", "Ironman", "Black Panther", "Dr. Strange", "Hulk", "Wolverine", "Cyclops"];

function newButton() {
  $("#button-area").empty();
  for (var i = 0; i < topics.length; i++ ){
    $("#button-area").append("<button id='char-button' char='" + topics[i] + "'>" + topics[i]);
  }
}

$(document).on("click", "#char-button", function() {
  var charInfo = $(this).attr("char");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + charInfo + "&api_key=SsRcRExbSi0dtRlOTjRGL7zpxiCZNIPR&limit=10";
  gifPull();
  function gifPull(){
    $('image-area').empty();
    event.preventDefault();
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {
      console.log(response);
      var results = response.data;
      for(var i = 0; i < results.length; i++){
        var d = $('<div>');
        var p = $('<p>');
        var image = $('<img>'); 
        d.addClass("char-area");
        p.text("rating: " + response.data[i].rating);
        d.append(p);
        image.attr("src", results[i].images.fixed_height_still.url);
        image.attr("data-still", results[i].images.fixed_height_still.url);
        image.attr("data-animate", results[i].images.fixed_height.url);
        image.attr("data-state", "still");
        image.addClass("pictures");

        d.append(image);
        d.append(p);

        $('#image-area').prepend(d);

      }
      })
  }

  $(".pictures").on("click", function() {
    var state = $(this).attr("data-state");

    console.log(state);

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }

    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }

})

$("#create-char").on("click", function(event) {
  event.preventDefault();
  var newChar = $("#new-character").val().trim();
  topics.push(newChar);
  newButton();
});
});


newButton();



