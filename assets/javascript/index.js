$(document).ready(function(){
	$("#newQuote").click(function(){
		var count = Math.floor(Math.random()*51); //randomize image id upto 50
		imageUrl = "";
		imageUrl += "url('https://unsplash.it/630/330?image=";
		imageUrl += count + "')";
		$("body").css("background-image", imageUrl); //use the random image id

		// get the random quotes json api 
		$.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json){
			var html = "";
			var tweetHtml = "";

					html += "\"" + json.quote + "\" <br><br>"; //show quote
					html += "- " + json.author; //show the author of the quote
					
					tweetHtml += "<a class='button' target='_blank' href='https://twitter.com/intent/tweet?text=" + json.quote + " - " + json.author + " via @RealAndrewOwino'>Tweet</a>";

					$(".quote").html(html);	//display entire html as under the class "quote"
					$(".tweet").html(tweetHtml);
				});

	});
});