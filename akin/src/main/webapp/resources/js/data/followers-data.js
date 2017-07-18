/**
 * 
 */

 $(document).ready(function() {
	

            var mapData = {
                "US": 298,
                "SA": 200,
                "DE": 220,
                "FR": 540,
                "CN": 120,
                "AU": 760,
                "BR": 550,
                "IN": 200,
                "GB": 120,
            };

            $('#world-map').vectorMap({
                map: 'world_mill_en',
                backgroundColor: "transparent",
                regionStyle: {
                    initial: {
                        fill: '#e4e4e4',
                        "fill-opacity": 0.9,
                        stroke: 'none',
                        "stroke-width": 0,
                        "stroke-opacity": 0
                    }
                },

                series: {
                    regions: [{
                        values: mapData,
                        scale: ["#1ab394", "#22d6b1"],
                        normalizeFunction: 'polynomial'
                    }]
                },
            });
        });
 

 var lineData = {
	        labels: ["Ene 04", "Ene 07", "Ene 10", "Ene 13", "Ene 16", "Ene 19", "Ene 22", "Ene 25", "Ene 28" ,"Ene 31"],
	        datasets: [
	            {
	                label: "Ricando Anaya Cortés",
	                fillColor: "rgba(220,220,220,0.5)",
	                strokeColor: "rgba(220,220,220,1)",
	                pointColor: "rgba(220,220,220,1)",
	                pointStrokeColor: "#fff",
	                pointHighlightFill: "#fff",
	                pointHighlightStroke: "rgba(220,220,220,1)",
	                data: [21, 30,45,65, 59, 80, 75, 56, 55, 40]
	            },
	            {
	                label: "Margarita Zavala",
	                fillColor: "rgba(26,179,148,0.5)",
	                strokeColor: "rgba(26,179,148,0.7)",
	                pointColor: "rgba(26,179,148,1)",
	                pointStrokeColor: "#fff",
	                pointHighlightFill: "#fff",
	                pointHighlightStroke: "rgba(26,179,148,1)",
	                data: [15, 26,35,28, 48, 40, 19, 86, 27, 90]
	            },
	            {
	                label: "Rafael Moreno Valle",
	                fillColor: "rgba(234,171,237,0.7)",
	                strokeColor: "rgba(216,111,221,0.7)",
	                pointColor: "rgba(191,59,198,1)",
	                pointStrokeColor: "#fff",
	                pointHighlightFill: "#fff",
	                pointHighlightStroke: "rgba(191,59,198,1)",
	                data: [11,15,28,15, 28, 30, 49,76, 37, 60]
	            }
	        ]
	    };

	    var lineOptions = {
	        scaleShowGridLines: true,
	        scaleGridLineColor: "rgba(0,0,0,.05)",
	        scaleGridLineWidth: 1,
	        bezierCurve: false,
	        //bezierCurveTension: 0.4,
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
	    document.getElementById('js-legend').innerHTML = myNewChart.generateLegend();

