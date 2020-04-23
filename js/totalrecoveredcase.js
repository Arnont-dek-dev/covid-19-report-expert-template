$(function () {
    var url = "https://pomber.github.io/covid19/timeseries.json";
    $.getJSON(url, function (result) {
        console.log(result);
        var no = 1;
        var all3 = 0;
        for (var country in result) {
            var selectedCountry = result[country];
            var total = selectedCountry.length;
            all3 = all3 + selectedCountry[total - 1].recovered;
        }
        console.log(all3);
        $("#totalrecovered").append(all3);
    });
});

