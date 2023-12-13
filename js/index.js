// .on event listener documentation - https://api.jquery.com/on/#on-events-selector-data-handler

// Samples- Step 1: Hide a div
$('#button1').on("click", function(){
    $('.hideMe').slideToggle();
  });
  
  // Step 2: Change a color
  $('#button2').on("click", function(){
    $('.cssChange').css("background-color","red");
  });
  
  // Step 3: Append content
  $('#button3').on("click", function(){
    $('.appendMe').append("<div class='child'>I got appended! Nice!</div> ")
  });
  
  // Step 4: Animate a DIV
  $("button").click( function(){
       $('.animate').animate( {left: '250px'}, 1000 );
  });
  
// Use jQuery to target the <h1> tag and make it red.
$("h1").css("color", "red");

// Use jQuery to target the blue class and make it blue.
$(".blue").css("color", "blue");

// Use jQuery to target the addMe ID and change its HTML to Hello.
$("#addMe").html('Hello');

var skills=document.getElementsByClassName ("skillsButton")
skills.addEventListener (onclick,function(){window.location.href="Skills.html"} )

$("skillsButton").on("click", function(){
    $('.appendMe').append("<div class='child'>    </div>")
});



$('#AvatarPic').live("mouseover", function(){
    var $this=$(this);

    $this.attr('width','115%');
    $this.attr('height','115%');

 })


  
