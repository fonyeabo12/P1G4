    const queryURL1 = "https://api.covid19api.com/total/country/united-states/status/confirmed";
    

    function ajaxCB(response) {
         
        var newList = $("<ul>");
        
        var cases = $("<li>").text(response[response.length -1].Cases);
        
        newList.append(cases);
        $("div").append(newList);
        console.log(response);
    };

    

    $.ajax({
        url: queryURL1,
        method: 'GET',
    }).then(ajaxCB);

    const queryURL2 = "https://energ.ee/covid19-us-api/states.json";

    $.ajax({
        url: queryURL2,
        method: 'GET',
    }).then(function(response){
        console.log(response);
    });