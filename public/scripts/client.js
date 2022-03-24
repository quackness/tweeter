// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */

$(document).ready(function() {
  //step 1 part 2
  // const $tweet = createTweetElement();
  // $('#tweets-container').append($tweet);
  //step 2
  // const $tweet = createTweetElement(tweetData);
  // $('#tweets-container').append($tweet);
  //renderTweets(data);//step 1 (Dynamic tweets)
  // $( "#target" ).on("submit", function() {
  //   alert( "Handler for .submit() called." );
  //   preventDefault();
  // });
  //form submission with jQuery
  $("#target").submit(onSubmit);
  $("button").click(function(){
    $(".error").slideDown("fast");
  });
  loadTweets();
});

//step 1 You can start by having your function create hardcoded tweets, like so:
// const createTweetElement = function () {
//   const $tweet = $(`<article class="tweet">Hello world</article>`);
//   return $tweet;
// };
// createTweetElement();
//step 2 object
// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227
// }

 //function that returns a tweet
const createTweetElement = function (tweetData) {//single tweet object from the array
  const $tweet = $(`<article class="tweet"> 
  <header>
    <div class="header-left">
      <i><img src="${tweetData.user.avatars}" /></i>
      <p>${tweetData.user.name}</p>
    </div>
    <p class="username">${tweetData.user.handle}</p>
  </header>
  <div class="single-tweet">${escape(tweetData.content.text)}</div>
  <div><hr></hr></div>
  <footer>
    <p>${timeago.format(tweetData.created_at)}</p> 
    <div class="social-icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </footer>
</article>`);
return $tweet;
};

//step 3 render tweets 
// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ]

 // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  //$('#tweets-container').append($tweet);
const renderTweets = function(tweets) {//data array
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    console.log("tweet inside loop", $tweet);
    $('#tweets-feed').append($tweet);
  }
};

const onSubmit = function(event) {
  event.preventDefault();
  $(".error").hide();
  //validate the form
  const $textinput = $(this).closest("form").find("textarea").val();
  console.log($textinput);
   if (!$textinput) {
    //  alert("Input field cannot be empty")
     $(".error").show();
     $(".error").html("Tweet cannot be empty");
   } else if ($textinput.trim().length > 140) {
    // alert("Tweet too long")
    // $(".error").show();
    // $(".error").html("Tweet too long");
   } else {
  const formData = $(this).serialize();//creates a text string in standard URL-encoded notation
  //console.log(formData);
 
  $.post("/tweets", formData)
    .then(function(data) {
    //console.log("success!", data);
    const $tweet = createTweetElement(data);
    //console.log($tweet);
    $("#tweets-feed").prepend($tweet);
    //formData.val("");
    // $("#target").reset();
    $("#tweet-text").val("")//sets the value to the empty string 
    $(".error").hide();
    })
   }
};

const loadTweets = function() {
  $.getJSON('http://localhost:8080/tweets')
  .then(function(tweets) {
    //console.log("success!", tweets);
    renderTweets(tweets);
  })  
};

// escape function

const escape = function (str) {
  let div = document.createElement("div");//creates a div in DOM
  div.appendChild(document.createTextNode(str));//appending child with a string
    return div.innerHTML;//returns the HTML content (inner HTML) of an element.
};


 


// $.escapeSelector( "#target" ); // "\#target"
// const escape = function (tweetContent) {
// }
// const $textToescape = $(this).closest("form").find("textarea").val();
// $("<div>").text($textToescape);
// escape("$textToescape")
