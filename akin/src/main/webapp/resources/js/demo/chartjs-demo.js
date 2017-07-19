/*$(function () {*/

	/*
    var lineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Example dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "Example dataset",
                fillColor: "rgba(26,179,148,0.5)",
                strokeColor: "rgba(26,179,148,0.7)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(26,179,148,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    var lineOptions = {
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        bezierCurve: true,
        bezierCurveTension: 0.4,
        pointDot: true,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        responsive: true,
    };


    var ctx = document.getElementById("lineChart").getContext("2d");
    var myNewChart = new Chart(ctx).Line(lineData, lineOptions);

    var barData = {
        labels: ["Ricardo Anaya Cortes", "Margarita Zavala", "Rafael Moreno Valle"],
        datasets: [
            {
                label: "Mejor publicacion 1",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80]
            },
            {
                label: "Mejor publicacion 2",
                fillColor: "rgba(26,179,148,0.5)",
                strokeColor: "rgba(26,179,148,0.8)",
                highlightFill: "rgba(26,179,148,0.75)",
                highlightStroke: "rgba(26,179,148,1)",
                data: [28, 48, 40]
            },
            {
                label: "Mejor publicacion 3",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [50, 50, 60]
            },
            
            {
                label: "Menos pipular 1",
                fillColor: "rgba(26,179,148,0.5)",
                strokeColor: "rgba(26,179,148,0.8)",
                highlightFill: "rgba(26,179,148,0.75)",
                highlightStroke: "rgba(26,179,148,1)",
                data: [-28, -48, -40]
            },
            {
                label: "Menos pipular 2",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [-28, -48, -40]
            },
            {
            label: "Menos pipular 3",
            fillColor: "rgba(26,179,148,0.5)",
            strokeColor: "rgba(26,179,148,0.8)",
            highlightFill: "rgba(26,179,148,0.75)",
            highlightStroke: "rgba(26,179,148,1)",
            data: [-50, -50, -60]
        }
        ]
    };

    var barOptions = {
        scaleBeginAtZero: true,
        scaleShowGridLines: false,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        barShowStroke: false,
        barStrokeWidth: 2,
        barValueSpacing: 10,
        barDatasetSpacing: 1,
        responsive: true,
        
        
    }


    var ctx = document.getElementById("barChart").getContext("2d");
    var myNewChart = new Chart(ctx).Bar(barData, barOptions);

    var polarData = [
        {
            value: 300,
            color: "#a3e1d4",
            highlight: "#1ab394",
            label: "App"
        },
        {
            value: 140,
            color: "#dedede",
            highlight: "#1ab394",
            label: "Software"
        },
        {
            value: 200,
            color: "#b5b8cf",
            highlight: "#1ab394",
            label: "Laptop"
        }
    ];

    var polarOptions = {
        scaleShowLabelBackdrop: true,
        scaleBackdropColor: "rgba(255,255,255,0.75)",
        scaleBeginAtZero: true,
        scaleBackdropPaddingY: 1,
        scaleBackdropPaddingX: 1,
        scaleShowLine: true,
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        responsive: true,

    };

    var ctx = document.getElementById("polarChart").getContext("2d");
    var myNewChart = new Chart(ctx).PolarArea(polarData, polarOptions);

    var doughnutData = [
        {
            value: 300,
            color: "#a3e1d4",
            highlight: "#1ab394",
            label: "App"
        },
        {
            value: 50,
            color: "#dedede",
            highlight: "#1ab394",
            label: "Software"
        },
        {
            value: 100,
            color: "#b5b8cf",
            highlight: "#1ab394",
            label: "Laptop"
        }
    ];

    var doughnutOptions = {
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 45, // This is 0 for Pie charts
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        responsive: true,
    };


    var ctx = document.getElementById("doughnutChart").getContext("2d");
    var myNewChart = new Chart(ctx).Doughnut(doughnutData, doughnutOptions);

*/



var barData = {
        labels: [  "Me asombra" , "Me divierte","Me encanta", "Me gusta","Me entristece", "Me enoja", "Otra"],
       // labels: ["Me gusta", "Me encanta" , "Me asombra" , "Me divierte", "Me entristece", "Me enoja", "Otra"],
        datasets: [
            {
                label: "Ricando Anaya Cortés",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [	14452,	213639,111881,3140469,	6988,	61628,	1084]
            },
            {
                label: "Margarita Zavala",
                fillColor: "rgba(26,179,148,0.5)",
                strokeColor: "rgba(26,179,148,0.8)",
                highlightFill: "rgba(26,179,148,0.75)",
                highlightStroke: "rgba(26,179,148,1)",
                data: [		7107,	21484,107510,2020938 ,3970,	7026,	1359]
            },
            {
                label: "Rafael Moreno Valle",
                fillColor: "rgba(108,116,238,0.2)",
                strokeColor: "rgba(108,116,238,0.8)",
                highlightFill: "rgba(108,116,238,0.75)",
                highlightStroke: "rgba(108,116,238,1)",
                data: [	73998	,83249,216464,6169639,6635	,47663	,2622]
            }
        ]
    };

    var radarDataVideo = {
    		labels: [  "Me asombra" , "Me divierte","Me encanta", "Me gusta","Me entristece", "Me enoja", "Otra"],
    		//labels: ["Me gusta", "Me encanta" , "Me asombra" , "Me divierte", "Me entristece", "Me enoja", "Otra"],
    		datasets: [
                {
                	label: "Ricando Anaya Cortés",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [10885	,43079	,75274,1081372,1622	,25747	,4462]
                },
                {
                	 label: "Margarita Zavala",
                     fillColor: "rgba(26,179,148,0.2)",
                     strokeColor: "rgba(26,179,148,1)",
                     pointColor: "rgba(26,179,148,1)",
                     pointStrokeColor: "#fff",
                     pointHighlightFill: "#fff",
                     pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [	3874,	32915,62823,725105	,1976,	13710,	970]
                },
                {
                	 label: "Rafael Moreno Valle",
                     fillColor: "rgba(108,116,238,0.2)",
                     strokeColor: "rgba(108,116,238,1)",
                     pointColor: "rgba(108,116,238,1)",
                     pointStrokeColor: "#fff",
                     pointHighlightFill: "#fff",
                     pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [54665	,26196,130700,2372114	,4731	,33812,	719]
                }
            ]
        };

    var radarOptions = {
    		scaleBeginAtZero: true,
            scaleShowGridLines: false,
            scaleGridLineColor: "rgba(0,0,0,.05)",
            scaleGridLineWidth: 1,
            barShowStroke: false,
            barStrokeWidth: 2,
            barValueSpacing: 10,
            barDatasetSpacing: 1,
            responsive: true,
        percentageInnerCutout: 50,
        tooltipTemplate: "<%= value %>%"
            
    }

    var ctx = document.getElementById("radarChart").getContext("2d");
    var myNewChart = new Chart(ctx).Line(barData, radarOptions);
    //document.getElementById('js-legend').innerHTML = myNewChart.generateLegend();
    
    //var ctx2 = document.getElementById("radarChart-video").getContext("2d");
    //var myNewChart2 = new Chart(ctx2).Line(radarDataVideo, radarOptions);
    //document.getElementById('js-legend-2').innerHTML = myNewChart2.generateLegend();

/*});*/