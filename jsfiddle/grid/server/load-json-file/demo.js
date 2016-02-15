/*
  This sample will not work on jsfiddle because server data.
*/

$(function() {
new FancyGrid({
  title: 'Load JSON file',
  renderTo: 'container',
  width: 700,
  height: 400,
  theme: 'blue',
  data: {
    proxy: {
      url: '/ajax/users.json'
    }
  },
  defaults: {
    type: 'string',
    width: 100,
    resizable: true,
    sortable: true
  },
  columns: [{
    index: 'company',
    locked: true,
    title: 'Company'
  },{
    index: 'name',
    title: 'Name'
  },{
    index: 'surname',
    title: 'Sur Name'
  },{
    index: 'age',
    title: 'Age',
    type: 'number'
  },{
    index: 'education',
    locked: true,
    title: 'Education',
    width: 150
  }]
});

});
