/*
Chart.defaults.global = {
		tooltipTemplate: "<%=label%>: <%= value %>"
}*/

Chart.defaults.global.tooltipTemplate= "<%=label%>: <%= value %>";
/**************   DATA ******************/



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
var myNewChart1 = null;
var myNewChart2 = null;
var myNewChart3 = null;
var myNewChart = null;
var ctxPost1 = document.getElementById("reactionsChart1").getContext("2d");
var ctxPost2 = document.getElementById("reactionsChart2").getContext("2d");
var ctxPost3 = document.getElementById("reactionsChart3").getContext("2d");
var ctx = document.getElementById("periodChart").getContext("2d");

$.getJSON('rest/drawPostGraphic',function(data)
		{
		 
		 myNewChart1 = new Chart(ctxPost1).Radar(data[0], options);
		 myNewChart2 = new Chart(ctxPost2).Radar(data[1], options);
		 myNewChart3 = new Chart(ctxPost3).Radar(data[2], options);
		});
$.getJSON('rest/drawPerWeekGraphic',function(data)
		{
			 myNewChart = new Chart(ctx).Line(data[0], options);
		});



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
		 $.getJSON('rest/drawPostGraphic',function(data)
			{
			 
			 myNewChart1 = new Chart(ctxPost1).Radar(data[0], options);
			 myNewChart2 = new Chart(ctxPost2).Radar(data[1], options);
			 myNewChart3 = new Chart(ctxPost3).Radar(data[2], options);
			});
		 $.getJSON('rest/drawPerWeekGraphic',function(data)
		{
			 myNewChart = new Chart(ctx).Line(data[0], options);
		});

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
		
		$.getJSON('rest/drawPostGraphic',function(data)
				{
				 
				 myNewChart1 = new Chart(ctxPost1).Radar(data[3], options);
				 myNewChart2 = new Chart(ctxPost2).Radar(data[4], options);
				 myNewChart3 = new Chart(ctxPost3).Radar(data[5], options);
				});
			 $.getJSON('rest/drawPerWeekGraphic',function(data)
			{
				 myNewChart = new Chart(ctx).Line(data[1], options);
			});
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
		
		
		$.getJSON('rest/drawPostGraphic',function(data)
				{
				 
				 myNewChart1 = new Chart(ctxPost1).Radar(data[6], options);
				 myNewChart2 = new Chart(ctxPost2).Radar(data[7], options);
				 myNewChart3 = new Chart(ctxPost3).Radar(data[8], options);
				});
			 $.getJSON('rest/drawPerWeekGraphic',function(data)
			{
				 myNewChart = new Chart(ctx).Line(data[2], options);
			});
	});
	
});


