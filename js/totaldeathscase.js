$(function () {
    var url = "https://pomber.github.io/covid19/timeseries.json";
    $.getJSON(url, function (result) {
        console.log(result);
        var no = 1;
        var all2 = 0;
        for (var country in result) {
            var selectedCountry = result[country];
            var total = selectedCountry.length;
            all2 = all2 + selectedCountry[total - 1].deaths;
        }
        console.log(all2);
        $("#totaldeaths").append(all2);
    });
});

