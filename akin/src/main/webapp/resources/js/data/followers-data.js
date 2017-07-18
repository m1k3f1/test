 $(document).ready(function() {
	 
	//Data for main line chart
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

		    //END Data for main line chart
 
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
		 //################### #DCDCDC gray / #1AB394 green / #EAABED purple
		 var mapData = [
		                {"code":"MX-QUE-G" , "name":"Queretaro", "value":9938444, "color":"#DCDCDC"},
		                {"code":"MX-VER-G" , "name":"Veracruz", "value":8414350, "color":"#DCDCDC"},
		                {"code":"MX-HID-G" , "name":"Hidalgo", "value":12419293, "color":"#DCDCDC"},
		                {"code":"MX-CHH-G" , "name":"Chihuahua", "value":4301261, "color":"#DCDCDC"},
		                {"code":"MX-COL-G" , "name":"Colima", "value":783600, "color":"#DCDCDC"},
		                {"code":"MX-COA-G" , "name":"Coahuila", "value":3405565, "color":"#DCDCDC"},
		                {"code":"MX-CHP-G" , "name":"Chiapas", "value":33871648, "color":"#DCDCDC"},
		                {"code":"MX-MIC-G" , "name":"Michoacan", "value":2688418, "color":"#DCDCDC"},
		                {"code":"MX-JAL-G" , "name":"Jalisco", "value":6080485, "color":"#DCDCDC"},
		                
		                {"code":"MX-QUE-GR" , "name":"Queretaro", "value":9938444, "color":"#1AB394"},
		                {"code":"MX-VER-GR" , "name":"Veracruz", "value":8414350, "color":"#1AB394"},
		                {"code":"MX-HID-GR" , "name":"Hidalgo", "value":12419293, "color":"#1AB394"},
		                {"code":"MX-CHH-GR" , "name":"Chihuahua", "value":4301261, "color":"#1AB394"},
		                {"code":"MX-COL-GR" , "name":"Colima", "value":783600, "color":"#1AB394"},
		                {"code":"MX-COA-GR" , "name":"Coahuila", "value":3405565, "color":"#1AB394"},
		                {"code":"MX-CHP-GR" , "name":"Chiapas", "value":33871648, "color":"#1AB394"},
		                {"code":"MX-MIC-GR" , "name":"Michoacan", "value":2688418, "color":"#1AB394"},
		                {"code":"MX-JAL-GR" , "name":"Jalisco", "value":6080485, "color":"#1AB394"},
		                
		                {"code":"MX-QUE-PR" , "name":"Queretaro", "value":9938444, "color":"#EAABED"},
		                {"code":"MX-VER-PR" , "name":"Veracruz", "value":8414350, "color":"#EAABED"},
		                {"code":"MX-HID-PR" , "name":"Hidalgo", "value":12419293, "color":"#EAABED"},
		                {"code":"MX-CHH-PR" , "name":"Chihuahua", "value":4301261, "color":"#EAABED"},
		                {"code":"MX-COL-PR" , "name":"Colima", "value":783600, "color":"#EAABED"},
		                {"code":"MX-COA-PR" , "name":"Coahuila", "value":3405565, "color":"#EAABED"},
		                {"code":"MX-CHP-PR" , "name":"Chiapas", "value":33871648, "color":"#EAABED"},
		                {"code":"MX-MIC-PR" , "name":"Michoacan", "value":2688418, "color":"#EAABED"},
		                {"code":"MX-JAL-PR" , "name":"Jalisco", "value":6080485, "color":"#EAABED"}
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
		     	    "autoZoom": true,
		     	    "selectedColor": "#F1AFF1"
		     	  }
		     	 /*"imagesSettings": {
		     	            balloonText: "[[title]]: [[value]]",
		     	            alpha: 0.7
		     	        }*/
		 
		     	} ); 
		 
		       var valueLegend = new AmCharts.ValueLegend();
		 	    valueLegend.right = 10;
		 	    valueLegend.minValue = "little";
		 	    valueLegend.maxValue = "a lot!";
		 	    map.valueLegend = valueLegend;
		 
		 	    map.write("mapdiv");

		 	 }
		 	 catch( e ) {
		 	   console.log( e );
		 	 }
	 
//END MEXICO MAP
	 
});