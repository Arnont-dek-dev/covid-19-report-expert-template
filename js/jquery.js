$(function () {
    var url = "https://pomber.github.io/covid19/timeseries.json";

    
    jQuery("#vmap").vectorMap({
        map: "world_en",
        backgroundColor: "#8583E1",
        borderColor: "#ffffff",
        borderOpacity: 3,
        borderWidth: 0.5,
        color: '#ffffff',
        enableZoom: true,
        hoverOpacity: 0.7,
        hoverColor: "#EECFA1",
        normalizeFunction: 'polynomial',
        selectedColor: '#AE4D92',
        scaleColors: ['#C8EEFF', '#006491'],
        showTooltip: true,
        
    })    

    var chartData = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            data: [589, 445, 483, 503, 689, 692, 634],
        },
        {
            data: [639, 465, 493, 478, 589, 632, 674],
        }]
    };

    var chLine = document.getElementById("chLine");
    if (chLine) {
        new Chart(chLine, {
        type: 'line',
        data: chartData,
        options: {
            scales: {
            yAxes: [{
                ticks: {
                beginAtZero: false
                }
            }]
            },
            legend: {
            display: false
            }
        }
        });
    }
});

