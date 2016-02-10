$(function(){
  $('#spline').highcharts({
    exporting: { enabled: false },
    tooltip: {
      followPointer: true
    },
    chart: {
      type: 'spline',
      marginTop: 45,
      marginRight: 20
    },
    title: {
      text: 'Car production by largest manufacturers'
    },
    xAxis: {
      categories: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014']
    },
    yAxis: {
      //allowDecimals: false,
      title: false
    },
    plotOptions: {
      bar: {
        stacking: 'percent'
      }
    },
    series: [{
      name: 'Toyota'
    },{
      name: 'GM'
    },{
      name: 'Volkswagen'
    },{
      name: 'Ford'
    },{
      name: 'Hyundai'
    }]
  });

  $('#bar').highcharts({
    exporting: { enabled: false },
    tooltip: {
      followPointer: true,
      formatter: function(){
        return this.series.name + ' in ' + this.key + ':' + this.percentage.toPrecision(4) + '%';
      }
    },
    chart: {
      type: 'bar',
      marginTop: 45,
      marginRight: 20
    },
    title: {
      text: 'Car production by largest manufacturers'
    },
    xAxis: {
      categories: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014']
    },
    yAxis: {
      title: false
    },
    plotOptions: {
      bar: {
        stacking: 'percent'
      }
    },
    series: [{
      name: 'Toyota'
    },{
      name: 'GM'
    },{
      name: 'Volkswagen'
    },{
      name: 'Ford'
    },{
      name: 'Hyundai'
    }]
  });

  $('#column').highcharts({
    exporting: { enabled: false },
    tooltip: {
      followPointer: true,
      formatter: function(){
        return this.series.name + ' in ' + this.key + ':' + this.percentage.toPrecision(4) + '%';
      }
    },
    chart: {
      type: 'column',
      marginTop: 45,
      marginRight: 20
    },
    title: {
      text: 'Car production by largest manufacturers'
    },
    xAxis: {
      categories: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014']
    },
    yAxis: {
      //allowDecimals: false,
      title: false
    },
    plotOptions: {
      column: {
        stacking: 'percent'
      }
    },
    series: [{
      name: 'Toyota'
    },{
      name: 'GM'
    },{
      name: 'Volkswagen'
    },{
      name: 'Ford'
    },{
      name: 'Hyundai'
    }]
  });

  var data = [
    { year: 2006, toyota: 6800228, gm: 5779719, vw: 5429896, ford: 3956708, hyundai: 2003608 },
    { year: 2007, toyota: 7211474, gm: 6259520, vw: 5964004, ford: 3565626, hyundai: 2292075 },
    { year: 2008, toyota: 7768633, gm: 6015257, vw: 6110115, ford: 3346561, hyundai: 2435471 },
    { year: 2009, toyota: 6148794, gm: 4997824, vw: 5902583, ford: 2952026, hyundai: 4222532 },
    { year: 2010, toyota: 7267535, gm: 6266959, vw: 7120532, ford: 2958507, hyundai: 5247339 },
    { year: 2011, toyota: 6793714, gm: 6494385, vw: 8157058, ford: 3093893, hyundai: 6118221 },
    { year: 2012, toyota: 8381968, gm: 6608567, vw: 8576964, ford: 3123340, hyundai: 6761074 },
    { year: 2013, toyota: 8565176, gm: 6733192, vw: 9259506, ford: 3317048, hyundai: 6909194 },
    { year: 2014, toyota: 10230000, gm: 9920000, vw: 10140000, ford: 6320000, hyundai: 7710000 }
  ];

  new FancyGrid({
    renderTo: 'grid',
    width: 651,
    height: 350,
    theme: 'blue',
    data: {
      items: data,
      chart: [{
        type: 'highchart',
        id: 'spline',
        fields: ['toyota', 'gm', 'vw', 'ford', 'hyundai']
      },{
        type: 'highchart',
        id: 'bar',
        fields: ['toyota', 'gm', 'vw', 'ford', 'hyundai']
      },{
        type: 'highchart',
        id: 'column',
        fields: ['toyota', 'gm', 'vw', 'ford', 'hyundai']
      }]
    },
    defaults: {
      type: 'number',
      width: 95,
      editable: true,
      sortable: true,
      resizable: true
    },
    clicksToEdit: 1,
    columns: [{
      title: 'Year',
      index: 'year',
      editable: false,
      width: 55
    },{
      title: 'Toyota',
      index: 'toyota'
    },{
      title: 'GM',
      index: 'gm'
    },{
      title: 'VW',
      index: 'vw'
    },{
      title: 'Ford',
      index: 'ford'
    },{
      title: 'Hyundai',
      index: 'hyundai'
    },{
      width: 50,
      type: 'sparklinepie',
      sparkConfig: {
        sliceColors: ["#9DB160", "#B26668", "#4091BA", "#8E658E", "#3B8D8B", "#B6CA79", "#CB7F81", "#4091BA", "#8E658E", "#3B8D8B"]
      },
      values: ['toyota', 'gm', 'vw', 'ford', 'hyundai']
    },{
      width: 50,
      type: 'sparklinebar',
      values: ['toyota', 'gm', 'vw', 'ford', 'hyundai']
    }]
  });
});