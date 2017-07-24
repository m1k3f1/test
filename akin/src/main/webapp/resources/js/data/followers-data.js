var mainChart = null;
var demographicChart = null;
$(document).ready(function() {

	 Chart.defaults.global.tooltipTemplate= "<%=label%>: <%= value %>";
	 

		//MEXICO MAP 

				 var latlong = {};
				 latlong["MX-QUE-G"] = {"latitude":20.5888184,"longitude":-100.3898876000};			//Queretaro
				 latlong["MX-VER-G"] = {"latitude":19.173773,"longitude":-96.13422409999998};		//Veracruz
				 latlong["MX-HID-G"] = {"latitude":20.0910963,"longitude":-98.76238739999997};		//Hidalgo
				 latlong["MX-CHH-G"] = {"latitude":28.6329957,"longitude":-106.06910040000002};		//Chihuahua
				 latlong["MX-COL-G"] = {"latitude":19.1222634,"longitude":-104.00723479999999};		//Colima
				 latlong["MX-COA-G"] = {"latitude":27.058676,"longitude":-101.7068294};				//Coahuila
				 latlong["MX-CHP-G"] = {"latitude":16.7569318,"longitude":-93.1292353};				//Chiapas
				 latlong["MX-MIC-G"] = {"latitude":19.5665192,"longitude":-101.7068294};			//Michoacan
				 latlong["MX-JAL-G"] = {"latitude":20.6595382,"longitude":-103.34943759999999};		//Jalisco
				 
				 latlong["MX-QUE-GR"] = {"latitude":20.5988184,"longitude":-100.2898876000};		//Queretaro
				 latlong["MX-VER-GR"] = {"latitude":19.173773,"longitude":-96.23422409999998};		//Veracruz
				 latlong["MX-HID-GR"] = {"latitude":20.0910963,"longitude":-98.66238739999997};		//Hidalgo
				 latlong["MX-CHH-GR"] = {"latitude":28.6329957,"longitude":-106.16910040000002};	//Chihuahua
				 latlong["MX-COL-GR"] = {"latitude":19.1222634,"longitude":-104.10723479999999};	//Colima
				 latlong["MX-COA-GR"] = {"latitude":27.058676,"longitude":-101.8068294};			//Coahuila
				 latlong["MX-CHP-GR"] = {"latitude":16.7569318,"longitude":-93.2292353};			//Chiapas
				 latlong["MX-MIC-GR"] = {"latitude":19.5665192,"longitude":-101.8068294};			//Michoacan
				 latlong["MX-JAL-GR"] = {"latitude":20.6595382,"longitude":-103.44943759999999};	//Jalisco
				 
				 latlong["MX-QUE-PR"] = {"latitude":20.5888184,"longitude":-100.1898876000};		//Queretaro
				 latlong["MX-VER-PR"] = {"latitude":19.173773,"longitude":-96.33422409999998};		//Veracruz
				 latlong["MX-HID-PR"] = {"latitude":20.0910963,"longitude":-98.56238739999997};		//Hidalgo
				 latlong["MX-CHH-PR"] = {"latitude":28.6329957,"longitude":-106.26910040000002};	//Chihuahua
				 latlong["MX-COL-PR"] = {"latitude":19.1222634,"longitude":-104.20723479999999};	//Colima
				 latlong["MX-COA-PR"] = {"latitude":27.058676,"longitude":-101.9068294};			//Coahuila
				 latlong["MX-CHP-PR"] = {"latitude":16.7569318,"longitude":-93.3292353};			//Chiapas
				 latlong["MX-MIC-PR"] = {"latitude":19.5665192,"longitude":-101.9068294};			//Michoacan
				 latlong["MX-JAL-PR"] = {"latitude":20.6595382,"longitude":-103.54943759999999};	//Jalisco
				 //################### #4648E8 azul / #1AB394 green / #B554ED purple
				 var mapData = [
				                {"code":"MX-QUE-G" , "name":"Queretaro", "value":9938444, "color":"#4648E8"},
				                {"code":"MX-VER-G" , "name":"Veracruz", "value":8414350, "color":"#4648E8"},
				                {"code":"MX-HID-G" , "name":"Hidalgo", "value":12419293, "color":"#4648E8"},
				                {"code":"MX-CHH-G" , "name":"Chihuahua", "value":4301261, "color":"#4648E8"},
				                {"code":"MX-COL-G" , "name":"Colima", "value":783600, "color":"#4648E8"},
				                {"code":"MX-COA-G" , "name":"Coahuila", "value":3405565, "color":"#4648E8"},
				                {"code":"MX-CHP-G" , "name":"Chiapas", "value":33871648, "color":"#4648E8"},
				                {"code":"MX-MIC-G" , "name":"Michoacan", "value":2688418, "color":"#4648E8"},
				                {"code":"MX-JAL-G" , "name":"Jalisco", "value":6080485, "color":"#4648E8"},
				                
				                {"code":"MX-QUE-GR" , "name":"Queretaro", "value":9938444, "color":"#1AB394"},
				                {"code":"MX-VER-GR" , "name":"Veracruz", "value":8414350, "color":"#1AB394"},
				                {"code":"MX-HID-GR" , "name":"Hidalgo", "value":12419293, "color":"#1AB394"},
				                {"code":"MX-CHH-GR" , "name":"Chihuahua", "value":4301261, "color":"#1AB394"},
				                {"code":"MX-COL-GR" , "name":"Colima", "value":783600, "color":"#1AB394"},
				                {"code":"MX-COA-GR" , "name":"Coahuila", "value":3405565, "color":"#1AB394"},
				                {"code":"MX-CHP-GR" , "name":"Chiapas", "value":33871648, "color":"#1AB394"},
				                {"code":"MX-MIC-GR" , "name":"Michoacan", "value":2688418, "color":"#1AB394"},
				                {"code":"MX-JAL-GR" , "name":"Jalisco", "value":6080485, "color":"#1AB394"},
				                
				                {"code":"MX-QUE-PR" , "name":"Queretaro", "value":9938444, "color":"#B554ED"},
				                {"code":"MX-VER-PR" , "name":"Veracruz", "value":8414350, "color":"#B554ED"},
				                {"code":"MX-HID-PR" , "name":"Hidalgo", "value":12419293, "color":"#B554ED"},
				                {"code":"MX-CHH-PR" , "name":"Chihuahua", "value":4301261, "color":"#B554ED"},
				                {"code":"MX-COL-PR" , "name":"Colima", "value":783600, "color":"#B554ED"},
				                {"code":"MX-COA-PR" , "name":"Coahuila", "value":3405565, "color":"#B554ED"},
				                {"code":"MX-CHP-PR" , "name":"Chiapas", "value":33871648, "color":"#B554ED"},
				                {"code":"MX-MIC-PR" , "name":"Michoacan", "value":2688418, "color":"#B554ED"},
				                {"code":"MX-JAL-PR" , "name":"Jalisco", "value":6080485, "color":"#B554ED"}
				                ];
				 
				// get min and max values
				var minBulletSize = 7;
				var maxBulletSize = 10;
				var min = Infinity;
				var max = -Infinity;
				for ( var i = 0; i < mapData.length; i++ ) {
				  var value = mapData[ i ].value;
				  if ( value < min ) {
				    min = value;
				  }
				  if ( value > max ) {
				    max = value;
				  }
				}

				// it's better to use circle square to show difference between values, not a radius
				var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
				var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

				// create circle for each country
				var images = [];
				for ( var i = 0; i < mapData.length; i++ ) {
				  var dataItem = mapData[ i ];
				  var value = dataItem.value;
				  // calculate size of a bubble
				  var square = ( value - min ) / ( max - min ) * ( maxSquare - minSquare ) + minSquare;
				  if ( square < minSquare ) {
				    square = minSquare;
				  }
				  var size = Math.sqrt( square / ( Math.PI * 2 ) );
				  var id = dataItem.code;

				  images.push( {
				    "type": "circle",
				    "theme": "dark",

				    "width": size,
				    "height": size,
				    "color": dataItem.color,
				    "longitude": latlong[ id ].longitude,
				    "latitude": latlong[ id ].latitude,
				    "title": dataItem.name,
				    "value": value
				  } );
				}
				
				 //###################
				   var titles = [];
				 
				       titles.push( {
				         "text": "Mexico"
				       } );
				 
				       AmCharts.makeChart( "mapdiv", {
				     	  "type": "map",
				     	  "theme": "dark",
				     	  "getAreasFromMap": true,
				     	  "dataProvider": {
				     	    "map": "mexicoLow",
				 			  "images": images
				     	  },
				     	  "titles": titles,
				     	  "areasSettings": {
				     		"alpha": 0.8,
				     	    "unlistedAreasAlpha": 0.1,
				     	  },
				     	  "legend": {
				     		    "width": "80%",
				     		    "divId": "legenddiv",
				     		    "marginRight": 27,
				     		    "marginLeft": 27,
				     		    "equalWidths": true,
				     		    "backgroundAlpha": 0.7,
				     		    "backgroundColor": "#FFFFFF",
				     		    "borderColor": "#ffffff",
				     		    "borderAlpha": 1,
				     		    "top": 450,
				     		    "left": 0,
				     		    "horizontalGap": 10,
				     		    "data": [{
				     		      "title": "Ricardo Anaya Cortés",
				     		      "color": "#4648E8"
				     		    }, {
				     		      "title": "Margarita Zavala",
				     		      "color": "#1AB394"
				     		    }, {
				     		      "title": "Rafael Moreno Valle",
				     		      "color": "#B554ED"
				     		    }]
				     	  }
				     	 
				     	} ); 
				       
		 
		//Data for main line chart
		 var lineData = {
			        labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
			        datasets: [
			            {
			                label: "Ricardo Anaya Cortés",
			                fillColor: "rgba(70,72,232,0.5)",
			                strokeColor: "gray",
			                pointColor: "rgba(70,72,232,1)",
			                pointStrokeColor: "#fff",
			                pointHighlightFill: "#fff",
			                pointHighlightStroke: "rgba(70,72,232,1)",
			                data: [21, 30,45,65]
			            },
			            {
			                label: "Margarita Zavala",
			                fillColor: "rgba(26,179,148,0.5)",
			                strokeColor: "green",
			                pointColor: "rgba(26,179,148,1)",
			                pointStrokeColor: "#fff",
			                pointHighlightFill: "#fff",
			                pointHighlightStroke: "rgba(26,179,148,1)",
			                data: [15, 26,35,28]
			            },
			            {
			                label: "Rafael Moreno Valle",
			                fillColor: "rgba(181,84,237,0.7)",
			                strokeColor: "purple",
			                pointColor: "rgba(181,84,237,1)",
			                pointStrokeColor: "#fff",
			                pointHighlightFill: "#fff",
			                pointHighlightStroke: "rgba(181,84,237,1)",
			                data: [11,15,28,15]
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
			  

			    var ctxMain = document.getElementById("lineChart").getContext("2d");
			     mainChart = new Chart(ctxMain).Line(lineData, lineOptions);
			    document.getElementById('js-legend').innerHTML = mainChart.generateLegend();
			   
			    //END Data for main line chart
		 

     //END MEXICO MAP

	 //START DEMOGRAPHIC DATA
		var barData = {
		        labels: ["Ricardo Anaya Cortés", "Margarita Zavala", "Rafael Moreno Valle"],
		        datasets: [
		            {
		                label: "Hombres",
		                fillColor: "rgba(70,72,232,0.5)",
		                strokeColor: "rgba(70,72,232,0.8)",
		                highlightFill: "rgba(70,72,232,0.75)",
		                highlightStroke: "rgba(70,72,232,1)",
		                data: [65, 59, 80]
		            },
		            {
		                label: "Mujeres",
		                fillColor: "rgba(26,179,148,0.5)",
		                strokeColor: "rgba(26,179,148,0.8)",
		                highlightFill: "rgba(26,179,148,0.75)",
		                highlightStroke: "rgba(26,179,148,1)",
		                data: [28, 48, 40]
		            },
		            {
		                label: "Otros",
		                fillColor: "rgba(181,84,237,0.7)",
		                strokeColor: "rgba(181,84,237,0.7)",
		                highlightFill: "rgba(181,84,237,0.75)",
		                highlightStroke: "rgba(181,84,237,1)",
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
		       multiTooltipTemplate: "<%= datasetLabel%>: <%= value %>"
		    }


		    var ctxDemographic = document.getElementById("barChart").getContext("2d");
		    demographicChart = new Chart(ctxDemographic).Bar(barData, barOptions);

	//END WOMEN AND MEN DEMOGRAPHIC
	 
		 	 });

 
 $("#btnMensual").click(function() {
	 
	 $('#percCuenta1_a').text("48%") ;
	 $('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta1_numa').css('width', '48%');
	 $('#percCuenta1_b').text("5%") ;
	 $('#percCuenta1_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	 $('#percCuenta1_numb').css('width', '5%');
	 
	 $('#percCuenta2_a').text("60%") ;
	 $('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta2_numa').css('width', '60%');
	 $('#percCuenta2_b').text("10%") ;
	 $('#percCuenta2_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	 $('#percCuenta2_numb').css('width', '10%');
	 
	 $('#percCuenta3_a').text("40%") ;
	 $('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta3_numa').css('width', '40%');
	 $('#percCuenta3_b').text("7%") ;
	 $('#percCuenta3_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	 $('#percCuenta3_numb').css('width', '7%');
	 
	 $('#percCuenta1_h').text("45%") ;
	 $('#percCuenta1_h').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta1_numh').css('width', '45%');
	 $('#percCuenta1_m').text("65%") ;
	 $('#percCuenta1_m').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta1_numm').css('width', '65%');
	 $('#percCuenta1_o').text("45%") ;
	 $('#percCuenta1_o').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta1_numo').css('width', '45%');
	 
	 $('#percCuenta2_h').text("36%") ;
	 $('#percCuenta2_h').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta2_numh').css('width', '36%');
	 $('#percCuenta2_m').text("29%") ;
	 $('#percCuenta2_m').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta2_numm').css('width', '29%');
	 $('#percCuenta2_o').text("31%") ;
	 $('#percCuenta2_o').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta2_numo').css('width', '31%');
	 
	 $('#percCuenta3_h').text("25%") ;
	 $('#percCuenta3_h').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta3_numh').css('width', '25%');
	 $('#percCuenta3_m').text("23%") ;
	 $('#percCuenta3_m').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta3_numm').css('width', '23%');
	 $('#percCuenta3_o').text("22%") ;
	 $('#percCuenta3_o').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta3_numo').css('width', '22%');
	 
		 if(mainChart != null)
		 {
			 mainChart.destroy();
		 }
		 if(demographicChart != null)
		 {
			 demographicChart.destroy();
		 }
		//Data for main line chart
		 var lineData = {
			        labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
			        datasets: [
			            {
			                label: "Ricardo Anaya Cortés",
			                fillColor: "rgba(70,72,232,0.5)",
			                strokeColor: "gray",
			                pointColor: "rgba(70,72,232,1)",
			                pointStrokeColor: "#fff",
			                pointHighlightFill: "#fff",
			                pointHighlightStroke: "rgba(70,72,232,1)",
			                data: [21, 30,45,65]
			            },
			            {
			                label: "Margarita Zavala",
			                fillColor: "rgba(26,179,148,0.5)",
			                strokeColor: "green",
			                pointColor: "rgba(26,179,148,1)",
			                pointStrokeColor: "#fff",
			                pointHighlightFill: "#fff",
			                pointHighlightStroke: "rgba(26,179,148,1)",
			                data: [15, 26,35,28]
			            },
			            {
			                label: "Rafael Moreno Valle",
			                fillColor: "rgba(181,84,237,0.7)",
			                strokeColor: "purple",
			                pointColor: "rgba(181,84,237,1)",
			                pointStrokeColor: "#fff",
			                pointHighlightFill: "#fff",
			                pointHighlightStroke: "rgba(181,84,237,1)",
			                data: [11,15,28,15]
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
			  

			    var ctxMain = document.getElementById("lineChart").getContext("2d");
			     mainChart = new Chart(ctxMain).Line(lineData, lineOptions);
			    document.getElementById('js-legend').innerHTML = mainChart.generateLegend();
			    
			  //END MAIN DATA  
			    
			    

				 //START DEMOGRAPHIC DATA
					var barData = {
					        labels: ["Ricardo Anaya Cortés", "Margarita Zavala", "Rafael Moreno Valle"],
					        datasets: [
					            {
					                label: "Hombres",
					                fillColor: "rgba(70,72,232,0.5)",
					                strokeColor: "rgba(70,72,232,0.8)",
					                highlightFill: "rgba(70,72,232,0.75)",
					                highlightStroke: "rgba(70,72,232,1)",
					                data: [65, 59, 80]
					            },
					            {
					                label: "Mujeres",
					                fillColor: "rgba(26,179,148,0.5)",
					                strokeColor: "rgba(26,179,148,0.8)",
					                highlightFill: "rgba(26,179,148,0.75)",
					                highlightStroke: "rgba(26,179,148,1)",
					                data: [28, 48, 40]
					            },
					            {
					                label: "Otros",
					                fillColor: "rgba(181,84,237,0.7)",
					                strokeColor: "rgba(181,84,237,0.7)",
					                highlightFill: "rgba(181,84,237,0.75)",
					                highlightStroke: "rgba(181,84,237,1)",
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
					       multiTooltipTemplate: "<%= datasetLabel%>: <%= value %>"
					    }


					    var ctxDemographic = document.getElementById("barChart").getContext("2d");
					    demographicChart = new Chart(ctxDemographic).Bar(barData, barOptions);

				//END WOMEN AND MEN DEMOGRAPHIC
				 
	});
 
 
 
 
 $("#btnTrimestral").click(function() {
	 $('#percCuenta1_a').text("62%") ;
	 $('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta1_numa').css('width', '62%');
	 $('#percCuenta1_b').text("15%") ;
	 $('#percCuenta1_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	 $('#percCuenta1_numb').css('width', '15%');
	 
	 $('#percCuenta2_a').text("15%") ;
	 $('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta2_numa').css('width', '15%');
	 $('#percCuenta2_b').text("1%") ;
	 $('#percCuenta2_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	 $('#percCuenta2_numb').css('width', '1%');
	 
	 $('#percCuenta3_a').text("23%") ;
	 $('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta3_numa').css('width', '23%');
	 $('#percCuenta3_b').text("3%") ;
	 $('#percCuenta3_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	 $('#percCuenta3_numb').css('width', '3%');
	 
	 $('#percCuenta1_h').text("75%") ;
	 $('#percCuenta1_h').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta1_numh').css('width', '75%');
	 $('#percCuenta1_m').text("56%") ;
	 $('#percCuenta1_m').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta1_numm').css('width', '56%');
	 $('#percCuenta1_o').text("60%") ;
	 $('#percCuenta1_o').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta1_numo').css('width', '60%');
	 
	 $('#percCuenta2_h').text("64%") ;
	 $('#percCuenta2_h').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta2_numh').css('width', '64%');
	 $('#percCuenta2_m').text("59%") ;
	 $('#percCuenta2_m').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta2_numm').css('width', '59%');
	 $('#percCuenta2_o').text("49%") ;
	 $('#percCuenta2_o').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta2_numo').css('width', '49%');
	 
	 $('#percCuenta3_h').text("41%") ;
	 $('#percCuenta3_h').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta3_numh').css('width', '41%');
	 $('#percCuenta3_m').text("35%") ;
	 $('#percCuenta3_m').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta3_numm').css('width', '35%');
	 $('#percCuenta3_o').text("21%") ;
	 $('#percCuenta3_o').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta3_numo').css('width', '21%');
	 
	 if(mainChart != null)
	 {
		 mainChart.destroy();
	 }
	 if(demographicChart != null)
	 {
		 demographicChart.destroy();
	 }
	
	  //START WOMEN AND MEN DEMOGRAPHIC
	 Chart.defaults.global.tooltipTemplate= "<%=label%>: <%= value %>";
	 
	var barData = {
	        labels: ["Ricardo Anaya Cortés", "Margarita Zavala", "Rafael Moreno Valle"],
	        datasets: [
	            {
	                label: "Hombres",
	                fillColor: "rgba(70,72,232,0.5)",
	                strokeColor: "rgba(70,72,232,0.8)",
	                highlightFill: "rgba(70,72,232,0.75)",
	                highlightStroke: "rgba(70,72,232,1)",
	                data: [10, 34, 54]
	            },
	            {
	                label: "Mujeres",
	                fillColor: "rgba(26,179,148,0.5)",
	                strokeColor: "rgba(26,179,148,0.8)",
	                highlightFill: "rgba(26,179,148,0.75)",
	                highlightStroke: "rgba(26,179,148,1)",
	                data: [44,22,48]
	            },
	            {
	                label: "Otros",
	                fillColor: "rgba(181,84,237,0.7)",
	                strokeColor: "rgba(181,84,237,0.7)",
	                highlightFill: "rgba(181,84,237,0.75)",
	                highlightStroke: "rgba(181,84,237,1)",
	                data: [12, 27, 47]
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
	       multiTooltipTemplate: "<%= datasetLabel%>: <%= value %>"
	    }


	    var ctxDemographic = document.getElementById("barChart").getContext("2d");
	    demographicChart = new Chart(ctxDemographic).Bar(barData, barOptions);

//END WOMEN AND MEN DEMOGRAPHIC
	 
 	 
	    /*
 
//MEXICO MAP 
	 try {
		 var latlong = {};
		 latlong["MX-QUE-G"] = {"latitude":20.5888184,"longitude":-100.3898876000};			//Queretaro
		 latlong["MX-VER-G"] = {"latitude":19.173773,"longitude":-96.13422409999998};		//Veracruz
		 latlong["MX-HID-G"] = {"latitude":20.0910963,"longitude":-98.76238739999997};		//Hidalgo
		 latlong["MX-CHH-G"] = {"latitude":28.6329957,"longitude":-106.06910040000002};		//Chihuahua
		 latlong["MX-COL-G"] = {"latitude":19.1222634,"longitude":-104.00723479999999};		//Colima
		 latlong["MX-COA-G"] = {"latitude":27.058676,"longitude":-101.7068294};				//Coahuila
		 latlong["MX-CHP-G"] = {"latitude":16.7569318,"longitude":-93.1292353};				//Chiapas
		 latlong["MX-MIC-G"] = {"latitude":19.5665192,"longitude":-101.7068294};			//Michoacan
		 latlong["MX-JAL-G"] = {"latitude":20.6595382,"longitude":-103.34943759999999};		//Jalisco
		 
		 latlong["MX-QUE-GR"] = {"latitude":20.5988184,"longitude":-100.2898876000};		//Queretaro
		 latlong["MX-VER-GR"] = {"latitude":19.173773,"longitude":-96.23422409999998};		//Veracruz
		 latlong["MX-HID-GR"] = {"latitude":20.0910963,"longitude":-98.66238739999997};		//Hidalgo
		 latlong["MX-CHH-GR"] = {"latitude":28.6329957,"longitude":-106.16910040000002};	//Chihuahua
		 latlong["MX-COL-GR"] = {"latitude":19.1222634,"longitude":-104.10723479999999};	//Colima
		 latlong["MX-COA-GR"] = {"latitude":27.058676,"longitude":-101.8068294};			//Coahuila
		 latlong["MX-CHP-GR"] = {"latitude":16.7569318,"longitude":-93.2292353};			//Chiapas
		 latlong["MX-MIC-GR"] = {"latitude":19.5665192,"longitude":-101.8068294};			//Michoacan
		 latlong["MX-JAL-GR"] = {"latitude":20.6595382,"longitude":-103.44943759999999};	//Jalisco
		 
		 latlong["MX-QUE-PR"] = {"latitude":20.5888184,"longitude":-100.1898876000};		//Queretaro
		 latlong["MX-VER-PR"] = {"latitude":19.173773,"longitude":-96.33422409999998};		//Veracruz
		 latlong["MX-HID-PR"] = {"latitude":20.0910963,"longitude":-98.56238739999997};		//Hidalgo
		 latlong["MX-CHH-PR"] = {"latitude":28.6329957,"longitude":-106.26910040000002};	//Chihuahua
		 latlong["MX-COL-PR"] = {"latitude":19.1222634,"longitude":-104.20723479999999};	//Colima
		 latlong["MX-COA-PR"] = {"latitude":27.058676,"longitude":-101.9068294};			//Coahuila
		 latlong["MX-CHP-PR"] = {"latitude":16.7569318,"longitude":-93.3292353};			//Chiapas
		 latlong["MX-MIC-PR"] = {"latitude":19.5665192,"longitude":-101.9068294};			//Michoacan
		 latlong["MX-JAL-PR"] = {"latitude":20.6595382,"longitude":-103.54943759999999};	//Jalisco
		 //################### #4648E8 azul / #1AB394 green / #B554ED purple
		 var mapData = [
		                {"code":"MX-QUE-G" , "name":"Queretaro", "value":9938444, "color":"#4648E8"},
		                {"code":"MX-VER-G" , "name":"Veracruz", "value":8414350, "color":"#4648E8"},
		                {"code":"MX-HID-G" , "name":"Hidalgo", "value":12419293, "color":"#4648E8"},
		                {"code":"MX-CHH-G" , "name":"Chihuahua", "value":4301261, "color":"#4648E8"},
		                {"code":"MX-COL-G" , "name":"Colima", "value":783600, "color":"#4648E8"},
		                {"code":"MX-COA-G" , "name":"Coahuila", "value":3405565, "color":"#4648E8"},
		                {"code":"MX-CHP-G" , "name":"Chiapas", "value":33871648, "color":"#4648E8"},
		                {"code":"MX-MIC-G" , "name":"Michoacan", "value":2688418, "color":"#4648E8"},
		                {"code":"MX-JAL-G" , "name":"Jalisco", "value":6080485, "color":"#4648E8"},
		                
		                {"code":"MX-QUE-GR" , "name":"Queretaro", "value":9938444, "color":"#1AB394"},
		                {"code":"MX-VER-GR" , "name":"Veracruz", "value":8414350, "color":"#1AB394"},
		                {"code":"MX-HID-GR" , "name":"Hidalgo", "value":12419293, "color":"#1AB394"},
		                {"code":"MX-CHH-GR" , "name":"Chihuahua", "value":4301261, "color":"#1AB394"},
		                {"code":"MX-COL-GR" , "name":"Colima", "value":783600, "color":"#1AB394"},
		                {"code":"MX-COA-GR" , "name":"Coahuila", "value":3405565, "color":"#1AB394"},
		                {"code":"MX-CHP-GR" , "name":"Chiapas", "value":33871648, "color":"#1AB394"},
		                {"code":"MX-MIC-GR" , "name":"Michoacan", "value":2688418, "color":"#1AB394"},
		                {"code":"MX-JAL-GR" , "name":"Jalisco", "value":6080485, "color":"#1AB394"},
		                
		                {"code":"MX-QUE-PR" , "name":"Queretaro", "value":9938444, "color":"#B554ED"},
		                {"code":"MX-VER-PR" , "name":"Veracruz", "value":8414350, "color":"#B554ED"},
		                {"code":"MX-HID-PR" , "name":"Hidalgo", "value":12419293, "color":"#B554ED"},
		                {"code":"MX-CHH-PR" , "name":"Chihuahua", "value":4301261, "color":"#B554ED"},
		                {"code":"MX-COL-PR" , "name":"Colima", "value":783600, "color":"#B554ED"},
		                {"code":"MX-COA-PR" , "name":"Coahuila", "value":3405565, "color":"#B554ED"},
		                {"code":"MX-CHP-PR" , "name":"Chiapas", "value":33871648, "color":"#B554ED"},
		                {"code":"MX-MIC-PR" , "name":"Michoacan", "value":2688418, "color":"#B554ED"},
		                {"code":"MX-JAL-PR" , "name":"Jalisco", "value":6080485, "color":"#B554ED"}
		                ];

		// get min and max values
		var minBulletSize = 7;
		var maxBulletSize = 10;
		var min = Infinity;
		var max = -Infinity;
		for ( var i = 0; i < mapData.length; i++ ) {
		  var value = mapData[ i ].value;
		  if ( value < min ) {
		    min = value;
		  }
		  if ( value > max ) {
		    max = value;
		  }
		}

		// it's better to use circle square to show difference between values, not a radius
		var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
		var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

		// create circle for each country
		var images = [];
		for ( var i = 0; i < mapData.length; i++ ) {
		  var dataItem = mapData[ i ];
		  var value = dataItem.value;
		  // calculate size of a bubble
		  var square = ( value - min ) / ( max - min ) * ( maxSquare - minSquare ) + minSquare;
		  if ( square < minSquare ) {
		    square = minSquare;
		  }
		  var size = Math.sqrt( square / ( Math.PI * 2 ) );
		  var id = dataItem.code;

		  images.push( {
		    "type": "circle",
		    "theme": "dark",

		    "width": size,
		    "height": size,
		    "color": dataItem.color,
		    "longitude": latlong[ id ].longitude,
		    "latitude": latlong[ id ].latitude,
		    "title": dataItem.name,
		    "value": value
		  } );
		}

		 //###################
		   var titles = [];
		 
		       titles.push( {
		         "text": "Mexico"
		       } );
		 
		       AmCharts.makeChart( "mapdiv", {
		     	  "type": "map",
		     	  "theme": "dark",
		     	  "getAreasFromMap": true,
		     	  "dataProvider": {
		     	    "map": "mexicoLow",
		 			  "images": images
		     	  },
		     	  "titles": titles,
		     	  "areasSettings": {
		     		"alpha": 0.8,
		     	    "unlistedAreasAlpha": 0.1,
		     	  },
		     	  "legend": {
		     		    "width": "80%",
		     		    "divId": "legenddiv",
		     		    "marginRight": 27,
		     		    "marginLeft": 27,
		     		    "equalWidths": true,
		     		    "backgroundAlpha": 0.7,
		     		    "backgroundColor": "#FFFFFF",
		     		    "borderColor": "#ffffff",
		     		    "borderAlpha": 1,
		     		    "top": 450,
		     		    "left": 0,
		     		    "horizontalGap": 10,
		     		    "data": [{
		     		      "title": "Ricardo Anaya Cortés",
		     		      "color": "#4648E8"
		     		    }, {
		     		      "title": "Margarita Zavala",
		     		      "color": "#1AB394"
		     		    }, {
		     		      "title": "Rafael Moreno Valle",
		     		      "color": "#B554ED"
		     		    }]
		     	  }
		     	 
		     	} ); 
		 	 }
		 	 catch( e ) {
		 	   console.log( e );
		 	 }
		 	 
	 
//END MEXICO MAP
 
 */
 
//Data for main line chart
 var lineData = {
	        labels: ["Mes 1", "Mes 2", "Mes 3"],
	        datasets: [
	            {
	                label: "Ricardo Anaya Cortés",
	                fillColor: "rgba(70,72,232,0.5)",
	                strokeColor: "gray",
	                pointColor: "rgba(70,72,232,1)",
	                pointStrokeColor: "#fff",
	                pointHighlightFill: "#fff",
	                pointHighlightStroke: "rgba(70,72,232,1)",
	                data: [10, 13,32]
	            },
	            {
	                label: "Margarita Zavala",
	                fillColor: "rgba(26,179,148,0.5)",
	                strokeColor: "green",
	                pointColor: "rgba(26,179,148,1)",
	                pointStrokeColor: "#fff",
	                pointHighlightFill: "#fff",
	                pointHighlightStroke: "rgba(26,179,148,1)",
	                data: [7, 26,15]
	            },
	            {
	                label: "Rafael Moreno Valle",
	                fillColor: "rgba(181,84,237,0.7)",
	                strokeColor: "purple",
	                pointColor: "rgba(181,84,237,1)",
	                pointStrokeColor: "#fff",
	                pointHighlightFill: "#fff",
	                pointHighlightStroke: "rgba(181,84,237,1)",
	                data: [21,35,8]
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
	  

	    var ctxMain = document.getElementById("lineChart").getContext("2d");
	    mainChart = new Chart(ctxMain).Line(lineData, lineOptions);
	    document.getElementById('js-legend').innerHTML = mainChart.generateLegend();

	    //END Data for main line chart

 });
 
 $("#btnSemestral").click(function() {
	 $('#percCuenta1_a').text("25%") ;
	 $('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta1_numa').css('width', '25%');
	 $('#percCuenta1_b').text("11%") ;
	 $('#percCuenta1_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	 $('#percCuenta1_numb').css('width', '11%');
	 
	 $('#percCuenta2_a').text("57%") ;
	 $('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta2_numa').css('width', '57%');
	 $('#percCuenta2_b').text("13%") ;
	 $('#percCuenta2_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	 $('#percCuenta2_numb').css('width', '13%');
	 
	 $('#percCuenta3_a').text("31%") ;
	 $('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta3_numa').css('width', '31%');
	 $('#percCuenta3_b').text("5%") ;
	 $('#percCuenta3_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	 $('#percCuenta3_numb').css('width', '5%');
	 
	 $('#percCuenta1_h').text("45%") ;
	 $('#percCuenta1_h').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta1_numh').css('width', '45%');
	 $('#percCuenta1_m').text("65%") ;
	 $('#percCuenta1_m').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta1_numm').css('width', '65%');
	 $('#percCuenta1_o').text("45%") ;
	 $('#percCuenta1_o').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta1_numo').css('width', '45%');
	 
	 $('#percCuenta2_h').text("21%") ;
	 $('#percCuenta2_h').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta2_numh').css('width', '21%');
	 $('#percCuenta2_m').text("26%") ;
	 $('#percCuenta2_m').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta2_numm').css('width', '26%');
	 $('#percCuenta2_o').text("31%") ;
	 $('#percCuenta2_o').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta2_numo').css('width', '31%');
	 
	 $('#percCuenta3_h').text("19%") ;
	 $('#percCuenta3_h').append("<i class='fa fa-level-up text-navy'></i>");
	 $('#percCuenta3_numh').css('width', '19%');
	 $('#percCuenta3_m').text("12%") ;
	 $('#percCuenta3_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	 $('#percCuenta3_numm').css('width', '12%');
	 $('#percCuenta3_o').text("2%") ;
	 $('#percCuenta3_o').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	 $('#percCuenta3_numo').css('width', '2%');
	 
	 
	 if(mainChart != null)
	 {
		 mainChart.destroy();
	 }
	 if(demographicChart != null)
	 {
		 demographicChart.destroy();
	 }
	 
	  //START WOMEN AND MEN DEMOGRAPHIC
	 Chart.defaults.global.tooltipTemplate= "<%=label%>: <%= value %>";
	 
	var barData = {
	        labels: ["Ricardo Anaya Cortés", "Margarita Zavala", "Rafael Moreno Valle"],
	        datasets: [
	            {
	                label: "Hombres",
	                fillColor: "rgba(70,72,232,0.5)",
	                strokeColor: "rgba(70,72,232,0.8)",
	                highlightFill: "rgba(70,72,232,0.75)",
	                highlightStroke: "rgba(70,72,232,1)",
	                data: [2, 24, 15]
	            },
	            {
	                label: "Mujeres",
	                fillColor: "rgba(26,179,148,0.5)",
	                strokeColor: "rgba(26,179,148,0.8)",
	                highlightFill: "rgba(26,179,148,0.75)",
	                highlightStroke: "rgba(26,179,148,1)",
	                data: [5, 11, 8]
	            },
	            {
	                label: "Otros",
	                fillColor: "rgba(181,84,237,0.7)",
	                strokeColor: "rgba(181,84,237,0.7)",
	                highlightFill: "rgba(181,84,237,0.75)",
	                highlightStroke: "rgba(181,84,237,1)",
	                data: [3, 31, 18]
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
	       multiTooltipTemplate: "<%= datasetLabel%>: <%= value %>"
	    }


	    var ctxDemographic = document.getElementById("barChart").getContext("2d");
	    demographicChart = new Chart(ctxDemographic).Bar(barData, barOptions);

//END WOMEN AND MEN DEMOGRAPHIC
	 
	    /*

 
//MEXICO MAP 
	 try {
		 var latlong = {};
		 latlong["MX-QUE-G"] = {"latitude":20.5888184,"longitude":-100.3898876000};			//Queretaro
		 latlong["MX-VER-G"] = {"latitude":19.173773,"longitude":-96.13422409999998};		//Veracruz
		 latlong["MX-HID-G"] = {"latitude":20.0910963,"longitude":-98.76238739999997};		//Hidalgo
		 latlong["MX-CHH-G"] = {"latitude":28.6329957,"longitude":-106.06910040000002};		//Chihuahua
		 latlong["MX-COL-G"] = {"latitude":19.1222634,"longitude":-104.00723479999999};		//Colima
		 latlong["MX-COA-G"] = {"latitude":27.058676,"longitude":-101.7068294};				//Coahuila
		 latlong["MX-CHP-G"] = {"latitude":16.7569318,"longitude":-93.1292353};				//Chiapas
		 latlong["MX-MIC-G"] = {"latitude":19.5665192,"longitude":-101.7068294};			//Michoacan
		 latlong["MX-JAL-G"] = {"latitude":20.6595382,"longitude":-103.34943759999999};		//Jalisco
		 
		 latlong["MX-QUE-GR"] = {"latitude":20.5988184,"longitude":-100.2898876000};		//Queretaro
		 latlong["MX-VER-GR"] = {"latitude":19.173773,"longitude":-96.23422409999998};		//Veracruz
		 latlong["MX-HID-GR"] = {"latitude":20.0910963,"longitude":-98.66238739999997};		//Hidalgo
		 latlong["MX-CHH-GR"] = {"latitude":28.6329957,"longitude":-106.16910040000002};	//Chihuahua
		 latlong["MX-COL-GR"] = {"latitude":19.1222634,"longitude":-104.10723479999999};	//Colima
		 latlong["MX-COA-GR"] = {"latitude":27.058676,"longitude":-101.8068294};			//Coahuila
		 latlong["MX-CHP-GR"] = {"latitude":16.7569318,"longitude":-93.2292353};			//Chiapas
		 latlong["MX-MIC-GR"] = {"latitude":19.5665192,"longitude":-101.8068294};			//Michoacan
		 latlong["MX-JAL-GR"] = {"latitude":20.6595382,"longitude":-103.44943759999999};	//Jalisco
		 
		 latlong["MX-QUE-PR"] = {"latitude":20.5888184,"longitude":-100.1898876000};		//Queretaro
		 latlong["MX-VER-PR"] = {"latitude":19.173773,"longitude":-96.33422409999998};		//Veracruz
		 latlong["MX-HID-PR"] = {"latitude":20.0910963,"longitude":-98.56238739999997};		//Hidalgo
		 latlong["MX-CHH-PR"] = {"latitude":28.6329957,"longitude":-106.26910040000002};	//Chihuahua
		 latlong["MX-COL-PR"] = {"latitude":19.1222634,"longitude":-104.20723479999999};	//Colima
		 latlong["MX-COA-PR"] = {"latitude":27.058676,"longitude":-101.9068294};			//Coahuila
		 latlong["MX-CHP-PR"] = {"latitude":16.7569318,"longitude":-93.3292353};			//Chiapas
		 latlong["MX-MIC-PR"] = {"latitude":19.5665192,"longitude":-101.9068294};			//Michoacan
		 latlong["MX-JAL-PR"] = {"latitude":20.6595382,"longitude":-103.54943759999999};	//Jalisco
		 //################### #4648E8 azul / #1AB394 green / #B554ED purple
		 var mapData = [
		                {"code":"MX-QUE-G" , "name":"Queretaro", "value":9938444, "color":"#4648E8"},
		                {"code":"MX-VER-G" , "name":"Veracruz", "value":8414350, "color":"#4648E8"},
		                {"code":"MX-HID-G" , "name":"Hidalgo", "value":12419293, "color":"#4648E8"},
		                {"code":"MX-CHH-G" , "name":"Chihuahua", "value":4301261, "color":"#4648E8"},
		                {"code":"MX-COL-G" , "name":"Colima", "value":783600, "color":"#4648E8"},
		                {"code":"MX-COA-G" , "name":"Coahuila", "value":3405565, "color":"#4648E8"},
		                {"code":"MX-CHP-G" , "name":"Chiapas", "value":33871648, "color":"#4648E8"},
		                {"code":"MX-MIC-G" , "name":"Michoacan", "value":2688418, "color":"#4648E8"},
		                {"code":"MX-JAL-G" , "name":"Jalisco", "value":6080485, "color":"#4648E8"},
		                
		                {"code":"MX-QUE-GR" , "name":"Queretaro", "value":9938444, "color":"#1AB394"},
		                {"code":"MX-VER-GR" , "name":"Veracruz", "value":8414350, "color":"#1AB394"},
		                {"code":"MX-HID-GR" , "name":"Hidalgo", "value":12419293, "color":"#1AB394"},
		                {"code":"MX-CHH-GR" , "name":"Chihuahua", "value":4301261, "color":"#1AB394"},
		                {"code":"MX-COL-GR" , "name":"Colima", "value":783600, "color":"#1AB394"},
		                {"code":"MX-COA-GR" , "name":"Coahuila", "value":3405565, "color":"#1AB394"},
		                {"code":"MX-CHP-GR" , "name":"Chiapas", "value":33871648, "color":"#1AB394"},
		                {"code":"MX-MIC-GR" , "name":"Michoacan", "value":2688418, "color":"#1AB394"},
		                {"code":"MX-JAL-GR" , "name":"Jalisco", "value":6080485, "color":"#1AB394"},
		                
		                {"code":"MX-QUE-PR" , "name":"Queretaro", "value":9938444, "color":"#B554ED"},
		                {"code":"MX-VER-PR" , "name":"Veracruz", "value":8414350, "color":"#B554ED"},
		                {"code":"MX-HID-PR" , "name":"Hidalgo", "value":12419293, "color":"#B554ED"},
		                {"code":"MX-CHH-PR" , "name":"Chihuahua", "value":4301261, "color":"#B554ED"},
		                {"code":"MX-COL-PR" , "name":"Colima", "value":783600, "color":"#B554ED"},
		                {"code":"MX-COA-PR" , "name":"Coahuila", "value":3405565, "color":"#B554ED"},
		                {"code":"MX-CHP-PR" , "name":"Chiapas", "value":33871648, "color":"#B554ED"},
		                {"code":"MX-MIC-PR" , "name":"Michoacan", "value":2688418, "color":"#B554ED"},
		                {"code":"MX-JAL-PR" , "name":"Jalisco", "value":6080485, "color":"#B554ED"}
		                ];

		// get min and max values
		var minBulletSize = 7;
		var maxBulletSize = 10;
		var min = Infinity;
		var max = -Infinity;
		for ( var i = 0; i < mapData.length; i++ ) {
		  var value = mapData[ i ].value;
		  if ( value < min ) {
		    min = value;
		  }
		  if ( value > max ) {
		    max = value;
		  }
		}

		// it's better to use circle square to show difference between values, not a radius
		var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
		var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

		// create circle for each country
		var images = [];
		for ( var i = 0; i < mapData.length; i++ ) {
		  var dataItem = mapData[ i ];
		  var value = dataItem.value;
		  // calculate size of a bubble
		  var square = ( value - min ) / ( max - min ) * ( maxSquare - minSquare ) + minSquare;
		  if ( square < minSquare ) {
		    square = minSquare;
		  }
		  var size = Math.sqrt( square / ( Math.PI * 2 ) );
		  var id = dataItem.code;

		  images.push( {
		    "type": "circle",
		    "theme": "dark",

		    "width": size,
		    "height": size,
		    "color": dataItem.color,
		    "longitude": latlong[ id ].longitude,
		    "latitude": latlong[ id ].latitude,
		    "title": dataItem.name,
		    "value": value
		  } );
		}

		 //###################
		   var titles = [];
		 
		       titles.push( {
		         "text": "Mexico"
		       } );
		 
		       AmCharts.makeChart( "mapdiv", {
		     	  "type": "map",
		     	  "theme": "dark",
		     	  "getAreasFromMap": true,
		     	  "dataProvider": {
		     	    "map": "mexicoLow",
		 			  "images": images
		     	  },
		     	  "titles": titles,
		     	  "areasSettings": {
		     		"alpha": 0.8,
		     	    "unlistedAreasAlpha": 0.1,
		     	  },
		     	  "legend": {
		     		    "width": "80%",
		     		    "divId": "legenddiv",
		     		    "marginRight": 27,
		     		    "marginLeft": 27,
		     		    "equalWidths": true,
		     		    "backgroundAlpha": 0.7,
		     		    "backgroundColor": "#FFFFFF",
		     		    "borderColor": "#ffffff",
		     		    "borderAlpha": 1,
		     		    "top": 450,
		     		    "left": 0,
		     		    "horizontalGap": 10,
		     		    "data": [{
		     		      "title": "Ricardo Anaya Cortés",
		     		      "color": "#4648E8"
		     		    }, {
		     		      "title": "Margarita Zavala",
		     		      "color": "#1AB394"
		     		    }, {
		     		      "title": "Rafael Moreno Valle",
		     		      "color": "#B554ED"
		     		    }]
		     	  }
		     	 
		     	} ); 
		 	 }
		 	 catch( e ) {
		 	   console.log( e );
		 	 }
		 	 
	 
//END MEXICO MAP
 
  */
 
//Data for main line chart
 var lineData = {
	        labels: ["Mes 1", "Mes 2", "Mes 3", "Mes 4", "Mes 5", "Mes 6"],
	        datasets: [
	            {
	                label: "Ricardo Anaya Cortés",
	                fillColor: "rgba(70,72,232,0.5)",
	                strokeColor: "gray",
	                pointColor: "rgba(70,72,232,1)",
	                pointStrokeColor: "#fff",
	                pointHighlightFill: "#fff",
	                pointHighlightStroke: "rgba(70,72,232,1)",
	                data: [12, 11,5,23, 20, 14]
	            },
	            {
	                label: "Margarita Zavala",
	                fillColor: "rgba(26,179,148,0.5)",
	                strokeColor: "green",
	                pointColor: "rgba(26,179,148,1)",
	                pointStrokeColor: "#fff",
	                pointHighlightFill: "#fff",
	                pointHighlightStroke: "rgba(26,179,148,1)",
	                data: [7, 10,18,9, 14, 18]
	            },
	            {
	                label: "Rafael Moreno Valle",
	                fillColor: "rgba(181,84,237,0.7)",
	                strokeColor: "purple",
	                pointColor: "rgba(181,84,237,1)",
	                pointStrokeColor: "#fff",
	                pointHighlightFill: "#fff",
	                pointHighlightStroke: "rgba(181,84,237,1)",
	                data: [12,5,8,25 ,18 ,16]
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
	  

	    var ctxMain = document.getElementById("lineChart").getContext("2d");
	    mainChart = new Chart(ctxMain).Line(lineData, lineOptions);
	    document.getElementById('js-legend').innerHTML = mainChart.generateLegend();

	    //END Data for main line chart
	 
 });

 