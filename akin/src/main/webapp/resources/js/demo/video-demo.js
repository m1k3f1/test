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
var myNewChart4 = null;
var myNewChart = null;
var ctxPost1 = document.getElementById("reactionsChart1").getContext("2d");
var ctxPost2 = document.getElementById("reactionsChart2").getContext("2d");
var ctxPost3 = document.getElementById("reactionsChart3").getContext("2d");
var ctxPost4 = document.getElementById("reactionsChart4").getContext("2d");
var ctx = document.getElementById("periodChart").getContext("2d");

$.getJSON('rest/drawVideoReactionsGraphics',function(data)
		{
		 
		 myNewChart1 = new Chart(ctxPost1).Radar(data[0], options);
		 myNewChart2 = new Chart(ctxPost2).Radar(data[1], options);
		 myNewChart3 = new Chart(ctxPost3).Radar(data[2], options);
		 myNewChart4 = new Chart(ctxPost4).Radar(data[3], options);
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
		
		 $('#percCuenta1').text("86%") ;
		 $('#percCuenta1_num').css('width', '86%');
		 
		 $('#percCuenta2').text("88%") ;
		 $('#percCuenta2_num').css('width', '88%');
		
		 $('#percCuenta3').text("68%") ;
		 $('#percCuenta3_num').css('width', '68%');
		 
		 $('#percCuenta4').text("58%") ;
		 $('#percCuenta4_num').css('width', '58%');
		
		 
		 
		//##################################//
		 $('#percCuenta1_a').text("99%") ;
			$('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
			$('#percCuenta1_numa').css('width', '99%');
			 
			$('#percCuenta1_b').text("1%") ;
			$('#percCuenta1_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
			$('#percCuenta1_numb').css('width', '1%');
			
			$('#percCuenta2_a').text("97%") ;
			$('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
			$('#percCuenta2_numa').css('width', '97%');
			 
			$('#percCuenta2_b').text("3%") ;
			$('#percCuenta2_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
			$('#percCuenta2_numb').css('width', '3%');
			
			$('#percCuenta3_a').text("81%") ;
			$('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
			$('#percCuenta3_numa').css('width', '81%');
			 
			$('#percCuenta3_b').text("19%") ;
			$('#percCuenta3_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
			$('#percCuenta3_numb').css('width', '19%');
			
			
			$('#percCuenta4_a').text("66%") ;
			$('#percCuenta4_a').append("<i class='fa fa-level-up text-navy'></i>");
			$('#percCuenta4_numa').css('width', '66%');
			 
			$('#percCuenta4_b').text("34%") ;
			$('#percCuenta4_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
			$('#percCuenta4_numb').css('width', '34%');
			
			
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
		if(myNewChart4 != null)
		 {
			myNewChart4.destroy();
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
			 myNewChart4 = new Chart(ctxPost4).Radar(data[3], options);
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
		
		$('#percCuenta1').text("88%") ;
		$('#percCuenta1_num').css('width', '88%');
		 
		$('#percCuenta2').text("87%") ;
		$('#percCuenta2_num').css('width', '87%');
		
		$('#percCuenta3').text("64%") ;
		$('#percCuenta3_num').css('width', '64%');
		
		$('#percCuenta4').text("76%") ;
		$('#percCuenta4_num').css('width', '76%');
		
		//##################################//
		$('#percCuenta1_a').text("98%") ;
		$('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta1_numa').css('width', '98%');
		 
		$('#percCuenta1_b').text("2%") ;
		$('#percCuenta1_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta1_numb').css('width', '2%');
		
		$('#percCuenta2_a').text("97%") ;
		$('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta2_numa').css('width', '97%');
		 
		$('#percCuenta2_b').text("3%") ;
		$('#percCuenta2_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta2_numb').css('width', '3%');
		
		$('#percCuenta3_a').text("78%") ;
		$('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta3_numa').css('width', '78%');
		 
		$('#percCuenta3_b').text("22%") ;
		$('#percCuenta3_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta3_numb').css('width', '22%');
		
		
		$('#percCuenta4_a').text("87%") ;
		$('#percCuenta4_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta4_numa').css('width', '87%');
		 
		$('#percCuenta4_b').text("13%") ;
		$('#percCuenta4_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta4_numb').css('width', '13%');
		
		
		
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
		if(myNewChart4 != null)
		 {
			myNewChart4.destroy();
		 }


		if(myNewChart != null)
		 {
			myNewChart.destroy();
		 }
		
		$.getJSON('rest/drawVideoReactionsGraphics',function(data)
				{
				 
				 myNewChart1 = new Chart(ctxPost1).Radar(data[4], options);
				 myNewChart2 = new Chart(ctxPost2).Radar(data[5], options);
				 myNewChart3 = new Chart(ctxPost3).Radar(data[6], options);
				 myNewChart4 = new Chart(ctxPost4).Radar(data[7], options);
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
		
		$('#percCuenta1').text("86%") ;
		$('#percCuenta1_num').css('width', '86%');
		
		$('#percCuenta2').text("87%") ;
		$('#percCuenta2_num').css('width', '87%');
		
		$('#percCuenta3').text("65%") ;
		$('#percCuenta3_num').css('width', '65%');
		
		$('#percCuenta4').text("79%") ;
		$('#percCuenta4_num').css('width', '79%');
		
		
		//##################################//
		$('#percCuenta1_a').text("98%") ;
		$('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta1_numa').css('width', '98%');
		 
		$('#percCuenta1_b').text("2%") ;
		$('#percCuenta1_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta1_numb').css('width', '2%');
		
		$('#percCuenta2_a').text("98%") ;
		$('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta2_numa').css('width', '98%');
		 
		$('#percCuenta2_b').text("2%") ;
		$('#percCuenta2_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta2_numb').css('width', '2%');
		
		$('#percCuenta3_a').text("81%") ;
		$('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta3_numa').css('width', '81%');
		 
		$('#percCuenta3_b').text("19%") ;
		$('#percCuenta3_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta3_numb').css('width', '19%');
		
		
		$('#percCuenta4_a').text("91%") ;
		$('#percCuenta4_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta4_numa').css('width', '91%');
		 
		$('#percCuenta4_b').text("9%") ;
		$('#percCuenta4_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta4_numb').css('width', '9%');
		
		
		
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
		if(myNewChart4 != null)
		 {
			myNewChart4.destroy();
		 }

		if(myNewChart != null)
		 {
			myNewChart.destroy();
		 }
		
		
		$.getJSON('rest/drawVideoReactionsGraphics',function(data)
				{
				 
				 myNewChart1 = new Chart(ctxPost1).Radar(data[8], options);
				 myNewChart2 = new Chart(ctxPost2).Radar(data[9], options);
				 myNewChart3 = new Chart(ctxPost3).Radar(data[10], options);
				 myNewChart4 = new Chart(ctxPost4).Radar(data[11], options);
				});
			 $.getJSON('rest/drawVideoPerWeekGraphic',function(data)
			{
				 myNewChart = new Chart(ctx).Line(data[2], options);
			});
	});
	
});


