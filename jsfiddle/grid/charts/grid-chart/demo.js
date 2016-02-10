$(function(){
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
      marginRight: 20,
      borderWidth: 2,
      borderColor: '#1e8fc6'
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
    { year: 2006, toyota: 6800228, gm: 5779719, vw: 5429896, ford: 3956708, hyundai: 2003608, changes: [0,0,0,0,0], percent: 0 },
    { year: 2007, toyota: 7211474, gm: 6259520, vw: 5964004, ford: 3565626, hyundai: 2292075, changes: [411246,479801,534108,-391082,288467], percent: 5.5 },
    { year: 2008, toyota: 7768633, gm: 6015257, vw: 6110115, ford: 3346561, hyundai: 2435471, changes: [557159,-244263,146111,-219065,143396], percent: 1.5 },
    { year: 2009, toyota: 6148794, gm: 4997824, vw: 5902583, ford: 2952026, hyundai: 4222532, changes: [-1619839,-1017433,-207532,-394535,1787061], percent: -5.7 },
    { year: 2010, toyota: 7267535, gm: 6266959, vw: 7120532, ford: 2958507, hyundai: 5247339, changes: [1118741,1269135,1217949,6481,1024807], percent: 19 },
    { year: 2011, toyota: 6793714, gm: 6494385, vw: 8157058, ford: 3093893, hyundai: 6118221, changes: [-473821,227426,1036526,135386,870882], percent: 6.2 },
    { year: 2012, toyota: 8381968, gm: 6608567, vw: 8576964, ford: 3123340, hyundai: 6761074, changes: [1588254,114182,419906,29447,642853], percent: 9.1 },
    { year: 2013, toyota: 8565176, gm: 6733192, vw: 9259506, ford: 3317048, hyundai: 6909194, changes: [183208,124625,682542,193708,148120], percent: 4 },
    { year: 2014, toyota: 10230000, gm: 9920000, vw: 10140000, ford: 6320000, hyundai: 7710000, changes: [1664824,3186808,880494,3002952,800806], percent: 27 }
  ];

  new FancyGrid({
    title: '<img src="http://fancygrid.com/img/logo_2.png" style="height:30px;position: relative;top:-7px;width: auto;">',
    renderTo: 'grid',
    width: 690,
    height: 350,
    data: {
      items: data,
      chart: [{
        type: 'highchart',
        id: 'column',
        fields: ['toyota', 'gm', 'vw', 'ford', 'hyundai']
      }]
    },
    defaults: {
      type: 'number',
      width: 80,
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
        //sliceColors: ["#44A4D3", "#FF9E9A", "#A3DAA4", "#FFC300", "#EEEEEE"]
        //sliceColors: ["#56A457", "#D85955", "#44A4D3", "#1E8FC6", "#EB7C73"]
      },
      values: ['toyota', 'gm', 'vw', 'ford', 'hyundai']
    },{
      title: 'Values',
      width: 60,
      type: 'sparklinebar',
      values: ['toyota', 'gm', 'vw', 'ford', 'hyundai'],
      sparkConfig: {
        barColor: '#60B3E2'
      }
    },{
      title: 'Changes',
      index: 'changes',
      type: 'sparklinebar',
      width: 62,
      sparkConfig: {
        barColor: '#60B3E2',
        negBarColor: '#F57A75'
      }
    },{
      title: '%',
      index: 'percent',
      width: 45,
      type: 'number',
      render: function(o){

        if(o.value < 0){
          o.style = {
            color: '#E46B67'
          };
        }
        else{
          o.style = {
            color: '#65AE6E'
          };
        }

        o.value = o.value + '%';

        return o;
      }
    }]
  });
});