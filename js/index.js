$(function () {

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {
        

        var no = 1;
        for (var country in result) {
            var selectedCountry = result[country];
            var totaleach = selectedCountry[90].confirmed;
            var row = `<tr>
                        <th scope="row">${no}</th>
                        <td>
                        <a href="country.html?country=${country}">${country}</a>
                        </td>
                        <td>
                        <p>${totaleach}</p>
                        </td>
                        
                    </tr>`;

            $("#data1").append(row);
            no++;

        }

    });

});

