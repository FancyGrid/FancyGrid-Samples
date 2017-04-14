var data = [{
  id: '',
  name: 'Total',
  year2015: [38299, 44030, 58771, 53282, 62433, 54137, 56311, 58897, 49820, 50044, 45553, 54241]
}, {
  id: 1,
  name: 'Sorento',
  year2015: [7543, 8518, 10842, 9808, 10743, 8967, 9749, 10211, 9380, 8593, 9023, 12872]
}, {
  id: 2,
  name: 'Optima',
  year2015: [9394, 11584, 15485, 13650, 16349, 13488, 12638, 13980, 11719, 14381, 13048, 13682]
}, {
  id: 3,
  name: 'Sportage',
  year2015: [3054, 3407, 5184, 4273, 4487, 3550, 5292, 5749, 4012, 4476, 4211, 6044]
}, {
  id: 4,
  name: 'Cadenza',
  year2015: [383, 640, 783, 598, 526, 359, 410, 322, 859, 1018, 847, 598]
}, {
  id: 5,
  name: 'Forte',
  year2015: [6422, 5549, 7537, 7183, 8584, 7907, 7868, 6862, 5388, 5198, 5010, 5411]
}, {
  id: 6,
  name: 'K900',
  year2015: [119, 62, 88, 140, 133, 168, 480, 386, 329, 229, 228, 162]
}, {
  id: 7,
  name: 'Rio',
  year2015: [1572, 1943, 2483, 2802, 3615, 2420, 2227, 1734, 1480, 1571, 898, 997]
}, {
  id: 8,
  name: 'Sedona',
  year2015: [1670, 2362, 3638, 3394, 4110, 5434, 3672, 2545, 3039, 2332, 2243, 2316]
}, {
  id: 9,
  name: 'Soul',
  year2015: [8142, 9965, 12731, 11418, 13886, 11844, 13975, 17108, 13614, 12246, 10045, 12159]
}, ];

$(function() {
  FancyGrid.defineTheme('kia', {
    extend: 'default',
    config: {
      panelBorderWidth: 1,
      titleHeight: 45
    }
  });

  new FancyGrid({
    title: {
      text: '<img src="http://fancygrid.com/img/kia.png" alt="KIA MOTORS" style="height: 24px;position: relative;top: -4px;"> <span style="color:#bb162b;position: relative;top: -10px;font-size: 20px;left: 4px;"> Kia Motors USA sales - 2015</span>',
      style: {
        height: 45
      }
    },
    renderTo: 'grid',
    theme: 'kia',
    height: 350,
    trackOver: true,
    selModel: 'row',
    data: {
      items: data
    },
    defaults: {
      type: 'number',
      width: 75,
      resizable: true,
      sortable: true
    },
    clicksToEdit: 1,
    columnLines: false,
    columns: [{
      title: ' ',
      index: 'id',
      width: 40,
      cls: 'id-column-cls',
      resizable: false
    }, {
      title: 'Name',
      index: 'name',
      type: 'string',
      cls: 'column-cls-kia-model-name'
    }, {
      title: 'January',
      index: 'year2015[0]',
      format: 'number'
    }, {
      title: 'February',
      index: 'year2015[1]',
      format: 'number'
    }, {
      title: 'March',
      index: 'year2015[2]',
      format: 'number'
    }, {
      title: 'April',
      index: 'year2015[3]',
      format: 'number'
    }, {
      title: 'May',
      index: 'year2015[4]',
      format: 'number'
    }, {
      title: 'June',
      index: 'year2015[5]',
      format: 'number'
    }, {
      title: 'July',
      index: 'year2015[6]',
      format: 'number'
    }, {
      title: 'August',
      index: 'year2015[7]',
      format: 'number'
    }, {
      title: 'September',
      index: 'year2015[8]',
      format: 'number'
    }, {
      title: 'October',
      index: 'year2015[9]',
      format: 'number'
    }, {
      title: 'November',
      index: 'year2015[10]',
      format: 'number'
    }, {
      title: 'December',
      index: 'year2015[11]',
      format: 'number'
    }, {
      title: 'Changes',
      index: 'year2015',
      type: 'sparklinebar',
      width: 66,
      sparkConfig: {
        barColor: '#60B3E2',
        negBarColor: '#F57A75'
      }
    }, {
      title: 'Total',
      index: 'year2015[0] + year2015[1] + year2015[2] + year2015[3] + year2015[4] + year2015[5] + year2015[6] + year2015[7] + year2015[8] + year2015[9] + year2015[10] + year2015[11]',
      format: 'number'
    }]
  });
});