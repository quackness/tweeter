$(document).ready(function() {
  
  $("#tweet-text").keyup(function(event) {//targeting tweet-text class
    //console.log(this.value.length);
    console.log($(this).val());//.val works with jquery
    console.log(this.value, "old approach")
    console.log($(this.parentElement).find(".tweet-line"));
    let charsLeft = 140 - $(this).val().length;//calculation 
    //debugger - allows to pause the execution and access the local vars
    let counterEl = $(this.parentElement).find(".counter");//parent is form, we are looking for a child
    counterEl.html(charsLeft);
    if (charsLeft > 0) {
      counterEl.css("color", "grey");
    } else {
      counterEl.css("color", "red");
    };
  });
  console.log("testing a doc")
});

