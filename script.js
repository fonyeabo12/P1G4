const queryURL1 = "https://api.covid19api.com/total/country/united-states/status/confirmed";

function ajaxCB(response) {
	var newList = $("<h3>");

	var cases = $("<p>").text(response[response.length - 1].Cases);

	newList.append(cases);
	$("#totalCases").append(newList);
	console.log(response);
}

$.ajax({
	url: queryURL1,
	method: "GET",
}).then(ajaxCB);

const queryURL2 = "https://energ.ee/covid19-us-api/states.json";

$("#search").on("click", function (event) {
	event.preventDefault();
	$.ajax({
		url: queryURL2,
		method: "GET",
	}).then((data) => {
		console.log(data[$("#input").val()]);
	
	const state = $("#input").val();
	const stateData = data[state];
	const currentDate = stateData[stateData.length - 1].date;
	const cases = stateData[stateData.length -1].confirmed;
	const death = stateData[stateData.length -1].deaths;

	$("#stateName").append(state);
	$("#date").append(currentDate);
	$("#stateCases").append(cases);
	$("#stateDeaths").append(death);
});
});