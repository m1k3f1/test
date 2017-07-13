$(function(){
$('.clickable').on('click',function(){
    var effect = $(this).data('effect');
        $(this).closest('.panel-user')[effect]();
	})
})


var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
			"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

$('#scale-slider')
    .slider({
        max: 11,
        min: 0,
        values: [0, 3],
        range: true
    })
    .slider("pips", {
        rest: "label",
        labels: months
    })
