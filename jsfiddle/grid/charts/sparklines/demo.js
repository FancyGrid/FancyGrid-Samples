$(function(){
  var data = [
    { data1: [-2,3,4,1,0,-5], data2: [1,2,3,4,5]},
    { data1: [5,3,1,2,1,7], data2: [3,1,2,4,1]},
    { data1: [1,2,3,4,5,6], data2: [7,2,3,4,2]},
    { data1: [7,8,6,5,1,-5], data2: [9,2,3,4,1]},
    { data1: [-5,1,-5,5,1,-5], data2: [4,2,3,4,3]},
    { data1: [1,0,1,2,3,4], data2: [3,2,3,4,5]},
    { data1: [-2,3,4,1,0,-5], data2: [5,2,3,4,4]},
    { data1: [5,3,1,2,1,7], data2: [2,2,3,4,1]},
    { data1: [1,2,3,4,5,6], data2: [1,2,3,4,5]},
    { data1: [7,8,6,5,1,-5], data2: [7,2,3,4,9]},
    { data1: [-5,1,-5,5,1,-5], data2: [8,2,3,4,8]},
    { data1: [1,0,1,2,3,4], data2: [2,2,3,4,1]},
    { data1: [-2,3,4,1,0,-5], data2: [5,2,3,4,2]},
    { data1: [5,3,1,2,1,7], data2: [3,2,3,4,1]},
    { data1: [1,2,3,4,5,6], data2: [2,2,3,4,3]},
    { data1: [7,8,6,5,1,-5], data2: [4,2,3,4,4]},
    { data1: [-5,1,-5,5,1,-5], data2: [5,2,3,4,5]},
    { data1: [1,0,1,2,3,4], data2: [9,2,3,4,5]}
  ];

  new FancyGrid({
    renderTo: 'grid',
    width: 670,
    height: 550,
    theme: 'blue',
    data: {
      items: data
    },
    defaults: {
      type: 'number',
      width: 100,
      resizable: true
    },
    clicksToEdit: 1,
    columns: [{
      title: 'Line',
      index: 'data1',
      type: 'sparklineline',
      sparkConfig: {
        spotRadius: 1.7
      }
    },{
      title: 'Bar',
      index: 'data1',
      type: 'sparklinebar'
    },{
      title: 'Tristate',
      index: 'data1',
      type: 'sparklinetristate'
    },{
      title: 'Discrete',
      index: 'data1',
      type: 'sparklinediscrete'
    },{
      title: 'Bullet',
      index: 'data1',
      type: 'sparklinebullet'
    },{
      title: 'Pie',
      width: 50,
      index: 'data2',
      type: 'sparklinepie'
    },{
      title: 'Box',
      index: 'data1',
      type: 'sparklinebox'
    }]
  });
});