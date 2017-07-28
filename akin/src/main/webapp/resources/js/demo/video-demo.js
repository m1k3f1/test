/*
Chart.defaults.global = {
		tooltipTemplate: "<%=label%>: <%= value %>"
}*/

Chart.defaults.global.tooltipTemplate= "<%=label%>: <%= value %>";
/**************   DATA ******************/
var reactionsData1Mensual = {
        labels: ["Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"],
        datasets: [
            {
                label: "Ricando Anaya Cort\u00e9s",
                fillColor: "rgba(28,132,198,0.2)",
                strokeColor: "rgba(28,132,198,1)",
                pointColor: "rgba(28,132,198,0.2)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(28,132,198,0,2)",
                data: [	23795,	6049,	389	,778,	4344,	466]
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
                data: [	11754	,13012	,280,	3140,	0	,2332]
            }
        ]
    };
var reactionsData1Semestral = {
        labels: ["Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"],
        datasets: [
            {
                label: "Ricando Anaya Cort\u00e9s",
                fillColor: "rgba(28,132,198,0.2)",
                strokeColor: "rgba(28,132,198,1)",
                pointColor: "rgba(28,132,198,0.2)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(28,132,198,0,2)",
                data: [	25047	,25523	,490	,14511,	1,	3732]
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
                
                data: [3591	,2019,	52	,420,	332,	111]
            }
        ]
    };

var reactionsData2Trimestral = {
		labels: ["Me encanta" , "Me divierte", "Me entristece", "Me enoja", "Otra", "Me asombra" ],
        datasets: [
           
            {
                label: "Margarita Zavala",
                fillColor: "rgba(26,179,148,0.2)",
                strokeColor: "rgba(26,179,148,1)",
                pointColor: "rgba(26,179,148,0.2)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,0.2)",
                
                data: [	12571	,3635	,242,	2292,	0	,401]
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
                
                data: [22512	,14356	,433	,6208	,1	,854]
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
                
                data: [	7360,	2929,	204,	2336,	309	,5795]
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
                
                data: [	27691,	5367	,560	,7972	,0	,5250]
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
                
                data: [	69888,	13001,	1553	,21787	,2	,26990]
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
                data: [	3	,5,	3	,3]
            },
            {
                label: "Margarita Zavala",
                fillColor: "rgba(26,179,148,0.2)",
                strokeColor: "rgba(26,179,148,1)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [2,	6,	5,	1]
            },
            {
                label: "Rafael Moreno Valle",
                fillColor: "rgba(108,116,238,0.2)",
                strokeColor: "rgba(108,116,238,1)",
                pointColor: "rgba(108,116,238,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [8	,7,	9	,10]
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
                data: [7	,12	,10]
            },
            {
                label: "Margarita Zavala",
                fillColor: "rgba(26,179,148,0.2)",
                strokeColor: "rgba(26,179,148,1)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [4	,14	,14]
            },
            {
                label: "Rafael Moreno Valle",
                fillColor: "rgba(108,116,238,0.2)",
                strokeColor: "rgba(108,116,238,1)",
                pointColor: "rgba(108,116,238,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [42	,69	,65]
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
                data: [7,	12	,10	,5	,7,	9]
            },
            {
                label: "Margarita Zavala",
                fillColor: "rgba(26,179,148,0.2)",
                strokeColor: "rgba(26,179,148,1)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [42,	69	,65	,128,	19,	35]
            },
            {
                label: "Rafael Moreno Valle",
                fillColor: "rgba(108,116,238,0.2)",
                strokeColor: "rgba(108,116,238,1)",
                pointColor: "rgba(108,116,238,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [4	,14	,14,	6,	4,	10]
            }
        ]
    };

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
		
		 if($('#selMeses').children('option')!=null)
			{
				$('#selMeses').children('option').remove();
			}
		if($('#selMeses').children('optgroup') !=null)
			{
			$('#selMeses').children('optgroup').remove();
			}
		$('#selMeses').append("<option>Enero</option>");
		
		 $('#percCuenta1').text("73.98%") ;
		 $('#percCuenta1_num').css('width', '73.98%');
		 
		 $('#percCuenta3').text("85.65%") ;
		 $('#percCuenta3_num').css('width', '85.65%');
		 
		 $('#percCuenta2').text("83.00%") ;
		 $('#percCuenta2_num').css('width', '83.00%');
		//##################################//
		$('#percCuenta1_a').text("99.12%") ;
		$('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta1_numa').css('width', '99.12%');
		 
		$('#percCuenta1_b').text("0.87%") ;
		$('#percCuenta1_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta1_numb').css('width', '0.87%');
		
		$('#percCuenta2_a').text("98.75%") ;
		$('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta2_numa').css('width', '98.75%');
		 
		$('#percCuenta2_b').text("1.24%") ;
		$('#percCuenta2_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta2_numb').css('width', '1.24%');
		
		$('#percCuenta3_a').text("97.98%") ;
		$('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta3_numa').css('width', '97.98%');
		 
		$('#percCuenta3_b').text("2.01%") ;
		$('#percCuenta3_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta3_numb').css('width', '2.01%');
	
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
		
		if($('#selMeses').children('option')!=null)
		{
			$('#selMeses').children('option').remove();
		}
	if($('#selMeses').children('optgroup') !=null)
		{
		$('#selMeses').children('optgroup').remove();
		}
	$('#selMeses').append("<optgroup label='Trimestre'><option>Ene/Feb/Mar</option></optgroup>");

	$('#percCuenta1').text("85.58%") ;
	$('#percCuenta1_num').css('width', '85.58%');
	 
	$('#percCuenta3').text("89.80%") ;
	$('#percCuenta3_num').css('width', '89.80%');
	 
	$('#percCuenta2').text("87.50%") ;
	$('#percCuenta2_num').css('width', '87.50%');
	//##################################//
	$('#percCuenta1_a').text("98.36%") ;
	$('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percCuenta1_numa').css('width', '98.36%');
	 
	$('#percCuenta1_b').text("1.63%") ;
	$('#percCuenta1_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percCuenta1_numb').css('width', '1.63%');
	
	$('#percCuenta2_a').text("98.34%") ;
	$('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percCuenta2_numa').css('width', '98.34%');
	 
	$('#percCuenta2_b').text("1.65%") ;
	$('#percCuenta2_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percCuenta2_numb').css('width', '1.65%');
	
	$('#percCuenta3_a').text("98.12%") ;
	$('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percCuenta3_numa').css('width', '98.12%');
	 
	$('#percCuenta3_b').text("1.87%") ;
	$('#percCuenta3_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percCuenta3_numb').css('width', '1.87%');
	
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
		
		if($('#selMeses').children('option')!=null)
		{
			$('#selMeses').children('option').remove();
		}
	if($('#selMeses').children('optgroup') !=null)
		{
		$('#selMeses').children('optgroup').remove();
		}
	$('#selMeses').append("<optgroup label='Semestre'><option>Ene - Jun</option></optgroup>");

	$('#percCuenta1').text("83.39%") ;
	$('#percCuenta1_num').css('width', '83.39%');
	 
	$('#percCuenta3').text("88.18%") ;
	$('#percCuenta3_num').css('width', '88.18%');
	 
	$('#percCuenta2').text("84.53%") ;
	$('#percCuenta2_num').css('width', '84.53%');
	//##################################//
	$('#percCuenta1_a').text("96.37%") ;
	$('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percCuenta1_numa').css('width', '96.37%');
	 
	$('#percCuenta1_b').text("3.62%") ;
	$('#percCuenta1_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percCuenta1_numb').css('width', '3.62%');
	
	$('#percCuenta3_a').text("97.87%") ;
	$('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percCuenta3_numa').css('width', '97.87%');
	 
	$('#percCuenta3_b').text("2.12%") ;
	$('#percCuenta3_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percCuenta3_numb').css('width', '2.12%');
	
	$('#percCuenta2_a').text("97.67%") ;
	$('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percCuenta2_numa').css('width', '97.67%');
	 
	$('#percCuenta2_b').text("2.32%") ;
	$('#percCuenta2_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percCuenta2_numb').css('width', '2.32%');
	
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


