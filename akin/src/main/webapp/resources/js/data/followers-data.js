Chart.defaults.global.tooltipTemplate= "<%=label%>: <%= value %>";
//Start Data for main line chart
//End Data for main line chart

//START DEMOGRAPHIC DATA

//END DEMOGRAPHIC DATA
	    var lineOptions = {
	        scaleShowGridLines: true,
	        scaleGridLineColor: "rgba(0,0,0,.05)",
	        scaleGridLineWidth: 1,
	        bezierCurve: false,
	        pointDot: true,
	        pointDotRadius: 4,
	        pointDotStrokeWidth: 1,
	        pointHitDetectionRadius: 20,
	        datasetStroke: true,
	        datasetStrokeWidth: 2,
	        datasetFill: true,
	        responsive: true,
	        multiTooltipTemplate: "<%= datasetLabel%>: <%= value %>"
	    };
	    
	    var barOptions = {
		        scaleBeginAtZero: true,
		        scaleShowGridLines: true,
		        scaleGridLineColor: "rgba(0,0,0,.05)",
		        scaleGridLineWidth: 1,
		        barShowStroke: true,
		        barStrokeWidth: 2,
		        barValueSpacing: 60,
		        barDatasetSpacing: 15,
		        responsive: true,
		       multiTooltipTemplate: "<%= datasetLabel%>: <%= value %>"
		    };

	    
var mainChart = null; 	
var demographicChart = null;
var demographicChart2 = null; 
var demographicChart3 = null;
var demographicChart4 = null; 
var ctxMain = document.getElementById("lineChart").getContext("2d");
var ctxDemographic = document.getElementById("barChart").getContext("2d");
var ctxDemographic2 = document.getElementById("barChart2").getContext("2d");
var ctxDemographic3 = document.getElementById("barChart3").getContext("2d");
var ctxDemographic4 = document.getElementById("barChart4").getContext("2d");

$.getJSON('rest/drawFollowersGraphic',function(data)
	{
	mainChart = new Chart(ctxMain).Line(data[0], lineOptions);
	demographicChart = new Chart(ctxDemographic).Bar(data[1], barOptions);
	demographicChart2 = new Chart(ctxDemographic2).Bar(data[2], barOptions);
	demographicChart3 = new Chart(ctxDemographic3).Bar(data[3], barOptions);
	demographicChart4= new Chart(ctxDemographic4).Bar(data[4], barOptions);
});



//Main function
$(document).ready(function() {
		
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
				 
				 latlong["MX-QUE-V"] = {"latitude":20.4888184,"longitude":-100.0898876000};		//Queretaro
				 latlong["MX-VER-V"] = {"latitude":19.073773,"longitude":-96.23422409999998};		//Veracruz
				 latlong["MX-HID-V"] = {"latitude":20.0810963,"longitude":-98.46238739999997};		//Hidalgo
				 latlong["MX-CHH-V"] = {"latitude":28.5329957,"longitude":-106.16910040000002};	//Chihuahua
				 latlong["MX-COL-V"] = {"latitude":19.0222634,"longitude":-104.10723479999999};	//Colima
				 latlong["MX-COA-V"] = {"latitude":27.048676,"longitude":-101.8068294};			//Coahuila
				 latlong["MX-CHP-V"] = {"latitude":16.6569318,"longitude":-93.2292353};			//Chiapas
				 latlong["MX-MIC-V"] = {"latitude":19.4665192,"longitude":-101.8068294};			//Michoacan
				 latlong["MX-JAL-V"] = {"latitude":20.5595382,"longitude":-103.44943759999999};	//Jalisco
				 //################### #b5261e vino / #3B5998 azul / #ffcb01 amarillo / #00a650 verde
				 var mapData = [
				                {"code":"MX-QUE-G" , "name":"Queretaro", "value":9938444, "color":"#b5261e"},
				                {"code":"MX-VER-G" , "name":"Veracruz", "value":8414350, "color":"#b5261e"},
				                {"code":"MX-HID-G" , "name":"Hidalgo", "value":12419293, "color":"#b5261e"},
				                {"code":"MX-CHH-G" , "name":"Chihuahua", "value":4301261, "color":"#b5261e"},
				                {"code":"MX-COL-G" , "name":"Colima", "value":783600, "color":"#b5261e"},
				                {"code":"MX-COA-G" , "name":"Coahuila", "value":3405565, "color":"#b5261e"},
				                {"code":"MX-CHP-G" , "name":"Chiapas", "value":33871648, "color":"#b5261e"},
				                {"code":"MX-MIC-G" , "name":"Michoacan", "value":2688418, "color":"#b5261e"},
				                {"code":"MX-JAL-G" , "name":"Jalisco", "value":6080485, "color":"#b5261e"},
				                
				                {"code":"MX-QUE-GR" , "name":"Queretaro", "value":9938444, "color":"#3B5998"},
				                {"code":"MX-VER-GR" , "name":"Veracruz", "value":8414350, "color":"#3B5998"},
				                {"code":"MX-HID-GR" , "name":"Hidalgo", "value":12419293, "color":"#3B5998"},
				                {"code":"MX-CHH-GR" , "name":"Chihuahua", "value":4301261, "color":"#3B5998"},
				                {"code":"MX-COL-GR" , "name":"Colima", "value":783600, "color":"#3B5998"},
				                {"code":"MX-COA-GR" , "name":"Coahuila", "value":3405565, "color":"#3B5998"},
				                {"code":"MX-CHP-GR" , "name":"Chiapas", "value":33871648, "color":"#3B5998"},
				                {"code":"MX-MIC-GR" , "name":"Michoacan", "value":2688418, "color":"#3B5998"},
				                {"code":"MX-JAL-GR" , "name":"Jalisco", "value":6080485, "color":"#3B5998"},
				                
				                {"code":"MX-QUE-PR" , "name":"Queretaro", "value":9938444, "color":"#ffcb01"},
				                {"code":"MX-VER-PR" , "name":"Veracruz", "value":8414350, "color":"#ffcb01"},
				                {"code":"MX-HID-PR" , "name":"Hidalgo", "value":12419293, "color":"#ffcb01"},
				                {"code":"MX-CHH-PR" , "name":"Chihuahua", "value":4301261, "color":"#ffcb01"},
				                {"code":"MX-COL-PR" , "name":"Colima", "value":783600, "color":"#ffcb01"},
				                {"code":"MX-COA-PR" , "name":"Coahuila", "value":3405565, "color":"#ffcb01"},
				                {"code":"MX-CHP-PR" , "name":"Chiapas", "value":33871648, "color":"#ffcb01"},
				                {"code":"MX-MIC-PR" , "name":"Michoacan", "value":2688418, "color":"#ffcb01"},
				                {"code":"MX-JAL-PR" , "name":"Jalisco", "value":6080485, "color":"#ffcb01"},
				                
				                {"code":"MX-QUE-V" , "name":"Queretaro", "value":9938444, "color":"#00a650"},
				                {"code":"MX-VER-V" , "name":"Veracruz", "value":8414350, "color":"#00a650"},
				                {"code":"MX-HID-V" , "name":"Hidalgo", "value":12419293, "color":"#00a650"},
				                {"code":"MX-CHH-V" , "name":"Chihuahua", "value":4301261, "color":"#00a650"},
				                {"code":"MX-COL-V" , "name":"Colima", "value":783600, "color":"#00a650"},
				                {"code":"MX-COA-V" , "name":"Coahuila", "value":3405565, "color":"#00a650"},
				                {"code":"MX-CHP-V" , "name":"Chiapas", "value":33871648, "color":"#00a650"},
				                {"code":"MX-MIC-V" , "name":"Michoacan", "value":2688418, "color":"#00a650"},
				                {"code":"MX-JAL-V" , "name":"Jalisco", "value":6080485, "color":"#00a650"}
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
				     		      "title": "Andrés Manuel López Obrador",
				     		      "color": "#b5261e"
				     		    }, {
				     		      "title": "Rafael Moreno Valle",
				     		      "color": "#3B5998"
				     		    }, {
				     		      "title": "Miguel Ángel Mancera",
				     		      "color": "#ffcb01"
				     		    }, {
					     		  "title": "Eruviel Ávila Villegas",
					     		  "color": "#00a650"
					     		    }]
				     	  }
				     	  });
				     	 
				    
});		       
		 
$("#btnMensual").click(function() {
	
	$('#btnMensual').addClass('active');
	$('#btnTrimestral').removeClass('active');
	$('#btnSemestral').removeClass('active');
				    		 
				    		 $('#percCuenta1_a').text("70%") ;
				    		 $('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta1_numa').css('width', '70%');
				    		 
				    		 $('#percCuenta2_a').text("80%") ;
				    		 $('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta2_numa').css('width', '80%');
				    		 
				    		 $('#percCuenta3_a').text("90%") ;
				    		 $('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta3_numa').css('width', '90%');
				    		 
				    		 $('#percCuenta4_a').text("90%") ;
				    		 $('#percCuenta4_a').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta4_numa').css('width', '90%');
				    		 
				    		 $('#percCuenta1_h').text("45%") ;
				    		 $('#percCuenta1_h').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta1_numh').css('width', '45%');
				    		 $('#percCuenta1_m').text("65%") ;
				    		 $('#percCuenta1_m').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta1_numm').css('width', '65%');
				    		 
				    		 $('#percCuenta2_h').text("36%") ;
				    		 $('#percCuenta2_h').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta2_numh').css('width', '36%');
				    		 $('#percCuenta2_m').text("29%") ;
				    		 $('#percCuenta2_m').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta2_numm').css('width', '29%');
				    		
				    		 
				    		 $('#percCuenta3_h').text("25%") ;
				    		 $('#percCuenta3_h').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta3_numh').css('width', '25%');
				    		 $('#percCuenta3_m').text("23%") ;
				    		 $('#percCuenta3_m').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta3_numm').css('width', '23%');
				    		 
				    		 
				    		 $('#percCuenta4_h').text("25%") ;
				    		 $('#percCuenta4_h').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta4_numh').css('width', '25%');
				    		 $('#percCuenta4_m').text("23%") ;
				    		 $('#percCuenta4_m').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta4_numm').css('width', '23%');
				    		
				    		 
				    		 if($('#selMeses').children('option')!=null)
								{
									$('#selMeses').children('option').remove();
								}
							if($('#selMeses').children('optgroup') !=null)
								{
								$('#selMeses').children('optgroup').remove();
								}
							$('#selMeses').append("<option>Enero</option>");
						
				    			 if(mainChart != null)
				    			 {
				    				 mainChart.destroy();
				    			 }
				    			 if(demographicChart != null)
				    			 {
				    				 demographicChart.destroy();
				    			 }
				    			 if(demographicChart2 != null)
				    			 {
				    				 demographicChart2.destroy();
				    			 }
				    			 if(demographicChart3 != null)
				    			 {
				    				 demographicChart3.destroy();
				    			 }
				    			 if(demographicChart4 != null)
				    			 {
				    				 demographicChart4.destroy();
				    			 }
				    			 
				    			 
				    			 //DEMOGRAPHIC DATA
				    			 
				    			//Data for main line chart
				    			 $.getJSON('rest/drawFollowersGraphic',function(data)
				    						{
				    						mainChart = new Chart(ctxMain).Line(data[0], lineOptions);
				    						demographicChart = new Chart(ctxDemographic).Bar(data[1], barOptions);
				    						demographicChart2 = new Chart(ctxDemographic2).Bar(data[2], barOptions);
				    						demographicChart3 = new Chart(ctxDemographic3).Bar(data[3], barOptions);
				    						demographicChart4= new Chart(ctxDemographic4).Bar(data[4], barOptions);
				    					});
				    			// mainChart = new Chart(ctxMain).Line(lineDataMontly, lineOptions);
				    			 
				    			 $("#que1").text("85");
				    			 $("#que2").text("45");
				    			 $("#que3").text("60");
				    			 $("#ver1").text("50");
				    			 $("#ver2").text("18");
				    			 $("#ver3").text("25");
				    			 $("#hid1").text("34");
				    			 $("#hid2").text("21");
				    			 $("#hid3").text("15");
				    			 
				    			 $("#chi1").text("85");
				    			 $("#chi2").text("45");
				    			 $("#chi3").text("60");
				    			 $("#col1").text("50");
				    			 $("#col2").text("18");
				    			 $("#col3").text("25");
				    			 $("#coa1").text("34");
				    			 $("#coa2").text("21");
				    			 $("#coa3").text("15");

				    			 $("#chip1").text("85");
				    			 $("#chip2").text("45");
				    			 $("#chip3").text("60");
				    			 $("#mich1").text("50");
				    			 $("#mich2").text("18");
				    			 $("#mich3").text("25");
				    			 $("#jal1").text("34");
				    			 $("#jal2").text("21");
				    			 $("#jal3").text("15");
});
				    	 		
				    	 
				    	 
				    	 
$("#btnTrimestral").click(function() {
	
	$('#btnMensual').removeClass('active');
	$('#btnTrimestral').addClass('active');
	$('#btnSemestral').removeClass('active');
	
				    		 $('#percCuenta1_a').text("70%") ;
				    		 $('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta1_numa').css('width', '70%');
				    		 
				    		 $('#percCuenta2_a').text("85%") ;
				    		 $('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta2_numa').css('width', '85%');
				    		 
				    		 $('#percCuenta3_a').text("90%") ;
				    		 $('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta3_numa').css('width', '90%');
				    		 
				    		 $('#percCuenta4_a').text("90%") ;
				    		 $('#percCuenta4_a').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta4_numa').css('width', '90%');
				    		 
				    		 $('#percCuenta1_h').text("75%") ;
				    		 $('#percCuenta1_h').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta1_numh').css('width', '75%');
				    		 $('#percCuenta1_m').text("56%") ;
				    		 $('#percCuenta1_m').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta1_numm').css('width', '56%');
				    	
				    		 
				    		 $('#percCuenta2_h').text("64%") ;
				    		 $('#percCuenta2_h').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta2_numh').css('width', '64%');
				    		 $('#percCuenta2_m').text("59%") ;
				    		 $('#percCuenta2_m').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta2_numm').css('width', '59%');
				    		 
				    		 
				    		 $('#percCuenta3_h').text("41%") ;
				    		 $('#percCuenta3_h').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta3_numh').css('width', '41%');
				    		 $('#percCuenta3_m').text("35%") ;
				    		 $('#percCuenta3_m').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta3_numm').css('width', '35%');
				    		
				    		 
				    		 $('#percCuenta4_h').text("41%") ;
				    		 $('#percCuenta4_h').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta4_numh').css('width', '41%');
				    		 $('#percCuenta4_m').text("35%") ;
				    		 $('#percCuenta4_m').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta4_numm').css('width', '35%');
				    	
				    		 
				    		 
				    		 if($('#selMeses').children('option')!=null)
								{
									$('#selMeses').children('option').remove();
								}
							if($('#selMeses').children('optgroup') !=null)
								{
								$('#selMeses').children('optgroup').remove();
								}
							$('#selMeses').append("<optgroup label='Trimestre'><option>Ene/Feb/Mar</option></optgroup>");
						
				    		 if(mainChart != null)
				    		 {
				    			 mainChart.destroy();
				    		 }
				    		 if(demographicChart != null)
				    		 {
				    			 demographicChart.destroy();
				    		 }
				    		 if(demographicChart2 != null)
				    		 {
				    			 demographicChart2.destroy();
				    		 }
				    		 if(demographicChart3 != null)
			    			 {
			    				 demographicChart3.destroy();
			    			 }
			    			 if(demographicChart4 != null)
			    			 {
			    				 demographicChart4.destroy();
			    			 }
				    		  //START WOMEN AND MEN DEMOGRAPHIC
				    		    $.getJSON('rest/drawFollowersGraphic',function(data)
				    		    		{
				    		    		mainChart = new Chart(ctxMain).Line(data[5], lineOptions);
				    		    		demographicChart = new Chart(ctxDemographic).Bar(data[6], barOptions);
				    		    		demographicChart2 = new Chart(ctxDemographic2).Bar(data[7], barOptions);
				    		    		demographicChart3 = new Chart(ctxDemographic3).Bar(data[8], barOptions);
				    		    		demographicChart4 = new Chart(ctxDemographic4).Bar(data[9], barOptions);
				    		    	});
				    		    //document.getElementById('js-legend').innerHTML = mainChart.generateLegend();

				    		    	
				    		    $("#que1").text("45");
				    			 $("#que2").text("11");
				    			 $("#que3").text("35");
				    			 $("#ver1").text("46");
				    			 $("#ver2").text("22");
				    			 $("#ver3").text("11");
				    			 $("#hid1").text("2");
				    			 $("#hid2").text("34");
				    			 $("#hid3").text("63");
				    			 
				    			 $("#chi1").text("23");
				    			 $("#chi2").text("1");
				    			 $("#chi3").text("4");
				    			 $("#col1").text("32");
				    			 $("#col2").text("21");
				    			 $("#col3").text("32");
				    			 $("#coa1").text("21");
				    			 $("#coa2").text("32");
				    			 $("#coa3").text("43");

				    			 $("#chip1").text("34");
				    			 $("#chip2").text("26");
				    			 $("#chip3").text("56");
				    			 $("#mich1").text("53");
				    			 $("#mich2").text("23");
				    			 $("#mich3").text("34");
				    			 $("#jal1").text("23");
				    			 $("#jal2").text("45");
				    			 $("#jal3").text("34");   
});
				    	 
$("#btnSemestral").click(function() {
	
	$('#btnMensual').removeClass('active');
	$('#btnTrimestral').removeClass('active');
	$('#btnSemestral').addClass('active');
	
	
				    		 $('#percCuenta1_a').text("70%") ;
				    		 $('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta1_numa').css('width', '70%');
				    		 
				    		 $('#percCuenta2_a').text("90%") ;
				    		 $('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta2_numa').css('width', '90%');
				    		 
				    		 $('#percCuenta3_a').text("90%") ;
				    		 $('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta3_numa').css('width', '90%');
				    		 
				    		 $('#percCuenta4_a').text("90%") ;
				    		 $('#percCuenta4_a').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta4_numa').css('width', '90%');
				    		 
				    		 $('#percCuenta1_h').text("45%") ;
				    		 $('#percCuenta1_h').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta1_numh').css('width', '45%');
				    		 $('#percCuenta1_m').text("65%") ;
				    		 $('#percCuenta1_m').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta1_numm').css('width', '65%');
				    		 
				    		 
				    		 $('#percCuenta2_h').text("21%") ;
				    		 $('#percCuenta2_h').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta2_numh').css('width', '21%');
				    		 $('#percCuenta2_m').text("26%") ;
				    		 $('#percCuenta2_m').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta2_numm').css('width', '26%');
				    		
				    		 
				    		 $('#percCuenta3_h').text("19%") ;
				    		 $('#percCuenta3_h').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta3_numh').css('width', '19%');
				    		 $('#percCuenta3_m').text("12%") ;
				    		 $('#percCuenta3_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
				    		 $('#percCuenta3_numm').css('width', '12%');
				    		 
				    		 
				    		 $('#percCuenta4_h').text("19%") ;
				    		 $('#percCuenta4_h').append("<i class='fa fa-level-up text-navy'></i>");
				    		 $('#percCuenta4_numh').css('width', '19%');
				    		 $('#percCuenta4_m').text("12%") ;
				    		 $('#percCuenta4_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
				    		 $('#percCuenta4_numm').css('width', '12%');
				    		 
				    		 
				    		 
				    		 if($('#selMeses').children('option')!=null)
								{
									$('#selMeses').children('option').remove();
								}
							if($('#selMeses').children('optgroup') !=null)
								{
								$('#selMeses').children('optgroup').remove();
								}
							$('#selMeses').append("<optgroup label='Semestre'><option>Ene - Jun</option></optgroup>");
						
				    		 
				    		 if(mainChart != null)
				    		 {
				    			 mainChart.destroy();
				    		 }
				    		 if(demographicChart != null)
				    		 {
				    			 demographicChart.destroy();
				    		 }
				    		 if(demographicChart2 != null)
				    		 {
				    			 demographicChart2.destroy();
				    		 }
				    		 if(demographicChart3 != null)
			    			 {
			    				 demographicChart3.destroy();
			    			 }
			    			 if(demographicChart4 != null)
			    			 {
			    				 demographicChart4.destroy();
			    			 }
				    		 
				    		  //START WOMEN AND MEN DEMOGRAPHIC
				    		 $.getJSON('rest/drawFollowersGraphic',function(data)
				    					{
				    					mainChart = new Chart(ctxMain).Line(data[10], lineOptions);
				    					demographicChart = new Chart(ctxDemographic).Bar(data[11], barOptions);
				    					demographicChart2 = new Chart(ctxDemographic2).Bar(data[12], barOptions);
				    					demographicChart3 = new Chart(ctxDemographic3).Bar(data[13], barOptions);
				    					demographicChart4 = new Chart(ctxDemographic4).Bar(data[14], barOptions);
				    				});
				    		// document.getElementById('js-legend').innerHTML = mainChart.generateLegend();
				    		
});


 