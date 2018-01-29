document.addEventListener("DOMContentLoaded", function() {
  var data = [{
    year: 2006,
    toyota: 6800228,
    gm: 5779719,
    vw: 5429896,
    ford: 3956708,
    hyundai: 2003608
  }, {
    year: 2007,
    toyota: 7211474,
    gm: 6259520,
    vw: 5964004,
    ford: 3565626,
    hyundai: 2292075
  }, {
    year: 2008,
    toyota: 7768633,
    gm: 6015257,
    vw: 6110115,
    ford: 3346561,
    hyundai: 2435471
  }, {
    year: 2009,
    toyota: 6148794,
    gm: 4997824,
    vw: 5902583,
    ford: 2952026,
    hyundai: 4222532
  }, {
    year: 2010,
    toyota: 7267535,
    gm: 6266959,
    vw: 7120532,
    ford: 2958507,
    hyundai: 5247339
  }, {
    year: 2011,
    toyota: 6793714,
    gm: 6494385,
    vw: 8157058,
    ford: 3093893,
    hyundai: 6118221
  }, {
    year: 2012,
    toyota: 8381968,
    gm: 6608567,
    vw: 8576964,
    ford: 3123340,
    hyundai: 6761074
  }, {
    year: 2013,
    toyota: 8565176,
    gm: 6733192,
    vw: 9259506,
    ford: 3317048,
    hyundai: 6909194
  }, {
    year: 2014,
    toyota: 10230000,
    gm: 9920000,
    vw: 10140000,
    ford: 6320000,
    hyundai: 7710000
  }];
  
  new FancyGrid({
    renderTo: 'container',
    title: {
      text: 'Car production by largest manufacturers',
      style: {
        'text-align': 'center'
      }
    },
    width: 650,
    height: 410,
    data: data,
    trackOver: true,
    selModel: 'row',
    defaults: {
      width: 100,
      resizable: true
    },
    columns: [{
      title: 'Year',
      index: 'year',
      width: 55
    },{
      width: 550,
      type: 'hbar',
      index: ['toyota', 'gm', 'vw', 'ford', 'hyundai'],
      sparkConfig: {
        fullStack: true,
        stacked: true,
        tipFormat: function(o){
          return o.title + ' in ' + o.data.year + ':' + o.percents.toPrecision(4) + '%';
        },
        title: ['Toyota', 'GM', 'Volkswagen', 'Ford', 'Hyundai'],
        legend: {
          type: 'bbar',
          style: {
            'margin-left': '100px'
          }
        }
      }
    }]
  });
});