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
    
    // function getState(response) {
    //     var stateDiv = $("<div>");

    //     var stateName = $("<p>").text(response[]);
    // }
    
    $.ajax({
        url: queryURL2,
        method: 'GET',
    }).then(function(response) {
        console.log(response);
    });