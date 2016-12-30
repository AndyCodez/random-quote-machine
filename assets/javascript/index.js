$(document).ready(function(){
	$("#newQuote").click(function(){
		$.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json){
			var html = "";

					html += "\"" + json.quote + "\" <br><br>"; //show quote
					html += "- " + json.author; //show the author of the quote
					$(".quote").html(html);	//display entire html as under the class "quote"
				});
	});
});