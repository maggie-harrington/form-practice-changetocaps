$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var textInput = $("input#textentered").val();

    $(".textentered").text(textInput);

    $("#textcaps").show();

    event.preventDefault();
  });
});
