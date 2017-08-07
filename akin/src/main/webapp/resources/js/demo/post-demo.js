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

$.getJSON('rest/drawPostGraphic',function(data)
		{
		 
		 myNewChart1 = new Chart(ctxPost1).Radar(data[0], options);
		 myNewChart2 = new Chart(ctxPost2).Radar(data[1], options);
		 myNewChart3 = new Chart(ctxPost3).Radar(data[2], options);
		 myNewChart4 = new Chart(ctxPost4).Radar(data[3], options);
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
		
		 $('#percCuenta1').text("88%") ;
		 $('#percCuenta1_num').css('width', '88%');
		 
		 $('#percCuenta2').text("94%") ;
		 $('#percCuenta2_num').css('width', '94%');
		
		 $('#percCuenta3').text("83%") ;
		 $('#percCuenta3_num').css('width', '83%');
		 
		 $('#percCuenta4').text("89%") ;
		 $('#percCuenta4_num').css('width', '89%');
		
		 
		 
		//##################################//
		 $('#percCuenta1_a').text("97%") ;
			$('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
			$('#percCuenta1_numa').css('width', '97%');
			 
			$('#percCuenta1_b').text("3%") ;
			$('#percCuenta1_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
			$('#percCuenta1_numb').css('width', '3%');
			
			$('#percCuenta2_a').text("99%") ;
			$('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
			$('#percCuenta2_numa').css('width', '99%');
			 
			$('#percCuenta2_b').text("1%") ;
			$('#percCuenta2_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
			$('#percCuenta2_numb').css('width', '1%');
			
			$('#percCuenta3_a').text("92%") ;
			$('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
			$('#percCuenta3_numa').css('width', '92%');
			 
			$('#percCuenta3_b').text("8%") ;
			$('#percCuenta3_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
			$('#percCuenta3_numb').css('width', '8%');
			
			
			$('#percCuenta4_a').text("96%") ;
			$('#percCuenta4_a').append("<i class='fa fa-level-up text-navy'></i>");
			$('#percCuenta4_numa').css('width', '96%');
			 
			$('#percCuenta4_b').text("4%") ;
			$('#percCuenta4_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
			$('#percCuenta4_numb').css('width', '4%');
			
			
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
		 $.getJSON('rest/drawPostGraphic',function(data)
			{
			 
			 myNewChart1 = new Chart(ctxPost1).Radar(data[0], options);
			 myNewChart2 = new Chart(ctxPost2).Radar(data[1], options);
			 myNewChart3 = new Chart(ctxPost3).Radar(data[2], options);
			 myNewChart4 = new Chart(ctxPost4).Radar(data[3], options);
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
		
		$('#percCuenta1').text("96%") ;
		$('#percCuenta1_num').css('width', '96%');
		 
		$('#percCuenta2').text("99%") ;
		$('#percCuenta2_num').css('width', '99%');
		
		$('#percCuenta3').text("93%") ;
		$('#percCuenta3_num').css('width', '93%');
		
		$('#percCuenta4').text("97%") ;
		$('#percCuenta4_num').css('width', '97%');
		
		//##################################//
		$('#percCuenta1_a').text("96%") ;
		$('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta1_numa').css('width', '96%');
		 
		$('#percCuenta1_b').text("3%") ;
		$('#percCuenta1_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta1_numb').css('width', '3%');
		
		$('#percCuenta2_a').text("99%") ;
		$('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta2_numa').css('width', '99%');
		 
		$('#percCuenta2_b').text("1%") ;
		$('#percCuenta2_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta2_numb').css('width', '1%');
		
		$('#percCuenta3_a').text("93%") ;
		$('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta3_numa').css('width', '93%');
		 
		$('#percCuenta3_b').text("7%") ;
		$('#percCuenta3_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta3_numb').css('width', '7%');
		
		
		$('#percCuenta4_a').text("97%") ;
		$('#percCuenta4_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta4_numa').css('width', '97%');
		 
		$('#percCuenta4_b').text("3%") ;
		$('#percCuenta4_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta4_numb').css('width', '3%');
		
		
		
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
		
		$.getJSON('rest/drawPostGraphic',function(data)
				{
				 
				 myNewChart1 = new Chart(ctxPost1).Radar(data[4], options);
				 myNewChart2 = new Chart(ctxPost2).Radar(data[5], options);
				 myNewChart3 = new Chart(ctxPost3).Radar(data[6], options);
				 myNewChart4 = new Chart(ctxPost4).Radar(data[7], options);
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
		
		$('#percCuenta1').text("96%") ;
		$('#percCuenta1_num').css('width', '96%');
		
		$('#percCuenta2').text("99%") ;
		$('#percCuenta2_num').css('width', '99%');
		
		$('#percCuenta3').text("94%") ;
		$('#percCuenta3_num').css('width', '94%');
		
		$('#percCuenta4').text("97%") ;
		$('#percCuenta4_num').css('width', '97%');
		
		
		//##################################//
		$('#percCuenta1_a').text("96%") ;
		$('#percCuenta1_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta1_numa').css('width', '96%');
		 
		$('#percCuenta1_b').text("3%") ;
		$('#percCuenta1_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta1_numb').css('width', '3%');
		
		$('#percCuenta2_a').text("99%") ;
		$('#percCuenta2_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta2_numa').css('width', '99%');
		 
		$('#percCuenta2_b').text("1%") ;
		$('#percCuenta2_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta2_numb').css('width', '1%');
		
		$('#percCuenta3_a').text("94%") ;
		$('#percCuenta3_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta3_numa').css('width', '94%');
		 
		$('#percCuenta3_b').text("6%") ;
		$('#percCuenta3_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta3_numb').css('width', '6%');
		
		
		$('#percCuenta4_a').text("97%") ;
		$('#percCuenta4_a').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCuenta4_numa').css('width', '97%');
		 
		$('#percCuenta4_b').text("3%") ;
		$('#percCuenta4_b').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCuenta4_numb').css('width', '3%');
		
		
		
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
		
		
		$.getJSON('rest/drawPostGraphic',function(data)
				{
				 
				 myNewChart1 = new Chart(ctxPost1).Radar(data[8], options);
				 myNewChart2 = new Chart(ctxPost2).Radar(data[9], options);
				 myNewChart3 = new Chart(ctxPost3).Radar(data[10], options);
				 myNewChart4 = new Chart(ctxPost4).Radar(data[11], options);
				});
			 $.getJSON('rest/drawPerWeekGraphic',function(data)
			{
				 myNewChart = new Chart(ctx).Line(data[2], options);
			});
	});
	
});


