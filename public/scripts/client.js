
$(document).ready(function() {
  $("#target").submit(onSubmit);
  loadTweets();
});

const createTweetElement = function(tweetData) {
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

const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-feed').append($tweet);
  }
};

const onSubmit = function(event) {
  event.preventDefault();
  $(".error").hide();
  const $textinput = $(this).closest("form").find("textarea").val();
  if (!$textinput) {
    $(".error").slideDown('fast');
    $(".error").html("Tweet cannot be empty");
  } else if ($textinput.trim().length > 140) {
    $(".error").slideDown('fast');
    $(".error").html("Tweet too long");
  } else {
    const formData = $(this).serialize();
    $.post("/tweets", formData)
      .then(function(data) {
        console.log("success!", data);
        const $tweet = createTweetElement(data);
        $("#tweets-feed").prepend($tweet);
        $("#tweet-text").val('');
        $(".error").hide();
        $(".counter").html('140');
      });
  }
};

const loadTweets = function() {
  $.getJSON('http://localhost:8080/tweets')
    .then(function(tweets) {
      renderTweets(tweets);
    });
};


const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

