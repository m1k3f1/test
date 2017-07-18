
 CanvasJS.addColorSet("greenShades",
                [//colorSet Array

                "#1ab394",
                "#dedede",
                "#b5b8cf"                
                ]);


var chart = new CanvasJS.Chart("chartContainer",
    {
	  colorSet: "greenShades",
      
      animationEnabled: true,
      interactivityEnabled: true,
      toolTip: {
        /*shared: true*/
    	fontColor: "white",
    	backgroundColor: "#000000",
    	 fontFamily: "Arial",
    	 fontweight: "bold",
    	 fontStyle: "normal",
    	 content:"{name}:  {y}" ,
    	  
      },
      axisY:{
        //title: "percent"
      },
      data:[
      {
        type: "stackedBar100",
        //showInLegend: true,
        name: "Facebook",
        dataPoints: [
        {y: 600, label: "Ricardo Anaya Cortés" },
        {y: 400, label: "Margarita Zavala" },
        {y: 120, label: "Rafael Moreno Valle" }

        ]
      },
       {
        type: "stackedBar100",
        //showInLegend: true,
        name: "Twitter",
        dataPoints: [
        {y: 400, label: "Ricardo Anaya Cortés" },
        {y: 500, label: "Margarita Zavala" },
        {y: 220, label: "Rafael Moreno Valle" }
        ]
      }

      ]

    });

chart.render();
