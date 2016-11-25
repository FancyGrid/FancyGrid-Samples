$(function() {

  var data = [{
    name: 'Alabama',
    abbr: 'AL',
    population: 4858979,
    income: 41415
  }, {
    name: 'Alaska',
    abbr: 'AK',
    population: 738432,
    income: 60287
  }, {
    name: 'Arizona',
    abbr: 'AZ',
    population: 6828065,
    income: 46709
  }, {
    name: 'Arkansas',
    abbr: 'AR',
    population: 2978204,
    income: 38758
  }, {
    name: 'California',
    abbr: 'CA',
    population: 39144818,
    income: 67458
  }, {
    name: 'Colorado',
    abbr: 'CO',
    population: 5456574,
    income: 55387
  }, {
    name: 'Connecticut',
    abbr: 'CT',
    population: 3590886,
    income: 65753
  }, {
    name: 'Delaware',
    abbr: 'DE',
    population: 945934,
    income: 57954
  }, {
    name: 'Florida',
    abbr: 'FL',
    population: 20271272,
    income: 44299
  }, {
    name: 'Georgia',
    abbr: 'GA',
    population: 10214860,
    income: 46007
  }, {
    name: 'Hawaii',
    abbr: 'HI',
    population: 1431603,
    income: 62814
  }, {
    name: 'Idaho',
    abbr: 'ID',
    population: 1654930,
    income: 43341
  }, {
    name: 'Illinois',
    abbr: 'IL',
    population: 12859995,
    income: 53234
  }, {
    name: 'Indiana',
    abbr: 'IN',
    population: 6619680,
    income: 46438
  }, {
    name: 'Iowa',
    abbr: 'IA',
    population: 3123899,
    income: 49427
  }, {
    name: 'Kansas',
    abbr: 'KS',
    population: 2911641,
    income: 48964
  }, {
    name: 'Kentucky',
    abbr: 'KY',
    population: 4425092,
    income: 41141
  }, {
    name: 'Louisiana',
    abbr: 'LA',
    population: 4670724,
    income: 41734
  }, {
    name: 'Maine',
    abbr: 'ME',
    population: 1329328,
    income: 46033
  }, {
    name: 'Maryland',
    abbr: 'MD',
    population: 6006401,
    income: 70004
  }, {
    name: 'Massachessets',
    abbr: 'MA',
    population: 6794422,
    income: 64859
  }, {
    name: 'Michigan',
    abbr: 'MI',
    population: 9922576,
    income: 45859
  }, {
    name: 'Minnesota',
    abbr: 'MN',
    population: 5489594,
    income: 61814
  }, {
    name: 'Mississippi',
    abbr: 'MS',
    population: 2992333,
    income: 36919
  }, {
    name: 'MIssouri',
    abbr: 'MO',
    population: 6083672,
    income: 45247
  }, {
    name: 'Montana',
    abbr: 'MT',
    population: 1032949,
    income: 44222
  }, {
    name: 'Nebraska',
    abbr: 'NE',
    population: 1896190,
    income: 50296
  }, {
    name: 'Nevada',
    abbr: 'NV',
    population: 2890845,
    income: 48927
  }, {
    name: 'New Hampshire',
    abbr: 'NH',
    population: 1330608,
    income: 64712
  }, {
    name: 'New Jersey',
    abbr: 'NJ',
    population: 8958013,
    income: 69825
  }, {
    name: 'New Mexico',
    abbr: 'NM',
    population: 2085109,
    income: 41963
  }, {
    name: 'New York',
    abbr: 'NY',
    population: 19795791,
    income: 55246
  }, {
    name: 'North Carolina',
    abbr: 'NC',
    population: 10042802,
    income: 43916
  }, {
    name: 'North Dakota',
    abbr: 'ND',
    population: 756927,
    income: 51704
  }, {
    name: 'Ohio',
    abbr: 'OH',
    population: 11613423,
    income: 45749
  }, {
    name: 'Oklahoma',
    abbr: 'OK',
    population: 3911338,
    income: 43225
  }, {
    name: 'Oregon',
    abbr: 'OR',
    population: 4028977,
    income: 46816
  }, {
    name: 'Pennsylvania',
    abbr: 'PA',
    population: 12802503,
    income: 50228
  }, {
    name: 'Rhode Island',
    abbr: 'RI',
    population: 1056298,
    income: 53636
  }, {
    name: 'South Carolina',
    abbr: 'SC',
    population: 4896146,
    income: 42367
  }, {
    name: 'South Dakota',
    abbr: 'SD',
    population: 858469,
    income: 48321
  }, {
    name: 'Tennessee',
    abbr: 'TN',
    population: 6600299,
    income: 41693
  }, {
    name: 'Texas',
    abbr: 'TX',
    population: 27469114,
    income: 49392
  }, {
    name: 'Utah',
    abbr: 'UT',
    population: 2995919,
    income: 55869
  }, {
    name: 'Vermont',
    abbr: 'VT',
    population: 626042,
    income: 52776
  }, {
    name: 'Virginia',
    abbr: 'VA',
    population: 8382993,
    income: 62881
  }, {
    name: 'Washington',
    abbr: 'WA',
    population: 7179351,
    income: 57835
  }, {
    name: 'West Virginia',
    abbr: 'WV',
    population: 1844128,
    income: 38482
  }, {
    name: 'Wisconsin',
    abbr: 'WI',
    population: 5771337,
    income: 50395
  }, {
    name: 'Wyoming',
    abbr: 'WY',
    population: 586107,
    income: 56322
  }];


  var gridMapData = [
    ['AK', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', 'ME'],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', 'VT', 'NH'],
    ['  ', 'WA', 'ID', 'MT', 'ND', 'MN', 'IL', 'WI', 'MI', 'NY', 'RI', 'MA'],
    ['  ', 'OR', 'NV', 'WY', 'SD', 'IA', 'IN', 'OH', 'PA', 'NJ', 'CT', '  '],
    ['  ', 'CA', 'UT', 'CO', 'NE', 'MO', 'KY', 'WV', 'VA', 'MD', 'DE', '  '],
    ['  ', '  ', 'AZ', 'NM', 'KS', 'AR', 'TN', 'NC', 'SC', 'DC', '  ', '  '],
    ['  ', '  ', '  ', '  ', 'OK', 'LA', 'MS', 'AL', 'GA', '  ', '  ', '  '],
    ['HI', '  ', '  ', '  ', '  ', 'TX', '  ', '  ', '  ', 'FL', '  ', '  ']
  ];

  var COLORS = [
    '#cd2a27',
    '#b34442',
    '#9c5554',
    '#85605f',
    '#6e6363',
    '#616661',
    '#537557',
    '#3d8244',
    '#23912e',
    '#009e0f'
  ];

  function getColor(value, min, max) {
    var step = (parseFloat((max - min).toFixed(4))) / COLORS.length,
      cursor = min,
      i = 0;

    for (; cursor <= max; i++) {
      if (value >= cursor && value <= parseFloat((cursor + step).toFixed(4))) {
        return COLORS[i];
      }
      cursor = parseFloat((cursor + step).toFixed(4))
    }
  }

  function numberFormat(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }


  var min = {
    population: 586107,
    income: 36919
  };

  var max = {
    population: 10000000,
    income: 70004
  };

  var edgeGood = {
    population: 1500000,
    income: 45000
  };

  var columnIndexData = 'income';

  new FancyGrid({
    theme: 'dark',
    renderTo: 'statesInfoGrid',
    width: 602,
    height: 400,
    data: data,
    selModel: 'column',
    columnTrackOver: true,
    defaults: {
      type: 'string',
      sortable: true
    },
    columns: [{
      index: 'name',
      title: 'State Name',
      selectable: false,
      trackOver: false,
      locked: true
    }, {
      index: 'abbr',
      title: 'Abbr.',
      selectable: false,
      trackOver: false,
      locked: true
    }, {
      index: 'population',
      type: 'number',
      format: 'number',
      title: 'Population',
      editable: true
    }, {
      index: 'income',
      type: 'currency',
      title: 'Income',
      editable: true,
      width: 80
    }],
    events: [{
      set: function() {
        var myGridMap = FancyGrid.get('gridMap');
        myGridMap.update();
      }
    }, {
      columnclick: function(grid, o) {
        var myGridMap = FancyGrid.get('gridMap');
        var column = o.column;

        if (column.selectable === false) {
          return;
        }

        columnIndexData = column.index;
        myGridMap.update();
      }
    }, {
      init: function() {
        this.selectColumn(columnIndexData);
        renderGridMap();
      }
    }],
    footer: {
      status: '<span style="position: relative;top: 3px;"></span>',
      source: {
        text: 'Wiki',
        link: 'en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States'
      }
    }
  });

  function renderGridMap() {
    new FancyGrid({
      theme: 'dark',
      cls: 'myGridMap',
      renderTo: 'gridMap',
      width: 'fit',
      height: 405,
      header: false,
      columnLines: false,
      striped: false,
      cellHeight: 50,
      data: {
        items: gridMapData,
        fields: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12']
      },
      selModel: 'cell',
      defaults: {
        type: 'string',
        width: 50,
        cellTip: function(o) {
          var statesGrid = FancyGrid.get('statesInfoGrid');
          if (o.value === '  ') {
            return false;
          }

          var item = statesGrid.findItem('abbr', o.value)[0];

          if (item) {
            return [
              'Name: ' + item.get('name') + '<br>',
              'Abbr: ' + item.get('abbr') + '<br>',
              'Population: ' + numberFormat(item.get('population')) + '<br>',
              'Income: $' + numberFormat(item.get('income')) + '<br>'
            ].join("");
          } else {
            return 'No Data';
          }
        },
        render: function(o) {
          var statesGrid = FancyGrid.get('statesInfoGrid');
          if (o.value === '  ') {
            return o;
          }

          var item = statesGrid.findItem('abbr', o.value)[0],
            color = 'grey';

          if (item) {
            var value = statesGrid.findItem('abbr', o.value)[0].get(columnIndexData);

            color = getColor(value, min[columnIndexData], max[columnIndexData]);
          }

          o.style = {
            'background-color': color
          };

          return o;
        }
      },
      columns: [{
        index: 'c1'
      }, {
        index: 'c2'
      }, {
        index: 'c3'
      }, {
        index: 'c4'
      }, {
        index: 'c5'
      }, {
        index: 'c6'
      }, {
        index: 'c7'
      }, {
        index: 'c8'
      }, {
        index: 'c9'
      }, {
        index: 'c10'
      }, {
        index: 'c11'
      }, {
        index: 'c12'
      }]
    });
  }

});
