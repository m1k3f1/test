var relevantBar = Morris.Bar({
    element: 'relevant',
    data: [{
        y: 'Relevantes',
        a: 10000,
        b: 5000,
        c: 8000
    	},
    	{
            y: 'Menos Relevantes',
            a: 50,
            b: 100,
            c: 80
        	}
    ],
    xkey: 'y',
    ykeys: ['a', 'b','c'],
    labels: ['Publicacion 1', 'Publicacion 2','Publicacion 3'],
    hideHover: 'auto',
    resize: true
});


var reactionsBar = Morris.Bar({
    element: 'reactions',
    data: [{
        y: 'Publicacion 1',
        a: 10000,
        b: 5000,
        c: 8000,
        d: 500
    	},
    	{
    		y: 'Publicacion 2',
            a: 10200,
            b: 5040,
            c: 8400,
            d: 5000
        	},
        {
        	y: 'Publicacion 3',
        	a: 10200,
            b: 5040,
            c: 8400,
            d: 5000
       } 	
        	
    ],
    xkey: 'y',
    ykeys: ['a', 'b','c','d'],
    labels: ['Me gusta', 'Me entristese','Me enoja','Me sorprende'],
    hideHover: 'auto',
    resize: true
});


var sentimentBar = Morris.Bar({
    element: 'sentiment',
    data: [{
        y: 'Publicacion 1',
        a: 10000,
        b: -7000,
        c: 8000
    	},
    	{
    		y: 'Publicacion 2',
            a: 10200,
            b: -5040,
            c: 500
        	},
        {
        	y: 'Publicacion 3',
        	a: 10200,
            b: -7040,
            c: 8700
       } 	
        	
    ],
    xkey: 'y',
    ykeys: ['a', 'b','c'],
    labels: ['Positivas', 'Negativas','Neutras','Me sorprende'],
    hideHover: 'auto',
    resize: true
});


var videoBar = Morris.Bar({
    element: 'video',
    data: [{
        y: 'Relevantes',
        a: 10000,
        b: 5000,
        c: 8000
    	},
    	{
            y: 'Menos Relevantes',
            a: 50,
            b: 100,
            c: 80
        	}
    ],
    xkey: 'y',
    ykeys: ['a', 'b','c'],
    labels: ['Video 1', 'Video 2','Video 3'],
    hideHover: 'auto',
    resize: true
});

var eventoBar = Morris.Bar({
    element: 'evento',
    data: [{
        y: 'Relevantes',
        a: 10000,
        b: 5000,
        c: 8000
    	},
    	{
            y: 'Menos Relevantes',
            a: 50,
            b: 100,
            c: 80
        	}
    ],
    xkey: 'y',
    ykeys: ['a', 'b','c'],
    labels: ['Evento 1', 'Evento 2','Evento 3'],
    hideHover: 'auto',
    resize: true
});



$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
	  var target = $(e.target).attr("href") // activated tab

	  switch (target) {
	    case "#relevant-tab":
	    	relevantBar.redraw();
	      $(window).trigger('resize');
	      break;
	    case "#reactions-tab":
	    	reactionsBar.redraw();
	      $(window).trigger('resize');
	      break;
	    case "#sentiment-tab":
	    	sentimentBar.redraw();
	      $(window).trigger('resize');
	      break;
	    case "#video-tab":
	    	videoBar.redraw();
	      $(window).trigger('resize');
	      break;
	    case "#evento-tab":
	    	eventoBar.redraw();
	      $(window).trigger('resize');
	      break; 
	  }
	});
