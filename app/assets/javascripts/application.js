document.addEventListener("DOMContentLoaded", function(event) { 
	  
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal 
	// btn.onclick = function() {
	    // modal.style.display = "block";
	//     requestBrewInfo()
	// }

	$(".brew-square").on("click", function(event){
		var brewId = this.id;
		$(".show-locations").empty()
		requestBrewInfo(brewId);
		requestLocationInfo(brewId);
		modal.style.display = "block";
	});

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {

	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

// 	$(".brew-square").hover(function(){
		
// 		$(this).children("img").height(230)
// 		$(this).children("img").width(230)
// 	}, function(){
// 		$(this).children("img").height(200)
// 		$(this).children("img").width(200)
// 	})
// 	console.log("hello")
});






requestBrewInfo = function(brewId) {
  $.ajax({
    url: '/breweries/' + brewId + ".json",
    type: 'GET'
  }).done(function(response){
    $(".show-name").text(response.name)
    $(".show-photo").attr("src", response.photo)
    $("#website-link").attr("href", response.website)
    $("#twitter-link").attr("href", response.twitter)
    $("#facebook-link").attr("href", response.facebook)
    $("#instagram-link").attr("href", response.instagram)
    $(".show-description").text(response.description)
  });
};

requestLocationInfo = function(brewId) {
	$.ajax({
		url: '/locations/' + brewId,
		type: 'GET'
	}).done(function(response){
		locationsArray = JSON.parse(response.replace(/&quot;/g,'"'));
		$(".show-locations").append("<h2>Locations</h2>")
		for(i=0; i < locationsArray.length; i++){
			$(".show-locations").append("<p class='l-name'>" + locationsArray[i].name + "</p>")




			$(".show-locations").append("<p>" + locationsArray[i].street + "<br>" + locationsArray[i].city + "<br>" + locationsArray[i].state)

		}
			$(".show-locations").append("<h2>Events</h2>")
	});
}

