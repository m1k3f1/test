Chart.defaults.global.tooltipTemplate= "<%=label%>: <%= value %>";

    var radarOptions = {
        scaleShowLine: true,
        angleShowLineOut: true,
        scaleShowLabels: false,
        scaleBeginAtZero: true,
        angleLineColor: "rgba(0,0,0,.1)",
        angleLineWidth: 1,
        pointLabelFontFamily: "'Arial'",
        pointLabelFontStyle: "normal",
        pointLabelFontSize: 10,
        pointLabelFontColor: "#666",
        pointDot: true,
        pointDotRadius: 3,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        responsive: true,
        multiTooltipTemplate: "<%= datasetLabel%>: <%= value %>"
    }
    
    
    //Education
    var ctxEducation1Radar = document.getElementById("educationChart1").getContext("2d");
    var ctxEducation2Radar = document.getElementById("educationChart2").getContext("2d");
    var ctxEducation3Radar = document.getElementById("educationChart3").getContext("2d");
    var ctxEducation4Radar = document.getElementById("educationChart4").getContext("2d");
    var ctxOccupation1Radar = document.getElementById("occupationChart1").getContext("2d");
    var ctxOccupation2Radar = document.getElementById("occupationChart2").getContext("2d");
    var ctxOccupation3Radar = document.getElementById("occupationChart3").getContext("2d");
    var ctxOccupation4Radar = document.getElementById("occupationChart4").getContext("2d");
    var ctxCivilStatus1Radar = document.getElementById("civilStatusChart1").getContext("2d");
    var ctxCivilStatus2Radar = document.getElementById("civilStatusChart2").getContext("2d");
    var ctxCivilStatus3Radar = document.getElementById("civilStatusChart3").getContext("2d");
    var ctxCivilStatus4Radar = document.getElementById("civilStatusChart4").getContext("2d");
    var ctxReligion1Radar = document.getElementById("religionChart1").getContext("2d");
    var ctxReligion2Radar = document.getElementById("religionChart2").getContext("2d");
    var ctxReligion3Radar = document.getElementById("religionChart3").getContext("2d");
    var ctxReligion4Radar = document.getElementById("religionChart4").getContext("2d");
    var ctxPolitical1Radar = document.getElementById("politicalChart1").getContext("2d");
    var ctxPolitical2Radar = document.getElementById("politicalChart2").getContext("2d");
    var ctxPolitical3Radar = document.getElementById("politicalChart3").getContext("2d");
    var ctxPolitical4Radar = document.getElementById("politicalChart4").getContext("2d");
    
    var radarEducation1Chart = null;
    var radarEducation2Chart = null;
    var radarEducation3Chart = null;
    var radarEducation4Chart = null;
    var radarOccupation1Chart = null;
    var radarOccupation2Chart = null;
    var radarOccupation3Chart = null;
    var radarOccupation4Chart = null;
    var radarCivilStatus1Chart = null;
    var radarCivilStatus2Chart = null;
    var radarCivilStatus3Chart = null;
    var radarCivilStatus4Chart = null;
    var radarReligion1Chart = null;
    var radarReligion2Chart = null;
    var radarReligion3Chart = null;
    var radarReligion4Chart = null;
    var radarPolitical1Chart = null;
    var radarPolitical2Chart = null;
    var radarPolitical3Chart = null;
    var radarPolitical4Chart = null;
    $.getJSON('rest/drawDemographicGraphic',function(data)
			{
    	
    radarEducation1Chart = new Chart(ctxEducation1Radar).Radar(data[0], radarOptions);
    radarEducation2Chart = new Chart(ctxEducation2Radar).Radar(data[1], radarOptions);
    radarEducation3Chart = new Chart(ctxEducation3Radar).Radar(data[2], radarOptions);
    radarEducation4Chart = new Chart(ctxEducation4Radar).Radar(data[3], radarOptions);
    
   //Occupation
    radarOccupation1Chart = new Chart(ctxOccupation1Radar).Radar(data[4], radarOptions);
    radarOccupation2Chart = new Chart(ctxOccupation2Radar).Radar(data[5], radarOptions);
    radarOccupation3Chart = new Chart(ctxOccupation3Radar).Radar(data[6], radarOptions);
    radarOccupation4Chart = new Chart(ctxOccupation4Radar).Radar(data[7], radarOptions);
    //Civil Status
    radarCivilStatus1Chart = new Chart(ctxCivilStatus1Radar).Radar(data[8], radarOptions);
    radarCivilStatus2Chart = new Chart(ctxCivilStatus2Radar).Radar(data[9], radarOptions);
    radarCivilStatus3Chart = new Chart(ctxCivilStatus3Radar).Radar(data[10], radarOptions);
    radarCivilStatus4Chart = new Chart(ctxCivilStatus4Radar).Radar(data[11], radarOptions);
    //Religion Preferences
    radarReligion1Chart = new Chart(ctxReligion1Radar).Radar(data[12], radarOptions);
    radarReligion2Chart = new Chart(ctxReligion2Radar).Radar(data[13], radarOptions);
    radarReligion3Chart = new Chart(ctxReligion3Radar).Radar(data[14], radarOptions);
    radarReligion4Chart = new Chart(ctxReligion4Radar).Radar(data[15], radarOptions);
    //Political Preferences
    radarPolitical1Chart = new Chart(ctxPolitical1Radar).Radar(data[16], radarOptions);
    radarPolitical2Chart = new Chart(ctxPolitical2Radar).Radar(data[17], radarOptions);
    radarPolitical3Chart = new Chart(ctxPolitical3Radar).Radar(data[18], radarOptions);
    radarPolitical4Chart = new Chart(ctxPolitical4Radar).Radar(data[19], radarOptions);
			});
    
$("#btnDemMensual").click(function() {
	
	$('#btnDemMensual').addClass('active');
	$('#btnDemTrimestral').removeClass('active');
	$('#btnDemSemestral').removeClass('active');
 	
	
	$('#percEdCuenta1_h').text("62%") ;
	$('#percEdCuenta1_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percEdCuenta1_numh').css('width', '62%');
	$('#percEdCuenta1_m').text("15%") ;
	$('#percEdCuenta1_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percEdCuenta1_numm').css('width', '15%');
	
	$('#percEdCuenta2_h').text("23%") ;
	$('#percEdCuenta2_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percEdCuenta2_numh').css('width', '23%');
	$('#percEdCuenta2_m').text("11%") ;
	$('#percEdCuenta2_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percEdCuenta2_numm').css('width', '11%');
	
	$('#percEdCuenta3_h').text("53%") ;
	$('#percEdCuenta3_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percEdCuenta3_numh').css('width', '53%');
	$('#percEdCuenta3_m').text("2%") ;
	$('#percEdCuenta3_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percEdCuenta3_numm').css('width', '2%');
	
	$('#percProfCuenta1_h').text("23%") ;
	$('#percProfCuenta1_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percProfCuenta1_numh').css('width', '23%');
	$('#percProfCuenta1_m').text("1%") ;
	$('#percProfCuenta1_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percProfCuenta1_numm').css('width', '1%');
	
	$('#percProfCuenta2_h').text("45%") ;
	$('#percProfCuenta2_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percProfCuenta2_numh').css('width', '45');
	$('#percProfCuenta2_m').text("5%") ;
	$('#percProfCuenta2_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percProfCuenta2_numm').css('width', '5%');
	
	$('#percProfCuenta3_h').text("69%") ;
	$('#percProfCuenta3_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percProfCuenta3_numh').css('width', '69%');
	$('#percProfCuenta3_m').text("11%") ;
	$('#percProfCuenta3_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percProfCuenta3_numm').css('width', '11%');
	
	$('#percCivilCuenta1_h').text("53%") ;
	$('#percCivilCuenta1_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percCivilCuenta1_numh').css('width', '53%');
	$('#percCivilCuenta1_m').text("13%") ;
	$('#percCivilCuenta1_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percCivilCuenta1_numm').css('width', '13%');
	
	$('#percCivilCuenta2_h').text("62%") ;
	$('#percCivilCuenta2_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percCivilCuenta2_numh').css('width', '62%');
	$('#percCivilCuenta2_m').text("15%") ;
	$('#percCivilCuenta2_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percCivilCuenta2_numm').css('width', '15%');
	
	$('#percCivilCuenta3_h').text("41%") ;
	$('#percCivilCuenta3_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percCivilCuenta3_numh').css('width', '41%');
	$('#percCivilCuenta3_m').text("3%") ;
	$('#percCivilCuenta3_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percCivilCuenta3_numm').css('width', '3%');
	
	$('#percRelCuenta1_h').text("31%") ;
	$('#percRelCuenta1_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percRelCuenta1_numh').css('width', '31%');
	$('#percRelCuenta1_m').text("5%") ;
	$('#percRelCuenta1_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percRelCuenta1_numm').css('width', '5%');
	
	$('#percRelCuenta2_h').text("32%") ;
	$('#percRelCuenta2_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percRelCuenta2_numh').css('width', '32%');
	$('#percRelCuenta2_m').text("14%") ;
	$('#percRelCuenta2_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percRelCuenta2_numm').css('width', '14%');
	
	$('#percRelCuenta3_h').text("49%") ;
	$('#percRelCuenta3_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percRelCuenta3_numh').css('width', '49%');
	$('#percRelCuenta3_m').text("3%") ;
	$('#percRelCuenta3_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percRelCuenta3_numm').css('width', '3%');
	
	$('#percPolCuenta1_h').text("35%") ;
	$('#percPolCuenta1_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percPolCuenta1_numh').css('width', '35');
	$('#percPolCuenta1_m').text("18%") ;
	$('#percPolCuenta1_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percPolCuenta1_numm').css('width', '18%');
	
	$('#percPolCuenta2_h').text("67%") ;
	$('#percPolCuenta2_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percPolCuenta2_numh').css('width', '67%');
	$('#percPolCuenta2_m').text("13%") ;
	$('#percPolCuenta2_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percPolCuenta2_numm').css('width', '13%');
	
	$('#percPolCuenta3_h').text("45%") ;
	$('#percPolCuenta3_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percPolCuenta3_numh').css('width', '45%');
	$('#percPolCuenta3_m').text("8%") ;
	$('#percPolCuenta3_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percPolCuenta3_numm').css('width', '8%');
	
	 if($('#selMeses').children('option')!=null)
		{
			$('#selMeses').children('option').remove();
		}
	if($('#selMeses').children('optgroup') !=null)
		{
		$('#selMeses').children('optgroup').remove();
		}
	$('#selMeses').append("<option>Enero</option>");

	
	if(radarEducation1Chart != null){
		radarEducation1Chart.destroy();
	}
	if(radarEducation2Chart != null){
		radarEducation2Chart.destroy();
	}
	if(radarEducation3Chart != null){
		radarEducation3Chart.destroy();
	}
	if(radarEducation4Chart != null){
		radarEducation4Chart.destroy();
	}
	if(radarOccupation1Chart != null){
		radarOccupation1Chart.destroy();
	}
	if(radarOccupation2Chart != null){
		radarOccupation2Chart.destroy();
	}
	if(radarOccupation3Chart != null){
		radarOccupation3Chart.destroy();
	}
	if(radarOccupation4Chart != null){
		radarOccupation4Chart.destroy();
	}
	if(radarCivilStatus1Chart != null){
		radarCivilStatus1Chart.destroy();
	}
	if(radarCivilStatus2Chart != null){
		radarCivilStatus2Chart.destroy();
	}
	if(radarCivilStatus3Chart != null){
		radarCivilStatus3Chart.destroy();
	}
	if(radarCivilStatus4Chart != null){
		radarCivilStatus4Chart.destroy();
	}
	if(radarReligion1Chart != null){
		radarReligion1Chart.destroy();
	}
	if(radarReligion2Chart != null){
		radarReligion2Chart.destroy();
	}
	if(radarReligion3Chart != null){
		radarReligion3Chart.destroy();
	}
	if(radarReligion4Chart != null){
		radarReligion4Chart.destroy();
	}
	if(radarPolitical1Chart != null){
		radarPolitical1Chart.destroy();
	}
	if(radarPolitical2Chart != null){
		radarPolitical2Chart.destroy();
	}
	if(radarPolitical3Chart != null){
		radarPolitical3Chart.destroy();
	}
	if(radarPolitical4Chart != null){
		radarPolitical4Chart.destroy();
	}
	
	
	 $.getJSON('rest/drawDemographicGraphic',function(data)
		{
	    	
		    radarEducation1Chart = new Chart(ctxEducation1Radar).Radar(data[0], radarOptions);
		    radarEducation2Chart = new Chart(ctxEducation2Radar).Radar(data[1], radarOptions);
		    radarEducation3Chart = new Chart(ctxEducation3Radar).Radar(data[2], radarOptions);
		    radarEducation3Chart = new Chart(ctxEducation3Radar).Radar(data[3], radarOptions);
		    
		   //Occupation
		    radarOccupation1Chart = new Chart(ctxOccupation1Radar).Radar(data[4], radarOptions);
		    radarOccupation2Chart = new Chart(ctxOccupation2Radar).Radar(data[5], radarOptions);
		    radarOccupation3Chart = new Chart(ctxOccupation3Radar).Radar(data[6], radarOptions);
		    radarOccupation4Chart = new Chart(ctxOccupation4Radar).Radar(data[7], radarOptions);
		    //Civil Status
		    radarCivilStatus1Chart = new Chart(ctxCivilStatus1Radar).Radar(data[8], radarOptions);
		    radarCivilStatus2Chart = new Chart(ctxCivilStatus2Radar).Radar(data[9], radarOptions);
		    radarCivilStatus3Chart = new Chart(ctxCivilStatus3Radar).Radar(data[10], radarOptions);
		    radarCivilStatus4Chart = new Chart(ctxCivilStatus4Radar).Radar(data[11], radarOptions);
		    //Religion Preferences
		    radarReligion1Chart = new Chart(ctxReligion1Radar).Radar(data[12], radarOptions);
		    radarReligion2Chart = new Chart(ctxReligion2Radar).Radar(data[13], radarOptions);
		    radarReligion3Chart = new Chart(ctxReligion3Radar).Radar(data[14], radarOptions);
		    radarReligion4Chart = new Chart(ctxReligion4Radar).Radar(data[15], radarOptions);
		    //Political Preferences
		    radarPolitical1Chart = new Chart(ctxPolitical1Radar).Radar(data[16], radarOptions);
		    radarPolitical2Chart = new Chart(ctxPolitical2Radar).Radar(data[17], radarOptions);
		    radarPolitical3Chart = new Chart(ctxPolitical3Radar).Radar(data[18], radarOptions);
		    radarPolitical4Chart = new Chart(ctxPolitical4Radar).Radar(data[19], radarOptions);
		});
});
      
      
$("#btnDemTrimestral").click(function() {
	
	
	$('#btnDemMensual').removeClass('active');
	$('#btnDemTrimestral').addClass('active');
	$('#btnDemSemestral').removeClass('active');
 	
    
	$('#percEdCuenta1_h').text("62%") ;
	$('#percEdCuenta1_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percEdCuenta1_numh').css('width', '62%');
	$('#percEdCuenta1_m').text("1%") ;
	$('#percEdCuenta1_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percEdCuenta1_numm').css('width', '1%');
	
	$('#percEdCuenta2_h').text("52%") ;
	$('#percEdCuenta2_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percEdCuenta2_numh').css('width', '52%');
	$('#percEdCuenta2_m').text("11%") ;
	$('#percEdCuenta2_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percEdCuenta2_numm').css('width', '11%');
	
	$('#percEdCuenta3_h').text("53%") ;
	$('#percEdCuenta3_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percEdCuenta3_numh').css('width', '53%');
	$('#percEdCuenta3_m').text("5%") ;
	$('#percEdCuenta3_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percEdCuenta3_numm').css('width', '5%');
	
	$('#percEdCuenta4_h').text("53%") ;
	$('#percEdCuenta4_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percEdCuenta4_numh').css('width', '53%');
	$('#percEdCuenta4_m').text("5%") ;
	$('#percEdCuenta4_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percEdCuenta4_numm').css('width', '5%');
	
	$('#percProfCuenta1_h').text("74%") ;
	$('#percProfCuenta1_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percProfCuenta1_numh').css('width', '74%');
	$('#percProfCuenta1_m').text("3%") ;
	$('#percProfCuenta1_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percProfCuenta1_numm').css('width', '3%');
	
	$('#percProfCuenta2_h').text("41%") ;
	$('#percProfCuenta2_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percProfCuenta2_numh').css('width', '41%');
	$('#percProfCuenta2_m').text("12%") ;
	$('#percProfCuenta2_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percProfCuenta2_numm').css('width', '12%');
	
	$('#percProfCuenta3_h').text("58%") ;
	$('#percProfCuenta3_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percProfCuenta3_numh').css('width', '58%');
	$('#percProfCuenta3_m').text("18%") ;
	$('#percProfCuenta3_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percProfCuenta3_numm').css('width', '18%');
	
	$('#percProfCuenta4_h').text("58%") ;
	$('#percProfCuenta4_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percProfCuenta4_numh').css('width', '58%');
	$('#percProfCuenta4_m').text("18%") ;
	$('#percProfCuenta4_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percProfCuenta4_numm').css('width', '18%');
	
	$('#percCivilCuenta1_h').text("62%") ;
	$('#percCivilCuenta1_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percCivilCuenta1_numh').css('width', '62%');
	$('#percCivilCuenta1_m').text("7%") ;
	$('#percCivilCuenta1_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percCivilCuenta1_numm').css('width', '7%');
	
	$('#percCivilCuenta2_h').text("87%") ;
	$('#percCivilCuenta2_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percCivilCuenta2_numh').css('width', '87%');
	$('#percCivilCuenta2_m').text("12%") ;
	$('#percCivilCuenta2_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percCivilCuenta2_numm').css('width', '12%');
	
	$('#percCivilCuenta3_h').text("48%") ;
	$('#percCivilCuenta3_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percCivilCuenta3_numh').css('width', '48%');
	$('#percCivilCuenta3_m').text("5%") ;
	$('#percCivilCuenta3_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percCivilCuenta3_numm').css('width', '5%');
	
	$('#percCivilCuenta4_h').text("48%") ;
	$('#percCivilCuenta4_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percCivilCuenta4_numh').css('width', '48%');
	$('#percCivilCuenta4_m').text("5%") ;
	$('#percCivilCuenta4_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percCivilCuenta4_numm').css('width', '5%');
	
	$('#percRelCuenta1_h').text("27%") ;
	$('#percRelCuenta1_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percRelCuenta1_numh').css('width', '27%');
	$('#percRelCuenta1_m').text("13%") ;
	$('#percRelCuenta1_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percRelCuenta1_numm').css('width', '13%');
	
	$('#percRelCuenta2_h').text("78%") ;
	$('#percRelCuenta2_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percRelCuenta2_numh').css('width', '78%');
	$('#percRelCuenta2_m').text("16%") ;
	$('#percRelCuenta2_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percRelCuenta2_numm').css('width', '16%');
	
	$('#percRelCuenta3_h').text("33%") ;
	$('#percRelCuenta3_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percRelCuenta3_numh').css('width', '33%');
	$('#percRelCuenta3_m').text("4%") ;
	$('#percRelCuenta3_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percRelCuenta3_numm').css('width', '4%');
	
	$('#percRelCuenta4_h').text("33%") ;
	$('#percRelCuenta4_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percRelCuenta4_numh').css('width', '33%');
	$('#percRelCuenta4_m').text("4%") ;
	$('#percRelCuenta4_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percRelCuenta4_numm').css('width', '4%');
	
	$('#percPolCuenta1_h').text("41%") ;
	$('#percPolCuenta1_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percPolCuenta1_numh').css('width', '41');
	$('#percPolCuenta1_m').text("31%") ;
	$('#percPolCuenta1_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percPolCuenta1_numm').css('width', '31%');
	
	$('#percPolCuenta2_h').text("68%") ;
	$('#percPolCuenta2_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percPolCuenta2_numh').css('width', '68%');
	$('#percPolCuenta2_m').text("15%") ;
	$('#percPolCuenta2_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percPolCuenta2_numm').css('width', '15%');
	
	$('#percPolCuenta3_h').text("41%") ;
	$('#percPolCuenta3_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percPolCuenta3_numh').css('width', '41%');
	$('#percPolCuenta3_m').text("3%") ;
	$('#percPolCuenta3_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percPolCuenta3_numm').css('width', '3%');
	
	$('#percPolCuenta4_h').text("41%") ;
	$('#percPolCuenta4_h').append("<i class='fa fa-level-up text-navy'></i>");
	$('#percPolCuenta4_numh').css('width', '41%');
	$('#percPolCuenta4_m').text("3%") ;
	$('#percPolCuenta4_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
	$('#percPolCuenta4_numm').css('width', '3%');
	
	if($('#selMeses').children('option')!=null)
	{
		$('#selMeses').children('option').remove();
	}
	if($('#selMeses').children('optgroup') !=null)
		{
		$('#selMeses').children('optgroup').remove();
		}
	$('#selMeses').append("<optgroup label='Trimestre'><option>Ene/Feb/Mar</option></optgroup>");

	
	if(radarEducation1Chart != null){
		radarEducation1Chart.destroy();
	}
	if(radarEducation2Chart != null){
		radarEducation2Chart.destroy();
	}
	if(radarEducation3Chart != null){
		radarEducation3Chart.destroy();
	}
	if(radarEducation4Chart != null){
		radarEducation4Chart.destroy();
	}
	if(radarOccupation1Chart != null){
		radarOccupation1Chart.destroy();
	}
	if(radarOccupation2Chart != null){
		radarOccupation2Chart.destroy();
	}
	if(radarOccupation3Chart != null){
		radarOccupation3Chart.destroy();
	}
	if(radarOccupation4Chart != null){
		radarOccupation4Chart.destroy();
	}
	if(radarCivilStatus1Chart != null){
		radarCivilStatus1Chart.destroy();
	}
	if(radarCivilStatus2Chart != null){
		radarCivilStatus2Chart.destroy();
	}
	if(radarCivilStatus3Chart != null){
		radarCivilStatus3Chart.destroy();
	}
	if(radarCivilStatus4Chart != null){
		radarCivilStatus4Chart.destroy();
	}
	if(radarReligion1Chart != null){
		radarReligion1Chart.destroy();
	}
	if(radarReligion2Chart != null){
		radarReligion2Chart.destroy();
	}
	if(radarReligion3Chart != null){
		radarReligion3Chart.destroy();
	}
	if(radarReligion4Chart != null){
		radarReligion4Chart.destroy();
	}
	if(radarPolitical1Chart != null){
		radarPolitical1Chart.destroy();
	}
	if(radarPolitical2Chart != null){
		radarPolitical2Chart.destroy();
	}
	if(radarPolitical3Chart != null){
		radarPolitical3Chart.destroy();
	}
	if(radarPolitical4Chart != null){
		radarPolitical4Chart.destroy();
	}
	
	
	 $.getJSON('rest/drawDemographicGraphic',function(data)
				{
			    	
				    radarEducation1Chart = new Chart(ctxEducation1Radar).Radar(data[20], radarOptions);
				    radarEducation2Chart = new Chart(ctxEducation2Radar).Radar(data[21], radarOptions);
				    radarEducation3Chart = new Chart(ctxEducation3Radar).Radar(data[22], radarOptions);
				    radarEducation4Chart = new Chart(ctxEducation4Radar).Radar(data[23], radarOptions);
				    
				   //Occupation
				    radarOccupation1Chart = new Chart(ctxOccupation1Radar).Radar(data[24], radarOptions);
				    radarOccupation2Chart = new Chart(ctxOccupation2Radar).Radar(data[25], radarOptions);
				    radarOccupation3Chart = new Chart(ctxOccupation3Radar).Radar(data[26], radarOptions);
				    radarOccupation4Chart = new Chart(ctxOccupation4Radar).Radar(data[27], radarOptions);
				    //Civil Status
				    radarCivilStatus1Chart = new Chart(ctxCivilStatus1Radar).Radar(data[28], radarOptions);
				    radarCivilStatus2Chart = new Chart(ctxCivilStatus2Radar).Radar(data[29], radarOptions);
				    radarCivilStatus3Chart = new Chart(ctxCivilStatus3Radar).Radar(data[30], radarOptions);
				    radarCivilStatus4Chart = new Chart(ctxCivilStatus4Radar).Radar(data[31], radarOptions);
				    //Religion Preferences
				    radarReligion1Chart = new Chart(ctxReligion1Radar).Radar(data[32], radarOptions);
				    radarReligion2Chart = new Chart(ctxReligion2Radar).Radar(data[33], radarOptions);
				    radarReligion3Chart = new Chart(ctxReligion3Radar).Radar(data[34], radarOptions);
				    radarReligion4Chart = new Chart(ctxReligion4Radar).Radar(data[35], radarOptions);
				    //Political Preferences
				    radarPolitical1Chart = new Chart(ctxPolitical1Radar).Radar(data[36], radarOptions);
				    radarPolitical2Chart = new Chart(ctxPolitical2Radar).Radar(data[37], radarOptions);
				    radarPolitical3Chart = new Chart(ctxPolitical3Radar).Radar(data[38], radarOptions);
				    radarPolitical4Chart = new Chart(ctxPolitical4Radar).Radar(data[39], radarOptions);
				});
});

 $("#btnDemSemestral").click(function() {
	 
	 $('#btnDemMensual').removeClass('active');
	 $('#btnDemTrimestral').removeClass('active');
	 $('#btnDemSemestral').addClass('active');
  	
	 $('#percEdCuenta1_h').text("62%") ;
		$('#percEdCuenta1_h').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percEdCuenta1_numh').css('width', '62%');
		$('#percEdCuenta1_m').text("15%") ;
		$('#percEdCuenta1_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percEdCuenta1_numm').css('width', '15%');
		
		$('#percEdCuenta2_h').text("23%") ;
		$('#percEdCuenta2_h').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percEdCuenta2_numh').css('width', '23%');
		$('#percEdCuenta2_m').text("11%") ;
		$('#percEdCuenta2_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percEdCuenta2_numm').css('width', '11%');
		
		$('#percEdCuenta3_h').text("53%") ;
		$('#percEdCuenta3_h').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percEdCuenta3_numh').css('width', '53%');
		$('#percEdCuenta3_m').text("2%") ;
		$('#percEdCuenta3_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percEdCuenta3_numm').css('width', '2%');
		
		$('#percEdCuenta4_h').text("53%") ;
		$('#percEdCuenta4_h').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percEdCuenta4_numh').css('width', '53%');
		$('#percEdCuenta4_m').text("2%") ;
		$('#percEdCuenta4_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percEdCuenta4_numm').css('width', '2%');
		
		$('#percProfCuenta1_h').text("23%") ;
		$('#percProfCuenta1_h').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percProfCuenta1_numh').css('width', '23%');
		$('#percProfCuenta1_m').text("1%") ;
		$('#percProfCuenta1_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percProfCuenta1_numm').css('width', '1%');
		
		$('#percProfCuenta2_h').text("45%") ;
		$('#percProfCuenta2_h').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percProfCuenta2_numh').css('width', '45');
		$('#percProfCuenta2_m').text("5%") ;
		$('#percProfCuenta2_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percProfCuenta2_numm').css('width', '5%');
		
		$('#percProfCuenta3_h').text("69%") ;
		$('#percProfCuenta3_h').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percProfCuenta3_numh').css('width', '69%');
		$('#percProfCuenta3_m').text("11%") ;
		$('#percProfCuenta3_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percProfCuenta3_numm').css('width', '11%');
		
		$('#percProfCuenta4_h').text("69%") ;
		$('#percProfCuenta4_h').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percProfCuenta4_numh').css('width', '69%');
		$('#percProfCuenta4_m').text("11%") ;
		$('#percProfCuenta4_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percProfCuenta4_numm').css('width', '11%');
		
		$('#percCivilCuenta1_h').text("53%") ;
		$('#percCivilCuenta1_h').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCivilCuenta1_numh').css('width', '53%');
		$('#percCivilCuenta1_m').text("13%") ;
		$('#percCivilCuenta1_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCivilCuenta1_numm').css('width', '13%');
		
		$('#percCivilCuenta2_h').text("62%") ;
		$('#percCivilCuenta2_h').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCivilCuenta2_numh').css('width', '62%');
		$('#percCivilCuenta2_m').text("15%") ;
		$('#percCivilCuenta2_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCivilCuenta2_numm').css('width', '15%');
		
		$('#percCivilCuenta3_h').text("41%") ;
		$('#percCivilCuenta3_h').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCivilCuenta3_numh').css('width', '41%');
		$('#percCivilCuenta3_m').text("3%") ;
		$('#percCivilCuenta3_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCivilCuenta3_numm').css('width', '3%');
		
		$('#percCivilCuenta4_h').text("41%") ;
		$('#percCivilCuenta4_h').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percCivilCuenta4_numh').css('width', '41%');
		$('#percCivilCuenta4_m').text("3%") ;
		$('#percCivilCuenta4_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percCivilCuenta4_numm').css('width', '3%');
		
		$('#percRelCuenta1_h').text("31%") ;
		$('#percRelCuenta1_h').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percRelCuenta1_numh').css('width', '31%');
		$('#percRelCuenta1_m').text("5%") ;
		$('#percRelCuenta1_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percRelCuenta1_numm').css('width', '5%');
		
		$('#percRelCuenta2_h').text("32%") ;
		$('#percRelCuenta2_h').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percRelCuenta2_numh').css('width', '32%');
		$('#percRelCuenta2_m').text("14%") ;
		$('#percRelCuenta2_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percRelCuenta2_numm').css('width', '14%');
		
		$('#percRelCuenta3_h').text("49%") ;
		$('#percRelCuenta3_h').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percRelCuenta3_numh').css('width', '49%');
		$('#percRelCuenta3_m').text("3%") ;
		$('#percRelCuenta3_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percRelCuenta3_numm').css('width', '3%');
		
		$('#percRelCuenta4_h').text("49%") ;
		$('#percRelCuenta4_h').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percRelCuenta4_numh').css('width', '49%');
		$('#percRelCuenta4_m').text("3%") ;
		$('#percRelCuenta4_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percRelCuenta4_numm').css('width', '3%');
		
		$('#percPolCuenta1_h').text("35%") ;
		$('#percPolCuenta1_h').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percPolCuenta1_numh').css('width', '35');
		$('#percPolCuenta1_m').text("18%") ;
		$('#percPolCuenta1_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percPolCuenta1_numm').css('width', '18%');
		
		$('#percPolCuenta2_h').text("67%") ;
		$('#percPolCuenta2_h').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percPolCuenta2_numh').css('width', '67%');
		$('#percPolCuenta2_m').text("13%") ;
		$('#percPolCuenta2_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percPolCuenta2_numm').css('width', '13%');
		
		$('#percPolCuenta3_h').text("45%") ;
		$('#percPolCuenta3_h').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percPolCuenta3_numh').css('width', '45%');
		$('#percPolCuenta3_m').text("8%") ;
		$('#percPolCuenta3_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percPolCuenta3_numm').css('width', '8%');
		
		$('#percPolCuenta4_h').text("45%") ;
		$('#percPolCuenta4_h').append("<i class='fa fa-level-up text-navy'></i>");
		$('#percPolCuenta4_numh').css('width', '45%');
		$('#percPolCuenta4_m').text("8%") ;
		$('#percPolCuenta4_m').append("<i class='fa fa-level-down text-navy text-warning'></i>");
		$('#percPolCuenta4_numm').css('width', '8%');
		
		if($('#selMeses').children('option')!=null)
		{
			$('#selMeses').children('option').remove();
		}
		if($('#selMeses').children('optgroup') !=null)
		{
			$('#selMeses').children('optgroup').remove();
		}
		$('#selMeses').append("<optgroup label='Semestre'><option>Ene - Jun</option></optgroup>");

	 
	 if(radarEducation1Chart != null){
			radarEducation1Chart.destroy();
		}
		if(radarEducation2Chart != null){
			radarEducation2Chart.destroy();
		}
		if(radarEducation3Chart != null){
			radarEducation3Chart.destroy();
		}
		if(radarEducation4Chart != null){
			radarEducation4Chart.destroy();
		}
		if(radarOccupation1Chart != null){
			radarOccupation1Chart.destroy();
		}
		if(radarOccupation2Chart != null){
			radarOccupation2Chart.destroy();
		}
		if(radarOccupation3Chart != null){
			radarOccupation3Chart.destroy();
		}
		if(radarOccupation4Chart != null){
			radarOccupation4Chart.destroy();
		}
		if(radarCivilStatus1Chart != null){
			radarCivilStatus1Chart.destroy();
		}
		if(radarCivilStatus2Chart != null){
			radarCivilStatus2Chart.destroy();
		}
		if(radarCivilStatus3Chart != null){
			radarCivilStatus3Chart.destroy();
		}
		if(radarCivilStatus4Chart != null){
			radarCivilStatus4Chart.destroy();
		}
		if(radarReligion1Chart != null){
			radarReligion1Chart.destroy();
		}
		if(radarReligion2Chart != null){
			radarReligion2Chart.destroy();
		}
		if(radarReligion3Chart != null){
			radarReligion3Chart.destroy();
		}
		if(radarReligion4Chart != null){
			radarReligion4Chart.destroy();
		}
		if(radarPolitical1Chart != null){
			radarPolitical1Chart.destroy();
		}
		if(radarPolitical2Chart != null){
			radarPolitical2Chart.destroy();
		}
		if(radarPolitical3Chart != null){
			radarPolitical3Chart.destroy();
		}
		if(radarPolitical4Chart != null){
			radarPolitical4Chart.destroy();
		}
		
		 $.getJSON('rest/drawDemographicGraphic',function(data)
					{
				    	
					    radarEducation1Chart = new Chart(ctxEducation1Radar).Radar(data[40], radarOptions);
					    radarEducation2Chart = new Chart(ctxEducation2Radar).Radar(data[41], radarOptions);
					    radarEducation3Chart = new Chart(ctxEducation3Radar).Radar(data[42], radarOptions);
					    radarEducation4Chart = new Chart(ctxEducation4Radar).Radar(data[43], radarOptions);
					    
					   //Occupation
					    radarOccupation1Chart = new Chart(ctxOccupation1Radar).Radar(data[44], radarOptions);
					    radarOccupation2Chart = new Chart(ctxOccupation2Radar).Radar(data[45], radarOptions);
					    radarOccupation3Chart = new Chart(ctxOccupation3Radar).Radar(data[46], radarOptions);
					    radarOccupation4Chart = new Chart(ctxOccupation4Radar).Radar(data[47], radarOptions);
					    //Civil Status
					    radarCivilStatus1Chart = new Chart(ctxCivilStatus1Radar).Radar(data[48], radarOptions);
					    radarCivilStatus2Chart = new Chart(ctxCivilStatus2Radar).Radar(data[49], radarOptions);
					    radarCivilStatus3Chart = new Chart(ctxCivilStatus3Radar).Radar(data[50], radarOptions);
					    radarCivilStatus4Chart = new Chart(ctxCivilStatus4Radar).Radar(data[51], radarOptions);
					    //Religion Preferences
					    radarReligion1Chart = new Chart(ctxReligion1Radar).Radar(data[52], radarOptions);
					    radarReligion2Chart = new Chart(ctxReligion2Radar).Radar(data[53], radarOptions);
					    radarReligion3Chart = new Chart(ctxReligion3Radar).Radar(data[54], radarOptions);
					    radarReligion4Chart = new Chart(ctxReligion4Radar).Radar(data[55], radarOptions);
					    //Political Preferences
					    radarPolitical1Chart = new Chart(ctxPolitical1Radar).Radar(data[56], radarOptions);
					    radarPolitical2Chart = new Chart(ctxPolitical2Radar).Radar(data[57], radarOptions);
					    radarPolitical3Chart = new Chart(ctxPolitical3Radar).Radar(data[58], radarOptions);
					    radarPolitical4Chart = new Chart(ctxPolitical4Radar).Radar(data[59], radarOptions);
					});
 });