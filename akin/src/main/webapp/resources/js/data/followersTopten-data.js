Chart.defaults.global.tooltipTemplate= "<%=label%>: <%= value %>";

//START TOP TEN FOLLOWERS
		 	var barToptenDataMonthly = {
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

		 	
			
			var barToptenDataTrimester = {
			        labels: ["Ricardo Anaya Cortés", "Margarita Zavala", "Rafael Moreno Valle"],
			        datasets: [
			            {
			                label: "Seguidor 1",
			                fillColor: "rgba(144,140,143,0.8)",
			                strokeColor: "rgba(144,140,143,0.8)",
			                highlightFill: "rgba(144,144,143,0.75)",
			                highlightStroke: "rgba(144,144,143,1)",
			                data: [31,21,11]
			            },
			            {
			                label: "Seguidor 2",
			                fillColor: "rgba(26,179,148,0.5)",
			                strokeColor: "rgba(26,179,148,0.8)",
			                highlightFill: "rgba(26,179,148,0.75)",
			                highlightStroke: "rgba(26,179,148,1)",
			                data: [25,11,20]
			            },
			            {
			                label: "Seguidor 3",
			                fillColor: "rgba(234,171,237,0.7)",
			                strokeColor: "rgba(216,111,221,0.7)",
			                highlightFill: "rgba(191,59,198,0.75)",
			                highlightStroke: "rgba(191,59,198,1)",
			                data: [10,23,33]
			            }, {
			                label: "Seguidor 4",
			                fillColor: "rgba(123,70,209,0.5)",
			                strokeColor: "rgba(123,70,209,0.8)",
			                highlightFill: "rgba(123,70,209,0.75)",
			                highlightStroke: "rgba(123,70,209,1)",
			                data: [22,44,26]
			            },
			            {
			                label: "Seguidor 5",
			                fillColor: "rgba(87,82,234,0.5)",
			                strokeColor: "rgba(87,82,234,0.8)",
			                highlightFill: "rgba(87,82,234,0.75)",
			                highlightStroke: "rgba(87,82,234,1)",
			                data: [18,28,35]
			            },
			            {
			                label: "Seguidor 6",
			                fillColor: "rgba(74,71,175,0.7)",
			                strokeColor: "rgba(74,71,175,0.7)",
			                highlightFill: "rgba(74,71,175,0.75)",
			                highlightStroke: "rgba(74,71,175,1)",
			                data: [41,34,25]
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
			                data: [34,27,23]
			            },
			            {
			                label: "Seguidor 9",
			                fillColor: "rgba(74,196,145,0.7)",
			                strokeColor: "rgba(74,196,145,0.7)",
			                highlightFill: "rgba(74,196,145,0.75)",
			                highlightStroke: "rgba(74,196,145,1)",
			                data: [24,36,38]
			            },{
			                label: "Seguidor 10",
			                fillColor: "rgba(196,183,74,0.7)",
			                strokeColor: "rgba(196,183,74,0.7)",
			                highlightFill: "rgba(196,183,74,0.75)",
			                highlightStroke: "rgba(196,183,74,1)",
			                data: [28,30,64]
			            }
			        ]
			    };
			
			
			var barToptenDataSemester = {
			        labels: ["Ricardo Anaya Cortés", "Margarita Zavala", "Rafael Moreno Valle"],
			        datasets: [
			            {
			                label: "Seguidor 1",
			                fillColor: "rgba(144,140,143,0.8)",
			                strokeColor: "rgba(144,140,143,0.8)",
			                highlightFill: "rgba(144,144,143,0.75)",
			                highlightStroke: "rgba(144,144,143,1)",
			                data: [15,9,4]
			            },
			            {
			                label: "Seguidor 2",
			                fillColor: "rgba(26,179,148,0.5)",
			                strokeColor: "rgba(26,179,148,0.8)",
			                highlightFill: "rgba(26,179,148,0.75)",
			                highlightStroke: "rgba(26,179,148,1)",
			                data: [18,8,20]
			            },
			            {
			                label: "Seguidor 3",
			                fillColor: "rgba(234,171,237,0.7)",
			                strokeColor: "rgba(216,111,221,0.7)",
			                highlightFill: "rgba(191,59,198,0.75)",
			                highlightStroke: "rgba(191,59,198,1)",
			                data: [25,18,14]
			            }, {
			                label: "Seguidor 4",
			                fillColor: "rgba(123,70,209,0.5)",
			                strokeColor: "rgba(123,70,209,0.8)",
			                highlightFill: "rgba(123,70,209,0.75)",
			                highlightStroke: "rgba(123,70,209,1)",
			                data: [14,15,13]
			            },
			            {
			                label: "Seguidor 5",
			                fillColor: "rgba(87,82,234,0.5)",
			                strokeColor: "rgba(87,82,234,0.8)",
			                highlightFill: "rgba(87,82,234,0.75)",
			                highlightStroke: "rgba(87,82,234,1)",
			                data: [8,8,5]
			            },
			            {
			                label: "Seguidor 6",
			                fillColor: "rgba(74,71,175,0.7)",
			                strokeColor: "rgba(74,71,175,0.7)",
			                highlightFill: "rgba(74,71,175,0.75)",
			                highlightStroke: "rgba(74,71,175,1)",
			                data: [1,4,5]
			            }, {
			                label: "Seguidor 7",
			                fillColor: "rgba(90,203,211,0.5)",
			                strokeColor: "rgba(90,203,211,0.8)",
			                highlightFill: "rgba(90,203,211,0.75)",
			                highlightStroke: "rgba(90,203,211,1)",
			                data: [11,23,16]
			            },
			            {
			                label: "Seguidor 8",
			                fillColor: "rgba(90,211,189,0.5)",
			                strokeColor: "rgba(90,211,189,0.8)",
			                highlightFill: "rgba(90,211,189,0.75)",
			                highlightStroke: "rgba(90,211,189,1)",
			                data: [14,16,11]
			            },
			            {
			                label: "Seguidor 9",
			                fillColor: "rgba(74,196,145,0.7)",
			                strokeColor: "rgba(74,196,145,0.7)",
			                highlightFill: "rgba(74,196,145,0.75)",
			                highlightStroke: "rgba(74,196,145,1)",
			                data: [9,13,21]
			            },{
			                label: "Seguidor 10",
			                fillColor: "rgba(196,183,74,0.7)",
			                strokeColor: "rgba(196,183,74,0.7)",
			                highlightFill: "rgba(196,183,74,0.75)",
			                highlightStroke: "rgba(196,183,74,1)",
			                data: [31,32,24]
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
		 	    var toptenChart = new Chart(ctxTopten).Bar(barToptenDataMonthly, barToptenOptions);

//END TOP TEN FOLLOWERS

$("#btnTopMensual").click(function() {
	
	$('#btnTopMensual').addClass('active');
	$('#btnTopTrimestral').removeClass('active');
	$('#btnTopSemestral').removeClass('active');
	
	 $('#percCuenta1_a').text("62%") ;
	 $('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta1_numa').css('width', '62%');
	 $('#percCuenta1_b').text("15%") ;
	 $('#percCuenta1_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	 $('#percCuenta1_numb').css('width', '15%');
	 
	 $('#percCuenta2_a').text("62%") ;
	 $('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta2_numa').css('width', '62%');
	 $('#percCuenta2_b').text("15%") ;
	 $('#percCuenta2_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	 $('#percCuenta2_numb').css('width', '15%');
	 
	 $('#percCuenta3_a').text("62%") ;
	 $('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta3_numa').css('width', '62%');
	 $('#percCuenta3_b').text("15%") ;
	 $('#percCuenta3_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	 $('#percCuenta3_numb').css('width', '15%');
	 
	
	 if(toptenChart != null){
		toptenChart.destroy();
	}
 	    toptenChart = new Chart(ctxTopten).Bar(barToptenDataMonthly, barToptenOptions);
 });	 	    

$("#btnTopTrimestral").click(function() {
	
	 $('#btnTopMensual').removeClass('active');
	 $('#btnTopTrimestral').addClass('active');
	 $('#btnTopSemestral').removeClass('active');
	
	$('#percCuenta1_a').text("31%") ;
	 $('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta1_numa').css('width', '31%');
	 $('#percCuenta1_b').text("11%") ;
	 $('#percCuenta1_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	 $('#percCuenta1_numb').css('width', '11%');
	 
	 $('#percCuenta2_a').text("34%") ;
	 $('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta2_numa').css('width', '34%');
	 $('#percCuenta2_b').text("2%") ;
	 $('#percCuenta2_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	 $('#percCuenta2_numb').css('width', '2%');
	 
	 $('#percCuenta3_a').text("55%") ;
	 $('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta3_numa').css('width', '55%');
	 $('#percCuenta3_b').text("44%") ;
	 $('#percCuenta3_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	 $('#percCuenta3_numb').css('width', '44%');
	
	 if(toptenChart != null){
		toptenChart.destroy();
	}
	    toptenChart = new Chart(ctxTopten).Bar(barToptenDataTrimester, barToptenOptions);
});
$("#btnTopSemestral").click(function() {
	
	 $('#btnTopMensual').removeClass('active');
	 $('#btnTopTrimestral').removeClass('active');
	 $('#btnTopSemestral').addClass('active');
	
	$('#percCuenta1_a').text("12%") ;
	 $('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta1_numa').css('width', '12%');
	 $('#percCuenta1_b').text("15%") ;
	 $('#percCuenta1_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	 $('#percCuenta1_numb').css('width', '15%');
	 
	 $('#percCuenta2_a').text("22%") ;
	 $('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta2_numa').css('width', '22%');
	 $('#percCuenta2_b').text("25%") ;
	 $('#percCuenta2_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	 $('#percCuenta2_numb').css('width', '25%');
	 
	 $('#percCuenta3_a').text("15%") ;
	 $('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta3_numa').css('width', '15%');
	 $('#percCuenta3_b').text("5%") ;
	 $('#percCuenta3_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	 $('#percCuenta3_numb').css('width', '5%');
	 
	if(toptenChart != null){
		toptenChart.destroy();
	}
	    toptenChart = new Chart(ctxTopten).Bar(barToptenDataSemester, barToptenOptions);
});
