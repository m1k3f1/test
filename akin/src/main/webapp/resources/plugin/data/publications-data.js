$(function() {
   
	Morris.Bar({
        element: 'relevant-publications',
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
    
	Morris.Bar({
        element: 'reactions-publications',
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
        ykeys: ['a', 'b','c'],
        labels: ['Me gusta', 'Me entristese','Me enoja','Me sorprende'],
        hideHover: 'auto',
        resize: true
    });
	
	
});
