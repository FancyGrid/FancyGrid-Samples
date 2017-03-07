$(function(){
  var data = [
    {country: 'Venezuela', 0: 28, 1: 100, 2: 100},
    {country: 'Turkey', 0: 78, 1: 80, 2: 61},
    {country: 'Ukraine', 0: 70, 1: 0, 2: 100},
    {country: 'Indonesia', 0: 65, 1: 67, 2: 28},
    {country: 'Algeria', 0: 72, 1: 65, 2: 0},
    {country: 'Mexico', 0: 60, 1: 46, 2: 27},
    {country: 'Colombia', 0: 75, 1: 38, 2: 21},
    {country: 'Peru', 0: 70, 1: 50, 2: 6},
    {country: 'Brazil', 0: 69, 1: 40, 2: 13},
    {country: 'Russia', 0: 35, 1: 65, 2: 16},
    {country: 'Argentina', 0: 54, 1: 20, 2: 41},
    {country: 'South Africa', 0: 77, 1: 0, 2: 26},
    {country: 'Romania', 0: 52, 1: 0, 2: 43},
    {country: 'Chile', 0: 56, 1: 17, 2: 23},
    {country: 'Poland', 0: 56, 1: 1, 2: 38},
    {country: 'Egypt', 0: 54, 1: 0, 2: 32},
    {country: 'Philippines', 0: 28, 1: 48, 2: 9},
    {country: 'Pakistan', 0: 56, 1: 0, 2: 27},
    {country: 'Malaysia', 0: 27, 1: 25, 2: 25},
    {country: 'Thailand', 0: 31, 1: 28, 2: 17},
    {country: 'China', 0: 40, 1: 30, 2: 4},
    {country: 'India', 0: 57, 1: 2, 2: 15},
    {country: 'Hungary', 0: 29, 1: 0, 2: 40},
    {country: 'Bangladesh', 0: 50, 1: 0, 2: 5},
    {country: 'Vietnam', 0: 23, 1: 0, 2: 18}
  ];
    
    
  Fancy.COLORS = ['#0078B2', '#003D58', '#00ACDD'];

  new FancyGrid({
    renderTo: 'container',
    title: 'Measuring emerging-market vulnerability',
    subTitle: {
      text: 'Emerging-market vulnerability to a sudden stop in capital inflows',
      style: {
        color: '#6A7989',
        'font-size': '11px',
        'font-weight': '400'
      }
    },
    width: 550,
    height: 900,
    data: data,
    trackOver: true,
    selModel: 'row',
    cellHeight: 28,
    footer: {
      status: '   ',
      source: {
        sourceText: 'Inspired by',
        text: 'Economist Daily Chart',
        link: 'http://www.economist.com/blogs/graphicdetail/2015/09/capital-freeze-index'
      }
    },
    defaults: {    
      width: 100,
      sortable: true,
      resizable: true
    },
    columns: [{
      index: 'country',
      type: 'string',
      width: 80,
      cellAlign: 'right',
      title: 'Countries'
    },{
      index: ['0','1','2'],
      type: 'hbar',
      width: 400,
      sortable: false,
      title: '',
      sparkConfig: {
        tipTpl: '{value}',
        stacked: true,
        tipFormat: function(o){
          var data = o.data;
          
          return [
            'Overall ranking: ' + (data[0] + data[1] + data[2]) + '<br>',
            'Current-account balance: ' + data[0]+ '<br>',
            'Private-sector credit: ' + data[1]+ '<br>',
            'Foreign debt: ' + data[2]
          ].join("");
        },
        title: ['Balance', 'Credit', 'Foreign debt'],
        legend: {
          type: 'tbar',        
          style: {}
        }
      }
    }]
  });
});