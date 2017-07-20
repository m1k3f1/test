Chart.defaults.global.tooltipTemplate= "<%=label%>: <%= value %>";

//START TOP TEN FOLLOWERS
		 	var barToptenData = {
		 	        labels: ["Ricardo Anaya Cortés", "Margarita Zavala", "Rafael Moreno Valle"],
		 	        datasets: [
		 	            {
		 	                label: "Seguidor 1",
		 	                fillColor: "rgba(144,140,143,0.8)",
		 	                strokeColor: "rgba(144,140,143,0.8)",
		 	                highlightFill: "rgba(144,144,143,0.75)",
		 	                highlightStroke: "rgba(144,144,143,1)",
		 	                data: [65,59,34]
		 	            },
		 	            {
		 	                label: "Seguidor 2",
		 	                fillColor: "rgba(26,179,148,0.5)",
		 	                strokeColor: "rgba(26,179,148,0.8)",
		 	                highlightFill: "rgba(26,179,148,0.75)",
		 	                highlightStroke: "rgba(26,179,148,1)",
		 	                data: [28,48,50]
		 	            },
		 	            {
		 	                label: "Seguidor 3",
		 	                fillColor: "rgba(234,171,237,0.7)",
		 	                strokeColor: "rgba(216,111,221,0.7)",
		 	                highlightFill: "rgba(191,59,198,0.75)",
		 	                highlightStroke: "rgba(191,59,198,1)",
		 	                data: [35,68,44]
		 	            }, {
		 	                label: "Seguidor 4",
		 	                fillColor: "rgba(123,70,209,0.5)",
		 	                strokeColor: "rgba(123,70,209,0.8)",
		 	                highlightFill: "rgba(123,70,209,0.75)",
		 	                highlightStroke: "rgba(123,70,209,1)",
		 	                data: [38,45,13]
		 	            },
		 	            {
		 	                label: "Seguidor 5",
		 	                fillColor: "rgba(87,82,234,0.5)",
		 	                strokeColor: "rgba(87,82,234,0.8)",
		 	                highlightFill: "rgba(87,82,234,0.75)",
		 	                highlightStroke: "rgba(87,82,234,1)",
		 	                data: [18,38,25]
		 	            },
		 	            {
		 	                label: "Seguidor 6",
		 	                fillColor: "rgba(74,71,175,0.7)",
		 	                strokeColor: "rgba(74,71,175,0.7)",
		 	                highlightFill: "rgba(74,71,175,0.75)",
		 	                highlightStroke: "rgba(74,71,175,1)",
		 	                data: [51,64,75]
		 	            }, {
		 	                label: "Seguidor 7",
		 	                fillColor: "rgba(90,203,211,0.5)",
		 	                strokeColor: "rgba(90,203,211,0.8)",
		 	                highlightFill: "rgba(90,203,211,0.75)",
		 	                highlightStroke: "rgba(90,203,211,1)",
		 	                data: [24,46,74]
		 	            },
		 	            {
		 	                label: "Seguidor 8",
		 	                fillColor: "rgba(90,211,189,0.5)",
		 	                strokeColor: "rgba(90,211,189,0.8)",
		 	                highlightFill: "rgba(90,211,189,0.75)",
		 	                highlightStroke: "rgba(90,211,189,1)",
		 	                data: [34,64,27]
		 	            },
		 	            {
		 	                label: "Seguidor 9",
		 	                fillColor: "rgba(74,196,145,0.7)",
		 	                strokeColor: "rgba(74,196,145,0.7)",
		 	                highlightFill: "rgba(74,196,145,0.75)",
		 	                highlightStroke: "rgba(74,196,145,1)",
		 	                data: [35,61,41]
		 	            },{
		 	                label: "Seguidor 10",
		 	                fillColor: "rgba(196,183,74,0.7)",
		 	                strokeColor: "rgba(196,183,74,0.7)",
		 	                highlightFill: "rgba(196,183,74,0.75)",
		 	                highlightStroke: "rgba(196,183,74,1)",
		 	                data: [51,32,64]
		 	            }
		 	        ]
		 	    };

		 	    var barToptenOptions = {
		 	        scaleBeginAtZero: true,
		 	        scaleShowGridLines: true,
		 	        scaleGridLineColor: "rgba(0,0,0,.05)",
		 	        scaleGridLineWidth: 1,
		 	        barShowStroke: true,
		 	        barStrokeWidth: 2,
		 	        barValueSpacing: 25,
		 	        barDatasetSpacing: 5,
		 	        responsive: true,
		 	       multiTooltipTemplate: "<%= datasetLabel%>: <%= value %>"
		 	    }


		 	    var ctxTopten = document.getElementById("barChartTopTen").getContext("2d");
		 	    var toptenChart = new Chart(ctxTopten).Bar(barToptenData, barToptenOptions);

//END TOP TEN FOLLOWERS		