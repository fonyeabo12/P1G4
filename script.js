    const queryURL1 = "https://api.covid19api.com/total/country/united-states/status/confirmed";
    

    function ajaxCB(response) {
         
        var newList = $("<h3>");
        
        var cases = $("<p>").text(response[response.length -1].Cases);
        
        newList.append(cases);
        $("#totalCases").append(newList);
        console.log(response);
    };

    

    $.ajax({
        url: queryURL1,
        method: 'GET',
    }).then(ajaxCB);

    const queryURL2 = "https://energ.ee/covid19-us-api/states.json";

    function getStateData() {
        
        $.ajax({
            url: queryURL2,
            method: 'GET',
        })
        .then(data => {
            console.log(data);
            return data;
        });
    }

    const stateData = getStateData();
    
    $("#search").on("click", function(getStateData, response) {
        getStateData.preventDefault();
        //var state = $("#input").val();
        let state = $("<div>").text(response.object);
        let currentDate = $("<div>").text(response[response.length -1].date);
        let cases = $("<div>").text(response[response.length -1].confirmed);
        let death = $("<div>").text(response[response.length -1].deaths);
        
        $("#stateName").append(state);
        $("#date").append(currentDate);
        $("#stateCases").append(cases);
        $("#stateDeaths").append(death);
    });

    