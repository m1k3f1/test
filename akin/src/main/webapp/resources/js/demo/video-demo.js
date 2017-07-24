/*
Chart.defaults.global = {
		tooltipTemplate: "<%=label%>: <%= value %>"
}*/

Chart.defaults.global.tooltipTemplate= "<%=label%>: <%= value %>";

var reactionsData1 = {
        labels: ["Me gusta", "Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"],
        datasets: [
            {
                label: "Ricando Anaya Cort\u00e9s",
                fillColor: "rgba(28,132,198,0.2)",
                strokeColor: "rgba(28,132,198,1)",
                pointColor: "rgba(28,132,198,0.2)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(28,132,198,0,2)",
                data: [	101887,	23795,		6049,	389,	778,	4344,466]
            }
        ]
    };

var reactionsData2 = {
		labels: ["Me gusta", "Me encanta" , "Me divierte", "Me entristece", "Me enoja", "Otra", "Me asombra" ],
        datasets: [
           
            {
                label: "Margarita Zavala",
                fillColor: "rgba(26,179,148,0.2)",
                strokeColor: "rgba(26,179,148,1)",
                pointColor: "rgba(26,179,148,0.2)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,0.2)",
                
                data: [31858,	3591,	2019,	52	,420,	332,111]
            }
        ]
    };



var reactionsData3 = {
		labels: ["Me gusta","Me encanta",  "Me divierte", "Me entristece", "Me enoja", "Otra", "Me asombra"],
        datasets: [
           
            {
                label: "Rafael Moreno Valle",
                fillColor: "rgba(108,116,238,0.2)",
                strokeColor: "rgba(108,116,238,1)",
                pointColor: "rgba(108,116,238,0.2)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,0.2)",
                
                data: [	113021,	7360,	2929,	204	,2336, 309,5795]
            }
        ]
    };



var periodData = {
        labels: [  "Semana 1" , "Semana 2","Semana 3", "Semana4"],
        datasets: [
            {
                label: "Ricando Anaya Cort\u00e9s",
                fillColor: "rgba(28,132,198,0.2)",
                strokeColor: "rgba(28,132,198,1)",
                pointColor: "rgba(28,132,198,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(28,132,198,1)",
                data: [	3,	5,3,3]
            },
            {
                label: "Margarita Zavala",
                fillColor: "rgba(26,179,148,0.2)",
                strokeColor: "rgba(26,179,148,1)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [2,6,5,1]
            },
            {
                label: "Rafael Moreno Valle",
                fillColor: "rgba(108,116,238,0.2)",
                strokeColor: "rgba(108,116,238,1)",
                pointColor: "rgba(108,116,238,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [8,7,9,10 ]
            }
        ]
    };

var options = {
		scaleBeginAtZero: true,
        scaleShowGridLines: false,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        datasetFill : true,
        barShowStroke: true,
        barStrokeWidth: 2,
        barValueSpacing: 10,
        barDatasetSpacing: 1,
        responsive: true,
        multiTooltipFontSize: 5, 
        tooltipCaretSize: 5,
        multiTooltipTemplate: "<%= datasetLabel%>: <%= value %>",
        showDatasetLabels : true
        
       
}

var ctxPost1 = document.getElementById("reactionsChart1").getContext("2d");
var myNewChart1 = new Chart(ctxPost1).Radar(reactionsData1, options);

var ctxPost2 = document.getElementById("reactionsChart2").getContext("2d");
var myNewChart2 = new Chart(ctxPost2).Radar(reactionsData2, options);

var ctxPost3 = document.getElementById("reactionsChart3").getContext("2d");
var myNewChart3 = new Chart(ctxPost3).Radar(reactionsData3, options);

var ctx = document.getElementById("periodChart").getContext("2d");
var myNewChart = new Chart(ctx).Line(periodData, options);

