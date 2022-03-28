$(document).ready(function() {
  $("#tweet-text").on("input", function() {//targeting tweet-text class, on shows we want to use event, input is the event
    console.log($(this).val());//.val() works with jquery, $(this)selects the current element
    console.log($(this.parentElement).find(".tweet-line"));
    let charsLeft = 140 - $(this).val().length;//calculation
    //debugger - allows to pause the execution and access the local vars
    let counterEl = $(this).parent().find(".counter");
    // OR let counterEl = $(this.parentElement).find(".counter");//parent is form, we are looking for a child
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