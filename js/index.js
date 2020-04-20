$(function () {

    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('country'));

    var country = urlParams.get('country');
    $("#country").html(country);

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {
        var selectedCountry = result[country];
        console.log(selectedCountry);

        var total = selectedCountry.length;

        var no = 1;
        for (var country in result) {

            var row = `<tr>
                <th scope="row">${no}</th>
                    <td>
                        <a href="country.html?country=${country}">${country}</a>
                    </td>
                    <td>
                        ${selectedCountry[result].confirmed}
                    </td>
            </tr>`;

            $("#data1").append(row);
            no++;

        }


    });




})