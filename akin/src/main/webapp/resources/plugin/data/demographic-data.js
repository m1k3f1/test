/** data for demographic line chart */
var educationBar = Morris.Line({
	element: 'educationLine',
	data: [
	       {y: '14 a 18 años', h:5,m:2, o:3 },
	       {y: '18 a 25 años', h:17,m:15, o:23 },
	       {y: '26 a 30 años', h:50,m:23, o:33 },
	       {y: '31 a 35 años', h:45,m:20, o:43 },
	       {y: '36 a 40 años', h:11,m:30, o:53 },
	       {y: '41 a 55 años', h:5,m:32, o:13 },
	       {y: '56 o más', h:22,m:23, o:25 }
	       ],
			xkey: 'y',
			ykeys: ['h','m','o'],
	       labels: ['Secundaria','Preparatoria','Universidad'],
	       hideHover: 'auto',
	       parseTime: false,
	       resize: true
	
});

var occupationBar = Morris.Line({
	element: 'occupationLine',
	data: [
	       {y: '14 a 18 años', h:1,m:2, o:3 },
	       {y: '18 a 25 años', h:7,m:5, o:23 },
	       {y: '26 a 30 años', h:25,m:23, o:13 },
	       {y: '31 a 35 años', h:35,m:25, o:43 },
	       {y: '36 a 40 años', h:21,m:34, o:33 },
	       {y: '41 a 55 años', h:5,m:22, o:43 },
	       {y: '56 o más', h:42,m:33, o:25 }
	       ],
			xkey: 'y',
			ykeys: ['h','m','o'],
	       labels: ['Obrero','Ama de Casa','Abogado'],
	       hideHover: 'auto',
	       parseTime: false,
	       resize: true
	
});

var civilStatusBar = Morris.Line({
	element: 'civilStatusLine',
	data: [
	       {y: '14-18 años', h:9,m:7, o:3 },
	       {y: '18-25 años', h:10,m:9, o:13 },
	       {y: '26-30 años', h:50,m:23, o:43 },
	       {y: '31-35 años', h:55,m:60, o:63 },
	       {y: '36-40 años', h:31,m:30, o:53 },
	       {y: '41-55 años', h:50,m:42, o:63 },
	       {y: '56-o más años', h:62,m:63, o:65 }
	       ],
			xkey: 'y',
			ykeys: ['h','m','o'],
	       labels: ['Casa','Soltero','Otro'],
	       hideHover: 'auto',
	       parseTime: false,
	       resize: true
	
});

var religionBar = Morris.Line({
	element: 'religionLine',
	data: [
	       {y: '14-18 años', h:5,m:2, o:3 },
	       {y: '18-25 años', h:17,m:15, o:23 },
	       {y: '26-30 años', h:50,m:23, o:33 },
	       {y: '31-35 años', h:45,m:20, o:43 },
	       {y: '36-40 años', h:51,m:30, o:53 },
	       {y: '41-55 años', h:55,m:32, o:63 },
	       {y: '56-o más años', h:62,m:43, o:75 }
	       ],
			xkey: 'y',
			ykeys: ['h','m','o'],
	       labels: ['Católicos','Cristianos','Testigos de Jeová'],
	       hideHover: 'auto',
	       parseTime: false,
	       resize: true
	
});

var politicalPreferencesBar = Morris.Line({
	element: 'politicalPreferencesLine',
	data: [
	       {y: '14-18 años', h:5,m:2, o:3 },
	       {y: '18-25 años', h:17,m:15, o:23 },
	       {y: '26-30 años', h:50,m:23, o:33 },
	       {y: '31-35 años', h:65,m:20, o:43 },
	       {y: '36-40 años', h:71,m:30, o:53 },
	       {y: '41-55 años', h:75,m:42, o:63 },
	       {y: '56-o más años', h:82,m:53, o:75 }
	       ],
			xkey: 'y',
			ykeys: ['h','m','o'],
	       labels: ['PAN','PRD','Alianza'],
	       hideHover: 'auto',
	       parseTime: false,
	       resize: true
	
});


$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
	  var target = $(e.target).attr("href") // activated tab

	  switch (target) {
	    case "#education-tab":
	    	educationBar.redraw();
	      $(window).trigger('resize');
	      break;
	    case "#occupation-tab":
	    	occupationBar.redraw();
	      $(window).trigger('resize');
	      break;
	    case "#civilStatus-tab":
	    	civilStatusBar.redraw();
	      $(window).trigger('resize');
	      break;
	    case "#religion-tab":
	    	religionBar.redraw();
	      $(window).trigger('resize');
	      break;
	    case "#political-tab":
	    	politicalPreferencesBar.redraw();
	      $(window).trigger('resize');
	      break; 
	  }
	});
