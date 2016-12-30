$(document).ready(function(){
	$("#newQuote").click(function(){
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