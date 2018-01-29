document.addEventListener("DOMContentLoaded", function() {
 
   new FancyGrid({
    title: 'Comparison: Soul, Sportange, Sorento.',
    renderTo: 'container',
    width: 'fit',
    height: 420,
    theme: 'gray',
    selModel: 'row',
	trackOver: true,
	cellHeaderHeight: 110,
    data: [
	  {property: 'Transmission', sorento: '6A', sportage: '6A', soul: 'DCT 7A'},
	  {property: 'Maximum power, HP(Rev./min.)', sorento: '250(6400)', sportage: '185(4000)', soul: '204 (6000)'},
	  {property: 'The number of valves', sorento: '24', sportage: '16', soul: '16'},
	  {property: 'Working volume, cm3', sorento: '3342', sportage: '1995', soul: '1591'},
	  {property: 'Total weight', sorento: '2510', sportage: '2250', soul: '1890'},
	  {property: 'Number of doors/seats', sorento: '5/7', sportage: '5/5', soul: '5/5'},
	  {property: 'Wheelbase, mm', sorento: '2780', sportage: '2670', soul: '2570'},
	  {property: 'Ground clearance, mm', sorento: '185', sportage: '182', soul: '143'},
	  {property: 'Fuel tank capacity, l', sorento: '71', sportage: '62', soul: '54'},
	  {property: 'Way when braking from 100 to 0 km/h, m', sorento: '35', sportage: '40.9', soul: '35.3'},
	],
    defaults: {
	  resizable: true,
	  type: 'string'
    },
    columns: [{
	  index: 'property',
	  cls: 'property',
	  title: '',
	  width: 200
    },{
	  index: 'soul',
	  cls: '',
	  width: 150,
	  title: '<img src="https://fancygrid.com/dashboards/column-header-images/images/kia-soul.png"><br> <div style="">Kia Soul 1.6 T-GDI</div>'
	},{
	  index: 'sportage',
	  cls: '',
	  width: 150,
	  title: '<img src="https://fancygrid.com/dashboards/column-header-images/images/kia-sportage.png"><br> <div style="">Kia Sportage 2.0 CRDi</div>'
	},{
	  index: 'sorento',
	  cls: '',
	  width: 150,
	  title: '<img src="https://fancygrid.com/dashboards/column-header-images/images/kia-sorento.png"><br> <div style="">Kia Sorento 3.3 MPI</div>'
    }]
  });

});