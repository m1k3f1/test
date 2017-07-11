$(function() {
   
	Morris.Bar({
        element: 'followers-bar-chart',
        data: [{
            y: 'Total - 715700',
            a: 10000,
            b: -9000
        	}
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Nuevos', 'Dejaron de seguir'],
        hideHover: 'auto',
        resize: true
    });
    
	Morris.Bar({
        element: 'followers-top-ten',
        data: [{
            y: 'Seguidores ',
            a: 100,
            b: 90,
            c: 100,
            d: 90,
            e: 100,
            f: 90,
            g: 80,
            h: 90,
            i: 90,
            j: 90
            
        	}
        ],
        xkey: 'y',
        ykeys: ['a','b','c','d','e','f','g','h','i','j'],
        labels: ['Seguidor 1', 'Seguidor 2', 'Seguidor 3', 'Seguidor 4', 'Seguidor 5','Seguidor 6', 'Seguidor 7', 'Seguidor 8', 'Seguidor 9', 'Seguidor 10'],
        hideHover: 'auto',
        resize: true
    });
	
	
});
