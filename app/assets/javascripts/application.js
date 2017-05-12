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
		requestBrewInfo(brewId);
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
	console.log("hello")
});






requestBrewInfo = function(brewId) {
  $.ajax({
    url: '/breweries/' + brewId + ".json",
    type: 'GET'
  }).done(function(response){
  	debugger
  	console.log(response.facebook)
    $(".show-name").text(response.name)
    $(".show-photo").attr("src", response.photo)
    $(".show-website").text(response.website)
    $("#twitter-link").attr("href", response.twitter)
    $("#facebook-link").attr("href", response.facebook)
    $("#instagram-link").attr("href", response.instagram)
  });
};


