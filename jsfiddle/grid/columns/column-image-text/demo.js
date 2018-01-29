var data = [{
  id: 1,
  about: 'Nusha - drives projects by beaty',
  weekWorkHours: [6, 8, 3, 4, 3, 1, 0],
  src: "http://fancygrid.com/img/samples/nusha.png",
  total: 42
}, {
  id: 2,
  about: 'Kopatich - works like machine',
  weekWorkHours: [6, 5, 6, 7, 5, 1, 0],
  src: 'http://fancygrid.com/img/samples/kopatich.png',
  total: 42
}, {
  id: 3,
  about: 'Losayash - the most wise in team',
  weekWorkHours: [7, 6, 7, 8, 6, 0, 0],
  src: 'http://fancygrid.com/img/samples/losyash.png',
  total: 49
}, {
  id: 4,
  about: 'Barash - writes lyrics and encourages team',
  weekWorkHours: [8, 3, 7, 6, 4, 0, 0],
  src: 'http://fancygrid.com/img/samples/barash.png',
  total: 56
}, {
  id: 5,
  about: 'Eshik - intelligent and polite, works with VIP clients',
  weekWorkHours: [8, 5, 3, 5, 5, 1, 0],
  src: 'http://fancygrid.com/img/samples/eshik.png',
  total: 56
}, {
  id: 6,
  about: 'Sovuniya - experinced and cooks well',
  weekWorkHours: [3, 7, 4, 5, 3, 1, 0],
  src: 'http://fancygrid.com/img/samples/sovynya.png',
  total: 21
}, {
  id: 7,
  about: 'Karich - plays on all musical instruments',
  weekWorkHours: [6, 4, 4, 8, 5, 1, 0],
  src: 'http://fancygrid.com/img/samples/karich.png',
  total: 42
}];

document.addEventListener("DOMContentLoaded", function() {
  new FancyGrid({
    title: 'Funny dream team',
    renderTo: 'container',
    width: 600,
    height: 350,
    cellHeight: 75,
    data: {
      items: data
    },
    defaults: {
      type: 'string',
      width: 100,
      editable: true
    },
    clicksToEdit: 1,
    columnLines: false,
    columns: [{
      type: 'number',
      title: ' ',
      index: 'id',
      width: 40,
      sortable: true,
      cls: 'id-column-cls'
    }, {
      type: 'image',
      title: 'Photo',
      index: 'src',
      width: 80,
      cls: 'photo'
    }, {
      title: 'About',
      index: 'about',
      resizable: true,
      width: 140,
      type: 'text',
      render: function(o) {

        o.style = {
          'font-size': '14px'
        };

        return o;
      }
    }, {
      title: 'Week work hours',
      type: 'sparklinebar',
      index: 'weekWorkHours',
      width: 120,
      sparkConfig: {
        barColor: '#60B3E2'
      }
    }, {
      title: 'Total hours',
      index: 'total',
      type: 'number',
      sortable: true,
      render: function(o) {
        var color = '#65AE6E'

        if (o.value < 30) {
          color = '#E46B67';

        }

        o.style = {
          color: color
        };

        o.value = '<div style="margin-top: 30px;">' + o.value + ' hours</div>';

        return o;
      }
    }]
  });
});
