$(document).ready(function() {

//Event Listeners
landSpaceship();
$("#plantFlag").click(plantFlag);

});

//Functions 
function plantFlag(event) {
	$("#flag").css("display","block"); 
}

function landSpaceship() {
	$("#spaceshipOnMars").animate({ top: "50%", left : "10%"}, 1500);
}