Chart.defaults.global.tooltipTemplate= "<%=label%>: <%= value %>";

//START TOP TEN FOLLOWERS
			
			//###################################3
var toptenChartAccount1 =null;
var toptenChartAccount2 =null;
var toptenChartAccount3 =null;
			
		 	    var barToptenOptions = {
		 	        scaleBeginAtZero: true,
		 	        scaleShowGridLines: true,
		 	        scaleGridLineColor: "rgba(0,0,0,.05)",
		 	        scaleGridLineWidth: 1,
		 	        barShowStroke: true,
		 	        barStrokeWidth: 2,
		 	        barValueSpacing: 25,
		 	        barDatasetSpacing: 15,
		 	        responsive: true,
		 	       multiTooltipTemplate: "<%= datasetLabel%>: <%= value %>"
		 	    }
		 	    
		 	 var ctxToptenAccount1 = document.getElementById("barChartTopTenAccount1").getContext("2d");
		 	 var ctxToptenAccount2 = document.getElementById("barChartTopTenAccount2").getContext("2d");
		 	 var ctxToptenAccount3 = document.getElementById("barChartTopTenAccount3").getContext("2d");
	
		 	//get JSON
		 	
		 $.getJSON('rest/drawToptenGraphic',function(data){

		 		toptenChartAccount1 = new Chart(ctxToptenAccount1).Bar(data[0], barToptenOptions);
		 		toptenChartAccount2 = new Chart(ctxToptenAccount2).Bar(data[1], barToptenOptions);
			 	toptenChartAccount3 = new Chart(ctxToptenAccount3).Bar(data[2], barToptenOptions);
	 		});
		 	//End get JSON		 	 

		 	
		 	    

//END TOP TEN FOLLOWERS

$("#btnTopMensual").click(function() {
	
	$('#btnTopMensual').addClass('active');
	$('#btnTopTrimestral').removeClass('active');
	$('#btnTopSemestral').removeClass('active');
	
	 
	 if($('#selMeses').children('option')!=null)
		{
			$('#selMeses').children('option').remove();
		}
	if($('#selMeses').children('optgroup') !=null)
		{
		$('#selMeses').children('optgroup').remove();
		}
	$('#selMeses').append("<option>Enero</option>");

	
	 if(toptenChartAccount1 != null){
		 toptenChartAccount1.destroy();
	}
	 if(toptenChartAccount2 != null){
		 toptenChartAccount2.destroy();
	}
	 if(toptenChartAccount3 != null){
		 toptenChartAccount3.destroy();
	}
	 
	 $.getJSON('rest/drawToptenGraphic',function(data){

		toptenChartAccount1 = new Chart(ctxToptenAccount1).Bar(data[0], barToptenOptions);
	 	toptenChartAccount2 = new Chart(ctxToptenAccount2).Bar(data[1], barToptenOptions);
		toptenChartAccount3 = new Chart(ctxToptenAccount3).Bar(data[2], barToptenOptions);
		});
	 
 });	 	    

$("#btnTopTrimestral").click(function() {
	
	 $('#btnTopMensual').removeClass('active');
	 $('#btnTopTrimestral').addClass('active');
	 $('#btnTopSemestral').removeClass('active');
	
	 if($('#selMeses').children('option')!=null)
		{
			$('#selMeses').children('option').remove();
		}
	if($('#selMeses').children('optgroup') !=null)
		{
		$('#selMeses').children('optgroup').remove();
		}
	$('#selMeses').append("<optgroup label='Trimestre'><option>Ene/Feb/Mar</option></optgroup>");
	
	if(toptenChartAccount1 != null){
		 toptenChartAccount1.destroy();
	}
	 if(toptenChartAccount2 != null){
		 toptenChartAccount2.destroy();
	}
	 if(toptenChartAccount3 != null){
		 toptenChartAccount3.destroy();
	}
	 
	 $.getJSON('rest/drawToptenGraphic',function(data){
		 
			toptenChartAccount1 = new Chart(ctxToptenAccount1).Bar(data[3], barToptenOptions);
		 	toptenChartAccount2 = new Chart(ctxToptenAccount2).Bar(data[4], barToptenOptions);
			toptenChartAccount3 = new Chart(ctxToptenAccount3).Bar(data[5], barToptenOptions);
			});
	 
	 
});
$("#btnTopSemestral").click(function() {
	
	 $('#btnTopMensual').removeClass('active');
	 $('#btnTopTrimestral').removeClass('active');
	 $('#btnTopSemestral').addClass('active');
	 
	 if($('#selMeses').children('option')!=null)
		{
			$('#selMeses').children('option').remove();
		}
	if($('#selMeses').children('optgroup') !=null)
		{
		$('#selMeses').children('optgroup').remove();
		}
	$('#selMeses').append("<optgroup label='Semestre'><option>Ene - Jun</option></optgroup>");

	if(toptenChartAccount1 != null){
		 toptenChartAccount1.destroy();
	}
	 if(toptenChartAccount2 != null){
		 toptenChartAccount2.destroy();
	}
	 if(toptenChartAccount3 != null){
		 toptenChartAccount3.destroy();
	}

	 $.getJSON('rest/drawToptenGraphic',function(data){
		 
			toptenChartAccount1 = new Chart(ctxToptenAccount1).Bar(data[6], barToptenOptions);
		 	toptenChartAccount2 = new Chart(ctxToptenAccount2).Bar(data[7], barToptenOptions);
			toptenChartAccount3 = new Chart(ctxToptenAccount3).Bar(data[8], barToptenOptions);
			});
});
