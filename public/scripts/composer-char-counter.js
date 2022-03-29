$(document).ready(function() {
  $("#tweet-text").on("input", function() {
    console.log($(this).val());
    console.log($(this.parentElement).find(".tweet-line"));
    let charsLeft = 140 - $(this).val().length;
    let counterEl = $(this).parent().find(".counter");
    counterEl.html(charsLeft);
    if (charsLeft > 0) {
      counterEl.css("color", "grey");
      $(".error").hide();
      $(".error").html("");
    } else {
      counterEl.css("color", "red");
      $(".error").show();
      $(".error").html("Tweet too long");
    }
  });
});