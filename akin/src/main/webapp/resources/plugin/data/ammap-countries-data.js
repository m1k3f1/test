$(function( ) {
	 try {

  var titles = [];

      titles.push( {
        "text": "Mexico"
      } );

      AmCharts.makeChart( "mapdiv", {
    	  "type": "map",
    	  "theme": "dark",
    	  //"getAreasFromMap": true
    	  "dataProvider": {
    	    "map": "mexicoLow",
    	    areas:[
			            {
			            id: "MX-AGU",
			            value: 4447100},
			        {
			            id: "MX-BCN",
			            value: 626932},
			        {
			            id: "MX-BCS",
			            value: 5130632},
			        {
			            id: "MX-CAM",
			            value: 2673400},
			        {
			            id: "MX-CHP",
			            value: 33871648},
			        {
			            id: "MX-CHH",
			            value: 4301261},
			        {
			            id: "MX-COA",
			            value: 3405565},
			        {
			            id: "MX-COL",
			            value: 783600},
			        {
			            id: "MX-DIF",
			            value: 0},
			        {
			            id: "MX-DUR",
			            value: 8186453},
			        {
			            id: "MX-GUA",
			            value: 1211537},
			        {
			            id: "MX-GRO",
			            value: 1293953},
			        {
			            id: "MX-HID",
			            value: 12419293},
			        {
			            id: "MX-JAL",
			            value: 6080485},
			        {
			            id: "MX-MEX",
			            value: 2926324},
			        {
			            id: "MX-MIC",
			            value: 2688418},
			        {
			            id: "MX-MOR",
			            value: 4041769},
			        {
			            id: "MX-NAY",
			            value: 4468976},
			        {
			            id: "MX-NLE",
			            value: 1274923},
			        {
			            id: "MX-OAX",
			            value: 5296486},
			        {
			            id: "MX-PUE",
			            value: 6349097},
			        {
			            id: "MX-QUE",
			            value: 9938444},
			        {
			            id: "MX-ROO",
			            value: 4919479},
			        {
			            id: "MX-SLP",
			            value: 2844658},
			        {
			            id: "MX-SIN",
			            value: 5595211},
			        {
			            id: "MX-SON",
			            value: 902195},
			        {
			            id: "MX-TAB",
			            value: 1711263},
			        {
			            id: "MX-TAM",
			            value: 1998257},
			        {
			            id: "MX-TLA",
			            value: 1235786},
			        {
			            id: "MX-VER",
			            value: 8414350},
			        {
			            id: "MX-YUC",
			            value: 1819046},
			        {
			            id: "MX-ZAC",
			            value: 18976457}]
    	  },
    	  "titles": titles,

    	  /**
    	   * create areas settings
    	   * autoZoom set to true means that the map will zoom-in when clicked on the area
    	   * selectedColor indicates color of the clicked area.
    	   */
    	  "areasSettings": {
    	    "autoZoom": true,
    	    "selectedColor": "#FF0000"
    	  },

    	  /**
    	   * let's say we want a small map to be displayed, so let's create it
    	   */
    	  "smallMap": {}
    	} ); 

      var valueLegend = new AmCharts.ValueLegend();
	    valueLegend.right = 10;
	    valueLegend.minValue = "little";
	    valueLegend.maxValue = "a lot!";
	    map.valueLegend = valueLegend;

	    map.write("mapdiv");
	    
	    
  function updateHeatmap( event ) {
    var map = event.chart;
    if ( map.dataGenerated )
      return;
    if ( map.dataProvider.areas.length === 0 ) {
      setTimeout( updateHeatmap, 100 );
      return;
    }
    for ( var i = 0; i < map.dataProvider.areas.length; i++ ) {
      map.dataProvider.areas[ i ].value = Math.round( Math.random() * 10000 );
    }
    map.dataGenerated = true;
    map.validateNow();
    
  }
  
	 }
	 catch( e ) {
	   console.log( e );
	  // alert("e->"+e);
	 }
}) ;
