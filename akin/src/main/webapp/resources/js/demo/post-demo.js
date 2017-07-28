/*
Chart.defaults.global = {
		tooltipTemplate: "<%=label%>: <%= value %>"
}*/

Chart.defaults.global.tooltipTemplate= "<%=label%>: <%= value %>";
/**************   DATA ******************/
var reactionsData1Mensual = {
        labels: [ "Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"],
        datasets: [
            {
                label: "Ricando Anaya Cort\u00e9s",
                fillColor: "rgba(28,132,198,0.2)",
                strokeColor: "rgba(28,132,198,1)",
                pointColor: "rgba(28,132,198,0.2)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(28,132,198,0,2)",
                data: [2041,		1798,	26,	241,	9,108]
            }
        ]
    };
var reactionsData1Trimestral = {
        labels: [ "Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"],
        datasets: [
            {
                label: "Ricando Anaya Cort\u00e9s",
                fillColor: "rgba(28,132,198,0.2)",
                strokeColor: "rgba(28,132,198,1)",
                pointColor: "rgba(28,132,198,0.2)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(28,132,198,0,2)",
                data: [		19058,		13595,	542,	3683,	0,2614]
            }
        ]
    };
var reactionsData1Semestral = {
        labels: [ "Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"],
        datasets: [
            {
                label: "Ricando Anaya Cort\u00e9s",
                fillColor: "rgba(28,132,198,0.2)",
                strokeColor: "rgba(28,132,198,1)",
                pointColor: "rgba(28,132,198,0.2)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(28,132,198,0,2)",
                data: [	30877	,	38934,	882,	12363,	0,3712]
            }
        ]
    };

var reactionsData2Mensual = {
		labels: [ "Me encanta" , "Me divierte", "Me entristece", "Me enoja", "Otra", "Me asombra" ],
        datasets: [
           
            {
                label: "Margarita Zavala",
                fillColor: "rgba(26,179,148,0.2)",
                strokeColor: "rgba(26,179,148,1)",
                pointColor: "rgba(26,179,148,0.2)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,0.2)",
                
                data: [	5226,	1496,	26	,266,	901,155]
            }
        ]
    };

var reactionsData2Trimestral = {
		labels: [ "Me encanta" , "Me divierte", "Me entristece", "Me enoja", "Otra", "Me asombra" ],
        datasets: [
           
            {
                label: "Margarita Zavala",
                fillColor: "rgba(26,179,148,0.2)",
                strokeColor: "rgba(26,179,148,1)",
                pointColor: "rgba(26,179,148,0.2)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,0.2)",
                
                data: [	12571,	3635	,242	,2292,	0,	401]
            }
        ]
    };
var reactionsData2Semestral = {
		labels: [ "Me encanta" , "Me divierte", "Me entristece", "Me enoja", "Otra", "Me asombra" ],
        datasets: [
           
            {
                label: "Margarita Zavala",
                fillColor: "rgba(26,179,148,0.2)",
                strokeColor: "rgba(26,179,148,1)",
                pointColor: "rgba(26,179,148,0.2)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,0.2)",
                
                data: [	22512,	14356	,433,	6208,	1	,854]
            }
        ]
    };


var reactionsData3Mensual = {
		labels: ["Me encanta",  "Me divierte", "Me entristece", "Me enoja", "Otra", "Me asombra"],
        datasets: [
           
            {
                label: "Rafael Moreno Valle",
                fillColor: "rgba(108,116,238,0.2)",
                strokeColor: "rgba(108,116,238,1)",
                pointColor: "rgba(108,116,238,0.2)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,0.2)",
                
                data: [	17560,	15370,	360	,5481,	2000	,9004]
            }
        ]
    };
var reactionsData3Trimestral = {
		labels: ["Me encanta",  "Me divierte", "Me entristece", "Me enoja", "Otra", "Me asombra"],
        datasets: [
           
            {
                label: "Rafael Moreno Valle",
                fillColor: "rgba(108,116,238,0.2)",
                strokeColor: "rgba(108,116,238,1)",
                pointColor: "rgba(108,116,238,0.2)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,0.2)",
                
                data: [	42341,	5640,	1533	,6751,	0,	7437]
            }
        ]
    };

var reactionsData3Semestral = {
		labels: ["Me encanta",  "Me divierte", "Me entristece", "Me enoja", "Otra", "Me asombra"],
        datasets: [
           
            {
                label: "Rafael Moreno Valle",
                fillColor: "rgba(108,116,238,0.2)",
                strokeColor: "rgba(108,116,238,1)",
                pointColor: "rgba(108,116,238,0.2)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,0.2)",
                
                data: [107200	,23049,	2921	,21335	,4,	34220]
            }
        ]
    };


var periodDataMonthly = {
        labels: [  "Semana 1" , "Semana 2","Semana 3", "Semana 4"],
        datasets: [
            {
                label: "Ricando Anaya Cort\u00e9s",
                fillColor: "rgba(28,132,198,0.2)",
                strokeColor: "rgba(28,132,198,1)",
                pointColor: "rgba(28,132,198,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(28,132,198,1)",
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

var periodDataQuarterly = {
        labels: [  "Mes 1" , "Mes 2","Mes 3"],
        datasets: [
            {
                label: "Ricando Anaya Cort\u00e9s",
                fillColor: "rgba(28,132,198,0.2)",
                strokeColor: "rgba(28,132,198,1)",
                pointColor: "rgba(28,132,198,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(28,132,198,1)",
                data: [	23,	23,19]
            },
            {
                label: "Margarita Zavala",
                fillColor: "rgba(26,179,148,0.2)",
                strokeColor: "rgba(26,179,148,1)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [18,	28	,19]
            },
            {
                label: "Rafael Moreno Valle",
                fillColor: "rgba(108,116,238,0.2)",
                strokeColor: "rgba(108,116,238,1)",
                pointColor: "rgba(108,116,238,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [114	,106	,57]
            }
        ]
    };
var periodDataBiannual = {
        labels: [  "Mes 1" , "Mes 2","Mes 3", "Mes 4","Mes 5","Mes 6"],
        datasets: [
            {
                label: "Ricando Anaya Cort\u00e9s",
                fillColor: "rgba(28,132,198,0.2)",
                strokeColor: "rgba(28,132,198,1)",
                pointColor: "rgba(28,132,198,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(28,132,198,1)",
                data: [	23	,23	,19,	13,	9	,22]
            },
            {
                label: "Margarita Zavala",
                fillColor: "rgba(26,179,148,0.2)",
                strokeColor: "rgba(26,179,148,1)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [18,	28	,19	,20	,17	,25]
            },
            {
                label: "Rafael Moreno Valle",
                fillColor: "rgba(108,116,238,0.2)",
                strokeColor: "rgba(108,116,238,1)",
                pointColor: "rgba(108,116,238,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [114	,106,	57	,123	,47	,52]
            }
        ]
    };

//LIKED

var likedDataMonthly = {
		labels: ["Ricando Anaya Cort\u00e9s",  "Margarita Zavala", "Rafael Moreno Valle"],
        datasets: [
           
            {
                label: "Rafael Moreno Valle",
                fillColor: "rgba(108,116,238,0.2)",
                strokeColor: "rgba(108,116,238,1)",
                pointColor: "rgba(108,116,238,0.2)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,0.2)",
                
                data: [	43135,	59078,	529482	]
            }
        ]
    };
    

var likedDataQuarterly = {
		labels: ["Ricando Anaya Cort\u00e9s",  "Margarita Zavala", "Rafael Moreno Valle"],
        datasets: [
           
            {
                label: "Rafael Moreno Valle",
                fillColor: "rgba(108,116,238,0.2)",
                strokeColor: "rgba(108,116,238,1)",
                pointColor: "rgba(108,116,238,0.2)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,0.2)",
                
                data: [	380513,	134054,	943938	]
            }
        ]   
    };
var likedDataBiannual = {
		labels: ["Ricando Anaya Cort\u00e9s",  "Margarita Zavala", "Rafael Moreno Valle"],
        datasets: [
           
            {
                label: "Rafael Moreno Valle",
                fillColor: "rgba(108,116,238,0.2)",
                strokeColor: "rgba(108,116,238,1)",
                pointColor: "rgba(108,116,238,0.2)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,0.2)",
                
                data: [	643698,	242592,	2685121	]
            }
        ]   
    };

//END LIKED

/**************   OPTIONS OF GRAPHICS ******************/
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

/**************   DEFAULT GRAFIC ******************/
var ctxPost1 = document.getElementById("reactionsChart1").getContext("2d");
var myNewChart1 = new Chart(ctxPost1).Radar(reactionsData1Mensual, options);

var ctxPost2 = document.getElementById("reactionsChart2").getContext("2d");
var myNewChart2 = new Chart(ctxPost2).Radar(reactionsData2Mensual, options);

var ctxPost3 = document.getElementById("reactionsChart3").getContext("2d");
var myNewChart3 = new Chart(ctxPost3).Radar(reactionsData3Mensual, options);

var ctx = document.getElementById("periodChart").getContext("2d");
var myNewChart = new Chart(ctx).Line(periodDataMonthly, options);



/**************   ON CLICK BOTTOM CHANGE ******************/

$(document).ready(function() {
	
	$("#btnMensual").click(function() {
		
		$('#btnMensual').addClass('active');
		$('#btnTrimestral').removeClass('active');
		$('#btnSemestral').removeClass('active');
		
		 $('#percCuenta1').text("91%") ;
		 $('#percCuenta1_num').css('width', '91%');
		 
		 $('#percCuenta3').text("91%") ;
		 $('#percCuenta3_num').css('width', '91%');
		 
		 $('#percCuenta2').text("87%") ;
		 $('#percCuenta2_num').css('width', '87%');
		 
		//##################################//
			$('#percCuenta1_a').text("99.43%") ;
			$('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
			$('#percCuenta1_numa').css('width', '99.43%');
			 
			$('#percCuenta1_b').text("0.56%") ;
			$('#percCuenta1_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
			$('#percCuenta1_numb').css('width', '0.56%');
			
			$('#percCuenta2_a').text("98.97%") ;
			$('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
			$('#percCuenta2_numa').css('width', '98.97%');
			 
			$('#percCuenta2_b').text("1.02%") ;
			$('#percCuenta2_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
			$('#percCuenta2_numb').css('width', '1.02%');
			
			$('#percCuenta3_a').text("99.55%") ;
			$('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
			$('#percCuenta3_numa').css('width', '99.55%');
			 
			$('#percCuenta3_b').text("0.44%") ;
			$('#percCuenta3_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
			$('#percCuenta3_numb').css('width', '0.55%');
			
			if($('#selMeses').children('option')!=null)
				{
					$('#selMeses').children('option').remove();
				}
			if($('#selMeses').children('optgroup') !=null)
				{
				$('#selMeses').children('optgroup').remove();
				}
			$('#selMeses').append("<option>Enero</option>");
		if(myNewChart1 != null)
		 {
			myNewChart1.destroy();
		 }

		if(myNewChart2 != null)
		 {
			myNewChart2.destroy();
		 }

		if(myNewChart3 != null)
		 {
			myNewChart3.destroy();
		 }

		if(myNewChart != null)
		 {
			myNewChart.destroy();
		 }
		
		 myNewChart1 = new Chart(ctxPost1).Radar(reactionsData1Mensual, options);
		 myNewChart2 = new Chart(ctxPost2).Radar(reactionsData2Mensual, options);
		 myNewChart3 = new Chart(ctxPost3).Radar(reactionsData3Mensual, options);
		 myNewChart = new Chart(ctx).Line(periodDataMonthly, options);

	});
	$("#btnTrimestral").click(function() {
		
		$('#btnMensual').removeClass('active');
		$('#btnTrimestral').addClass('active');
		$('#btnSemestral').removeClass('active');
		
		$('#percCuenta1').text("90%") ;
		$('#percCuenta1_num').css('width', '90%');
		 
		$('#percCuenta3').text("93%") ;
		$('#percCuenta3_num').css('width', '93%');
		 
		$('#percCuenta2').text("92%") ;
		$('#percCuenta2_num').css('width', '92%');
		//##################################//
		$('#percCuenta1_a').text("98.98%") ;
		$('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta1_numa').css('width', '98.9%');
		 
		$('#percCuenta1_b').text("1.01%") ;
		$('#percCuenta1_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta1_numb').css('width', '1.01%');
		
		$('#percCuenta2_a').text("99.35%") ;
		$('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta2_numa').css('width', '99.35%');
		 
		$('#percCuenta2_b').text("0.64%") ;
		$('#percCuenta2_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta2_numb').css('width', '0.64%');
		
		$('#percCuenta3_a').text("99.17%") ;
		$('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta3_numa').css('width', '99.17%');
		 
		$('#percCuenta3_b').text("0.82%") ;
		$('#percCuenta3_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta3_numb').css('width', '0.82%');
		
		if($('#selMeses').children('option')!=null)
		{
			$('#selMeses').children('option').remove();
		}
		if($('#selMeses').children('optgroup') !=null)
		{
			$('#selMeses').children('optgroup').remove();
		}
		$('#selMeses').append("<optgroup label='Trimestre'><option>Ene/Feb/Mar</option></optgroup>");
		
		if(myNewChart1 != null)
		 {
			myNewChart1.destroy();
		 }

		if(myNewChart2 != null)
		 {
			myNewChart2.destroy();
		 }

		if(myNewChart3 != null)
		 {
			myNewChart3.destroy();
		 }

		if(myNewChart != null)
		 {
			myNewChart.destroy();
		 }
		
		 myNewChart1 = new Chart(ctxPost1).Radar(reactionsData1Trimestral, options);
		 myNewChart2 = new Chart(ctxPost2).Radar(reactionsData2Trimestral, options);
		 myNewChart3 = new Chart(ctxPost3).Radar(reactionsData3Trimestral, options);
		 myNewChart = new Chart(ctx).Line(periodDataQuarterly, options);
	});
	$("#btnSemestral").click(function() {
		
		$('#btnMensual').removeClass('active');
		$('#btnTrimestral').removeClass('active');
		$('#btnSemestral').addClass('active');
		
		$('#percCuenta1').text("88%") ;
		$('#percCuenta1_num').css('width', '88%');
		 
		$('#percCuenta3').text("93%") ;
		$('#percCuenta3_num').css('width', '93%');
		 
		$('#percCuenta2').text("90%") ;
		$('#percCuenta2_num').css('width', '90%');
		
		//##################################//
		$('#percCuenta1_a').text("98.17%") ;
		$('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta1_numa').css('width', '98.17%');
		 
		$('#percCuenta1_b').text("1.82%") ;
		$('#percCuenta1_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta1_numb').css('width', '1.82%');
		
		$('#percCuenta2_a').text("99.25%") ;
		$('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta2_numa').css('width', '99.25%');
		 
		$('#percCuenta2_b').text("0.74%") ;
		$('#percCuenta2_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta2_numb').css('width', '0.74%');
		
		$('#percCuenta3_a').text("99.14%") ;
		$('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta3_numa').css('width', '99.14%');
		 
		$('#percCuenta3_b').text("0.85%") ;
		$('#percCuenta3_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta3_numb').css('width', '0.85%');
		
		if($('#selMeses').children('option')!=null)
		{
			$('#selMeses').children('option').remove();
		}
		if($('#selMeses').children('optgroup') !=null)
		{
			$('#selMeses').children('optgroup').remove();
		}
		$('#selMeses').append("<optgroup label='Semestre'><option>Ene - Jun</option></optgroup>");
		
		if(myNewChart1 != null)
		 {
			myNewChart1.destroy();
		 }

		if(myNewChart2 != null)
		 {
			myNewChart2.destroy();
		 }

		if(myNewChart3 != null)
		 {
			myNewChart3.destroy();
		 }

		if(myNewChart != null)
		 {
			myNewChart.destroy();
		 }
		
		 myNewChart1 = new Chart(ctxPost1).Radar(reactionsData1Semestral, options);
		 myNewChart2 = new Chart(ctxPost2).Radar(reactionsData2Semestral, options);
		 myNewChart3 = new Chart(ctxPost3).Radar(reactionsData3Semestral, options);
		 myNewChart = new Chart(ctx).Line(periodDataBiannual, options);
	});
	
});


