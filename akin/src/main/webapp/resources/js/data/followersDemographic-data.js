var barData = {
        labels: ["Ricardo Anaya Cortés", "Margarita Zavala", "Rafael Moreno Valle"],
        datasets: [
            {
                label: "Secundaria",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80]
            },
            {
                label: "Preparatoria",
                fillColor: "rgba(26,179,148,0.5)",
                strokeColor: "rgba(26,179,148,0.8)",
                highlightFill: "rgba(26,179,148,0.75)",
                highlightStroke: "rgba(26,179,148,1)",
                data: [28, 48, 40]
            },
            {
                label: "Universidad",
                fillColor: "rgba(234,171,237,0.7)",
                strokeColor: "rgba(216,111,221,0.7)",
                highlightFill: "rgba(191,59,198,0.75)",
                highlightStroke: "rgba(191,59,198,1)",
                data: [35, 68, 60]
            }
        ]
    };

    var barOptions = {
        scaleBeginAtZero: true,
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        barShowStroke: true,
        barStrokeWidth: 2,
        barValueSpacing: 25,
        barDatasetSpacing: 5,
        responsive: true,
    }


    var ctx = document.getElementById("barChart").getContext("2d");
    var myNewChart = new Chart(ctx).Bar(barData, barOptions);
    document.getElementById('demo-legend').innerHTML = myNewChart.generateLegend();
