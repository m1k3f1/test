/*
Chart.defaults.global = {
		tooltipTemplate: "<%=label%>: <%= value %>"
}*/

Chart.defaults.global.tooltipTemplate= "<%=label%>: <%= value %>";

var reactionsData = {
        labels: [  "Me asombra" , "Me divierte","Me encanta", "Me gusta","Me entristece", "Me enoja", "Otra"],
       // labels: ["Me gusta", "Me encanta" , "Me asombra" , "Me divierte", "Me entristece", "Me enoja", "Otra"],
        datasets: [
            {
                label: "Ricando Anaya Cort\u00e9s",
                fillColor: "rgba(96,96,96,0.2)",
                strokeColor: "rgba(96,96,96,1)",
                pointColor: "rgba(96,96,96,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [	108,	1798,2041,43135,	26,	241,	9]
            },
            {
                label: "Margarita Zavala",
                fillColor: "rgba(26,179,148,0.2)",
                strokeColor: "rgba(26,179,148,1)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                
                data: [		155,	1496,5226,59078 ,26,	266,	901]
            },
            {
                label: "Rafael Moreno Valle",
                fillColor: "rgba(108,116,238,0.2)",
                strokeColor: "rgba(108,116,238,1)",
                pointColor: "rgba(108,116,238,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                
                data: [		9004,	15370,17560,529482 ,360,	5481,	2000]
            }
        ]
    };

var periodData = {
        labels: [  "Semana 1" , "Semana 2","Semana 3", "Semana4"],
        datasets: [
            {
                label: "Ricando Anaya Cort\u00e9s",
                fillColor: "rgba(96,96,96,0.2)",
                strokeColor: "rgba(96,96,96,1)",
                pointColor: "rgba(96,96,96,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [	8,	3,11,16]
            },
            {
                label: "Margarita Zavala",
                fillColor: "rgba(26,179,148,0.2)",
                strokeColor: "rgba(26,179,148,1)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [9,12,5,5 ]
            },
            {
                label: "Rafael Moreno Valle",
                fillColor: "rgba(108,116,238,0.2)",
                strokeColor: "rgba(108,116,238,1)",
                pointColor: "rgba(108,116,238,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [13,16,19,12 ]
            }
        ]
    };

var options = {
		scaleBeginAtZero: true,
        scaleShowGridLines: false,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        datasetFill : true,
        barShowStroke: false,
        barStrokeWidth: 2,
        barValueSpacing: 10,
        barDatasetSpacing: 1,
        responsive: true,
        multiTooltipFontSize: 5, 
        tooltipCaretSize: 5,
        multiTooltipTemplate: "<%= datasetLabel%>: <%= value %>",
       
}

var ctx = document.getElementById("reactionsChart").getContext("2d");
var myNewChart = new Chart(ctx).Line(reactionsData, options);

var ctx = document.getElementById("periodChart").getContext("2d");
var myNewChart = new Chart(ctx).Line(periodData, options);

