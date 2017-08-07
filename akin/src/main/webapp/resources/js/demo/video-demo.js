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
		
		 $('#percCuenta1').text("88%") ;
		 $('#percCuenta1_num').css('width', '88%');
		 
		 $('#percCuenta2').text("94%") ;
		 $('#percCuenta2_num').css('width', '94%');
		
		 $('#percCuenta3').text("83%") ;
		 $('#percCuenta3_num').css('width', '83%');
		 
		 $('#percCuenta4').text("89%") ;
		 $('#percCuenta4_num').css('width', '89%');
		
		 
		 
		//##################################//
		 $('#percCuenta1_a').text("90.1%") ;
			$('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
			$('#percCuenta1_numa').css('width', '99.1%');
			 
			$('#percCuenta1_b').text("0.9%") ;
			$('#percCuenta1_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
			$('#percCuenta1_numb').css('width', '0.9%');
			
			$('#percCuenta2_a').text("97.5%") ;
			$('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
			$('#percCuenta2_numa').css('width', '97.5%');
			 
			$('#percCuenta2_b').text("2.5%") ;
			$('#percCuenta2_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
			$('#percCuenta2_numb').css('width', '2.5%');
			
			$('#percCuenta3_a').text("81.1%") ;
			$('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
			$('#percCuenta3_numa').css('width', '81.1%');
			 
			$('#percCuenta3_b').text("18.9%") ;
			$('#percCuenta3_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
			$('#percCuenta3_numb').css('width', '18.9%');
			
			
			$('#percCuenta4_a').text("66.6%") ;
			$('#percCuenta4_a').append("<i class='fa fa-level-up text-navy'></i>");
			$('#percCuenta4_numa').css('width', '66.6%');
			 
			$('#percCuenta4_b').text("33.4%") ;
			$('#percCuenta4_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
			$('#percCuenta4_numb').css('width', '33.4%');
			
			
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
		
		$('#percCuenta1').text("87%") ;
		$('#percCuenta1_num').css('width', '87%');
		 
		$('#percCuenta2').text("93%") ;
		$('#percCuenta2_num').css('width', '93%');
		
		$('#percCuenta3').text("82%") ;
		$('#percCuenta3_num').css('width', '82%');
		
		$('#percCuenta4').text("90%") ;
		$('#percCuenta4_num').css('width', '90%');
		
		//##################################//
		$('#percCuenta1_a').text("98.6%") ;
		$('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta1_numa').css('width', '98.6%');
		 
		$('#percCuenta1_b').text("1.4%") ;
		$('#percCuenta1_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta1_numb').css('width', '1.4%');
		
		$('#percCuenta2_a').text("97.6%") ;
		$('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta2_numa').css('width', '97.6%');
		 
		$('#percCuenta2_b').text("2.4%") ;
		$('#percCuenta2_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta2_numb').css('width', '2.4%');
		
		$('#percCuenta3_a').text("78.8%") ;
		$('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta3_numa').css('width', '78.8%');
		 
		$('#percCuenta3_b').text("21.2%") ;
		$('#percCuenta3_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta3_numb').css('width', '21.2%');
		
		
		$('#percCuenta4_a').text("87.4%") ;
		$('#percCuenta4_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta4_numa').css('width', '87.4%');
		 
		$('#percCuenta4_b').text("12.6%") ;
		$('#percCuenta4_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta4_numb').css('width', '12.6%');
		
		
		
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
		
		$('#percCuenta1').text("43%") ;
		$('#percCuenta1_num').css('width', '43%');
		
		$('#percCuenta2').text("47%") ;
		$('#percCuenta2_num').css('width', '47%');
		
		$('#percCuenta3').text("44%") ;
		$('#percCuenta3_num').css('width', '44%');
		
		$('#percCuenta4').text("43%") ;
		$('#percCuenta4_num').css('width', '43%');
		
		
		//##################################//
		$('#percCuenta1_a').text("64.6%") ;
		$('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta1_numa').css('width', '64.6%');
		 
		$('#percCuenta1_b').text("35.4%") ;
		$('#percCuenta1_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta1_numb').css('width', '35.4%');
		
		$('#percCuenta2_a').text("97.5%") ;
		$('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta2_numa').css('width', '97.5%');
		 
		$('#percCuenta2_b').text("2.5%") ;
		$('#percCuenta2_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta2_numb').css('width', '2.5%');
		
		$('#percCuenta3_a').text("81.1%") ;
		$('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta3_numa').css('width', '81.1%');
		 
		$('#percCuenta3_b').text("18.9%") ;
		$('#percCuenta3_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta3_numb').css('width', '18.9%');
		
		
		$('#percCuenta4_a').text("66.6%") ;
		$('#percCuenta4_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta4_numa').css('width', '66.6%');
		 
		$('#percCuenta4_b').text("33.4%") ;
		$('#percCuenta4_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta4_numb').css('width', '33.4%');
		
		
		
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


