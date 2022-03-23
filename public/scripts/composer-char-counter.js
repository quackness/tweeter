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
    } else {
      counterEl.css("color", "red");
    };
  });
  console.log("testing a doc")
});




//alternatives
// $(document).ready(function() {
//   $("#tweet-text").keydown(function( event ) {
//     console.log($(this).val());
//     let charLeft = 140 - $(this).val().length;
//     // console.log(140 - $(this).val().length);
//     //find(.counter)
//     console.log($(this).parent().find(".counter"));
//     let element = $(this).parent().find(".counter");
//     element.html(charLeft);

//     if (charLeft > 0 ) {
//       element.css("color", "grey")
//     } else {
//       element.css("color", "red")
//     }
// });
//   console.log("your doc is working")
// });



// 1st

// $(document).ready(function() {
  
//   $("#tweet-text").input(function(event) {//targeting tweet-text class
//     //keydown is the best since it fires even on keyrepeat, keyup works as expected
//     //but when the key is repeating the counter is not changing until I let go
//     //on mac key repeat does not work by default so I followed this https://discussions.apple.com/thread/3190706
   
//     console.log($(this).val());//.val() works with jquery, $(this)selects the current element
    
//     console.log($(this.parentElement).find(".tweet-line"));
//     let charsLeft = 140 - $(this).val().length;//calculation 
//     //debugger - allows to pause the execution and access the local vars
//     let counterEl = $(this.parentElement).find(".counter");//parent is form, we are looking for a child
//     counterEl.html(charsLeft);
//     if (charsLeft > 0) {
//       counterEl.css("color", "grey");
//     } else {
//       counterEl.css("color", "red");
//     };
//   });
//   console.log("testing a doc")
// });