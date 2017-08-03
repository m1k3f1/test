/*
Chart.defaults.global = {
		tooltipTemplate: "<%=label%>: <%= value %>"
}*/

Chart.defaults.global.tooltipTemplate= "<%=label%>: <%= value %>";

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
var ctxPost2 = document.getElementById("reactionsChart2").getContext("2d");
var ctxPost3 = document.getElementById("reactionsChart3").getContext("2d");
var ctx = document.getElementById("periodChart").getContext("2d");
var myNewChart1 = null;
var myNewChart2 = null;
var myNewChart3 = null;
var myNewChart = null;

$.getJSON('rest/drawVideoReactionsGraphics',function(data)
		{
		 
		 myNewChart1 = new Chart(ctxPost1).Radar(data[0], options);
		 myNewChart2 = new Chart(ctxPost2).Radar(data[1], options);
		 myNewChart3 = new Chart(ctxPost3).Radar(data[2], options);
		});
$.getJSON('rest/drawVideoPerWeekGraphic',function(data)
		{
			 myNewChart = new Chart(ctx).Line(data[0], options);
		});




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

		
		$.getJSON('rest/drawVideoReactionsGraphics',function(data)
				{
				 
				 myNewChart1 = new Chart(ctxPost1).Radar(data[0], options);
				 myNewChart2 = new Chart(ctxPost2).Radar(data[1], options);
				 myNewChart3 = new Chart(ctxPost3).Radar(data[2], options);
				});
		$.getJSON('rest/drawVideoPerWeekGraphic',function(data)
				{
					 myNewChart = new Chart(ctx).Line(data[0], options);
				});
		
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
		
		
		$.getJSON('rest/drawVideoReactionsGraphics',function(data)
				{
				 
				 myNewChart1 = new Chart(ctxPost1).Radar(data[3], options);
				 myNewChart2 = new Chart(ctxPost2).Radar(data[4], options);
				 myNewChart3 = new Chart(ctxPost3).Radar(data[5], options);
				});
			 $.getJSON('rest/drawVideoPerWeekGraphic',function(data)
			{
				 myNewChart = new Chart(ctx).Line(data[1], options);
			});
		
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
		
		
		$.getJSON('rest/drawVideoReactionsGraphics',function(data)
				{
				 
				 myNewChart1 = new Chart(ctxPost1).Radar(data[6], options);
				 myNewChart2 = new Chart(ctxPost2).Radar(data[7], options);
				 myNewChart3 = new Chart(ctxPost3).Radar(data[8], options);
				});
			 $.getJSON('rest/drawVideoPerWeekGraphic',function(data)
			{
				 myNewChart = new Chart(ctx).Line(data[2], options);
			});
	});
	
});


