$(function(){
    
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('country'));

    var country = urlParams.get('country');
    $("#country").html(country);

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {

        var selectedCountry = result[country];
        console.log(selectedCountry);

        for(var i=0;i<selectedCountry.length;i++){
           
            var row = `<tr>
            <th scope="row">${selectedCountry[i].date}</th>
            <td>${selectedCountry[i].confirmed}</td>
            <td>${selectedCountry[i].deaths}</td>
            <td>${selectedCountry[i].recovered}</td>
          </tr>`

          $("#data2").append(row);

        }
        

    });

})


$(function (){
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('country'));

    var country = urlParams.get('country');
    $("#country").html(country);

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {
        
        var selectedCountry = result[country];
        console.log(selectedCountry);

        var sumconfirm = selectedCountry.length;    

        var sumeachconfirm = selectedCountry[sumconfirm - 1].confirmed;
    
    console.log(sumeachconfirm);
    $("#eachconfirm").append(sumeachconfirm);
}); 
});

$(function (){
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('country'));

    var country = urlParams.get('country');
    $("#country").html(country);

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {
        
        var selectedCountry = result[country];
        console.log(selectedCountry);

        var sumdeath = selectedCountry.length;    

        var sumeachdeath = selectedCountry[sumdeath - 1].deaths;
    
    console.log(sumeachdeath);
    $("#eachdeath").append(sumeachdeath);
}); 
});

$(function (){
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('country'));

    var country = urlParams.get('country');
    $("#country").html(country);

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {
        
        var selectedCountry = result[country];
        console.log(selectedCountry);

        var sumrecovered = selectedCountry.length;    

        var sumeachrecovered = selectedCountry[sumrecovered - 1].recovered;
    
    console.log(sumeachrecovered);
    $("#eachrecovered").append(sumeachrecovered);
}); 
});