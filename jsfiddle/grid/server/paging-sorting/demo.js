/*
  This sample will not work on jsfiddle because server data.
*/

$(function() {

new FancyGrid({
  title: 'Server paging and sorting',
  renderTo: 'container',
  width: 700,
  height: 400,
  theme: 'blue',
  data: {
    remoteSort: true,
    proxy: {
      url: '/ajax/ajax.php'
    }
  },
  paging: true,
  defaults: {
    type: 'string',
    width: 100,
    sortable: true,
    resizable: true
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
    index: 'position',
    locked: true,
    title: 'Position',
    width: 150
  }]
});

});
